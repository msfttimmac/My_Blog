---
layout: post
title: "Weekly Microsoft Blog & Video Digest – October 19, 2026"
date: 2026-10-19
categories: [microsoft, power-platform, fabric, copilot, azure-ai, us-government-cloud]
tags: [weekly-digest, gcc, gcc-high, dod, azure-government, fedramp, deprecations]
---

# Weekly Microsoft Blog & Video Digest – October 19, 2026

## Executive Summary

- ⚠️ **Fabric My workspace governance (GA, Oct 13):** the new tenant admin controls for My workspace are generally available and Microsoft says they are also available in government clouds. This is the one U.S. government cloud release announced this week.
- ⚠️ **Fabric data agent custom tool in Microsoft Foundry retires 11/6/2026:** move to the Fabric IQ (OneLake Catalog) tool, which is in Preview. Fabric IQ items aren't supported in GCC High, so customers there won't have a replacement yet.
- **Copilot in SharePoint isn't available in government clouds:** Microsoft Learn says GCC, GCC High and DoD "don't currently support Copilot in SharePoint." The Copilot service description still shows partial support, so treat the Learn page as the current statement.
- ⚠️ **Azure OpenAI retirements in Azure Government:** o3-mini retires **2026-11-19** (move to gpt-5.6-terra). gpt-4.1, gpt-4.1-mini and gpt-4o 2024-11-20 retire **2027-04-14** (move to gpt-5.1). The text-embedding models retire **2027-04-15** in Azure Government, about 10 months earlier than in Commercial (2028-02-09).
- **Deprecations due within 60 days:** Copilot in SharePoint preview PowerShell controls (Nov 1), Dataverse for Teams environment creation and unmanaged developer environment creation (Nov 15), the o-series models (Nov 19), and Power Apps Vibe / App Builder (Nov 30). Unmanaged developer environments are suspended Dec 15.
- **Power BI Q&A retires in February 2027.** Its replacement, Copilot for Power BI, isn't supported in U.S. sovereign clouds, so gov customers need a plan. **SharePoint classic publishing site creation ends 2027-03-01**, and Microsoft says this applies to GCC, GCC High and DoD.
- **Databricks ADBC connector is GA (Oct 15):** the Power BI service moves from the ODBC driver to ADBC through Q1 2027, so plan the driver change with Databricks customers.
- **GPT-6 is GA in Microsoft Foundry, commercial only:** Azure Government tops out at the GPT-5.6 series. Gov customers on o3-mini face the commercial retirement date of 2026-11-19.
- **Copilot:** Microsoft Copilot for legal is GA. Copilot Studio added agent accounts and business process memory (Frontier preview), but triggers and autonomous agents are still marked "No" for GCC and GCC High.

## U.S. Sovereign Cloud Watch

