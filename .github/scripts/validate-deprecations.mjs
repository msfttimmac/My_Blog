import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

export const REPORT = 'Deprecation Gatherings/Microsoft-Deprecations-2026-11-20.md';
export const PRODUCTS = [
  'Power Platform', 'Power Apps', 'Power Automate', 'Dataverse', 'Copilot',
  'Copilot Studio', 'GitHub Copilot', 'Azure OpenAI',
  'Azure Document Intelligence', 'Power BI', 'Power BI Report Server',
];
const PRIMARY_HOSTS = new Set([
  'learn.microsoft.com', 'docs.github.com', 'github.blog', 'support.microsoft.com',
]);
const COMMUNITY_HOSTS = new Set([
  'techcommunity.microsoft.com', 'community.powerplatform.com',
  'community.fabric.microsoft.com', 'github.com',
]);
const HEADINGS = [
  'Quick navigation', 'Cloud evidence', 'Next 7 days', 'Next 30 days',
  'Next 60 days', 'Next 90 days', 'Days 91-120', 'Greater than 120 days',
  'Community discussions', 'Research coverage and refresh checklist',
];

export function primaryUrl(value) {
  const url = new URL(value);
  assert(url.protocol === 'https:' && !url.username && !url.password &&
    (!url.port || url.port === '443'), `Unsafe URL: ${value}`);
  assert(PRIMARY_HOSTS.has(url.hostname), `Not a primary source: ${value}`);
  assert(!/\/answers(?:\/|$)/i.test(url.pathname), 'Learn Q&A is not a retirement authority');
  url.hash = '';
  return url.href;
}

function publicUrl(value) {
  const url = new URL(value);
  assert(url.protocol === 'https:' && !url.username && !url.password &&
    (!url.port || url.port === '443') &&
    (PRIMARY_HOSTS.has(url.hostname) || COMMUNITY_HOSTS.has(url.hostname)),
  `Unapproved public URL: ${value}`);
  return url;
}

export function normalize(value) {
  return value
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(Number(decimal)))
    .replace(/&(nbsp|amp|quot|apos|lt|gt|rsquo|lsquo|rdquo|ldquo|ndash|mdash);/g,
      (_, name) => ({
        nbsp: ' ', amp: '&', quot: '"', apos: "'", lt: '<', gt: '>',
        rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"', ndash: '-', mdash: '-',
      })[name])
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-').replace(/[*`]/g, '')
    .replace(/\s+/g, ' ').trim();
}

function isoDay(value) {
  assert(typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value),
    `Invalid ISO date: ${value}`);
  const date = new Date(`${value}T00:00:00Z`);
  assert(!Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value,
    `Invalid calendar date: ${value}`);
  return date;
}

export function cutoffs(asOf) {
  const date = isoDay(asOf);
  const result = { AS_OF: asOf };
  for (const days of [7, 30, 60, 90, 120]) {
    result[`DAY_${days}`] = new Date(date.valueOf() + days * 86400000)
      .toISOString().slice(0, 10);
  }
  const year = date.getUTCFullYear() + 2;
  const month = date.getUTCMonth();
  const horizon = new Date(Date.UTC(year, month, date.getUTCDate()));
  if (horizon.getUTCMonth() !== month) horizon.setUTCDate(0);
  result.HORIZON = horizon.toISOString().slice(0, 10);
  return result;
}

