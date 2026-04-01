---
title: "Changelog"
description: "Site improvements, deployments, and performance metrics for James Kilby's technical blog."
author: James Kilby
url: https://jameskilby.co.uk/changelog/
---

[← Back to Home](https://jameskilby.co.uk/)

# 📋 Changelog

Site improvements, deployments, and performance metrics

### Total Deployments

1059

Git commits

### Repository Age

177

Days active

### Contributors

3

Active contributors

### Last Deployment

2026-03-28

17:51:01

## 🚀 Lighthouse Performance Scores

Last checked: Estimated

95 

Performance

95 

Accessibility

100 

Best Practices

100 

SEO

## Recent Changes

2026-03-28 74ca4f9Fix

fix: move inline Python to script to fix YAML syntax error in workflow

The previous commit embedded Python code directly inside a `run: |` YAML

2026-03-28 96420fdFix

fix: restore absolute URLs in seeded HTML so incremental build passes link validation

When seeding ./static-output/ from public/, the HTML files have already been

2026-03-28 01eb73fFeature

fix: always run generator in incremental mode so .build-cache.json is created on first run

When --no-incremental is passed, IncrementalBuilder is disabled and never

2026-03-28 a72f0cfOther

feat: incremental WordPress generation — only re-fetch posts modified since last build

Persist .build-cache.json via actions/cache/restore+save (key per run_id,

2026-03-28 e32a000Other

Optimise deploy workflow: parallelise steps and reuse compression

1\. Parallelise post-processing: Run CSS optimization, SEO fixes, and

2026-03-28 0a28918Fix

Fix Splide pagination dot sizing with higher specificity

Splide's default CSS overrides our dot styles. Use higher-specificity

2026-03-28 a65afcaOther

Refine Splide carousel arrows and pagination dots

\- Arrows: Switch from solid orange squares to circular outline

2026-03-28 fd58512Other

Move Splide arrow/pagination styles to inline injection

The CSS optimizer strips .splide__arrow and .splide__pagination__page

2026-03-28 f373390Improvement

Improve Similar Posts carousel styling

\- Carousel titles: Switch from uppercase to title case for

2026-03-28 19f7151Fix

Fix schema enrichment for WordPress-supplied JSON-LD

\- BlogPosting: Add inLanguage and mainEntityOfPage to existing

2026-03-28 44a842dFix

Fix og:image relative URLs for social media previews

Add fix_og_absolute_urls() to fix_seo_issues.py that ensures og:image,

2026-03-28 80b5706Fix

Fix RSS autodiscovery and exclude noindex pages from sitemap

\- RSS: Fix feed autodiscovery link to point to /feed/index.xml

2026-03-28 e441c6eFeature

Add structured data and print stylesheet

\- Add WebSite schema with SearchAction (enables Google sitelinks

  

2026-03-27 3001a08Fix

Fix robots.txt and sitemap lastmod for static site

\- robots.txt: Generate clean static-site robots.txt instead of

2026-03-27 b7c7ac1Feature

Add Makefile, CODEOWNERS, CONTRIBUTING.md; consolidate CSP tests

\- Consolidate 3 CSP test scripts (test_csp_utterances.py, test_csp_credly.py,

2026-03-27 b4307deRemoval

Remove old spellcheck workflows and theme files

Delete legacy spellcheck workflow files and obsolete styles, and archive worker scripts. Removed: .github/workflows/{CONSOLIDATION_SUMMARY.md,apply-spell-corrections-manual.yml,spell-check-and-fix.yml,spell-check.yml,verify-spell-corrections.yml}, brutalist-theme.css, and critical-mobile.css. Renamed/moved two worker scripts into archive: workers/html-cache.js → workers/archive/html-cache.js and workers/slack-notification-handler-improved.js → workers/archive/slack-notification-handler-improved.js. These removals reflect consolidation of multiple spell-check workflows into a single consolidated workflow and cleanup of unused theme assets.

2026-03-27 9a65234Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-03-27 1c292a9Improvement

Repo cleanup: archive, gitignore, and remove redundant files

\- Archive enable_cloudflare_indexing.py to scripts/archive/ (one-time setup, already run)

2026-03-27 f19166fDocs

Update README to reflect current repo state

Add missing workflows (spell-check, secret-scan, rollback, etc.), scripts

2026-03-27 f178accOther

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-03-27 c087f9dFeature

Strip asset ?ver, add Splide & related-post tweaks

Strip ?ver query strings from CSS/JS asset URLs and rename corresponding files on disk so static asset filenames aren't polluted by WordPress cache-busting queries. Add logic to detect Kadence/Splide carousels: remove server-rendered Splide state classes, inject Splide CDN script and an initialization script that reads data attributes. Update asset download path handling to ignore query strings, remove duplicate related-posts sections, and change insertion logic so related posts are placed after comments (or after entry-content) to avoid duplication and layout issues.

2026-03-27 ba5ac29Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-03-27 140cccbDocs

Always insert Utterances after article content

Simplify comments insertion: remove the replace-or-insert branching and the insert_before variable. If an existing #comments div is present it is decomposed, then the code finds article > .entry-content (falling back to the article) and inserts the Utterances comments block immediately after. Unifies insertion path and logging.

2026-03-27 53b2c4fOther

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-03-27 33d39e5Other

Purge changed HTML from Cloudflare

Add a GitHub Actions step to purge changed HTML pages from the Cloudflare CDN cache. The step finds changed public/*.html files (git diff HEAD~1 HEAD), converts paths to site URLs, batches up to 30 URLs per request and calls the Cloudflare purge_cache API. It records results in the workflow summary and is guarded by CLOUDFLARE_ZONE_ID / CLOUDFLARE_API_TOKEN (continue-on-error).

  

2026-03-20 1a32447Removal

remove redundant files

Page generated: 2026-03-29 09:27:35 UTC  
Changelog powered by Git history and Lighthouse CI