# Microsoft Cloud sites and authentication endpoints

This reference maps the public Microsoft cloud entry points for Power BI, Power Apps, Power Platform admin center, Power Automate, SharePoint, Microsoft Copilot, Copilot Studio, Microsoft 365, and Azure across commercial, US government, classified, and other sovereign clouds.

> Endpoint lists change. For firewall allow lists and compliance work, use the Microsoft-published endpoint JSON feeds or service-specific documentation rather than copying this file as a static allow list.

## Cloud correlation model

| Cloud | Microsoft 365 cloud | Azure / hosting cloud | Identity authority | Microsoft Graph | Notes |
| --- | --- | --- | --- | --- | --- |
| Commercial / Worldwide | Worldwide | Azure public | `https://login.microsoftonline.com` | `https://graph.microsoft.com` | Default commercial cloud. |
| GCC | Worldwide endpoints, including GCC | Service-dependent. Power Platform and Power BI government services run in US government-aligned infrastructure, but GCC identity uses public Microsoft Entra ID. | `https://login.microsoftonline.com` | `https://graph.microsoft.com` | GCC is the main exception: many app URLs are government-specific, but identity remains public Entra ID. |
| GCC High | Microsoft 365 US Government GCC High | Azure Government | `https://login.microsoftonline.us` | `https://graph.microsoft.us` | Uses Microsoft Entra Government. |
| DoD | Microsoft 365 US Government DoD | Azure Government / DoD IL5 regions | `https://login.microsoftonline.us` | `https://dod-graph.microsoft.us` | DoD-only service boundary. |
| Secret / classified | Microsoft classified clouds where available | Azure Government Secret / higher classified clouds | Not publicly documented | Not publicly documented | Public endpoint details are intentionally limited. Use the classified environment documentation and account team guidance. |
| China / 21Vianet | Microsoft 365 operated by 21Vianet | Azure China operated by 21Vianet | See China note below | `https://microsoftgraph.chinacloudapi.cn` | Operated locally by 21Vianet; services are subject to Chinese law. |
| Legacy Azure Germany | Retired / migrated | Azure Germany closed October 29, 2021 | Legacy only | Legacy only | Do not target for new deployments. |

**China identity note:** Microsoft docs list both `https://login.partner.microsoftonline.cn` and `https://login.chinacloudapi.cn` in national cloud contexts. Prefer SDK cloud metadata such as `AzureChinaCloud` / authority-host settings over hardcoding.

## Product site matrix

### Power BI

| Cloud | User portal | API / backend patterns |
| --- | --- | --- |
| Commercial | `https://app.powerbi.com` | `https://api.powerbi.com` |
| GCC | `https://app.powerbigov.us` | `api.powerbigov.us`, `*.analysis.usgovcloudapi.net`, `*.pbidedicated.usgovcloudapi.net` |
| GCC High | `https://app.high.powerbigov.us` | `api.high.powerbigov.us`, `*.high.analysis.usgovcloudapi.net`, `*.pbidedicated.usgovcloudapi.net` |
| DoD | `https://app.mil.powerbigov.us` | `api.mil.powerbigov.us`, `*.mil.analysis.usgovcloudapi.net`, `*.pbidedicated.usgovcloudapi.net` |
| Secret / classified | Not publicly documented | Use classified cloud documentation. |
| China / 21Vianet | Tenant-specific China service endpoint; commonly surfaced as the China Power BI service | Validate with 21Vianet tenant documentation and service endpoints. |

### Power Apps

| Cloud | Maker portal | Player / app runtime |
| --- | --- | --- |
| Commercial | `https://make.powerapps.com` | `https://apps.powerapps.com` |
| GCC | `https://make.gov.powerapps.us` | `https://play.apps.appsplatform.us` per Microsoft service URL table |
| GCC High | `https://make.high.powerapps.us` | `https://apps.high.powerapps.us` |
| DoD | `https://make.apps.appsplatform.us` | `https://play.apps.appsplatform.us` |
| Secret / classified | Not publicly documented | Use classified cloud documentation. |
| China / 21Vianet | Available through Microsoft Power Platform operated by 21Vianet | URLs and tenant access should be validated in the 21Vianet tenant. |

