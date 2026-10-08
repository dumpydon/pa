# Vigil portfolio card prompt

Add Vigil to the existing PA portfolio using the shared project card, overview, modal, image/video abstraction, and refined glow system. Inspect https://github.com/dumpydon/vigil and https://vigil.dumpydon.workers.dev/ before choosing copy or media.

Append Vigil as project 07, after LeetVis. Preserve the existing order and every other project's text, links, accents, media, framing, and layout:

01 TraceLens → 02 PathForge → 03 Jevon → 04 LimitX → 05 DayPilot → 06 LeetVis → 07 Vigil.

Use #A970FF, the requested lighter Twitch-like purple, as Vigil's accent through the existing project color token. Place Vigil's exact original public/mark.svg before its name in the card and detail headings; preserve the SVG's original colors. Reuse the current theme-aware glow without changing its smoothing, intensity, or constrained outward spread. Do not add Twitch branding or imply affiliation.

Represent Vigil accurately as a personal job-application tracker, not an automated application submitter. Its React/TypeScript interface provides daily UTC goals, quick manual logging, editable history, charts, and an installable compact view. IndexedDB retains offline operations before they are displayed as retained. A Cloudflare Worker validates mutations and synchronizes them to D1, committing operation receipts and data changes together so retries do not duplicate effects. Entry versions protect against conflicts, and past-day changes require review. Synchronization runs while the app is open.

Use concise engineering copy with five verified technology pills: React, TypeScript, Workers, D1, IndexedDB. Workers refers to Cloudflare Workers; the shorter label keeps the existing mobile pill layout balanced. Use this description: "Job-application tracker with UTC goals, editable history, and a compact PWA. Retains offline changes in IndexedDB and syncs to Cloudflare D1 through idempotent operations and conflict checks." Configure these real actions:

- View live: https://vigil.dumpydon.workers.dev/
- View code: https://github.com/dumpydon/vigil

Use a legitimate Vigil dashboard capture under public/projects/vigil/. Preserve useful interface content and aspect ratio, optimize as WebP, and use the existing contain framing. The current asset, dashboard.webp, is a 960×824 crop of the repository's local-verification capture output/screenshots/full-1440.png; it shows demonstration data described in docs/verification.md. The displayed counts are not portfolio performance claims. Do not publish credentials, private account screens, or invent a product state. Future video should be a project-media data change.

Include the usual four Behind the Build notes: offline recovery and retries; individual entry records and transactional receipts; stale historical-day adjustments; recovery/backup improvements. Base all statements on the implementation.

Inspect desktop, laptop, tablet, and mobile layouts in both themes. Verify the final order, full screenshot framing, readable copy and pill wrapping, both links, modal tabs, keyboard focus, and Escape dismissal. Check that the existing six project records and their media are unchanged. Run the repository's lint, typecheck, and build scripts.

Open the PA dev server in the side browser and leave it running for review. Do not edit a résumé, commit, push, deploy, change dependencies, or alter Cloudflare configuration.
