# Portfolio analytics

Configured production measurement ID: `G-7EMX9K198S`. This public ID is included in the source so deployments work without an environment variable; `VITE_GA_MEASUREMENT_ID` can override it. Local development and preview domains remain excluded.

## Connect Google Analytics 4

1. Open https://analytics.google.com/ and create a GA4 property for the portfolio. Set the reporting time zone to America/Chicago (or your preferred reporting time zone).
2. Under Admin → Data streams, add a Web stream for `https://www.adilwaheedportfolio.com`. Enable enhanced measurement for page views, scrolls, outbound clicks, and downloads.
3. Copy the **Measurement ID**, starting with `G-`. This is public configuration; no API secret is needed.
4. In the deployment service's production environment variables, set `VITE_GA_MEASUREMENT_ID` to that value. Rebuild and redeploy. For a manual local production build, put it in `adil-portfolio/.env.local` first; that file is ignored by git.
5. Visit the deployed site and check Analytics → Reports → Realtime. Open a project detail and click a project link. Events should arrive in Realtime; normal reports can take 24–48 hours to populate. Ad blockers can prevent collection.

The integration is inactive with an invalid ID, in the Vite development server, on localhost, and on preview domains. Both the homepage and `/work/helm` initialize it. Page views are handled by Google's config command; there is no duplicate manual page-view event. Do not additionally install the same tag through the hosting dashboard or Google Tag Manager.

## What to look at

- **Realtime:** current activity and recent visits.
- **Demographic details:** approximate country, region, and city. This is not a visitor's precise physical location or office.
- **Traffic acquisition:** referral sources, source/medium, and recruiting campaigns.
- **Pages and screens / Events:** pages read, engagement, and interactions.
- **Explore:** use Date + hour for visit patterns in the property's reporting time zone; combine campaign and city to understand aggregate recruiting traffic.

Custom events: `resume_click`, `email_click`, `github_click`, `linkedin_click`, `project_link_click`, `research_document_click`, and `detail_open`.

Under Admin → Custom definitions, create event-scoped dimensions for `entry_id`, `topic`, and `destination` if you want to break down these events in reports. Mark `resume_click` and `email_click` as key events if useful. These measure clicks, not successful downloads, sent emails, interviews, or hiring intent. Enhanced measurement can also record a generic click/download for the same interaction; do not sum the generic and custom events as separate actions.

## Recruiting links

Use this link when sharing the portfolio in Google recruiting outreach:

https://www.adilwaheedportfolio.com/?utm_source=google_recruiting&utm_medium=email&utm_campaign=swe_team_matching

For a resume shared in that process, use `utm_medium=resume` instead. Use campaign names rather than individual names or email addresses. A tagged visit means someone followed that link, including if it was forwarded. It does not establish employer or identity. A normal `google / organic` visit means Google Search traffic, not a Google employee.

Google Analytics cannot reliably identify Google offices or employees. City data is approximate and affected by VPNs and network routing. GA4 discards IP addresses after deriving location; it does not expose them as a visitor lookup tool. No reverse-IP company identification or fingerprinting is implemented.

Google signals and ad-personalization signals are disabled. GA4 uses analytics cookies; the integration does not add a consent manager. Configure consent handling and your site's privacy disclosure as appropriate before enabling collection for your audience.

Official references:
- Setup: https://support.google.com/analytics/answer/14183469
- Page views: https://developers.google.com/analytics/devguides/collection/ga4/views
- Location handling: https://support.google.com/analytics/answer/11598602
- Campaign links: https://support.google.com/analytics/answer/10917952
