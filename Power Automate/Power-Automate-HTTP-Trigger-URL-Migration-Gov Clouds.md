# Power Automate HTTP trigger failures after the trigger URL migration (US Government clouds)

**Applies to:** Power Automate cloud flows that use the **When an HTTP request is received** trigger, called by another flow, an app or an external system. The case below was seen in a **US Government DoD** environment, but the same pattern applies to commercial, GCC and GCC High.

---

## TL;DR

Microsoft is moving Power Automate environments from the original **Logic Apps** hosting architecture to a new architecture called **SelfHost Multitenant**. As part of that move, **HTTP-triggered flows get a new trigger URL**. Callers that still use the old `*.logic.azure.*` URL start failing, and the errors are misleading. They suggest an authentication problem, a disabled flow or a missing flow, but **the flow itself is healthy**.

**Fix:** open the target flow, copy the **new HTTP URL from the trigger card** as is, and replace the old URL wherever the caller stores it. In many solutions that's a **Dataverse environment variable**. Then turn the calling flow off and on and retest.

---

## Symptoms

The calling HTTP action (or external system) fails with **400 or 401** errors. The message changes depending on what you try:

| Error you see | What it looked like it meant | What it actually meant |
|---|---|---|
| `The request has SAS authentication scheme, 'MSAuth1.0' authorization scheme or internal token scheme. Only one scheme should be used.` | The caller is sending two auth methods | The **old URL route** rejects the call, even with no extra auth header |
| `WorkflowTriggerIsNotEnabled` – *Could not execute workflow '<id>-azshadow' trigger 'manual' with state 'Disabled'* | The flow is turned off | The flow shows **On** in the portal. The old URL resolves to the flow's **legacy Logic Apps shadow copy**, which is disabled after the migration |
| `WorkflowNotFound` | The flow was deleted | Someone **hand-edited the URL**, for example by swapping in a different flow ID. Trigger URLs can't be edited |

Other signs:

- Opening the flow by the ID in the old URL returns *"This flow could not be found. It may have been deleted or moved."* The ID in a trigger URL is an **internal backend ID**, not the ID the portal uses, so this message is expected and doesn't mean the flow was deleted.
- No outage appears on Azure status or Service Health. Other HTTP-triggered flows may still work.
- Turning the target flow off and on **doesn't help**.

---

## Root cause

Microsoft documents the change in the trigger troubleshooting article:

- Flows with HTTP or Teams Webhook triggers that have `logic.azure.com` in the URL **move to a new URL** as part of an infrastructure upgrade.
- The change affects only environments still on the **Logic Apps** architecture. Environments on **SelfHost Multitenant** aren't affected.
- In commercial cloud, old URLs stopped working on **November 30, 2025**. Government clouds follow their own rollout. The Microsoft Learn article doesn't give a separate date for them, so check your tenant's **Message center** and **Service health**.
- A later change (from **June 2, 2026**) adds a **scale-unit segment** to the URL (`/direct/cu/<nn>/workflows/...`). Microsoft recommends updating to that form.

### Old vs. new URL format (DoD example)

**Old – Logic Apps route (stops working):**

```
https://prod-<nn>.usdodcentral.logic.azure.us:443/workflows/<internal-workflow-id>/triggers/manual/paths/invoke
    ?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=<signature>
```

**New – Power Platform environment route:**

```
https://<environment-id-without-dashes>.c.environment.api.appsplatform.us:443/powerautomate/automations/direct/cu/<nn>/workflows/<internal-workflow-id>/triggers/manual/paths/invoke
    ?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=<new-signature>
```

What to notice:

| Part | Old | New |
|---|---|---|
| Host | `prod-<nn>.<region>.logic.azure.us` (cluster and region in the name) | `<environment-id>.c.environment.api.appsplatform.us` (per environment) |
| Path | `/workflows/...` | `/powerautomate/automations/direct/cu/<nn>/workflows/...` |
| Internal workflow ID | Same | **Same.** Use it to match an old URL to its flow |
| `api-version` | `2016-06-01` | `1` |
| `sig=` signature | Old | **New.** The old signature doesn't work on the new host |

> `appsplatform.us` is the Power Platform **DoD** cloud domain. GCC uses `*.gov.powerplatform.microsoft.us`, GCC High uses `*.high.powerplatform.microsoft.us`, and commercial uses `*.powerplatform.com`.

---

## Fix

### 1. Get the new URL from the target flow

1. Open the **target** flow (the one with **When an HTTP request is received**).
2. Expand the trigger and use the copy button next to **HTTP URL**.
3. **Don't edit the URL.** Changing the host, the ID or the signature by hand produces `WorkflowNotFound` or a signature failure.

### 2. Replace the old URL wherever the caller stores it

Common places:

- **Dataverse environment variables** (very common in solutions). Update **Current value**, and **Default value** in the source/dev environment so the old URL doesn't spread through later solution imports.
- The URI field of an **HTTP action** in a parent flow. Microsoft treats a parent flow that calls a child flow over HTTP as an **external system**, so it must be updated. **Run a child flow** calls need no change.
- Power Apps, custom connectors, Azure services, scripts, SaaS webhook settings and app config or key vaults.

### 3. Refresh and retest

1. **Turn the calling flow off and on**, or save it, so it picks up the new environment variable value.
2. Trigger it and confirm a **202 or 200** response and a new run in the target flow's run history.

### 4. Repeat for every environment

Trigger URLs are **specific to each environment**. Dev, test and prod each need their own new value, copied from **that environment's** flow.

---