### Power Platform admin center

| Cloud | Admin center |
| --- | --- |
| Commercial | `https://admin.powerplatform.microsoft.com` |
| GCC | `https://gcc.admin.powerplatform.microsoft.us` |
| GCC High | `https://high.admin.powerplatform.microsoft.us` |
| DoD | `https://admin.appsplatform.us` |
| Secret / classified | Not publicly documented |
| China / 21Vianet | Available through Power Platform operated by 21Vianet; validate tenant-specific access URL. |

### Power Automate

| Cloud | Main portal | Maker portal | Connectors |
| --- | --- | --- | --- |
| Commercial | `https://flow.microsoft.com` | `https://make.powerautomate.com` | `https://flow.microsoft.com/connectors` |
| GCC | `https://gov.flow.microsoft.us` | `https://make.gov.powerautomate.us` | `https://gov.flow.microsoft.us/connectors` |
| GCC High | `https://high.flow.microsoft.us` | `https://make.high.powerautomate.us` | `https://high.flow.microsoft.us/connectors` |
| DoD | `https://flow.appsplatform.us` | `https://make.powerautomate.appsplatform.us` | `https://flow.appsplatform.us/connectors` |
| Secret / classified | Not publicly documented | Not publicly documented | Not publicly documented |
| China / 21Vianet | Available through Power Platform operated by 21Vianet | Validate tenant-specific access URL. | Validate tenant-specific access URL. |

### SharePoint Online and OneDrive

| Cloud | SharePoint site pattern | Admin / supporting endpoints | Identity / Graph correlation |
| --- | --- | --- | --- |
| Commercial | `https://{tenant}.sharepoint.com`, `https://{tenant}-my.sharepoint.com` | `https://{tenant}-admin.sharepoint.com`, Microsoft 365 admin center `https://admin.microsoft.com` | `login.microsoftonline.com`, `graph.microsoft.com` |
| GCC | Uses worldwide SharePoint Online endpoint patterns, including `*.sharepoint.com`, unless tenant-specific government guidance states otherwise. | Microsoft 365 Worldwide / GCC endpoint feed applies. | `login.microsoftonline.com`, `graph.microsoft.com` |
| GCC High | `https://{tenant}.sharepoint.us`, `https://{tenant}-my.sharepoint.us` | `https://{tenant}-admin.sharepoint.us`, plus `admin.onedrive.us` and `*.svc.ms` supporting endpoints | `login.microsoftonline.us`, `graph.microsoft.us` |
| DoD | `https://{tenant}.sharepoint-mil.us`, `https://{tenant}-my.sharepoint-mil.us`, `*.dps.mil` | DoD M365 endpoints, including `*.sharepoint-mil.us`, `*.dps.mil`, and `*.svc.ms` | `login.microsoftonline.us`, `dod-graph.microsoft.us` |
| Secret / classified | Not publicly documented | Not publicly documented | Use classified cloud documentation. |
| China / 21Vianet | `https://{tenant}.sharepoint.cn` and related `*.sharepoint.cn` endpoints | Microsoft 365 operated by 21Vianet endpoint feed applies. | China authority metadata, `microsoftgraph.chinacloudapi.cn` |

### Microsoft Copilot

