# Microsoft deprecation and retirement radar

**Research date:** November 20, 2026  
**Forward-looking window:** November 20, 2026 through November 20, 2028, inclusive  
**Publication type:** One-time, manually verified snapshot; scheduled refresh is not configured.

> **Coverage notice:** This is a targeted review of Microsoft Learn lifecycle, deprecation, migration, and product-update pages for the requested products, supplemented by official GitHub documentation for GitHub Copilot. It is **not an exhaustive crawl of every Microsoft Learn article**. Absence from this report does not establish absence of a retirement announcement. Tenant Message Center notices, contract terms, regional availability, and later documentation changes can alter the impact.

## Quick navigation

**Time:** [Next 7 days](#next-7-days) | [Next 30 days](#next-30-days) | [Next 60 days](#next-60-days) | [Next 90 days](#next-90-days) | [Days 91-120](#days-91-120) | [Greater than 120 days](#greater-than-120-days) | [Unknown or tenant-specific dates](#unknown-or-tenant-specific-dates)

**Product:** [Power Platform / Power Apps / Power Automate / Dataverse](#power-platform) | [Power BI / Power Query](#power-bi) | [Azure OpenAI](#azure-openai) | [Document Intelligence](#document-intelligence) | [Copilot / Copilot Studio](#copilot-and-copilot-studio) | [GitHub Copilot](#github-copilot) | [Power BI Report Server](#power-bi-report-server)

**Cloud:** [Commercial](#commercial) | [GCC](#gcc) | [GCC High](#gcc-high) | [DoD](#dod) | [How to interpret cloud evidence](#cloud-evidence)

GitHub Markdown does not execute JavaScript or dynamically hide table rows. These links provide **static filtered views** and product/cloud indexes. Open each item's disclosure for source evidence, impact, and discovery options. Use browser Find for a model name or product.

## Reading dates and evidence

- Time windows are cumulative, anchored to this snapshot date, not to the day you open the file.
- A date introduced by **after** is a published deadline reference, not a promise of removal at midnight on that date.
- **Starting** identifies the beginning of a phased process, not its completion.
- Month-only and quarter-only announcements keep their original precision. An item is marked **possible** when its published period overlaps, but is not wholly contained in, a filter.
- **No earlier than** is a lower bound, not a committed retirement date.
- Past creation blocks are included only as context for upcoming suspension/deletion milestones. Past-only retirements are excluded from the upcoming tables.
- Quotes are short, exact excerpts; surrounding dates, explanations, and recommendations are paraphrased. Follow the source link for the full announcement.
- **Customer checks** are recommended inventory/testing approaches, not claims that your tenant is affected. No customer environment was inspected.

## Cloud evidence

**NP** = no separately named retirement date for this cloud was published in the reviewed announcement. It does **not** mean unaffected, unavailable, or delayed.

**General** = the announcement publishes a product-wide date without a named commercial/government rollout breakdown. Two Power Automate notices explicitly say all customers; that wording is preserved below, but no independent GCC/GCC High/DoD milestones are supplied.

Azure public cloud, Azure Government, Microsoft 365 GCC, GCC High, and DoD are not interchangeable labels. For Azure services, determine the actual subscription cloud and region; a user's Microsoft 365 cloud does not establish the Azure resource's lifecycle.

### Commercial

Use the published general/public-cloud dates below as planning milestones. Confirm feature usage, replacement licensing, capacity, and rollout messages. The Power BI P SKU deadline is contract-specific rather than a single global date.

### GCC

For items marked NP, check the tenant's Message Center and service health, then obtain cloud-specific confirmation from Microsoft support or your account team. Do not assume commercial AI replacements are approved or available in GCC. The reviewed Power BI P SKU announcement explicitly excludes sovereign clouds for now.

### GCC High

Use the GCC High admin/maker endpoints and check feature parity and approved network boundaries before migration. NP dates remain unresolved; no commercial-to-GCC High rollout offset is inferred. The reviewed Power BI P SKU announcement explicitly excludes sovereign clouds for now.

### DoD

Use the DoD endpoints and confirm the feature and replacement are available within the authorized environment. Do not move data to a commercial AI service to work around a retirement. NP dates remain unresolved. The reviewed Power BI P SKU announcement explicitly excludes sovereign clouds for now.

Government-cloud checks are grounded in [Power Apps US Government](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-us-government) and [Power Automate US Government](https://learn.microsoft.com/en-us/power-automate/us-govt). Those pages describe service boundaries and feature limitations; they do not establish the upcoming retirement schedules below.

## Next 7 days

**November 20-27, 2026:** No confirmed dated milestone in this interval was found in the reviewed sources. Unknown/contract-specific items could still affect a tenant during this period.

## Next 30 days

**Through December 20, 2026. These need immediate attention.**

| Published milestone | Deprecated or retiring capability | Product | Details |
| --- | --- | --- | --- |
| November 30 | Copilot pane in the cloud-flow and agent-flow designer | Power Automate / Copilot | [PP-01](#pp-01) |
| November 30 | Describe it to design it | Power Automate | [PP-02](#pp-02) |
| After November 30 | AI-generated model-driven app descriptions | Power Apps | [PP-03](#pp-03) |
| After November 30 | AI-generated canvas app descriptions | Power Apps | [PP-04](#pp-04) |
| After November 30 | Copresence in Power Apps plans | Power Apps | [PP-05](#pp-05) |
| After November 30 | Record-level copresence | Power Apps / Dataverse | [PP-06](#pp-06) |
| December 1 | Refresh of Dataverse for Teams dataflows stops | Power Platform dataflows | [PP-12](#pp-12) |
| December 8 | Azure OpenAI gpt-chat-latest, version 2026-05-28 | Azure OpenAI | [AO-01](#ao-01) |
| After December 11 | Power Apps Ideas and formula-generation experiences | Power Apps | [PP-07](#pp-07) |
| After December 11 | Rename controls with Copilot | Power Apps | [PP-08](#pp-08) |
| Starting December 15 | Unmanaged developer environment suspension | Power Platform / Power Apps Developer Plan | [PP-09](#pp-09) |
| December 15 | tts 001, tts-hd 001, whisper 001 | Azure OpenAI | [AO-01](#ao-01) |
| December 1 | App Builder editing no longer supported | Microsoft 365 Copilot | [CP-01](#cp-01) |

**Highest operational risk:** unmanaged developer environments lose access to apps, flows, agents, sites, and data; Teams dataflow refresh stops; retired Azure model deployments can fail. Most listed authoring-UI retirements do not delete existing apps or flows.

## Next 60 days

**Through January 19, 2027:** Everything in [Next 30 days](#next-30-days), plus:

| Published milestone | Additional item | Inclusion |
| --- | --- | --- |
| After December 31, 2026 | Cross-environment comment import/export: [PP-10](#pp-10) | Deadline falls in window |
| After December 31, 2026 | App Builder apps no longer accessible: [CP-01](#cp-01) | Deadline falls in window |
| January 1, 2027, or shortly thereafter | Teams dataflow entry points removed: [PP-12](#pp-12) | Start/reference date; completion not committed |
| January 12, 2027 | gpt-chat-latest 2026-08-06: [AO-01](#ao-01) | Dated |
| January 14, 2027 | gpt-4o 2024-05-13: [AO-01](#ao-01) | Dated; check deployment type |
| Starting January 15, 2027 | Unmanaged developer environment deletion: [PP-09](#pp-09) | Phased start |
| By end of January 2027 | Standalone Power BI Copilot: [BI-01](#bi-01) | **Possible**; January overlaps January 19 cutoff |
| January 2027 | App-scoped Copilot in workspace apps: [BI-02](#bi-02) | **Possible**; day not published |
| Early Q1 2027, planned | Selected connectors' service ODBC drivers: [BI-05](#bi-05) | **Possible**; no exact rollout day |
| January 2027 | Microsoft 365 Targeted release: [CP-02](#cp-02) | **Possible**; day not published |

## Next 90 days

**Through February 18, 2027:** Everything in [Next 60 days](#next-60-days), plus:

| Published milestone | Additional item / clarified inclusion |
| --- | --- |
| January 20, 2027 | Azure OpenAI audio/realtime models: [AO-01](#ao-01) |
| By end of January / January 2027 | [BI-01](#bi-01), [BI-02](#bi-02), and [CP-02](#cp-02) now fall wholly within the window |
| February 2, 2027 | gpt-chat-latest 2026-10-07: [AO-01](#ao-01) |
| February 9, 2027 | gpt-5 and gpt-5-nano: [AO-01](#ao-01) |
| January 27, 2027 | Related Foundry model-router preview versions: [AO-04](#ao-04) |
| February 2027 | Power BI Q&A: [BI-03](#bi-03), **possible** before February 18; exact day not published |
| Early Q1 2027, planned | [BI-05](#bi-05) remains **possible**; no exact service rollout day |

## Days 91-120

**February 19-March 20, 2027.** This extra view avoids the gap between the requested 90-day and greater-than-120-day filters.

| Published milestone | Item |
| --- | --- |
| February 2027 | [Power BI Q&A](#bi-03), **possible** in this interval as well as the 90-day view |
| February 26, 2027 | gpt-4o-transcribe: [AO-01](#ao-01) |
| March 2, 2027 | gpt-audio and gpt-realtime: [AO-01](#ao-01) |
| March 17, 2027 | gpt-5-codex: [AO-01](#ao-01) |
| Early Q1 2027, planned | [ODBC-to-ADBC transition](#bi-05), **possible**; Q1 also extends beyond March 20 |
| Spring 2027, planned | [Desktop/gateway ODBC packaging change](#bi-05), **possible**; no exact season boundary or day published |

## Greater than 120 days

**March 21, 2027 through November 20, 2028:**

| Published milestone | Item | Precision |
| --- | --- | --- |
| Early Q1 2027, planned | [Selected ODBC driver removal](#bi-05), **possible** during late March | Quarter/rollout-dependent |
| Spring 2027, planned | Selected ODBC drivers stop shipping with Desktop/gateway: [BI-05](#bi-05) | Season; may overlap days 91-120 |
| April 2027 onward | Remaining Azure OpenAI base-model schedule: [AO-01](#ao-01) | See exact version/date rows |
| May 2027 | [R and Python visuals, including R-powered custom visuals](#bi-04) | Month |
| September 15, 2027 | [Dataverse for Teams suspension](#pp-11) | Day |
| September 15, 2027 | [Document Intelligence v2.1 end of support](#di-01) | Day |
| October 30, 2027 | [Dataverse for Teams decommissioning](#pp-11) | Day |
| 2027-2028 | [Azure OpenAI fine-tuned deployment retirements](#ao-02) | Distinct training/deployment schedules |
| April 14-15, 2027; July 13, 2027 | [Azure Government model schedule](#ao-03), including earlier embedding retirements | Day |
| May 20, 2027 | Related Foundry model-router GA version: [AO-04](#ao-04) | Day |

## Power Platform

| ID | What is deprecated / retired | Published general milestone(s) | Commercial | GCC | GCC High | DoD |
| --- | --- | --- | --- | --- | --- | --- |
| [PP-01](#pp-01) | Flow designer Copilot | November 30, 2026 | All customers wording | NP | NP | NP |
| [PP-02](#pp-02) | Describe it to design it | November 30, 2026 | All customers wording | NP | NP | NP |
| [PP-03](#pp-03) | AI model-driven app descriptions | After November 30, 2026 | General | NP | NP | NP |
| [PP-04](#pp-04) | AI canvas app descriptions | After November 30, 2026 | General | NP | NP | NP |
| [PP-05](#pp-05) | Power Apps plans copresence | After November 30, 2026 | General | NP | NP | NP |
| [PP-06](#pp-06) | Record-level copresence | After November 30, 2026 | General | NP | NP | NP |
| [PP-07](#pp-07) | Ideas / formula generation | After December 11, 2026 | General | NP | NP | NP |
| [PP-08](#pp-08) | AI control renaming | After December 11, 2026 | General | NP | NP | NP |
| [PP-09](#pp-09) | Unmanaged developer environments / Developer Plan provisioning | Suspension starts December 15, 2026; deletion starts January 15, 2027 | General | NP | NP | NP |
| [PP-10](#pp-10) | Cross-environment comment transfer | After December 31, 2026 | General | NP | NP | NP |
| [PP-11](#pp-11) | Dataverse for Teams environments | Suspension September 15, 2027; decommission October 30, 2027 | General | NP | NP | NP |
| [PP-12](#pp-12) | Dataflows in Dataverse for Teams | Refresh stops December 1, 2026; entry points removed January 1, 2027 or shortly thereafter | General | NP | NP | NP |

### PP-01

<details>
<summary>Flow designer Copilot - November 30, 2026</summary>

**Source:** [Retirement of Copilot in the designer for cloud flows and agent flows](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#retirement-of-copilot-in-the-designer-for-cloud-flows-and-agent-flows).

**Exact excerpt:** "Microsoft retires Copilot in the designer"

**Impact:** Makers lose the conversational Copilot pane for building/editing flows, expressions, questions, and troubleshooting. Existing cloud flows and agent flows are not deleted, moved, or changed by this retirement. The regular designer, run history, templates, and flow checker remain.

**Customer checks/options:** Ask makers which training or workflows depend on the pane; test authoring without it. Use the visual designer and expression editor. The source recommends the Power Automate plugin in a supported, organization-approved AI assistant for natural-language authoring.

**Cloud impact:** Commercial/general notice says all customers. GCC, GCC High, and DoD have no separate published dates here. Confirm the feature's presence and the replacement assistant's authorization separately in each cloud; do not assume GitHub Copilot is an approved government-cloud replacement.

</details>

### PP-02

<details>
<summary>Describe it to design it - November 30, 2026</summary>

**Source:** [Retirement of Describe it to design it in Power Automate](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#retirement-of-describe-it-to-design-it-in-power-automate).

**Exact excerpt:** "Describe it to design it in Power Automate retires"

**Impact:** New cloud flows can no longer be created through this natural-language entry point. Existing flows are not deleted or moved.

**Customer checks/options:** Review maker onboarding guides and flow-creation demonstrations. Replace the entry point with manual creation, templates, or the approved Power Automate plugin experience. No flow data migration is required solely for this change.

**Cloud impact:** Commercial/general notice says all customers; independently named GCC/GCC High/DoD dates are NP. Confirm available and approved creation alternatives in each tenant.

</details>

### PP-03

<details>
<summary>AI-generated model-driven app descriptions - after November 30, 2026</summary>

**Source:** [AI-generated descriptions for model-driven apps](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-ai-generated-descriptions-for-model-driven-apps).

**Exact excerpt:** "option won't be available."

**Impact:** Create descriptions using AI disappears from Publish and designer Settings. Existing descriptions remain.

**Customer checks/options:** Review app-publishing procedures and maker reliance on generated descriptions. Enter descriptions manually; evaluate the source's model app-builder skill alternative if available and approved.

**Cloud impact:** Commercial uses the general deadline. GCC/GCC High/DoD dates are NP; if the option exists in a tenant, the authoring impact applies when its retirement reaches that tenant. Manual descriptions avoid dependence on an AI replacement.

</details>

### PP-04

<details>
<summary>AI-generated canvas app descriptions - after November 30, 2026</summary>

**Source:** [AI-generated descriptions for canvas apps](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-ai-generated-descriptions-for-canvas-apps).

**Exact excerpt:** "option won't be available."

**Impact:** The AI description option disappears from Publish and Settings. Existing app descriptions are not affected.

**Customer checks/options:** Review publishing templates, maker training, and description-generation steps. Add/edit descriptions manually. No app or description migration is required.

**Cloud impact:** General commercial milestone; GCC/GCC High/DoD dates are NP. Check whether the feature is present rather than assuming all clouds expose it; manual editing is the stated alternative.

</details>

### PP-05

<details>
<summary>Copresence in Power Apps plans - after November 30, 2026</summary>

**Source:** [Copresence in Power Apps plans](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-copresence-in-power-apps-plans).

**Exact excerpt:** "copresence in Power Apps plans won't be available."

**Impact:** Plans stop showing other authors' presence. Multi-author editing is not supported.

**Customer checks/options:** Identify coauthored plans and teams that rely on presence signals. Establish a single-editor handoff process and coordinate edits outside the plan.

**Cloud impact:** General commercial deadline; GCC/GCC High/DoD dates are NP. Where plans are available, coordinate authors regardless of cloud; confirm the tenant rollout.

</details>

### PP-06

<details>
<summary>Record-level copresence in model-driven apps - after November 30, 2026</summary>

**Source:** [Record-level copresence](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-record-level-copresence-in-model-driven-apps).

**Exact excerpt:** "record-level copresence in model-driven apps won't be available."

**Impact:** Users lose the indication that someone else is working on a record and the associated presence-card entry point. Record sharing and grid/lookup pictures and status are unaffected.

**Customer checks/options:** Ask business owners whether record handling assumes this presence signal prevents concurrent work. Review collaboration procedures; retain record sharing and establish explicit ownership where needed.

**Cloud impact:** General commercial deadline; GCC/GCC High/DoD dates are NP. Assess record-collaboration dependencies in each tenant without treating the retirement as a removal of record sharing.

</details>

### PP-07

<details>
<summary>Power Apps Ideas and formula generation - after December 11, 2026</summary>

**Source:** [Formula generation and Power Apps Ideas](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-formula-generation-and-power-apps-ideas-in-canvas-apps).

**Exact excerpt:** "formula generation from code comments won't be available."

**Impact:** Power Apps Ideas, Create a formula, and code-comment formula generation disappear. Existing formulas remain; Explain this formula and Explain this selection are not affected.

**Customer checks/options:** Review maker training, authoring practices, and support playbooks. Write/edit Power Fx directly, use remaining explanation experiences, and test formulas normally. Searching existing formulas cannot establish whether a maker used the retired authoring UI.

**Cloud impact:** General commercial deadline; GCC/GCC High/DoD dates are NP. Check which AI authoring experiences actually exist in each cloud before assigning impact.

</details>

### PP-08

<details>
<summary>Rename controls with Copilot - after December 11, 2026</summary>

**Source:** [Proactive control rename in canvas apps](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-proactive-control-rename-in-canvas-apps).

**Exact excerpt:** "Rename controls with Copilot won't be available."

**Impact:** Suggested control names and bulk application of suggestions disappear.

**Customer checks/options:** Review maker standards and demonstrations. Rename controls manually in Tree view; Power Apps updates references on rename. Existing control names and apps do not need migration merely because this authoring feature retires.

**Cloud impact:** General commercial deadline; GCC/GCC High/DoD dates are NP. Manual naming is the recommended fallback wherever this feature was used.

</details>

### PP-09

<details>
<summary>Unmanaged developer environments / Power Apps Developer Plan provisioning - suspension December 15, 2026; deletion January 15, 2027 onward</summary>

**Source:** [Unmanaged developer environments and the Power Apps Developer Plan](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-unmanaged-developer-environments-and-the-power-apps-developer-plan).

**Exact excerpt:** "Unmanaged developer environments are deprecated."

**Milestones:** Creation stopped November 15, 2026, before this snapshot. Suspension starts December 15, 2026; deletion starts January 15, 2027. These are phased start dates.

**Impact:** Affected apps, flows, agents, Power Pages developer sites, and data become inaccessible on suspension. Managed developer environments, production, sandbox, trial, and default environments are not affected by this particular retirement. The developer environment type still exists as managed; this is not retirement of Power Apps development generally.

**Customer checks/options:** In the appropriate Power Platform admin center, filter Environments by **Type = Developer** and **Managed = No**, then review last activity and owners. Before suspension, export solutions and assess data separately; a solution export is not a complete data backup. Enable Managed Environments with appropriate licenses or move solutions/data to a supported environment. Review environment routing and capacity.

**Watch out:** The Developer Plan does not include Managed Environments use rights. Converting an environment without checking premium license requirements can leave users unable to run workloads. Related [Power Apps licensing enforcement beginning February 2027](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-licensing-faq#licensing-compliance-for-power-apps) is an additional access consideration, not a feature retirement.

**Cloud impact:** General commercial schedule. GCC/GCC High/DoD have no separate dates in this notice. Inventory the same environment type and managed status in each cloud where available; verify both timing and migration licensing before taking irreversible action.

</details>

### PP-10

<details>
<summary>Cross-environment comment import/export - after December 31, 2026</summary>

**Source:** [Cross-environment comment import and export](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-cross-environment-comment-import-and-export).

**Exact excerpt:** "won't be available."

**Impact:** The dedicated transfer action in component designers, including the model-driven app designer, is removed. In-environment commenting remains; existing comments are not removed.

**Customer checks/options:** Review ALM runbooks and collaboration processes for comment transfer. Preserve cross-environment context in source-controlled documentation, a wiki, pipeline records, or release notes. No data migration is required by the notice.

**Cloud impact:** General commercial deadline; GCC/GCC High/DoD dates are NP. Review equivalent collaboration practices in each tenant; do not equate this with removal of all comments.

</details>

### PP-11

<details>
<summary>Dataverse for Teams environments - suspension September 15, 2027; decommission October 30, 2027</summary>

**Source:** [Dataverse for Teams environment deprecation](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-microsoft-dataverse-for-teams-environments).

**Exact excerpt:** "Microsoft Dataverse for Teams environments are deprecated."

**Milestones:** New environment creation ended November 15, 2026. Environments not upgraded are suspended September 15, 2027 and decommissioned October 30, 2027. Plan completion **before suspension**, even though the notice also describes the later decommission deadline.

**Impact:** Apps, flows, agents, and data in affected environments become unavailable. Teams channels, chats, SharePoint sites, and files are not removed by this change. Full Dataverse environments hosting Teams-embedded apps are not the retired product.

**Customer checks/options:** In the correct admin center, filter **Type = Microsoft Teams** and review last activity, owners, apps, flows, agents, and data. Upgrade to Dataverse or migrate solutions and data to an existing supported Dataverse environment. Check tenant capacity, Power Apps/Power Automate/Copilot Studio licensing, connections, permissions, and maker access after upgrade.

**Copilot Studio dependency:** Include Teams-hosted agents in this inventory; see [Upgrade a Dataverse for Teams environment for Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-upgrade-dataverse-teams).

**Cloud impact:** General commercial schedule; separately named GCC/GCC High/DoD dates are NP. Determine whether Dataverse for Teams is actually present in each tenant. Do not assume an unavailable feature affects that cloud, or infer a later government deadline.

</details>

### PP-12

<details>
<summary>Power Platform dataflows in Dataverse for Teams - refresh stops December 1, 2026</summary>

**Source:** [Power Platform dataflows in Microsoft Teams (deprecated)](https://learn.microsoft.com/en-us/power-query/dataflows/dataflows-teams).

**Exact excerpt:** "The preview Power Platform Dataflows integration with Dataverse for Teams is retiring in phases."

**Milestones:** Creation stopped September 1, 2026. Refresh stops December 1, 2026. Teams and Power Apps Maker entry points are removed January 1, 2027, **or shortly thereafter**.

**Impact:** Data can become stale as soon as refresh stops, even if the UI entry point is still visible. Existing dataflows are not deleted by this retirement but become inaccessible through the retired Teams experience. Power BI dataflows and Power Apps dataflows outside Dataverse for Teams are not affected by this notice.

**Customer checks/options:** Ask owners of Microsoft Teams-type environments to inventory their dataflows, refresh history, destination tables, credentials, and downstream reports/apps. Export/document queries and plan a supported ingestion replacement before refresh stops; test refresh and reconcile row counts and business results. Do not assume an environment upgrade automatically migrates this retiring ingestion experience.

**Cloud impact:** General commercial schedule; GCC/GCC High/DoD dates are NP. Inspect only tenants with this integration, and select an ingestion replacement supported in the same cloud.

</details>

## Power BI

| ID | What is retired / removed | Published milestone | Commercial | GCC | GCC High | DoD |
| --- | --- | --- | --- | --- | --- | --- |
| [BI-01](#bi-01) | Standalone Power BI Copilot | Planned by end of January 2027 | General | NP | NP | NP |
| [BI-02](#bi-02) | App-scoped Copilot in workspace apps | January 2027 | General | NP | NP | NP |
| [BI-03](#bi-03) | Q&A experiences | February 2027 | General | NP | NP | NP |
| [BI-04](#bi-04) | R/Python visuals and R-powered custom visuals | May 2027 | General, Power BI service scope | NP | NP | NP |
| [BI-05](#bi-05) | Selected embedded ODBC drivers | Service: early Q1 2027; Desktop/gateway: spring 2027, planned | General | NP | NP | NP |
| [BI-06](#bi-06) | Premium per-capacity P SKUs | Each subscription's agreement end; grace/throttling follows | Contract-specific | Sovereign exemption | Sovereign exemption | Sovereign exemption |

### BI-01

<details>
<summary>Standalone Power BI Copilot - planned by end of January 2027</summary>

**Source:** [Power BI November 2026 updates](https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new).

**Exact excerpt:** "Support for standalone Power BI Copilot on the web, in Teams, and in Power BI mobile is planned to end by the end of January 2027."

**Impact:** The standalone entry points retire; Copilot within reports remains supported. This is not retirement of all Power BI Copilot.

**Customer checks/options:** Identify users and training that depend on standalone web/Teams/mobile experiences. Evaluate the source's supported report-level Copilot and Fabric/Microsoft 365 alternatives, confirming capacity, licenses, tenant settings, and availability first.

**Cloud impact:** General commercial plan; GCC/GCC High/DoD retirement dates are NP. Confirm which experience exists in each cloud and whether a proposed replacement is supported before promising feature parity.

</details>

### BI-02

<details>
<summary>App-scoped Copilot in workspace apps - January 2027</summary>

**Source:** [Power BI November 2026 updates](https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new).

**Exact excerpt:** "App-scoped Copilot in workspace apps and its app setting are scheduled for removal in January 2027."

**Impact:** App-scoped Copilot and the app setting disappear. App content, audiences, and permissions do not change; eligible report-level Copilot remains.

**Customer checks/options:** Review published workspace apps, their Copilot settings, and app-consumer guidance. Test eligible report-level experiences and update navigation/training rather than republishing permissions unnecessarily.

**Cloud impact:** General commercial month; GCC/GCC High/DoD dates are NP. Confirm app-scoped availability and eligible report alternatives within each tenant.

</details>

### BI-03

<details>
<summary>Power BI Q&amp;A experiences - February 2027</summary>

**Source:** [Introduction to Power BI Q&A](https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-intro).

**Exact excerpt:** "Q&A experiences are going away in February 2027."

**Impact:** Natural-language Q&A experiences retire. Review dashboard Q&A and report Q&A visuals; do not assume ordinary report visuals or semantic models are removed. The current Learn notice is month-only; it does not justify assigning February 1 as the exact shutdown day.

**Customer checks/options:** Inventory reports/dashboard usage through owner review and available report definitions; inspect PBIP projects for Q&A visuals. Admin inventory APIs help locate artifacts, but do not assume they expose every visual definition. Test removal/replacement of Q&A in affected reports. The source recommends Copilot for Power BI; validate its eligibility before treating it as a replacement.

**Cloud impact:** General commercial month; GCC/GCC High/DoD dates are NP. Copilot availability, capacity, licensing, and compliance approval must be checked separately. Conventional visuals and curated reports can avoid dependence on an unavailable AI replacement.

</details>

### BI-04

<details>
<summary>R/Python visuals, including R-powered custom visuals - May 2027</summary>

**Source:** [Script visuals retirement](https://learn.microsoft.com/en-us/power-bi/create-reports/script-visuals-overview#retirement-of-r-and-python-visuals).

**Exact excerpt:** "R and Python visuals in Power BI, including R-powered custom visuals, retire in May 2027"

**Impact:** These visuals stop rendering in published Power BI service reports, including reports published before retirement. Older Desktop versions can render locally, but that is not a way to preserve service rendering. Python scripts used in Power Query to populate tables are not the retired visual feature. No exact day is published.

**Customer checks/options:** Search PBIP definitions for `visualType` values `pythonVisual` and `scriptVisual`; review R-powered custom visuals separately. Rebuild affected visuals using supported built-in/custom visuals, or evaluate Fabric notebooks/apps where supported. Test visuals, refresh, permissions, and user workflows; there is no guaranteed one-to-one automatic recreation.

**Cloud impact:** General Power BI service notice; GCC/GCC High/DoD dates are NP. Verify available visual/Fabric alternatives per cloud. This source does not establish a Power BI Report Server retirement date; do not apply the service schedule to Report Server without separate evidence.

</details>

### BI-05

<details>
<summary>Selected embedded ODBC drivers move to ADBC - early Q1 / spring 2027, planned</summary>

**Source:** [Transition to ADBC](https://learn.microsoft.com/en-us/power-query/transition-to-adbc).

**Exact excerpts:** "Microsoft plans to begin removing ODBC drivers from the service, subject to rollout readiness." / "The ODBC drivers referenced in this article are planned to no longer ship with Power BI Desktop or the gateway."

**Milestones:** Service driver removal begins in **early Q1 2027**, planned. Listed drivers are planned to stop shipping with Desktop and gateway in **spring 2027**. Neither is an exact day; spring is not converted into an invented calendar deadline.

| Affected connector | Current embedded driver | Published replacement |
| --- | --- | --- |
| Databricks / Azure Databricks | Simba Spark ODBC | Databricks ADBC |
| Dremio | Simba Drill ODBC | FlightSQL ADBC |
| Google BigQuery / Google BigQuery (Microsoft Entra ID) | Simba Google BigQuery ODBC | BigQuery ADBC |
| Hive | Simba Hive ODBC | Deprecated; no ADBC replacement named |
| Impala | Simba Impala ODBC | HiveServer2 ADBC |
| Snowflake | Simba Snowflake ODBC | Snowflake ADBC |
| Spark | Simba Spark ODBC | HiveServer2 ADBC |

**Impact:** Listed connectors' embedded drivers and connection defaults change. Semantic models, Dataflows Gen2, and paginated reports can be affected. Tenant/workspace defaults do not govern Dataflows Gen1. The generic ODBC connector using a separately installed driver is **not automatically affected** by this announcement.

**Customer checks/options:** Inventory connector names, M `Implementation` settings, gateway bindings, and raw DSN construction. The article links the read-only [pq-adbc-advisor notebook](https://github.com/microsoft/fabric-toolbox/tree/main/accelerators/pq-adbc-advisor); treat its results as a starting-point diagnostic, not a complete audit. Pilot a workspace override and cloud connection; compare row counts, column types, and refresh duration with the ODBC baseline. Review `Implementation="1.0"` pins and Hive especially carefully. Test the correct supported implementation per connector.

**Watch out:** Gateway routing can defer service cutover; it is not a permanent opt-out and does not avoid the later gateway packaging change. Do not infer that a successful gateway refresh tested the cloud ADBC path.

**Cloud impact:** General service/Desktop/gateway plan; GCC/GCC High/DoD dates are NP. Confirm connector and notebook/Fabric availability in each cloud; use manual M-code/gateway inventory if the diagnostic environment is unavailable.

</details>

### BI-06

<details>
<summary>Power BI Premium P SKUs - each subscription's current agreement end</summary>

**Source:** [Premium capacity migration overview](https://learn.microsoft.com/en-us/power-bi/support/premium-migration-overview).

**Exact excerpts:** "Each P SKU subscription ends at the end of its current agreement term" / "Sovereign clouds aren't affected yet."

**Timeline:** No single global retirement date. Active Enterprise Agreement renewal rights depend on the EA term. After the applicable term ends, the article describes a 30-day grace period, throttling starting day 31, and rejection of operations from day 91.

**Impact:** Unmigrated commercial capacity workloads become unavailable after the grace/throttling process. Data can be retained but inaccessible; retention is not a migration strategy. Pro, PPU, and Embedded EM/A SKUs are not included in this P SKU retirement.

**Customer checks/options:** Inventory P capacities, workspace assignments, contract/EA end dates, usage and required Fabric capacity. Purchase/test the appropriate F SKU, reassign workspaces, verify access/refresh and licensing, and cancel the old P SKU manually. If free-license viewers matter, check the F64-or-larger requirement. Check region constraints for Fabric workloads before cross-region reassignment.

**Report Server dependency:** This is not Report Server product retirement, but the source describes Report Server licensing through a Fabric capacity reservation or SQL Server Enterprise with Software Assurance. Validate your specific licensing entitlement before canceling a P capacity.

**Cloud impact:** Commercial deadlines are contract-specific. The article explicitly says sovereign clouds remain supported for now and separate guidance will follow Fabric availability. For GCC, GCC High, and DoD, retain that exemption rather than applying the commercial dates; no named-cloud retirement date is published.

</details>

## Azure OpenAI

| ID | Retiring capability | Commercial / Azure public | GCC | GCC High | DoD | Azure Government |
| --- | --- | --- | --- | --- | --- | --- |
| [AO-01](#ao-01) | Base-model inference versions | Version-specific schedule below | No M365-cloud mapping published | No M365-cloud mapping published | No M365-cloud mapping published | Use AO-03, not this schedule |
| [AO-02](#ao-02) | Fine-tuned model training/deployment | Separate milestones below | NP | NP | NP | Separate schedule must be checked |
| [AO-03](#ao-03) | Azure Government base-model inference | Not the public-cloud schedule | Not equivalent | Not equivalent | Not equivalent | Published government dates below |
| [AO-04](#ao-04) | Related Foundry model-router versions | Separate Microsoft-model schedule | NP | NP | NP | NP |

### AO-01

<details>
<summary>Azure OpenAI base-model retirements - December 2026 through March 2028</summary>

**Sources:** [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule#azure-openai), revision November 18, 2026; [model lifecycle and upgrades](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements).

**Exact schedule excerpt:** "April 14, 2027 applies to all active customer-facing base-model inference offers in all applicable regions in Azure public cloud"

**Exact lifecycle excerpt:** "Provisioned deployments are NOT auto-upgraded."

**Scope:** The following are published in-window base-model retirement dates, not fine-tuned deployment dates. A published retirement schedule can include currently GA models; listing them here does not claim every model is already in the Deprecated lifecycle stage. Model name **and version** must both match.

**Shared cloud impact for every row:** Commercial/Azure public uses the listed schedule. GCC/GCC High/DoD have no directly mapped retirement dates; determine the actual Azure resource cloud. Azure Government has a separate table in [AO-03](#ao-03), including different embedding dates.

**Shared customer checks:** Inventory deployments by subscription, resource, region, deployment type/SKU, model name, version, and upgrade setting. Cross-check the Models API lifecycle/deprecation fields and deployment inventory; model availability alone does not prove you have a deployment. Subscribe to Azure Service Health notices and review subscription-owner retirement emails.

**Shared migration options:** Test an available supported successor using representative prompts, tools, schemas, safety behavior, latency, quota and cost. Provisioned deployments need manual migration. Do not assume Global Batch or every deployment type automatically upgrades, or that a named successor is available in your region. A retired endpoint can fail even when the application's code has not changed.

The table is a factual model/version/date inventory. Each model name expands to its workload-specific impact check; the source excerpt and cloud/migration checklist above apply to all rows. A dash in Replacement means the reviewed schedule did not name one, not that no supported alternative exists.

| Model - expand for impact check | Version | Published retirement | Named replacement |
| --- | --- | --- | --- |
| <details><summary>gpt-chat-latest</summary>Chat inference dependency: inventory this exact version and evaluate prompts, tools and output schemas against a supported successor. Shared cloud checklist above applies.</details> | 2026-05-28 | 2026-12-08 | - |
| <details><summary>tts</summary>Speech synthesis dependency: inventory callers and test voice, audio format and latency with a supported speech alternative. Shared cloud checklist above applies.</details> | 001 | 2026-12-15 | - |
| <details><summary>tts-hd</summary>Speech synthesis dependency: test output quality, voice and format; do not assume another model is a drop-in replacement. Shared cloud checklist above applies.</details> | 001 | 2026-12-15 | - |
| <details><summary>whisper</summary>Transcription dependency: inventory audio callers and test languages, timestamps and accuracy before switching. Shared cloud checklist above applies.</details> | 001 | 2026-12-15 | - |
| <details><summary>gpt-chat-latest</summary>Chat dependency: match the version, not only the deployment name; validate supported successor behavior. Shared cloud checklist above applies.</details> | 2026-08-06 | 2027-01-12 | - |
| <details><summary>gpt-4o</summary>High-priority chat/vision dependency: inspect upgrade settings and deployment type. Provisioned requires manual migration; Batch auto-upgrade is not implied. Shared cloud checklist above applies.</details> | 2024-05-13 | 2027-01-14 | gpt-5.1 (2025-11-13) |
| <details><summary>gpt-4o-mini-transcribe</summary>Transcription dependency: compare accuracy, timestamps and supported audio formats on a successor. Shared cloud checklist above applies.</details> | 2025-03-20 | 2027-01-20 | - |
| <details><summary>gpt-4o-mini-tts</summary>Speech generation dependency: test voices, formats and streaming callers. Shared cloud checklist above applies.</details> | 2025-03-20 | 2027-01-20 | - |
| <details><summary>gpt-realtime-2</summary>Realtime dependency: test sessions, event schemas, interruption handling and latency with the named successor where available. Shared cloud checklist above applies.</details> | 2026-05-06 | 2027-01-20 | gpt-realtime-2.1 |
| <details><summary>gpt-chat-latest</summary>Chat dependency: identify version pins and regression-test the replacement. Shared cloud checklist above applies.</details> | 2026-10-07 | 2027-02-02 | - |
| <details><summary>gpt-5</summary>Chat/reasoning dependency: test tools, output schemas and reasoning controls before migration. Shared cloud checklist above applies.</details> | 2025-08-07 | 2027-02-09 | - |
| <details><summary>gpt-5-nano</summary>Chat dependency: assess cost/latency-sensitive callers and successor quality. Shared cloud checklist above applies.</details> | 2025-08-07 | 2027-02-09 | - |
| <details><summary>gpt-4o-transcribe</summary>Transcription dependency: test audio inputs, language coverage and accuracy. Shared cloud checklist above applies.</details> | 2025-03-20 | 2027-02-26 | - |
| <details><summary>gpt-audio</summary>Audio dependency: test input/output formats and caller expectations. Shared cloud checklist above applies.</details> | 2025-08-28 | 2027-03-02 | - |
| <details><summary>gpt-realtime</summary>Realtime dependency: validate session protocol and latency under a supported successor. Shared cloud checklist above applies.</details> | 2025-08-28 | 2027-03-02 | - |
| <details><summary>gpt-5-codex</summary>Code-generation dependency: evaluate repository tasks, tool permissions and output quality with a supported replacement. Shared cloud checklist above applies.</details> | 2025-09-15 | 2027-03-17 | - |
| <details><summary>gpt-audio-mini</summary>Audio dependency: compare quality, formats and cost against the successor. Shared cloud checklist above applies.</details> | 2025-10-06 | 2027-04-06 | - |
| <details><summary>gpt-realtime-mini</summary>Realtime dependency: test events, streaming and latency. Shared cloud checklist above applies.</details> | 2025-10-06 | 2027-04-06 | - |
| <details><summary>gpt-5-pro</summary>Reasoning dependency: test reasoning controls, response quality and cost. Shared cloud checklist above applies.</details> | 2025-10-06 | 2027-04-07 | - |
| <details><summary>gpt-image-1-mini</summary>Image dependency: test generation/editing workflows, image formats and safety behavior. Shared cloud checklist above applies.</details> | 2025-10-06 | 2027-04-07 | - |
| <details><summary>gpt-4.1</summary>Chat/code dependency: assess tools, context and structured output; inventory this exact version. Shared cloud checklist above applies.</details> | 2025-04-14 | 2027-04-14 | - |
| <details><summary>gpt-4.1-mini</summary>Chat/code dependency: regression-test cost-sensitive workloads. Shared cloud checklist above applies.</details> | 2025-04-14 | 2027-04-14 | - |
| <details><summary>gpt-4.1-nano</summary>Chat/code dependency: test quality and latency on a supported successor. Shared cloud checklist above applies.</details> | 2025-04-14 | 2027-04-14 | - |
| <details><summary>gpt-4o</summary>Chat/vision dependency: match version and deployment type; inspect manual versus automatic upgrade behavior. Shared cloud checklist above applies.</details> | 2024-08-06 | 2027-04-14 | gpt-5.1 |
| <details><summary>gpt-4o</summary>Chat/vision dependency: test prompts, multimodal inputs and tool schemas. Shared cloud checklist above applies.</details> | 2024-11-20 | 2027-04-14 | gpt-5.1 |
| <details><summary>gpt-4o-mini</summary>Chat/vision dependency: validate cost-sensitive callers and output quality. Shared cloud checklist above applies.</details> | 2024-07-18 | 2027-04-14 | - |
| <details><summary>gpt-4o-transcribe-diarize</summary>Diarization dependency: compare speaker attribution, timestamps and supported inputs. Shared cloud checklist above applies.</details> | 2025-10-15 | 2027-04-15 | - |
| <details><summary>gpt-5.1-codex</summary>Code-generation dependency: test repository tasks and tool behavior. Shared cloud checklist above applies.</details> | 2025-11-13 | 2027-05-15 | - |
| <details><summary>gpt-5.1-codex-mini</summary>Code-generation dependency: compare quality, cost and latency on a successor. Shared cloud checklist above applies.</details> | 2025-11-13 | 2027-05-15 | - |
| <details><summary>gpt-5.1-codex-max</summary>Code-generation dependency: validate long-running tasks and tool-call behavior. Shared cloud checklist above applies.</details> | 2025-12-04 | 2027-05-18 | - |
| <details><summary>gpt-5.2</summary>Chat/reasoning dependency: test representative prompts, tools and reasoning controls. Shared cloud checklist above applies.</details> | 2025-12-11 | 2027-06-08 | - |
| <details><summary>gpt-4o-mini-transcribe</summary>Transcription dependency: this newer version has a different retirement from the March 2025 version. Test successor accuracy. Shared cloud checklist above applies.</details> | 2025-12-15 | 2027-06-15 | - |
| <details><summary>gpt-4o-mini-tts</summary>Speech dependency: match this exact version and test voice/format behavior. Shared cloud checklist above applies.</details> | 2025-12-15 | 2027-06-15 | - |
| <details><summary>gpt-audio-mini</summary>Audio dependency: compare format compatibility and quality. Shared cloud checklist above applies.</details> | 2025-12-15 | 2027-06-15 | - |
| <details><summary>gpt-realtime-mini</summary>Realtime dependency: test connection/session behavior and latency. Shared cloud checklist above applies.</details> | 2025-12-15 | 2027-06-15 | - |
| <details><summary>gpt-image-1.5</summary>Image dependency: evaluate image generation/editing callers and formats. Shared cloud checklist above applies.</details> | 2025-12-16 | 2027-06-16 | - |
| <details><summary>gpt-5-mini</summary>Chat/reasoning dependency: test quality, latency and cost. Shared cloud checklist above applies.</details> | 2025-08-07 | 2027-07-13 | - |
| <details><summary>gpt-5.1</summary>Chat/reasoning dependency: this replacement itself has a retirement; plan beyond a single migration. Shared cloud checklist above applies.</details> | 2025-11-13 | 2027-07-13 | - |
| <details><summary>gpt-5.2-codex</summary>Code-generation dependency: test tasks, tools and policies. Shared cloud checklist above applies.</details> | 2026-01-14 | 2027-07-13 | - |
| <details><summary>gpt-realtime-2.1</summary>Realtime dependency: validate successor sessions and events. Shared cloud checklist above applies.</details> | 2026-07-07 | 2027-07-31 | - |
| <details><summary>gpt-realtime-2.1-mini</summary>Realtime dependency: compare latency, session behavior and cost. Shared cloud checklist above applies.</details> | 2026-07-07 | 2027-07-31 | - |
| <details><summary>gpt-5.3-codex</summary>Code-generation dependency: evaluate representative repository tasks. Shared cloud checklist above applies.</details> | 2026-02-24 | 2027-08-24 | - |
| <details><summary>gpt-audio-1.5</summary>Audio dependency: test input/output support and accuracy. Shared cloud checklist above applies.</details> | 2026-02-23 | 2027-08-24 | - |
| <details><summary>gpt-realtime-1.5</summary>Realtime dependency: test streaming, interruptions and session schemas. Shared cloud checklist above applies.</details> | 2026-02-23 | 2027-08-24 | - |
| <details><summary>gpt-5.4</summary>Chat/reasoning dependency: regression-test prompts and tools. Shared cloud checklist above applies.</details> | 2026-03-05 | 2027-09-02 | - |
| <details><summary>gpt-5.4-pro</summary>Reasoning dependency: compare reasoning behavior, quality and cost. Shared cloud checklist above applies.</details> | 2026-03-05 | 2027-09-07 | - |
| <details><summary>gpt-image-2.5-flare</summary>Image dependency: test image workflows and supported formats. Shared cloud checklist above applies.</details> | 2026-09-09 | 2027-09-09 | - |
| <details><summary>gpt-image-2.5-sunburst</summary>Image dependency: test output quality and caller compatibility. Shared cloud checklist above applies.</details> | 2026-09-09 | 2027-09-09 | - |
| <details><summary>gpt-live-1</summary>Live/multimodal dependency: inventory API callers and test documented successor input/session behavior. Shared cloud checklist above applies.</details> | 2026-09-10 | 2027-09-10 | - |
| <details><summary>gpt-5.4-mini</summary>Chat/reasoning dependency: compare latency, quality and cost. Shared cloud checklist above applies.</details> | 2026-03-17 | 2027-09-21 | - |
| <details><summary>gpt-5.4-nano</summary>Chat/reasoning dependency: test cost-sensitive callers and tool schemas. Shared cloud checklist above applies.</details> | 2026-03-17 | 2027-09-21 | - |
| <details><summary>gpt-image-2</summary>Image dependency: validate generation/editing workflows before migration. Shared cloud checklist above applies.</details> | 2026-04-21 | 2027-10-21 | - |
| <details><summary>gpt-5.5</summary>Chat/reasoning dependency: evaluate prompts, schemas and tool behavior. Shared cloud checklist above applies.</details> | 2026-04-24 | 2027-10-26 | - |
| <details><summary>gpt-6.1-terra</summary>Model inference dependency: inventory exact version/type and test an available supported successor. Shared cloud checklist above applies.</details> | 2026-10-26 | 2027-10-26 | - |
| <details><summary>gpt-realtime-translate</summary>Translation dependency: compare language support, streaming and accuracy. Shared cloud checklist above applies.</details> | 2026-05-06 | 2027-11-09 | - |
| <details><summary>gpt-realtime-whisper</summary>Realtime transcription dependency: test latency, accuracy and event schemas. Shared cloud checklist above applies.</details> | 2026-05-06 | 2027-11-09 | - |
| <details><summary>gpt-5.6-luna</summary>Model inference dependency: match version and test supported replacement behavior. Shared cloud checklist above applies.</details> | 2026-07-09 | 2028-01-11 | - |
| <details><summary>gpt-5.6-sol</summary>Model inference dependency: evaluate prompts, tools and schemas on a successor. Shared cloud checklist above applies.</details> | 2026-07-09 | 2028-01-11 | - |
| <details><summary>gpt-5.6-terra</summary>Model inference dependency: evaluate supported successor quality and deployment availability. Shared cloud checklist above applies.</details> | 2026-07-09 | 2028-01-11 | - |
| <details><summary>gpt-6-astra</summary>Model inference dependency: inventory exact deployment version and test caller compatibility. Shared cloud checklist above applies.</details> | 2026-09-03 | 2028-01-11 | - |
| <details><summary>gpt-live-transcribe</summary>Live transcription dependency: test streaming protocol, timestamps and accuracy. Shared cloud checklist above applies.</details> | 2026-07-28 | 2028-02-01 | - |
| <details><summary>gpt-transcribe</summary>Transcription dependency: compare formats, languages and accuracy. Shared cloud checklist above applies.</details> | 2026-07-28 | 2028-02-01 | - |
| <details><summary>text-embedding-3-large</summary>Embedding dependency: test vector dimensions and quality; a model change can require re-embedding data and rebuilding indexes. Azure Government retires earlier: see AO-03.</details> | 1 | 2028-02-09 | - |
| <details><summary>text-embedding-3-small</summary>Embedding dependency: assess dimensional compatibility and retrieval quality; plan any required re-indexing. Azure Government retires earlier: see AO-03.</details> | 1 | 2028-02-09 | - |
| <details><summary>text-embedding-ada-002</summary>Embedding dependency: match version 1 and assess full re-embedding/index migration rather than switching query vectors alone. Shared cloud checklist above applies.</details> | 1 | 2028-02-09 | - |
| <details><summary>text-embedding-ada-002</summary>Embedding dependency: match version 2; Azure Government has an earlier date in AO-03. Test vector compatibility and retrieval quality.</details> | 2 | 2028-02-09 | - |
| <details><summary>gpt-6-luna</summary>Model inference dependency: evaluate an available successor against representative workloads. Shared cloud checklist above applies.</details> | 2026-09-22 | 2028-03-11 | - |
| <details><summary>gpt-6-sol</summary>Model inference dependency: test prompts, schemas, tools and cost. Shared cloud checklist above applies.</details> | 2026-09-22 | 2028-03-11 | - |
| <details><summary>gpt-6.1-sol</summary>Model inference dependency: inventory exact version and regression-test supported successor behavior. Shared cloud checklist above applies.</details> | 2026-09-29 | 2028-03-11 | - |

</details>

### AO-02

<details>
<summary>Fine-tuned models - distinct training bounds and deployment retirements</summary>

**Source:** [Fine-tuned retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule#fine-tuned-models).

**Exact excerpt:** "Unless explicitly stated, training retires no earlier than the base model retirement date."

| Base model | Version | Training retirement lower bound | Deployment retirement |
| --- | --- | --- | --- |
| gpt-4.1 | 2025-04-14 | No earlier than 2027-04-14 | 2027-10-14 |
| gpt-4.1-mini | 2025-04-14 | No earlier than 2027-04-14 | 2027-10-14 |
| gpt-4.1-nano | 2025-04-14 | No earlier than 2027-04-14 | 2028-04-13 |
| gpt-4o | 2024-08-06 | No earlier than 2027-04-01 | 2027-10-01 |
| gpt-4o-mini | 2024-07-18 | No earlier than 2027-04-01 | 2027-10-01 |
| o4-mini | 2025-04-16 | No earlier than 2027-05-19 | 2027-11-19 |

**Bounds/caveats:** The schedule has existing-customer exceptions; otherwise training retirement occurs at base-model retirement. Do not convert a no-earlier-than value into a promised training cutoff or apply a base-model retirement date to every fine-tuned deployment.

**Impact and customer checks:** Inventory custom model IDs, base versions, training jobs, training datasets, evaluations, and serving deployments separately. Recreate/retrain on a supported base and evaluate quality before switching consumers; ordinary base-model auto-upgrade is not a migration guarantee for custom models.

**Cloud impact:** This is the reviewed general/public schedule. GCC/GCC High/DoD mapping is NP. Verify Azure Government fine-tuning availability and its own lifecycle separately; do not copy the public dates into a government migration plan without evidence.

</details>

### AO-03

<details>
<summary>Azure Government model retirements - government embeddings retire April 15, 2027</summary>

**Sources:** [Azure Government retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov#azure-openai) and [Azure Government model lifecycle](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements-gov).

**Exact lifecycle excerpt:** "If the upgrade target isn't available in the same deployment type and region, Microsoft doesn't perform a model upgrade."

| Azure Government model | Version | Published retirement | Named replacement |
| --- | --- | --- | --- |
| gpt-4.1 | 2025-04-14 | 2027-04-14 | gpt-5.1 |
| gpt-4.1-mini | 2025-04-14 | 2027-04-14 | - |
| gpt-4o | 2024-11-20 | 2027-04-14 | gpt-5.1 |
| text-embedding-3-large | 1 | 2027-04-15 | - |
| text-embedding-3-small | 1 | 2027-04-15 | - |
| text-embedding-ada-002 | 2 | 2027-04-15 | - |
| gpt-5.1 | 2025-11-13 | 2027-07-13 | - |

**Impact/checks:** Inventory actual Azure Government deployments in their region and deployment type. For embeddings, plan successor evaluation, dimensional checks, re-embedding and index rebuilding as needed. The government schedule's embedding dates are earlier than the public-cloud dates; use the resource's published government table rather than extrapolating from general lifecycle language.

**Migration:** Validate successor availability in the same type and region; provisioned deployments require manual migration. Government policy can extend a retirement when replacement availability would otherwise leave less than 30 days; follow the published schedule and Service Health updates rather than inventing an extension.

**Cloud mapping:** These are Azure Government dates, not separately named GCC/GCC High/DoD milestones. A GCC/GCC High/DoD organization can be a customer of Azure resources, but must map its application to the actual subscription cloud. Public-cloud applications use AO-01 instead.

</details>

### AO-04

<details>
<summary>Related Foundry model-router versions - January 27 / May 20, 2027</summary>

**Source:** [Microsoft models in the Foundry retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule#microsoft).

**Exact row excerpt:** "model-router"

| Version | Published lifecycle stage | Retirement |
| --- | --- | --- |
| 2025-05-19 | Preview | 2027-01-27 |
| 2025-08-07 | Preview | 2027-01-27 |
| 2025-11-18 | GA | 2027-05-20 |

**Scope:** This is a Microsoft model in a separate Foundry section, not an OpenAI base-model row. Included as an adjacent routing dependency; other non-OpenAI Foundry models were not comprehensively reviewed.

**Customer checks/options:** Inventory model-router deployments and pinned versions. Evaluate a supported available router or explicitly selected model; routing changes can alter model selection, quality, cost and latency. No replacement is named in these schedule rows.

**Cloud impact:** These dates come from the general schedule. No government schedule row was found for model-router; Azure Government, GCC, GCC High and DoD dates remain NP. Determine the actual resource cloud before using these dates.

</details>

## Document Intelligence

### DI-01

<details>
<summary>Azure AI Document Intelligence REST API v2.1 - end of support September 15, 2027</summary>

**Sources:** [Migration guide](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/versioning/migration-guide-overview?view=doc-intel-4.0.0) and [version support and retirement table](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview?view=doc-intel-4.0.0#version-support-and-retirement).

**Exact excerpt:** "Document Intelligence REST API v2.1 reaches end of support on September 15, 2027."

| Retiring item | Commercial/general | GCC | GCC High | DoD | Azure Government |
| --- | --- | --- | --- | --- | --- |
| v2.1 REST API | September 15, 2027 end of support | NP | NP | NP | NP |

**Impact:** Applications using v2.1 leave the supported API version. End of support is not automatically evidence of an exact hard shutdown time; plan migration before the published date rather than relying on continued operation.

**Customer checks/options:** Inventory REST request paths/API versions, SDK package versions and configured service versions, custom model IDs, and training versions. Upgrade to a supported GA version, such as the documented v4.0 API, and test extraction accuracy, response schemas, model compatibility, downstream mappings, and document coverage. Retrain custom models where the migration guidance requires it.

**Cloud impact:** The source supplies a general date without a named-cloud schedule. GCC/GCC High/DoD are not Azure resource-cloud labels; identify the actual resource cloud and confirm supported API/model availability there. Azure Government-specific retirement timing was not established by these reviewed pages.

**Excluded from the two-year view:** v3.0 (2022-08-31) end of support is March 30, 2029. The reviewed overview lists no announced retirement for v3.1 (2023-07-31) or v4.0 (2024-11-30).

</details>

## Copilot and Copilot Studio

| ID | Item | General/commercial timeline | GCC | GCC High | DoD |
| --- | --- | --- | --- | --- | --- |
| [CP-01](#cp-01) | Microsoft 365 Copilot App Builder agent | Editing ends after November 30, 2026; access ends after December 31, 2026 | NP | NP | NP |
| [CP-02](#cp-02) | Microsoft 365 Targeted release, adjacent Copilot rollout dependency | January 2027 | Standard release remains supported; no separate retirement day | Same | Same |
| [CP-03](#cp-03) | Copilot Studio Teams authoring watch | No upcoming Teams-app retirement date verified on reviewed Learn page | NP | NP | NP |
| [PP-11](#pp-11) | Dataverse for Teams dependency for agents | September 15 / October 30, 2027 | NP | NP | NP |

Power Apps/Power Automate Copilot feature retirements are also covered in [PP-01](#pp-01), [PP-03](#pp-03), [PP-04](#pp-04), [PP-07](#pp-07), and [PP-08](#pp-08); Power BI Copilot entries are [BI-01](#bi-01) and [BI-02](#bi-02).

### CP-01

<details>
<summary>Microsoft 365 Copilot App Builder - editing ends after November 30; access ends after December 31, 2026</summary>

**Source:** [App Builder migration](https://learn.microsoft.com/en-us/copilot/manage/app-builder-migration).

**Exact excerpts:** "The App Builder agent is retiring." / "Editing in App Builder is no longer supported." / "You can no longer access your App Builder apps."

**Timeline:** Through November 30, apps can be edited, migrated or downloaded. December 1-31 is migration/download only. After December 31, App Builder apps are no longer accessible.

**Customer checks/options:** Inventory App Builder apps, owners, business usage, links, code and data dependencies. Migrate or download before the access deadline and verify the replacement's functionality and user access. The source describes Copilot Cowork and Apps in Copilot Studio paths; migration is not a guarantee of identical behavior.

**Watch out:** Cowork migration requires a Microsoft 365 Copilot license, Frontier access, Copilot Credits and an appropriate personal developer environment. Apps in Copilot Studio is public preview in the reviewed guide. Coordinate with [unmanaged developer environment retirement](#pp-09); do not create a migration dependency on an environment about to be suspended.

**Cloud impact:** The article gives general dates but no GCC/GCC High/DoD retirement or migration schedule. Its worldwide rollout wording is not proof of government availability. [CP-02](#cp-02) confirms Frontier is currently unavailable in government environments, so government customers must validate an approved supported migration path rather than assume Cowork is usable.

</details>

### CP-02

<details>
<summary>Microsoft 365 Targeted release - January 2027; adjacent rollout-management retirement</summary>

**Source:** [Targeted release retirement](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/targeted-release-retirement#key-dates).

**Exact excerpts:** "Microsoft retires Targeted release for Microsoft 365 services." / "Currently, Deferred release and Frontier aren't available in government cloud environments."

**Timeline:** Enrollment changes stop in November 2026; Targeted release retires in January 2027. No exact day is published. This is a Microsoft 365 release-channel retirement, not retirement of Copilot itself.

**Impact/checks:** Review pilot-user enrollment and release-governance processes. Affected services include the admin center, Teams, OneDrive, SharePoint Online, Outlook on the web, new Outlook for Windows and Office for the web. Microsoft 365 Apps update channels, Windows update channels and Insider programs are not changed by this notice.

**Options:** Review the unified release-preference experience and the available Frontier, Standard and Deferred options for commercial tenants; adapt pilot and change-control processes.

**Cloud impact:** The primary article explicitly states that **Standard release remains the supported option for GCC, GCC High and DoD**, with Deferred and Frontier currently unavailable. It does not publish independent dates for those three clouds. Do not promise government tenants the commercial early-access replacement.

</details>

### CP-03

<details>
<summary>Copilot Studio Teams authoring - upcoming app removal not verified in reviewed Learn documentation</summary>

**Source:** [Copilot Studio for Teams quickstart](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams).

**Exact excerpt:** "Since the end of June 2026, you can't use the Copilot Studio for Teams app to create classic chatbots."

**Status:** This creation restriction is **past**, not an upcoming milestone. The full reviewed quickstart did not verify a future January/February 2027 Teams-app shutdown, so no such date is presented as confirmed here.

**Customer checks/options:** Review classic agents and tenant Message Center notices; verify whether authoring is redirected to the Copilot Studio web app. Independently inventory Dataverse for Teams environments containing agents for the confirmed [PP-11](#pp-11) deadlines.

**Cloud impact:** No upcoming commercial/GCC/GCC High/DoD Teams-app schedule was established on this page. Confirm both notice applicability and web-authoring availability in the actual tenant.

</details>

## GitHub Copilot

### GH-01

<details>
<summary>GitHub Copilot - no confirmed future dated retirement in the reviewed sources</summary>

**Primary reference:** [GitHub Copilot supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models). Official GitHub changelog searches were also performed; GitHub documentation is a clearly labeled supplement, not Microsoft Learn.

**Finding:** No upcoming dated retirement after November 20, 2026 was confirmed in this review. Past model retirements are not placed in the upcoming filters. This negative finding is not a guarantee of two years of model availability.

**Customer checks/options:** Inventory enterprise/org model policies, developer model selections and workflows with model-specific assumptions. Track the [official GitHub changelog](https://github.blog/changelog/) and supported-model updates; test supported alternatives when a notice appears. GitHub Copilot model availability does not follow the Azure OpenAI deployment schedule automatically.

**Cloud impact:** No GCC/GCC High/DoD retirement schedule was established. GitHub service deployment, enterprise policies, data residency and government authorization must be assessed separately from Microsoft 365 cloud labels.

**Evidence limitation:** The supported-model page was read in part; changelog results were searched, not every post fully fetched. No dated announcement is quoted because no qualifying future notice was verified.

</details>

## Power BI Report Server

### RS-01

<details>
<summary>Power BI Report Server - no announced product retirement; track installed-version support</summary>

**Sources:** [Product lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/power-bi-report-server) and [version support timeline](https://learn.microsoft.com/en-us/power-bi/report-server/support-timeline).

**Exact excerpts:** "Power BI Report Server follows the Modern Lifecycle Policy." / "the previous release continues to receive security updates for the remainder of the 12-month release lifespan."

**Finding:** The reviewed lifecycle page lists the product in support without a retirement date. A rolling version-support policy is not a dated retirement of the whole product.

**Customer checks/options:** Inventory the installed server release/build and its release date, then calculate its published support window. Upgrade unsupported/outgoing builds and regression-test reports, extensions, data sources and authentication. Check [P SKU migration licensing implications](#bi-06) if Report Server rights depend on that capacity.

**Cloud impact:** Report Server is an installed product, not a GCC/GCC High/DoD service rollout. Support follows the installed version and entitlement. The reviewed Power BI service Q&A/R/Python notices do not establish Report Server removal dates.

</details>

## Unknown or tenant-specific dates

These items cannot be honestly assigned a 7/30/60/90/>120-day retirement without additional evidence.

| Item | Known status | Missing information | Details |
| --- | --- | --- | --- |
| Power BI P SKUs | Retirement at applicable agreement end; sovereign exemption for now | Customer contract/EA end date | [BI-06](#bi-06) |
| Editable Grid / Power Apps Read-Only Grid | Deprecated March 2026; continue functioning until further notice | Future removal day | [PP-13](#pp-13) |
| Power Platform Test Engine | Deprecated April 2026; documentation/repository removal in a future release | Future removal day | [PP-14](#pp-14) |
| Azure OpenAI fine-tuning training | No-earlier-than bounds | Committed training cutoff where not published | [AO-02](#ao-02) |
| Azure OpenAI dated API versions | No in-window sunset verified on reviewed lifecycle page | Any future specific version sunset | [API lifecycle reference](https://learn.microsoft.com/en-us/azure/foundry/openai/api-version-lifecycle) |
| Copilot Studio Teams app | Past creation restriction verified | Future app-removal notice verified for the tenant | [CP-03](#cp-03) |
| GitHub Copilot | No future dated notice confirmed in reviewed sources | Later model/feature announcements | [GH-01](#gh-01) |
| Power BI Report Server | Product remains in support | Installed release and its support window | [RS-01](#rs-01) |

### PP-13

<details>
<summary>Editable Grid and Power Apps Read-Only Grid - deprecated, future removal date not published</summary>

**Source:** [Grid control deprecation](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-editable-grid-and-power-apps-read-only-grid-controls).

**Exact excerpt:** "deprecated in model-driven apps."

**Status:** Deprecation began March 2026. Existing controls continue functioning until further notice, with critical security fixes only and no new features. No removal day was published in this notice.

**Customer checks/options:** Inspect model-driven app forms, views and subgrids for the named controls. Configure the modern Power Apps grid control and test editing, accessibility, custom behavior and user workflows before publishing.

**Cloud impact:** General announcement; GCC/GCC High/DoD dates are NP. Inventory installed control usage in each tenant and validate the replacement there. No two-year removal forecast is invented.

</details>

### PP-14

<details>
<summary>Power Platform Test Engine - deprecated, future documentation/repository removal undated</summary>

**Source:** [Test Engine deprecation](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-test-engine).

**Exact excerpt:** "Test Engine is deprecated."

**Status:** Deprecated April 2026. Microsoft no longer maintains its documentation/repository and says they will be removed in a future release; no future removal date is published.

**Customer checks/options:** Search CI pipelines, scripts and dependencies for Test Engine use. Evaluate the [Power Platform Playwright samples](https://learn.microsoft.com/en-us/power-platform/developer/playwright-samples/overview); migrate representative tests and verify their assertions and authentication rather than only checking that a browser launches.

**Cloud impact:** General developer-tool announcement; no GCC/GCC High/DoD deadlines published. Validate replacement test tooling and authentication in each tenant; do not send government test data outside its approved boundary.

</details>

## Related customer access considerations

These are **not feature-deprecation announcements** and are deliberately separate from the retirement filters:

- [Power Apps licensing enforcement](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-licensing-faq#licensing-compliance-for-power-apps) starts February 2027 in previously lenient scenarios. Check licensing reports and premium entitlement when converting unmanaged developer environments or moving apps.
- [Power Automate transition-period request limits](https://learn.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations#power-automate-transition-period) end in a phased rollout starting April 2027 for cloud flows under user licenses. Review the admin center's Licensing > Power Automate > Usage area and aggregated user action usage; existing Process/legacy Per-flow allocations are not the changed user-license allocation.

Neither reviewed page supplied separately named GCC/GCC High/DoD enforcement dates. Tenant rollout confirmation is necessary.

## Research coverage and refresh checklist

### Primary pages checked

| Product/source area | Pages checked | Scope / limitations |
| --- | --- | --- |
| Power Platform | [Umbrella deprecation hub](https://learn.microsoft.com/en-us/power-platform/important-changes-coming) | Upcoming dated sections and relevant undated watchlist entries examined; historical-only notices excluded |
| Power Apps | [Canvas-app deprecation hub](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/important-changes-deprecations), [deprecated endpoints](https://learn.microsoft.com/en-us/power-apps/limits-and-config#deprecated-endpoints) | No additional future dated retirement established in these pages |
| Power Platform dataflows | [Teams dataflows](https://learn.microsoft.com/en-us/power-query/dataflows/dataflows-teams) | Full retirement notice checked |
| Government Power Platform | [Power Apps government](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-us-government), [Power Automate government](https://learn.microsoft.com/en-us/power-automate/us-govt) | Feature limitations/boundaries checked; not evidence of retirement rollout offsets |
| Power BI | [What's new](https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new), [Q&A](https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-intro), [script visuals](https://learn.microsoft.com/en-us/power-bi/create-reports/script-visuals-overview) | November 2026 notices and retirement sections checked; linked Q&A community article could not be read and is not used as primary evidence |
| Power BI capacity / Power Query | [Premium migration](https://learn.microsoft.com/en-us/power-bi/support/premium-migration-overview), [ADBC transition](https://learn.microsoft.com/en-us/power-query/transition-to-adbc) | Full relevant notices checked; contract/rollout dates still require tenant confirmation |
| Report Server | [Lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/power-bi-report-server), [support timeline](https://learn.microsoft.com/en-us/power-bi/report-server/support-timeline) | Product and version policy checked; customer installed build not known |
| Azure OpenAI | [Public schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule), [lifecycle](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements), [API lifecycle](https://learn.microsoft.com/en-us/azure/foundry/openai/api-version-lifecycle) | OpenAI base/fine-tuned tables and API page checked; adjacent model-router rows labeled separately, other Foundry providers not comprehensively reviewed |
| Azure Government OpenAI | [Government schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov), [government lifecycle](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements-gov) | Government base-model table checked; no fine-tuning table found on schedule page |
| Document Intelligence | [Migration guide](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/versioning/migration-guide-overview?view=doc-intel-4.0.0), [version table](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview?view=doc-intel-4.0.0#version-support-and-retirement) | v2.1 date verified; v3.0 is outside horizon; v3.1 has no announced date |
| Copilot / Microsoft 365 | [App Builder](https://learn.microsoft.com/en-us/copilot/manage/app-builder-migration), [Targeted release](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/targeted-release-retirement) | Full notices and government wording checked; broader Copilot features not exhaustively crawled |
| Copilot Studio | [Teams quickstart](https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-get-started-teams) | Full page checked; no future Teams-app removal date verified there |
| GitHub Copilot supplement | [Supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models), [official changelog](https://github.blog/changelog/) | Supported-model page read in part and changelog searched; no future dated notice confirmed; not Learn |

### Remaining gaps

- No authenticated customer Message Center or environment inventory was reviewed.
- Search indexing and topic-focused research can miss announcements embedded in unrelated pages, localized pages, release plans, individual connectors, or tenant-only communications.
- No guarantee of completeness is made for all Copilot products, every connector/SDK/API, every Report Server build, or all future GitHub model changes.
- Most announcements do not publish commercial/GCC/GCC High/DoD rollout matrices. NP cells are deliberate evidence gaps, not forecasts.
- Dates and replacement availability may change; recheck primary sources before implementation or customer commitments.

### Suggested recurring refresh

For a future scheduled workflow, refresh source pages at least weekly, recalculate windows from the run date, retain source URLs/short excerpts/date precision/cloud evidence, and flag changed dates for human review. Review every 30-day item with an owner and a tested migration plan.

This file does not install a crawler, create a GitHub Actions workflow, or promise an exhaustive automated review. Those require a separately agreed source inventory, cadence, and publishing/review policy.