export function validateStructure(report, receipt, asOf) {
  const dates = cutoffs(asOf);
  assert(report.startsWith('# Microsoft deprecation and retirement radar\n'),
    'Missing report title');
  assert(report.includes(`**Research date:** ${asOf}`), 'Stale/missing research date');
  assert(report.length >= 5000 && Buffer.byteLength(report) <= 2_000_000,
    'Report is incomplete or excessively large');
  assert(!/<\s*(script|iframe|object|embed|form|input|style|link)\b/i.test(report),
    'Executable/interactive HTML is not allowed');
  assert(!/\bgithub_pat_[a-z0-9_]+|\bghp_[a-z0-9]+/i.test(report), 'Token-shaped content');
  for (const heading of HEADINGS) {
    assert(report.includes(`## ${heading}\n`), `Missing section: ${heading}`);
  }
  for (const date of Object.values(dates)) {
    assert(report.includes(date), `Missing current filter cutoff: ${date}`);
  }
  for (const cloud of ['Commercial', 'GCC', 'GCC High', 'DoD', 'Azure Government']) {
    assert(report.includes(cloud), `Missing cloud evidence: ${cloud}`);
  }
  const openings = [...report.matchAll(/<details(?:\s[^>]*)?>/g)].length;
  assert(openings > 0 && openings === [...report.matchAll(/<\/details>/g)].length,
    'Missing/unbalanced disclosures');
  const anchors = new Set([...report.matchAll(/^#{1,6} (.+)$/gm)]
    .map(match => match[1].toLowerCase().replace(/[^\w -]/g, '').replace(/ /g, '-')));
  for (const match of report.matchAll(/\bid=["']([^"']+)["']/g)) anchors.add(match[1]);
  for (const match of report.matchAll(/\]\(#([^)]+)\)/g)) {
    assert(anchors.has(match[1]), `Broken navigation anchor: ${match[1]}`);
  }
  for (const match of report.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    publicUrl(match[1]);
  }
  assert(receipt.as_of === asOf && receipt.complete === true, 'Research did not complete');
  assert(Array.isArray(receipt.coverage) && receipt.coverage.length === PRODUCTS.length,
    'Incomplete product coverage');
  assert.deepEqual(new Set(receipt.coverage.map(entry => entry.product)), new Set(PRODUCTS),
    'Missing or duplicated product');
  const sources = new Set();
  for (const entry of receipt.coverage) {
    assert(Array.isArray(entry.queries) && entry.queries.length > 0 &&
      entry.queries.every(query => typeof query === 'string' && query.trim()),
    `No fresh search recorded: ${entry.product}`);
    assert(typeof entry.notes === 'string' && entry.notes.trim(), 'Missing coverage notes');
    assert(Array.isArray(entry.sources) && entry.sources.length > 0,
      `No reviewed primary page: ${entry.product}`);
    for (const url of entry.sources) sources.add(primaryUrl(url));
  }
  assert(sources.size >= 10, 'Fewer than ten distinct reviewed primary pages');
  assert(Array.isArray(receipt.evidence) && receipt.evidence.length > 0,
    'No primary-source excerpts');
  const quotedWords = new Map();
  const reportText = normalize(report);
  for (const evidence of receipt.evidence) {
    const url = primaryUrl(evidence.url);
    assert(sources.has(url), `Evidence source was not reviewed: ${url}`);
    assert(typeof evidence.quote === 'string' && evidence.quote.trim(), 'Empty quotation');
    assert(reportText.includes(normalize(evidence.quote)), 'Evidence excerpt missing from report');
    assert(report.includes(evidence.url), 'Evidence URL missing from report');
    const words = evidence.quote.trim().split(/\s+/).length;
    quotedWords.set(url, (quotedWords.get(url) ?? 0) + words);
    assert(quotedWords.get(url) <= 90, `Primary-source quotation limit exceeded: ${url}`);
  }
  assert(Array.isArray(receipt.community), 'Missing community search receipt');
  for (const discussion of receipt.community) {
    const url = publicUrl(discussion.url);
    assert(COMMUNITY_HOSTS.has(url.hostname), 'Community evidence must be separate');
    assert(PRODUCTS.includes(discussion.product) && discussion.title?.trim() &&
      discussion.summary?.trim() && report.includes(discussion.url),
    'Incomplete community discussion');
  }
  assert(Array.isArray(receipt.limitations) && receipt.limitations.length > 0 &&
    receipt.limitations.every(value => typeof value === 'string' && value.trim()),
  'Missing research limitations');
  return sources;
}

export async function fetchPrimary(value, fetcher = fetch) {
  let url = primaryUrl(value);
  for (let redirects = 0; redirects <= 5; redirects++) {
    const response = await fetcher(url, {
      redirect: 'manual',
      headers: { 'User-Agent': 'My-Blog-Deprecation-Verification/1.0' },
      signal: AbortSignal.timeout(45_000),
    });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      assert(location, `Redirect missing location: ${url}`);
      url = primaryUrl(new URL(location, url).href);
      await response.body?.cancel();
      continue;
    }
    assert(response.ok, `Primary source returned HTTP ${response.status}: ${url}`);
    const html = await response.text();
    assert(Buffer.byteLength(html) <= 5_000_000, `Primary page too large: ${url}`);
    return normalize(html);
  }
  throw new Error(`Too many primary-source redirects: ${value}`);
}

export async function verifyEvidence(receipt, sources, fetcher = fetch) {
  const pages = new Map();
  for (const source of sources) {
    pages.set(source, await fetchPrimary(source, fetcher));
  }
  for (const evidence of receipt.evidence) {
    assert(pages.get(primaryUrl(evidence.url)).includes(normalize(evidence.quote)),
      `Excerpt not found on live primary page: ${evidence.url}`);
  }
}

async function readResult(directory, asOf) {
  const report = await readFile(join(directory, 'report.md'), 'utf8');
  const receipt = JSON.parse(await readFile(join(directory, 'research.json'), 'utf8'));
  const sources = validateStructure(report, receipt, asOf);
  return { report, receipt, sources };
}

function sha256(content) {
  return createHash('sha256').update(content).digest('hex');
}

async function main() {
  const [command, directory, asOf, baseline] = process.argv.slice(2);
  assert(directory, 'A research directory is required');
  if (command === 'prepare') {
    const today = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date());
    const dates = cutoffs(today);
    const previous = await readFile(REPORT);
    const template = await readFile('.github/scripts/research-deprecations.md', 'utf8');
    const prompt = template.replace(/\{\{([A-Z_0-9]+)\}\}/g, (_, key) => {
      assert(key in dates, `Unknown prompt placeholder: ${key}`);
      return dates[key];
    });
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'previous.md'), previous);
    await writeFile(join(directory, 'prompt.md'), prompt);
    assert(process.env.GITHUB_OUTPUT, 'GITHUB_OUTPUT is required for preparation');
    await writeFile(process.env.GITHUB_OUTPUT,
      `as_of=${today}\nbaseline_sha256=${sha256(previous)}\n`, { flag: 'a' });
    console.log(`Prepared fresh research for ${today} through ${dates.HORIZON}`);
  } else if (command === 'verify') {
    const { receipt, sources } = await readResult(directory, asOf);
    await verifyEvidence(receipt, sources);
    console.log(`Verified ${sources.size} live primary pages and research output for ${asOf}`);
  } else if (command === 'publish') {
    const { report } = await readResult(directory, asOf);
    assert(sha256(await readFile(REPORT)) === baseline,
      'The blog post changed during research; rerun instead of overwriting a concurrent edit');
    await writeFile(REPORT, report);
    console.log('Prepared only the validated blog post for publication');
  } else {
    throw new Error('Expected prepare, verify, or publish');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => {
    console.error(`Deprecation workflow failed: ${error.message}`);
    process.exitCode = 1;
  });
}