| Cloud | User entry points | Admin / network notes | Identity / data boundary |
| --- | --- | --- | --- |
| Commercial | `https://m365copilot.com`, `https://copilot.cloud.microsoft`, `https://m365.cloud.microsoft/chat`, plus Copilot experiences in Microsoft 365 apps, Teams, Outlook, Edge, and Windows | Allow Microsoft 365 endpoints, Copilot endpoints, `*.cloud.microsoft`, and WSS connectivity to `*.office.com`, `*.cloud.microsoft`, and `copilot.cloud.microsoft`. Admin settings are in Microsoft 365 admin center > Copilot. | `login.microsoftonline.com`; Microsoft Graph and Work IQ grounding use the user's Microsoft 365 permissions. |
| GCC | Microsoft Copilot is available in GCC and operates within the GCC tenant. User entry points and feature availability can differ from commercial rollout timing. | Use Microsoft 365 Worldwide / GCC endpoint guidance plus Copilot network requirements. | `login.microsoftonline.com`; prompts, responses, and generated content remain within the government cloud tenant boundary. |
| GCC High | Microsoft Copilot is available in GCC High and operates within the GCC High tenant. | Use GCC High Microsoft 365 endpoint feed and Copilot government feature availability guidance. | `login.microsoftonline.us`; Graph grounding uses `graph.microsoft.us` where Graph is involved. |
| DoD | Microsoft Copilot is available in DoD and operates within the DoD tenant. | Use DoD Microsoft 365 endpoint feed and Copilot government feature availability guidance. | `login.microsoftonline.us`; Graph grounding uses `dod-graph.microsoft.us` where Graph is involved. |
| Secret / classified | Not publicly documented | Use classified cloud documentation and account team guidance. | Not publicly documented. |
| China / 21Vianet | Validate availability and entry points through Microsoft 365 operated by 21Vianet documentation and tenant experience. | Use China / 21Vianet endpoint feed where supported. | China authority metadata; Graph uses `microsoftgraph.chinacloudapi.cn` where Graph is involved. |

### Copilot Studio

| Cloud | Authoring portal | API / related endpoints | Identity / hosting notes |
| --- | --- | --- | --- |
| Commercial | `https://copilotstudio.microsoft.com` | `api.powerva.microsoft.com`, Power Automate `flow.microsoft.com`, Power Apps `make.powerapps.com`, Power Platform admin center `admin.powerplatform.microsoft.com` | `login.microsoftonline.com`; runs as part of Power Platform and relies on Microsoft Entra ID, Dataverse, connectors, and Power Automate. |
| GCC | `https://gcc.powerva.microsoft.us` | `gcc.api.powerva.microsoft.us`, `gov.flow.microsoft.us`, `make.gov.powerapps.us`, `gcc.admin.powerplatform.microsoft.us` | GCC uses public Microsoft Entra ID: `login.microsoftonline.com`. Customer content is stored in the United States. |
| GCC High | `https://high.powerva.microsoft.us` | `high.api.powerva.microsoft.us`, `high.flow.microsoft.us`, `make.high.powerapps.us`, `high.admin.powerplatform.microsoft.us` | Uses Microsoft Entra Government: `login.microsoftonline.us`; deployed to Azure Government and aligned to GCC High isolation requirements. |
| DoD | Not listed in the Copilot Studio US Government service URL table. | Not listed in the Copilot Studio US Government service URL table. | Validate DoD availability with current product and tenant documentation before planning deployment. |
| Secret / classified | Not publicly documented | Not publicly documented | Use classified cloud documentation. |
| China / 21Vianet | Validate availability through Power Platform operated by 21Vianet and Copilot Studio licensing documentation. | Validate tenant-specific endpoints. | China authority metadata where supported. |

### Microsoft 365

| Cloud | Core entry points and endpoint families |
| --- | --- |
| Commercial / Worldwide | `https://admin.microsoft.com`, `https://www.microsoft365.com`, `https://office.com`, Exchange `*.outlook.office.com`, SharePoint `*.sharepoint.com`, Teams `*.teams.microsoft.com`, Graph `https://graph.microsoft.com` |
| GCC | Uses Microsoft 365 Worldwide endpoints, including GCC; identity is `login.microsoftonline.com`. |
| GCC High | `*.office365.us`, `www.office365.us`, Exchange `outlook.office365.us`, SharePoint `*.sharepoint.us`, Teams `*.gov.teams.microsoft.us`, Graph `https://graph.microsoft.us`, identity `https://login.microsoftonline.us` |
| DoD | `*.apps.mil`, `*.office365.us`, Exchange `outlook-dod.office365.us` and `webmail.apps.mil`, SharePoint `*.sharepoint-mil.us` and `*.dps.mil`, Teams `*.dod.teams.microsoft.us`, Graph `https://dod-graph.microsoft.us`, identity `https://login.microsoftonline.us` |
| Secret / classified | Not publicly documented. |
| China / 21Vianet | Exchange `*.partner.outlook.cn`, SharePoint `*.sharepoint.cn`, Teams `*.teams.microsoftonline.cn`, Office domains `*.partner.office365.cn`, `*.sovcloud.cn`, Graph `https://microsoftgraph.chinacloudapi.cn` |