| Cloud | Product | Change | Status / Date | Source |
|---|---|---|---|---|
| GCC / GCC High / DoD | Fabric / Power BI | ⚠️ My workspace governance admin controls "also available in government clouds" | GA – Oct 13, 2026 | [Fabric Updates Blog](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/my-workspace-governance-improvements-generally-available/5368442) |
| GCC High | Fabric | ⚠️ Data agent custom tool in Foundry retires; Fabric IQ replacement not supported in GCC High | Retirement – 11/6/2026 | [Fabric Updates Blog](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/retiring-the-fabric-data-agent-custom-tool-in-microsoft-foundry-move-to-fabric-i/5374418) |
| GCC High | Fabric | Workspace-level private link (new Preview this week) is not supported in GCC High; only tenant-level private link is | Not available | [Microsoft Learn](https://learn.microsoft.com/en-us/fabric/enterprise/us-government-community-cloud-high) |
| GCC / GCC High / DoD | SharePoint | Copilot in SharePoint not currently supported | Not available (Learn updated 09/25/2026) | [Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-get-started) |
| GCC / GCC High | Copilot Studio | Triggers / autonomous agents (the focus of this week's Copilot Studio post) marked "No" | Not available | [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing-gcc) |
| Azure Government | Azure OpenAI | GPT-6 family and gpt-chat-latest not offered; the latest Gov models are the GPT-5.6 series | Not available | [Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-gov) |
| Azure Government | Azure OpenAI | o3-mini retires; move to gpt-5.6-terra | Retirement – 2026-11-19 | [Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov) |
| Azure Government | Azure OpenAI | text-embedding-3-large, 3-small and ada-002 v2 retire earlier in Gov than in Commercial (2028-02-09) | Retirement – 2027-04-15 | [Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov) |
| GCC / GCC High / DoD | SharePoint | Classic publishing site creation and feature activation disabled; explicitly includes gov clouds | Deprecation – 2027-03-01 | [Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/classic-user-created-page-deprecation) |
| GCC / GCC High / DoD | Power BI | Q&A retires; Microsoft's blog says the replacement (Copilot) doesn't yet support sovereign clouds | Retirement – February 2027 | [Power BI Blog](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/power-bi-qa-retirement-reminder-february-2027-timeline-update/5365841) |
| GCC (scope unconfirmed) | Power Apps | MC1505609: App Builder agent and vibe.powerapps.com retire. Learn lists Vibe in US, Australia, Asia and India regions only and doesn't mention government clouds | Retirement – November 30, 2026 | [Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/vibe/migrate-apps) |

## Deprecations & Retirements (next 6 months: October 19, 2026 – April 19, 2027)

🆕 = announced in the last 7 days · ⚠️ = effective within 60 days (by December 18, 2026)

| Effective Date | Product | Feature / Item | Type | What to Do | U.S. Gov Cloud Impact | Source |
|---|---|---|---|---|---|---|
| ⚠️ 2026-10-23 | Azure OpenAI | gpt-image-1 (2025-04-15, Preview) | Model retirement | Move to a newer GA image model such as gpt-image-1.5. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| ⚠️ October 2026 (phased) → early Q1 2027 | Power BI / Fabric | Embedded ODBC drivers replaced by ADBC (Databricks, Snowflake, BigQuery, Dremio, Impala, Spark; Hive deprecated). Service removal of ODBC drivers is planned to begin early Q1 2027. | Removal | Opt in with Implementation="2.0" or the tenant/workspace setting. Staying on ODBC requires a gateway. | Not stated – verify | [Transition to ADBC](https://learn.microsoft.com/en-us/power-query/transition-to-adbc) |
| ⚠️ 2026-10-30 | Fabric Data Factory | Legacy Teams and Outlook pipeline activities: no new instances can be added (existing ones keep running) | Deprecation | Use the modern Microsoft Teams and Outlook 365 Email activities. | Not stated – verify | [Fabric Updates Blog](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/upcoming-changes-to-legacy-teams-and-outlook-activities-in-fabric-data-factory-p/5314499) |
| ⚠️ 2026-11-01 | SharePoint / Copilot | Copilot in SharePoint preview PowerShell controls (KnowledgeAgentScope, KnowledgeAgentSelectedSitesList and the related operation setting) | Retirement | Manage availability with Site AI settings and Restricted Content Discovery. | Not applicable: Copilot in SharePoint isn't supported in GCC, GCC High or DoD | [Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-get-started) |
| 🆕 ⚠️ 2026-11-06 | Fabric / Microsoft Foundry | Fabric data agent as a custom tool in Foundry | Retirement | Switch to the Fabric IQ (OneLake Catalog) tool (Preview) or the MCP endpoint. | GCC High: Fabric IQ not supported, so there is no replacement path yet | [Fabric Updates Blog](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/retiring-the-fabric-data-agent-custom-tool-in-microsoft-foundry-move-to-fabric-i/5374418) |
| ⚠️ 2026-11-15 | Dataverse | Dataverse for Teams: no new environments can be created (suspension Sep 15, 2027; decommissioning Oct 30, 2027) | Deprecation | Upgrade Dataverse for Teams environments to full Dataverse environments. | Not stated – verify | [Important changes coming](https://learn.microsoft.com/en-us/power-platform/important-changes-coming) |
| ⚠️ 2026-11-15 → 2026-12-15 → 2027-01-15 | Power Apps / Power Platform | Unmanaged developer environments and the Power Apps Developer Plan: creation ends 11-15, environments suspended 12-15, deleted 01-15 | Deprecation → deletion | Turn on Managed Environments before December 15, 2026, or move solutions to a sandbox. | Not stated – verify | [Important changes coming](https://learn.microsoft.com/en-us/power-platform/important-changes-coming) |
| ⚠️ 2026-11-15 | Azure OpenAI | codex-mini (2025-05-16) | Model retirement | No replacement listed; evaluate newer GA models. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| ⚠️ 2026-11-17 → 2027-01-12 | Azure OpenAI | gpt-chat-latest preview versions 2026-05-05 / 06-24 (11-17), 05-28 (12-08), 08-06 (2027-01-12) | Model retirement | Move to a newer gpt-chat-latest version. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| ⚠️ 2026-11-19 | Azure OpenAI | o1, o1-pro, o3, o3-deep-research, o3-pro (→ gpt-5.6-sol); o3-mini, o4-mini (→ gpt-5.6-terra) | Model retirement | Migrate to the listed replacement. | **Azure Government: o3-mini retires 2026-11-19 → gpt-5.6-terra** | [Commercial](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) · [Azure Gov](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov) |
| ⚠️ 2026-11-30 | Power Apps | Power Apps Vibe (vibe.powerapps.com) | Retirement | Rebuild in Copilot Cowork or Copilot Studio; an automated migration option is planned. | Not stated – verify (Cowork is Frontier-only) | [Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/vibe/migrate-apps) |
| ⚠️ 2026-11-30 | Microsoft 365 Copilot | App Builder agent | Retirement | Rebuild in Copilot Cowork (Frontier) or Apps in Copilot Studio (Preview). | Not stated – verify | [Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-365/copilot/app-builder-migration) |
| ⚠️ 2026-11-15 → 2027-04-16 | Microsoft Foundry (partner models) | Claude 4.5/4.6/4.7 models, DeepSeek-V4-Flash, Ministral-3B, mistral-medium-2505, mistral-small-2503, Cohere-parse-v5, Kimi-K2.5/K2.6, grok-4-20 and others on staggered dates | Model retirement | Use the listed replacement, e.g. claude-sonnet-5-5, ministral-4b, mistral-medium-3-5. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| ⚠️ 2026-12-09 | Azure OpenAI | gpt-4o 2024-05-13 | Model retirement | Migrate to gpt-5.6-sol. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| ⚠️ 2026-12-15 / 2026-12-16 | Azure OpenAI | tts, tts-hd, whisper (001), gpt-realtime-mini 2025-12-15 (12-15); gpt-image-1.5 (12-16) | Model retirement | Move to newer audio and image models. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| 2027-01-31 | Microsoft Fabric | Ontology (Preview) old experience | Retirement | Copy items into the new ontology experience ("Migrate from old experience"). | Not applicable: Fabric IQ isn't supported in GCC High | [Microsoft Learn](https://learn.microsoft.com/en-us/fabric/iq/ontology/overview) |
| February 2027 | Power BI | Q&A in reports, dashboards, mobile and embedded, plus Q&A Setup (moved from December 2026) | Retirement | Copilot for Power BI; Q&A Setup → Prep Data for AI. No Copilot replacement is planned for embedded PaaS Q&A. | Microsoft's blog says Copilot doesn't yet support sovereign clouds, so GCC, GCC High and DoD may lose Q&A with no replacement – verify | [Power BI Blog](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/power-bi-qa-retirement-reminder-february-2027-timeline-update/5365841) |
| 2027-02-09 → 2027-04-07 | Azure OpenAI | gpt-5, gpt-5-mini, gpt-5-nano (02-09); gpt-audio, gpt-realtime (03-02); gpt-5-codex (03-17); gpt-audio-mini, gpt-realtime-mini 2025-10-06 (04-06); gpt-5-pro, gpt-image-1-mini (04-07) | Model retirement | Evaluate newer GA versions. | Not on the Azure Government schedule | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| 2027-03-01 | SharePoint | Classic publishing sites: creation and feature activation disabled; new tenants also lose classic page creation and custom scripts (read-only Oct 1, 2028) | Deprecation | Modernize to modern pages with PnP transformation or the Page Migration Agent. | **Explicitly applies to GCC, GCC High and DoD** | [Microsoft Learn](https://learn.microsoft.com/en-us/sharepoint/classic-user-created-page-deprecation) |
| 2027-04-01 / 2027-04-14 | Azure OpenAI | Fine-tuning training for gpt-4o 2024-08-06 and gpt-4o-mini (no earlier than 04-01) and the gpt-4.1 family (no earlier than 04-14); deployments run until Oct 2027 | Retirement (training) | Fine-tune newer base models. | Not stated – verify | [Model retirement schedule](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) |
| 2027-04-14 / 2027-04-15 | Azure OpenAI | gpt-4.1, gpt-4.1-mini, gpt-4.1-nano, gpt-4o 2024-08-06 and 2024-11-20, gpt-4o-mini (04-14); gpt-4o-transcribe-diarize (04-15) | Model retirement | Migrate to gpt-5.1 where listed. | **Azure Government: gpt-4.1, gpt-4.1-mini and gpt-4o 2024-11-20 retire 2027-04-14 → gpt-5.1. Gov only: text-embedding-3-large, 3-small and ada-002 v2 retire 2027-04-15 (Commercial: 2028-02-09).** | [Commercial](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule) · [Azure Gov](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule-gov) |

## Power BI

### Roadmap & U.S. Sovereign Cloud Outlook

- **Gantt chart visual** – Public preview – Q4 2026 (shipped in Preview Oct 15) – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)
- **List slicer with dropdown mode** – GA – Q4 2026 (Preview shipped Oct 15) – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)
- **Explore** – GA – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)
- **TMDL View in the Web** – GA – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)
- **Organizational themes for Power BI reports** – GA – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)
- **Quick visual edits (formerly on-object interaction)** – GA – Q1 2027 – [source](https://roadmap.fabric.microsoft.com/?product=powerbi)

**U.S. sovereign cloud callouts:**
- **Goal:** Microsoft aims to make features available in government clouds within 30 days of GA, except where dependencies block them. [source](https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-government-us-overview)
- **Licensing:**
  - **GCC:** Azure Embedded (F SKU) capacities aren't supported; only EM and P SKUs are.
  - **GCC High / DoD:** F SKUs are supported.
  - **All U.S. government clouds:** there is no Free license.
- **Feature gaps:**
  - Azure Maps is not available in GCC, GCC High or DoD.
  - Autoscale and bring-your-own storage (ADLS Gen2) are not available in GCC.
  - Large models, Dataflows DirectQuery and the Dataflows SQL compute engine are "Not planned" for DoD.
- **Power BI Copilot:** not supported in GCC High. [source](https://learn.microsoft.com/en-us/fabric/enterprise/us-government-community-cloud-high)
- **Service URLs:**
  - GCC: `app.powerbigov.us`
  - GCC High: `app.high.powerbigov.us`
  - DoD: `app.mil.powerbigov.us`

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Power BI October 2026 Feature Summary](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/power-bi-october-2026-feature-summary/5374650) | Oct 15 – Monthly roundup with GA and Preview items. GA: building reports with custom visuals using skills for Fabric, and plot area background color. Preview: Gantt chart and a list slicer dropdown. Semantic models now report CU usage continuously during long-running operations. | Not stated – Commercial assumed | Not announced. Power BI Copilot features: GCC High not available per Learn. |
| 📝 [Databricks ADBC connector for Power BI and Microsoft Fabric (Generally Available)](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/databricks-adbc-connector-for-power-bi-and-microsoft-fabric-generally-available/5369591) | Oct 15 – **GA.** The Databricks and Azure Databricks connectors now use the Apache Arrow ADBC driver instead of the legacy Simba ODBC driver. The Power BI service moves to ADBC through Q1 2027, so plan the driver change. (also in: Microsoft Fabric) | Not stated – Commercial assumed | Not announced |
| 📝 [Fabric Data Warehouse integration with Fabric User Data Functions (Preview)](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/fabric-data-warehouse-integration-with-fabric-user-data-functions-preview/5375137) | Oct 19 – **Preview.** Fabric Data Warehouse now integrates with Fabric User Data Functions. It was posted on the Power BI Updates blog. (also in: Microsoft Fabric) | Not stated – Commercial assumed | Not announced |

## Power Platform

### Roadmap & U.S. Sovereign Cloud Outlook

- **App Builder agent and Power Apps Vibe (vibe.powerapps.com)** – Retirement – apps stay accessible "until November 30, 2026," and an automated migration option is planned for mid-October – [source](https://learn.microsoft.com/en-us/power-apps/vibe/migrate-apps)
- **Create and delete websites using Power Platform CLI (Power Pages)** – GA – Aug 2026 – [source](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-pages/planned-features)
- **Control Power Pages components using client APIs** – GA – Aug 2026 – [source](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-pages/planned-features)
- **Roadmap source moving:** Power Platform release plans now publish to the AI at Work roadmap. [source](https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/08/25/one-always-on-roadmap-dynamics-365-power-platform-and-dataverse-join-the-ai-at-work-roadmap/)

**U.S. sovereign cloud callouts:**
- ⚠️ **MC1505609 (Oct 12), App Builder / Vibe retirement:** Microsoft hasn't stated a government cloud scope. Learn lists Vibe in the US, Australia, Asia and India regions only. Check your GCC tenant's Message Center. [source](https://learn.microsoft.com/en-us/power-apps/vibe/overview)
- **Authorizations:** GCC is FedRAMP High and DoD DISA IL2. GCC High is aligned to IL4 (DISA P-ATO), and DoD to IL5 (DISA P-ATO). [source](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-us-government)
- **Licensing:**
  - Government per-app and per-user plans are monthly subscriptions.
  - The CSP channel is not available for GCC High.
  - DoD is open to DoD entities only.
- **Power Pages:** GA in GCC, GCC High and DoD since Nov 15, 2022, with separate maker URLs. [source](https://www.microsoft.com/en-us/power-platform/blog/power-pages/microsoft-power-pages-is-generally-available-in-us-government-clouds/)

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Go multilingual with the Power Pages plugin](https://www.microsoft.com/en-us/power-platform/blog/power-pages/go-multilingual-with-the-power-pages-plugin/) | Oct 14 – Power Pages: a new /add-localization skill builds multilingual SPA sites in 43+ languages. It doesn't add languages to Dataverse or translate Dataverse records. GA/Preview not stated. | Not stated – Commercial assumed | Not announced (Power Pages itself is GA in GCC, GCC High and DoD) |
| 📝 [Create Power Pages sites in minutes with SPA templates](https://www.microsoft.com/en-us/power-platform/blog/power-pages/create-power-pages-sites-in-minutes-with-spa-templates/) | Oct 13 – Power Pages: SPA template support in the Power Pages plugin for GitHub Copilot CLI and Claude Code. /create-site imports the Dataverse solution, uploads the site and applies sample data. GA/Preview not stated. | Not stated – Commercial assumed | Not announced (Power Pages itself is GA in GCC, GCC High and DoD) |
| ▶️ [Copilot, Microsoft 365 & Power Platform community call – 15th of October, 2026](https://www.youtube.com/watch?v=Y0aqZYK_lQM) | ~Oct 15–16 – Microsoft Community Learning. Weekly community call with Copilot, Microsoft 365 and Power Platform news and community demos. (also in: SharePoint) | N/A (community call) | N/A |

## SharePoint

### Roadmap & U.S. Sovereign Cloud Outlook

- **Copilot in SharePoint** – GA – "General availability begins rolling out on September 30, 2026" – [source](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-get-started)
- **Preview PowerShell availability controls (KnowledgeAgentScope, etc.)** – Retirement – settings are honored until November 1, 2026 – [source](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-get-started)
- **Advanced work in SharePoint (Copilot Credits / usage-based billing)** – GA – with Copilot in SharePoint GA – [source](https://learn.microsoft.com/en-us/sharepoint/copilot-in-sharepoint-get-started)
- **SharePoint Knowledge Base** – Preview (Frontier) – no date published – [source](https://support.microsoft.com/en-us/sharepoint/knowledge-base/create-update-knowledge-base-with-copilot)

**U.S. sovereign cloud callouts:**
- **Copilot in SharePoint:** Microsoft Learn says GCC, GCC High and DoD "don't currently support Copilot in SharePoint" (updated 09/25/2026). The older Copilot service description (08/05/2026) still shows partial support, so treat Learn as current. [source](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot)
- **SharePoint Advanced Management with Copilot licenses:** oversharing reports, Restricted Content Discovery and site access reviews are available in GCC, GCC High and DoD. [source](https://learn.microsoft.com/en-us/sharepoint/sharepoint-advanced-management-features-copilot-license)
- **External sharing:** GCC High users can share only with other GCC High organizations. [source](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/gcc-high-and-dod)
- **Compliance:** Office 365 GCC is FedRAMP High. GCC High and DoD meet the DoD SRG, DFARS and ITAR. [source](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/office-365-us-government)

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Introducing a team knowledge base, curated by Copilot and agents](https://techcommunity.microsoft.com/blog/spblog/introducing-a-team-knowledge-base-curated-by-copilot-and-agents/4564203) | Oct 14 – **Preview (Frontier).** Copilot and agents in the Copilot app, Teams and SharePoint can create, curate and reference a team knowledge base stored in SharePoint. It's only for users enabled for usage-based billing, and billing terms may change before GA. (also in: Copilot) | Not stated – Commercial assumed | Not announced. Related Copilot in SharePoint: GCC / GCC High / DoD not supported per Learn. |
| 📝 [Building Permission-Aware Hosted Agents for SharePoint in Foundry Agent Service](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/building-permission-aware-hosted-agents-for-sharepoint-in-foundry-agent-service/4562526) | Oct 12 – **Guidance.** How to build Foundry-hosted agents that respect SharePoint permissions. (also in: Azure OpenAI) | Not stated – Commercial assumed | Not announced |
| ▶️ [Copilot, Microsoft 365 & Power Platform community call – 15th of October, 2026](https://www.youtube.com/watch?v=Y0aqZYK_lQM) | ~Oct 15–16 – Microsoft Community Learning. The agenda included SPFx updates and demos on SharePoint dashboards, Terraform for SharePoint Online and a "SharePoint Skills Factory." (also in: Power Platform) | N/A (community call) | N/A |

## Microsoft Fabric

### Roadmap & U.S. Sovereign Cloud Outlook

- **Fabric Capacity Overage** – GA – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=administration%2Cgovernanceandsecurity)
- **Surge Protection V2 (Workspace-level)** – GA – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=administration%2Cgovernanceandsecurity)
- **Capacity Metrics app (redesign)** – Public preview – Q4 2026 (shipped Oct 12) – [source](https://roadmap.fabric.microsoft.com/?product=administration%2Cgovernanceandsecurity)
- **Capacity Insights & Actions (in-product observability)** – Public preview – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=administration%2Cgovernanceandsecurity)
- **Fabric Chargeback app (tags support)** – Public preview – Q4 2026 – [source](https://roadmap.fabric.microsoft.com/?product=administration%2Cgovernanceandsecurity)

**U.S. sovereign cloud callouts:**
- **Fabric in GCC High:** GA from Oct 1, 2026 (public preview started Sept 2), in US Gov Virginia and US Gov Texas. [source](https://www.microsoft.com/en-us/microsoft-cloud/blog/us-government/2026/09/02/microsoft-fabric-in-gcc-high-building-the-data-foundation-for-ai/)
- **Not supported in GCC High** [source](https://learn.microsoft.com/en-us/fabric/enterprise/us-government-community-cloud-high):
  - Security and networking: customer-managed keys, outbound access protection, workspace identity, workspace monitoring, Workspace Private Link (tenant-level private link only)
  - Fabric IQ items: graph model, graph queryset, operations agent, ontology
  - Data access: mirroring sources other than Azure SQL Database, and shortcuts beyond Azure Blob Storage and ADLS Gen2
  - Power BI Copilot
- **Licensing in GCC High:** there are no free licenses or trials. A Power BI Pro license is needed to create Fabric items, plus a Fabric capacity for workloads other than Power BI.
- **FedRAMP High for Fabric in GCC High:** artifacts are submitted and still under government review. Fabric is already FedRAMP High authorized in commercial.
- ⚠️ **This week:** My workspace governance GA applies to government clouds. The data agent custom tool retirement (11/6/2026) points to Fabric IQ, which GCC High doesn't support.
- **Other clouds:** Fabric (beyond Power BI) has no published availability for GCC, DoD or Azure Government.

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Retiring the Fabric data agent custom tool in Microsoft Foundry: move to Fabric IQ](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/retiring-the-fabric-data-agent-custom-tool-in-microsoft-foundry-move-to-fabric-i/5374418) ⚠️ | Oct 19 – **Retirement.** The Fabric data agent custom tool integration in Microsoft Foundry stops being supported starting 11/6/2026. The replacement is the Fabric IQ (OneLake Catalog) tool, which is in Preview. (also in: Azure OpenAI) | Not stated – Commercial assumed | GCC High: Fabric IQ items not supported per Learn, so there is no replacement path yet. |
| 📝 [Fabric Data Warehouse integration with Fabric User Data Functions (Preview)](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/fabric-data-warehouse-integration-with-fabric-user-data-functions-preview/5375137) | Oct 19 – **Preview.** Fabric Data Warehouse now integrates with Fabric User Data Functions. (also in: Power BI) | Not stated – Commercial assumed | Not announced |
| 📝 [Fabric Policies: Granular governance at scale (Preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-policies-granular-governance-at-scale-preview/5368144) | Oct 15 – **Preview.** Admins can centrally define and enforce granular governance rules across Fabric. | Not stated – Commercial assumed | Not announced (not on the GCC High feature list) |
| 📝 [Databricks ADBC connector for Power BI and Microsoft Fabric (Generally Available)](https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/databricks-adbc-connector-for-power-bi-and-microsoft-fabric-generally-available/5369591) | Oct 15 – **GA.** The ADBC driver replaces the legacy Simba ODBC driver for the Databricks connectors. The service moves to ADBC through Q1 2027. (also in: Power BI) | Not stated – Commercial assumed | Not announced |
| 📝 [Workspace-level private link for SQL database in Microsoft Fabric (Preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/workspace-level-private-link-for-sql-database-in-microsoft-fabric-preview/5323519) | Oct 14 – **Preview.** Workspace-level private link for SQL database, a more targeted way to secure inbound access to sensitive data workloads. | Not stated – Commercial assumed | GCC High: Not available per Learn (Workspace Private Link isn't supported). |
| 📝 [My workspace governance improvements (Generally Available)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/my-workspace-governance-improvements-generally-available/5368442) ⚠️ | Oct 13 – **GA.** Enhanced tenant administrator controls for governing My workspace. | Commercial and government clouds | Available: "also available in government clouds" per the post |
| 📝 [Fabric App functions to use secure server-side custom logic (Preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/fabric-app-functions-to-use-secure-server-side-custom-logic-preview/5368691) | Oct 13 – **Preview.** TypeScript functions that run server-side inside a Fabric app, so custom logic stays secure. | Not stated – Commercial assumed | Not announced (Fabric Apps isn't on the GCC High list) |
| 📝 [File Data Ingestion with Materialized Lake Views in Microsoft Fabric (Preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/file-data-ingestion-with-materialized-lake-views-in-microsoft-fabric-preview/5367801) | Oct 13 – **Preview.** Ingest CSV and Parquet files from OneLake straight into a materialized lake view, so the bronze layer is part of the same declarative medallion pipeline. | Not stated – Commercial assumed | Not announced |
| 📝 [Custom SQL Pools in Fabric Data Warehouse (Generally Available)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/custom-sql-pools-in-fabric-data-warehouse-generally-available/5368292) | Oct 12 – **GA.** Custom SQL Pools and statement type classification give admins more control over warehouse compute allocation. | Not stated – Commercial assumed | Not announced for this feature (Warehouse itself is available in GCC High) |
| 📝 [A new look and new capabilities in the Capacity Metrics App (Preview)](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/a-new-look-and-new-capabilities-in-the-capacity-metrics-app-preview/5374114) | Oct 12 – **Preview.** The redesigned Capacity Metrics app adds new visuals and metrics across the health, compute and storage pages, plus better navigation. The GA app stays available alongside it. | Not stated – Commercial assumed | Not announced |
| 📝 [What's new for Business Events and real-time events in Microsoft Fabric](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/what%E2%80%99s-new-for-business-events-and-real-time-events-in-microsoft-fabric/5367401) | Oct 12 – **GA, plus Preview items.** Business Events is now GA, with new Fabric Events capabilities for a single event-driven model across business and platform operations. | Not stated – Commercial assumed | Not announced for Business Events (Real-Time Hub is available in GCC High) |

## Copilot

### Roadmap & U.S. Sovereign Cloud Outlook

- **Copilot Studio agent accounts, business process memory, triggers in the GitHub Copilot harness** – Preview (Frontier) – rolling out now; refinements "over the coming months" – [source](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/)
- **Copilot Studio extract node for workflows** – Preview – September 2026 – [source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
- **Copilot Studio content-safety test method** – GA – September 2026 – [source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)
- **Microsoft 365 G7 (includes Copilot) for GCC** – GA in GCC as of October 1, 2026, with more purchasing options from November 1 – [source](https://www.microsoft.com/en-us/microsoft-cloud/blog/us-government/2026/09/15/introducing-microsoft-365-g7-intelligence-trust-for-the-mission-ahead/)

**U.S. sovereign cloud callouts:**
- **Availability:** Microsoft 365 Copilot is available in GCC, GCC High and DoD. Releases typically arrive later than in Commercial. [source](https://learn.microsoft.com/en-us/microsoft-365/copilot/gov-overview)
- **Not available in any U.S. government cloud:** Word/Excel/PowerPoint Agents, Scheduled Prompts and Edit with Copilot. [source](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot)
- **Gaps in specific clouds:**
  - Teams: Copilot in Teams is not available in GCC High.
  - Power Platform connectors: not available in GCC High or DoD.
  - Agents: declarative agents and Agent Builder are not available in DoD.
  - Web grounding: off by default in government clouds.
- **Copilot Studio US Government** [source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing-gcc):
  - Authorizations: GCC is FedRAMP High. GCC High is aligned to IL4 (DISA P-ATO). The page lists no DoD offering.
  - Licensing: the same as public cloud.
  - Triggers / autonomous agents: marked "No" for GCC and GCC High, so this week's Copilot Studio Frontier features won't apply there yet.
- **Copilot Studio models:** ChatGPT-5 and the Claude models went GA globally "excluding GCC environments." [source](https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new)

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Transform your storytelling with interactive slides in PowerPoint](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/transform-your-storytelling-with-interactive-slides-in-powerpoint/4564287) | Oct 19 – **Rolling out.** The "Create interactive slide" Copilot skill builds summary, timeline, dashboard and comparison slides from a prompt. It's rolling out to PowerPoint for Windows, Mac and web and should be complete by the end of October. | Not stated – Commercial assumed | Not announced |
| 📝 [Introducing Microsoft Copilot for legal](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-microsoft-copilot-for-legal/4564246) | Oct 15 – **GA.** 20+ purpose-built legal skills plus partner plugins (Harvey, iManage, Docusign and others). Defined-terms navigation in Word comes to Preview later this month. | "Worldwide" per the post – Commercial assumed | Not announced. Note: Word/Excel/PowerPoint Agents are not available in U.S. government clouds. |
| 📝 [Delegate shared business processes to agents that are more persistent and proactive with Microsoft Copilot Studio](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/delegate-shared-business-processes-to-agents-that-are-more-persistent-and-proactive-with-microsoft-copilot-studio/) | Oct 15 – **Preview (Frontier).** Agent accounts and business process memory let users hand real work to persistent agents. It also adds triggers in the GitHub Copilot harness. More admin controls are planned. | Not stated – Commercial assumed | GCC / GCC High: triggers and autonomous agents not available per Learn. DoD: Copilot Studio not listed. |
| 📝 [Building Trust-Aware Controls for AI: Differentiated handling of untrusted content](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/building-trust-aware-controls-for-ai-differentiated-handling-of-untrusted-conten/4562160) | Oct 13 – **New security layer.** Microsoft 365 Copilot can now isolate untrusted content to defend against indirect prompt injection. Admins turn it on through the Outlook untrusted-sender setting (see the CVE-2026-55145 guidance). | Not stated – the post says it "may vary by release status and tenant" | Not announced |
| 📝 [Introducing a team knowledge base, curated by Copilot and agents](https://techcommunity.microsoft.com/blog/spblog/introducing-a-team-knowledge-base-curated-by-copilot-and-agents/4564203) | Oct 14 – **Preview (Frontier).** A SharePoint knowledge base curated by Copilot and agents. (also in: SharePoint) | Not stated – Commercial assumed | Not announced |
| ▶️ [Introducing Copilot for legal](https://www.youtube.com/watch?v=UiqHNdRkfWI) | ~Oct 15 – Microsoft Copilot channel. Overview of the new legal skills for drafting, review and redlining in Word and multi-step legal work in Cowork. | "Worldwide" – Commercial assumed | Not announced |

## Azure OpenAI

### Roadmap & U.S. Sovereign Cloud Outlook

- **GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna** – GA – released Sep 3, Sep 29 and Sep 22; roundup published Oct 15 – [source](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-september-2026/)
- **o1, o1-pro, o3, o3-deep-research, o3-pro (replaced by gpt-5.6-sol); o3-mini, o4-mini (replaced by gpt-5.6-terra)** – Retirement – 2026-11-19 – [source](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule)
- **gpt-4o 2024-05-13** – Retirement – 2026-12-09 – [source](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule)
- **gpt-4o 2024-11-20, gpt-4o-mini, gpt-4.1 / 4.1-mini / 4.1-nano** – Retirement – 2027-04-14 – [source](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule)
- **gpt-chat-latest 2026-10-07** – Preview – retires 2027-05-18 – [source](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule)

**U.S. sovereign cloud callouts:**
- **Azure Government models:** gpt-5.6-sol, gpt-5.6-terra and gpt-5.6-luna; gpt-5.1; gpt-4.1 and gpt-4.1-mini; o3-mini; gpt-4o (2024-11-20); and the text-embedding models. [source](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-gov)
- **Regions and deployment:** usgovarizona and usgovvirginia. GPT-5.6 is offered as Data Zone Standard or Provisioned only.
- **Gaps vs Commercial:** the GPT-6 family, gpt-chat-latest, GPT-5.2 through 5.5, gpt-4.1-nano, and the image, realtime and audio models are not offered in Azure Government.
- **Retirement exposure:** Azure Government runs o3-mini (commercial retirement 2026-11-19) and gpt-4o / gpt-4.1 (2027-04-14). Microsoft says Gov retirement dates may be earlier or later than Commercial, and none are published separately.
- **Foundry Agent Service:** available in Azure Government. [source](https://devblogs.microsoft.com/azuregov/advancing-ai-innovation-in-azure-government/)
- **Authorizations:** Azure OpenAI is FedRAMP High, IL2, IL4, IL5 and IL6. The Microsoft Foundry portal is FedRAMP High and IL2 only. [source](https://learn.microsoft.com/en-us/azure/azure-government/compliance/azure-services-in-fedramp-auditscope)
- **Secret / Top Secret:** GPT-5.2 is the latest announced model (Jan 15, 2026). Nothing new this week.

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Now in Foundry: Meta Muse Spark Open, NVIDIA Nemotron 3.5 Super VL, and Reflection Beam](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/now-in-foundry-meta-muse-spark-open-nvidia-nemotron-3-5-super-vl-and-reflection-/4565899) | Oct 19 – **Catalog update.** New third-party models in the Foundry catalog: Meta Muse Spark Open, NVIDIA Nemotron 3.5 Super VL and Reflection Beam. These are not Azure OpenAI models. | Not stated – Commercial assumed | Not announced |
| 📝 [Designing for sovereign AI: A shared foundation from edge to cloud](https://azure.microsoft.com/en-us/blog/designing-for-sovereign-ai-a-shared-foundation-from-edge-to-cloud/) | Oct 19 – **Guidance.** A Microsoft and Intel post on sovereign AI architecture built on Azure Local, with Foundry Local running inference in customer-controlled environments. | Azure Local / customer-controlled | No Azure Government, Secret or Top Secret announcement |
| 📝 [Retiring the Fabric data agent custom tool in Microsoft Foundry: move to Fabric IQ](https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/retiring-the-fabric-data-agent-custom-tool-in-microsoft-foundry-move-to-fabric-i/5374418) ⚠️ | Oct 19 – **Retirement 11/6/2026.** Foundry agents that use the Fabric data agent custom tool must move to the Fabric IQ tool, which is in Preview. (also in: Microsoft Fabric) | Not stated – Commercial assumed | Fabric IQ is not supported in GCC High |
| 📝 [Information Extraction with Low-Inference-Cost Models: 85% F1 Gain via Foundry Interactive Training](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/information-extraction-with-low-inference-cost-models-85-f1-gain-via-foundry-int/4563661) | Oct 16 – **Guidance; interactive training is in Preview.** Fine-tuning gpt-oss-20b and gpt-oss-120b as lower-cost alternatives to frontier models for document extraction. (also in: Azure AI Document Intelligence) | Not stated – Commercial assumed | Not announced |
| 📝 [What's new in Microsoft Foundry \| September 2026](https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-september-2026/) | Oct 15 – **GA, Preview and Retirement.** GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna are GA. Routines, Tool Search and A2A are GA. Insights is in Preview. A gpt-chat-latest snapshot is retiring, so check pinned versions. | Azure Commercial (Global and US/EU/APAC Data Zones) | Azure Gov: GPT-6 not available (the Gov list tops out at GPT-5.6) |
| 📝 [GPT-chat-latest gets more intelligent, interactive, and personal in Microsoft Foundry](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/gpt-chat-latest-gets-more-intelligent-interactive-and-personal-in-microsoft-foun/4564574) | Oct 14 – **Preview.** The gpt-chat-latest update (2026-10-07) brings GPT-6-level intelligence, interactive charts and answers that start streaming before they're complete, with no redeploy needed. | Not stated – Commercial assumed | Azure Gov: Not available (not on the Gov model list) |
| 📝 [Which Reflection Model Should Power your Agent Optimizer?](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/which-reflection-model-should-power-your-agent-optimizer/4562671) | Oct 13 – **Guidance.** How to choose a reflection model for Agent Optimizer in Foundry Agent Service. | Not stated – Commercial assumed | Not announced |
| 📝 [Delivering Agent Skills Over MCP](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/delivering-agent-skills-over-mcp/4562722) | Oct 12 – **Guidance.** How to deliver agent skills over Model Context Protocol in Foundry Agent Service. | Not stated – Commercial assumed | Not announced |
| 📝 [Building Permission-Aware Hosted Agents for SharePoint in Foundry Agent Service](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/building-permission-aware-hosted-agents-for-sharepoint-in-foundry-agent-service/4562526) | Oct 12 – **Guidance.** Hosted agents that respect SharePoint permissions. (also in: SharePoint) | Not stated – Commercial assumed | Not announced |

## Azure AI Document Intelligence

### Roadmap & U.S. Sovereign Cloud Outlook

- **REST API v2.0** – Retirement – retired 31 August 2026 – [source](https://azure.microsoft.com/en-gb/updates?id=retirement-azure-ai-document-intelligence-v20-api-will-be-retired-on-31-august-2026)
- **REST API v2.1** – End of support – September 15, 2027 – [source](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/whats-new?view=doc-intel-4.0.0)
- **REST API 2022-08-31 (v3.0)** – End of support – March 30, 2029 – [source](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/whats-new?view=doc-intel-4.0.0)
- **v4.0 (2024-11-30)** – GA – recommended for all new development – [source](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/whats-new?view=doc-intel-4.0.0)
- **Content Understanding 2.0 with Advanced Contextualization** – Preview – Oct 13, 2026 – [source](https://devblogs.microsoft.com/foundry/more-than-a-schema-content-understanding-prebuilt-analyzers/)

**U.S. sovereign cloud callouts:**
- **Authorizations:** Document Intelligence is FedRAMP High, IL2, IL4 and IL5 in Azure Government. It is not listed for IL6. [source](https://learn.microsoft.com/en-us/azure/azure-government/compliance/azure-services-in-fedramp-auditscope)
- **Endpoint:** `cognitiveservices.azure.us`. Microsoft lists no feature differences from Commercial. [source](https://learn.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure)
- **Content Understanding:** not in the Azure Government audit scope table, so treat it as not authorized for Gov workloads until Microsoft says otherwise.
- **Retirement dates:** Microsoft hasn't published Gov-specific API retirement dates. Assume the commercial v2.1 and v3.0 dates, but they're unconfirmed for Azure Government.

| Title | Description | Cloud Supported | U.S. Sovereign Cloud Availability |
|---|---|---|---|
| 📝 [Information Extraction with Low-Inference-Cost Models: 85% F1 Gain via Foundry Interactive Training](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/information-extraction-with-low-inference-cost-models-85-f1-gain-via-foundry-int/4563661) | Oct 16 – **Guidance.** Fine-tuned low-cost models compared against frontier models for document field extraction. (also in: Azure OpenAI) | Not stated – Commercial assumed | Not announced |
| 📝 [From extraction to action: Using grounding and confidence to build reliable document workflows](https://devblogs.microsoft.com/foundry/content-understanding-confidence-grounding-hitl/) | Oct 14 – **Guidance.** Content Understanding (built on Document Intelligence) uses grounding and field-level confidence scores to decide what goes to human review. The latest release cuts token use by up to 28% and improves confidence accuracy by up to 14%. | Not stated – Commercial assumed | Not announced (Content Understanding isn't in the Azure Gov audit scope) |
| 📝 [Azure Content Understanding Prebuilt Analyzers: packaging domain knowledge for document AI](https://devblogs.microsoft.com/foundry/more-than-a-schema-content-understanding-prebuilt-analyzers/) | Oct 13 – **Preview benchmark.** On U.S. tax forms, CU 2.0 with Advanced Contextualization scored 2.61 points higher F1 than Document Intelligence, at about 20% lower modeled cost and about 10% higher latency. | Not stated – Commercial assumed | Not announced |

_No new content this week: Power Automate, Power Apps, Dataverse, Autopilot (formerly Microsoft Scout)._

---
_Coverage window: October 12, 2026 – October 19, 2026. Sources: official public Microsoft blogs, roadmaps, Microsoft Learn and Microsoft YouTube channels._