## Finding affected flows

### Option A – Microsoft's PowerShell cmdlet (recommended)

```powershell
Install-Module Microsoft.PowerApps.Administration.PowerShell -Scope CurrentUser
Add-PowerAppsAccount -Endpoint dod          # usgov | usgovhigh | dod | prod
Get-AdminPowerAppEnvironment | ForEach-Object {
    Get-AdminFlowWithMigratingTriggerUrl -EnvironmentName $_.EnvironmentName
}
```

The cmdlet returns the **DisplayName** and **FlowName (ID)** of each flow whose trigger URL is migrating.

### Option B – Check an environment's architecture

In Power Automate, select the environment, press **Ctrl + Alt + A**, and search for `environmentFlowHostingType`:

- `LogicApps`: on the old architecture, so HTTP-triggered flows here are affected.
- `SelfHostMultiTenant`: already upgraded, so the flows here aren't affected.

### Option C – List every HTTP-triggered flow (Dataverse Web API)

For **solution-aware** flows, query the Process (`workflow`) table for cloud flows whose definition contains a Request trigger:

```
https://<org>.crm.appsplatform.us/api/data/v9.2/workflows?$select=name,workflowid,statecode,modifiedon&$filter=category eq 5 and contains(clientdata,'"type":"Request"')
```

`category eq 5` means cloud flows. A `statecode` of `1` means On and `0` means Off. Swap the host for your cloud, for example `crm.dynamics.com` or `crm9.dynamics.com`. If `contains` isn't supported on that column in your environment, use FetchXML with a `like` filter or Option D.

### Option D – Export the solution and search it

Export the solution as unmanaged and unzip it, then search:

- `"type": "Request"` to find HTTP-triggered flow definitions
- `logic.azure.` to find **stored old URLs**, such as environment variable values and hard-coded URIs

### Matching an old URL to its flow

The internal workflow ID in the URL (`/workflows/<id>/`) **doesn't change** between the old and new formats. Open each candidate flow's trigger and find the **HTTP URL** that contains the same ID.

---

## Related checks

### Trigger authentication ("Who can trigger the flow")

| Setting | Caller must send |
|---|---|
| **Anyone** (legacy) | No token. The `sig=` in the URL authorizes the call. Remove any `Authorization` header and set the HTTP action's Authentication to **None** |
| **Any user in my tenant** / **Specific users in my tenant** | An OAuth bearer token whose `aud`, `iss` and `tid` claims match (plus `oid` for specific users) |

OAuth audience values must match **exactly, including the trailing slash**:

| Cloud | Audience |
|---|---|
| Commercial | `https://service.flow.microsoft.com/` |
| GCC | `https://gov.service.flow.microsoft.us/` |
| GCC High | `https://high.service.flow.microsoft.us/` |
| DoD | `https://service.flow.appsplatform.us/` |

### Firewall / outbound allow lists

If callers sit behind an outbound firewall, the **When an HTTP request is received** trigger needs these domains over HTTPS:

| Cloud | Domains |
|---|---|
| Commercial | `*.api.powerplatform.com`, `*.logic.azure.com` |
| GCC | `*.api.gov.powerplatform.microsoft.us`, `*.logic.azure.us` |
| GCC High | `*.api.high.powerplatform.microsoft.us`, `*.logic.azure.us` |
| DoD | `*.api.appsplatform.us`, `*.logic.azure.us` |

### URL length

With SAS authentication, the new URL can be **longer than 255 characters**. Confirm the calling system doesn't cut it off. If it does, put **Azure API Management** or an **Azure Function** in front of the flow.

### Treat the URL as a secret

With **Anyone** access, the `sig=` value is the only thing protecting the flow. Don't paste full trigger URLs into tickets, chats or screenshots. If one is exposed, **regenerate the SAS key**.

---

## Troubleshooting checklist

- [ ] Confirm the environment's `environmentFlowHostingType`
- [ ] Run `Get-AdminFlowWithMigratingTriggerUrl` for every environment
- [ ] Find where each caller stores the URL (environment variables, HTTP actions, apps, external systems)
- [ ] Copy the new URL from the trigger card without editing it
- [ ] Update **Current** and **Default** values of environment variables in every environment
- [ ] Turn calling flows off and on, or save them
- [ ] Match the trigger's "Who can trigger the flow" setting to the caller's auth method
- [ ] Allow the new domains through outbound firewalls
- [ ] Check URL length limits in calling systems
- [ ] Regenerate the SAS key if a URL was exposed
- [ ] Confirm 202/200 responses and successful runs over a full business cycle

---

## Microsoft Learn references

- [Troubleshoot common problems with Power Automate triggers](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-run-issues/triggers-troubleshoot): see *Changes to HTTP or Teams Webhook trigger flows on Logic Apps environment architecture* and *Update to HTTP or Teams Webhook trigger flow URL*
- [Power Automate environments move to new architecture](https://learn.microsoft.com/en-us/power-automate/environment-architecture)
- [Add OAuth authentication for HTTP request triggers](https://learn.microsoft.com/en-us/power-automate/oauth-authentication)
- [IP address configuration for Power Automate](https://learn.microsoft.com/en-us/power-automate/ip-address-configuration): see *Allow users on your network to use "When an HTTP request is received" trigger*
- [Power Automate US Government](https://learn.microsoft.com/en-us/power-automate/us-govt)
- [Environment variables overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables)
- [PowerShell support for Power Apps and Power Automate](https://learn.microsoft.com/en-us/power-platform/admin/powerapps-powershell)