### Azure

| Cloud | Portal | Resource Manager | Identity | Common DNS suffix examples |
| --- | --- | --- | --- | --- |
| Commercial | `https://portal.azure.com` | `https://management.azure.com` | `https://login.microsoftonline.com` | `*.azure.com`, `*.windows.net`, `*.database.windows.net`, `*.blob.core.windows.net` |
| Azure Government | `https://portal.azure.us` | `https://management.usgovcloudapi.net` | `https://login.microsoftonline.us` | `*.azure.us`, `*.usgovcloudapi.net`, `*.database.usgovcloudapi.net`, `*.blob.core.usgovcloudapi.net` |
| Azure Government DoD regions | `https://portal.azure.us` | `https://management.usgovcloudapi.net` | `https://login.microsoftonline.us` | DoD East / DoD Central service tags and endpoints apply where services are available. |
| Azure Government Secret / Top Secret | Not publicly documented | Not publicly documented | Not publicly documented | Use classified environment documentation. |
| Azure China / 21Vianet | `https://portal.azure.cn` | China cloud metadata / ARM endpoints | `https://login.partner.microsoftonline.cn` or SDK authority metadata | `*.chinacloudapi.cn`, `*.windowsazure.cn`, China-specific service suffixes |

## Authentication: login.microsoftonline endpoints and the path a sign-in takes

### Authority endpoints by cloud

| Cloud | Authorization endpoint pattern | Token endpoint pattern |
| --- | --- | --- |
| Commercial / GCC | `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize` | `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token` |
| GCC High / DoD | `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/authorize` | `https://login.microsoftonline.us/{tenant}/oauth2/v2.0/token` |
| China / 21Vianet | Use China cloud authority metadata; commonly documented as `login.partner.microsoftonline.cn` or `login.chinacloudapi.cn` depending on API context. | Use matching tenant token endpoint from cloud metadata. |
| Secret / classified | Not publicly documented | Not publicly documented |

`{tenant}` can be a tenant ID, verified domain, or a well-known alias such as `common`, `organizations`, or `consumers` when supported by that cloud and scenario. For production line-of-business apps, tenant-specific authorities are preferred.

### Browser / OAuth flow

1. The user opens the cloud-specific app URL, such as `app.powerbi.com`, `app.high.powerbigov.us`, `make.gov.powerapps.us`, or `portal.azure.us`.
2. The app redirects the browser to the cloud authority's `/authorize` endpoint.
3. Microsoft Entra performs home realm discovery for the tenant and user.
4. If the tenant uses cloud authentication, Microsoft Entra handles passwordless, certificate, password, MFA, Conditional Access, and device checks in that cloud.
5. If the tenant uses federation, Microsoft Entra redirects the user to the federation provider, such as AD FS. AD FS authenticates the user against the organization's directory, issues a signed SAML token, and sends it back to Microsoft Entra over TLS. Microsoft Entra validates the signature and continues the sign-in.
6. Microsoft Entra returns an authorization code to the app's registered redirect URI.
7. The app posts the code to the same cloud authority's `/token` endpoint.
8. Microsoft Entra issues tokens for the requested audience, such as Microsoft Graph, Power BI, Azure Resource Manager, Dataverse, or a first-party service API.
9. The app calls the cloud-matched API endpoint with the access token.

Tokens are cloud-bound. A token from `login.microsoftonline.com` is not interchangeable with one from `login.microsoftonline.us`, and a token for `graph.microsoft.com` will not work against `graph.microsoft.us` or `dod-graph.microsoft.us`.

### Why `login.microsoftonline.com` can still appear in government endpoint lists

Some GCC High and DoD endpoint documentation still includes commercial identity or CDN-related domains, such as `login.microsoftonline.com`, `login.windows.net`, `*.msauth.net`, or `secure.aadcdn.microsoftonline-p.com`, for client compatibility, shared authentication libraries, certificate chains, device registration, or static content. That does not change the primary token authority:

