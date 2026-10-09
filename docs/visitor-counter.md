# Portfolio visitor counter

The footer displays only a small blue number, with no visible label or tooltip.
It is public, not an authenticated owner-only dashboard.

## What it counts

One anonymous first-party browser ID, stored in localStorage, counts once for
the lifetime of the database. Refreshes, repeat visits, React Strict Mode and
concurrent tabs do not increment an existing ID. Clearing site data, private
browsing, another browser or another device can count as a new visitor. This
is a browser-based estimate, not a count of verified people. It starts when
the feature goes live and cannot reconstruct past traffic.

No names, emails, IP addresses, fingerprints or raw IDs are stored in D1;
only a SHA-256 hash of a random UUID. Most non-JavaScript crawlers and common
bot user agents are excluded. This is not an abuse-proof analytics service:
a determined client could submit new IDs. When persistent browser storage is
blocked or the API fails, the number stays hidden rather than showing fake data.

## Local development

```sh
npx wrangler d1 migrations apply pa-visitors --local
npm run dev
```

Next development and Wrangler preview use local D1 storage under `.wrangler/`.
Local checks never modify the production count. The database key and SQL
trigger atomically deduplicate IDs; the registration and total read run in a
single D1 transaction.

Cloudflare version/branch preview hosts do not register visits. Production
registration is restricted to `VISITOR_SITE_HOST`, currently the existing
`piyush-agarwal-portfolio.dumpydon.workers.dev` hostname. If a custom domain is
added later, update that value to the canonical public hostname.

With localhost running, verify deduplication and request validation using
`node scripts/test-visitors.mjs`. The test refuses non-local hosts and adds
only two synthetic IDs to the local database, never to production.

## Production preparation (do this before publishing the feature)

The Cloudflare login must have D1 write permission. The existing Worker remains
`piyush-agarwal-portfolio`; no new Worker or production URL is needed.

1. Run `npx wrangler d1 list` and check whether `pa-visitors` already exists.
2. If absent, create it: `npx wrangler d1 create pa-visitors`.
3. Set the resulting `database_id` on the `VISITORS_DB` binding in
   `wrangler.jsonc`. Do not use a different project's database.
4. Apply the schema: `npx wrangler d1 migrations apply pa-visitors --remote`.
5. Publish the portfolio using its existing GitHub/Cloudflare workflow only
   when requested. Deploying the app alone does not apply SQL migrations.

The binding currently has no placeholder UUID. Wrangler supports local use
without a resource ID and can provision a missing resource on deployment, but
explicit creation and migration above avoids an uninitialized production DB.
Do not reset, delete or reseed the production database on later deployments.
