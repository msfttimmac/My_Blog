import assert from 'node:assert/strict';
import test from 'node:test';
import {
  PRODUCTS, cutoffs, primaryUrl, validateStructure, verifyEvidence,
} from './validate-deprecations.mjs';

const AS_OF = '2026-11-20';

function fixture() {
  const headings = [
    'Quick navigation', 'Cloud evidence', 'Next 7 days', 'Next 30 days',
    'Next 60 days', 'Next 90 days', 'Days 91-120', 'Greater than 120 days',
    'Community discussions', 'Research coverage and refresh checklist',
  ];
  const sources = PRODUCTS.map((_, index) =>
    `https://learn.microsoft.com/en-us/product/notice-${index}`);
  const quote = 'This capability retires on December 15, 2026.';
  return {
    report: [
      '# Microsoft deprecation and retirement radar',
      `**Research date:** ${AS_OF}`,
      ...Object.values(cutoffs(AS_OF)),
      'Commercial / GCC / GCC High / DoD / Azure Government',
      ...headings.map(heading => `## ${heading}\nEvidence and limitations.`),
      '[Next 30 days](#next-30-days)',
      `<details><summary>Upcoming capability</summary>\n${quote}\n</details>`,
      `[Primary notice](${sources[0]})`,
      'Customer impact and environment checks. '.repeat(150),
      '',
    ].join('\n'),
    receipt: {
      as_of: AS_OF,
      complete: true,
      coverage: PRODUCTS.map((product, index) => ({
        product, queries: [`${product} retirement 2027`],
        sources: [sources[index]], notes: 'Primary lifecycle announcement reviewed.',
      })),
      evidence: [{ url: sources[0], quote }],
      community: [],
      limitations: ['Targeted public-source review, not an exhaustive crawl.'],
    },
  };
}

test('accepts fresh structured research and rejects stale or missing coverage', () => {
  const { report, receipt } = fixture();
  assert.equal(validateStructure(report, receipt, AS_OF).size, 11);
  assert.throws(() => validateStructure(report, receipt, '2026-11-23'), /Stale/);
  receipt.coverage.pop();
  assert.throws(() => validateStructure(report, receipt, AS_OF), /coverage/);
});

test('calculates inclusive filter cutoffs and a valid leap-day horizon', () => {
  const dates = cutoffs(AS_OF);
  assert.equal(dates.DAY_30, '2026-12-20');
  assert.equal(dates.DAY_90, '2027-02-18');
  assert.equal(dates.HORIZON, '2028-11-20');
  assert.equal(cutoffs('2028-02-29').HORIZON, '2030-02-28');
  assert.throws(() => cutoffs('2026-02-30'), /calendar/);
});

test('rejects broken disclosure/navigation and executable content', () => {
  const { report, receipt } = fixture();
  assert.throws(() => validateStructure(report.replace('</details>', ''), receipt, AS_OF),
    /disclosures/);
  assert.throws(() => validateStructure(`${report}\n[Missing](#missing)`, receipt, AS_OF),
    /anchor/);
  assert.throws(() => validateStructure(`${report}\n<script>alert(1)</script>`, receipt, AS_OF),
    /HTML/);
});

test('rejects community/Q&A as retirement authorities and unsafe URLs', () => {
  assert.throws(() => primaryUrl('https://community.fabric.microsoft.com/t5/notices/test'),
    /primary/);
  assert.throws(() => primaryUrl('https://learn.microsoft.com/en-us/answers/questions/123'),
    /Q&A/);
  assert.throws(() => primaryUrl('http://learn.microsoft.com/notice'), /Unsafe/);
  assert.throws(() => primaryUrl('https://learn.microsoft.com@127.0.0.1/'), /Unsafe/);
});

test('enforces the quotation budget across anchors on the same page', () => {
  const { report, receipt } = fixture();
  const quote = 'retirement '.repeat(46).trim();
  receipt.evidence = [
    { url: `${receipt.coverage[0].sources[0]}#first`, quote },
    { url: `${receipt.coverage[0].sources[0]}#second`, quote },
  ];
  assert.throws(() => validateStructure(
    `${report}\n${quote}\n${receipt.evidence.map(item => item.url).join('\n')}`,
    receipt, AS_OF), /quotation limit/);
});

test('requires live evidence, normalizes HTML/entities and refuses unsafe redirects', async () => {
  const { report, receipt } = fixture();
  const sources = validateStructure(report, receipt, AS_OF);
  const fetcher = async () => new Response(
    '<main>This <strong>capability</strong> retires on December 15, 2026.</main>',
    { status: 200 });
  await verifyEvidence(receipt, sources, fetcher);
  await assert.rejects(verifyEvidence(receipt, sources,
    async () => new Response('<main>No retirement here.</main>')), /Excerpt not found/);
  await assert.rejects(verifyEvidence(receipt, sources,
    async () => new Response('', { status: 302, headers: { location: 'http://127.0.0.1' } })),
  /Unsafe/);
});