- GCC High and DoD token acquisition should use `https://login.microsoftonline.us`.
- GCC token acquisition uses `https://login.microsoftonline.com`.
- Microsoft Graph should match the cloud: `graph.microsoft.com`, `graph.microsoft.us`, or `dod-graph.microsoft.us`.

## Practical cloud mapping examples

| Scenario | App URL | Identity authority | API / downstream cloud |
| --- | --- | --- | --- |
| Commercial Power BI user opens a report | `https://app.powerbi.com` | `login.microsoftonline.com` | `api.powerbi.com`, `graph.microsoft.com` as needed |
| GCC Power BI user opens a report | `https://app.powerbigov.us` | `login.microsoftonline.com` | `api.powerbigov.us`; Microsoft 365 worldwide endpoints for M365 dependencies |
| GCC High user opens Power Apps | `https://make.high.powerapps.us` | `login.microsoftonline.us` | Power Platform US Gov endpoints, `graph.microsoft.us` for Graph scenarios |
| DoD user opens Power Automate | `https://make.powerautomate.appsplatform.us` | `login.microsoftonline.us` | DoD Power Platform endpoints, `dod-graph.microsoft.us` for Graph scenarios |
| Azure Government admin opens Azure portal | `https://portal.azure.us` | `login.microsoftonline.us` | `management.usgovcloudapi.net` |
| China tenant app calls Microsoft Graph | China tenant app URL | China authority metadata | `https://microsoftgraph.chinacloudapi.cn` |

## Firewall and endpoint feed references

Use these feeds for live allow-list automation:

| Cloud | Endpoint feed |
| --- | --- |
| Microsoft 365 Worldwide / GCC | `https://endpoints.office.com/endpoints/Worldwide` |
| Microsoft 365 GCC High | `https://endpoints.office.com/endpoints/USGOVGCCHigh` |
| Microsoft 365 DoD | `https://endpoints.office.com/endpoints/USGOVDoD` |
| Microsoft 365 China / 21Vianet | `https://endpoints.office.com/endpoints/China` |
| Azure public service tags | Azure IP Ranges and Service Tags - Public Cloud |
| Azure Government service tags | Azure IP Ranges and Service Tags - US Government Cloud |
| Azure China service tags | Azure IP Ranges and Service Tags - China Cloud |

## References

- [Microsoft 365 endpoints](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-endpoints)
- [Microsoft 365 US Government GCC High endpoints](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-u-s-government-gcc-high-endpoints)
- [Microsoft 365 US Government DoD endpoints](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-u-s-government-dod-endpoints)
- [Microsoft 365 operated by 21Vianet endpoints](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges-21vianet)
- [Microsoft Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)
- [Microsoft Copilot requirements](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements)
- [Understand Microsoft US government cloud environments for Microsoft 365 and Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/gov-overview)
- [Copilot Studio US Government customers](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-licensing-gcc)
- [Power BI for US Government customers](https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-government-us-overview)
- [Power Apps US Government](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-us-government)
- [Power Automate US Government](https://learn.microsoft.com/en-us/power-automate/us-govt)
- [Power Platform URLs and IP address ranges](https://learn.microsoft.com/en-us/power-platform/admin/online-requirements)
- [Power Platform and Dynamics 365 apps operated by 21Vianet in China](https://learn.microsoft.com/en-us/power-platform/admin/about-microsoft-cloud-china)
- [Microsoft Entra authentication and national clouds](https://learn.microsoft.com/en-us/entra/identity-platform/authentication-national-cloud)
- [Microsoft Graph national cloud deployments](https://learn.microsoft.com/en-us/graph/deployments)
- [Azure Government developer guide](https://learn.microsoft.com/en-us/azure/azure-government/documentation-government-developer-guide)
- [Compare Azure Government and global Azure](https://learn.microsoft.com/en-us/azure/azure-government/compare-azure-government-global-azure)
- [Azure in China developer guide](https://learn.microsoft.com/en-us/azure/china/resources-developer-guide)
