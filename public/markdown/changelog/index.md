---
title: "Changelog - James Kilby"
description: "Site improvements, deployments, and performance metrics for James Kilby's technical blog."
author: James Kilby
url: https://jameskilby.co.uk/changelog/
---

[← Back to Home](https://jameskilby.co.uk/)

# 📋 Changelog

Site improvements, deployments, and performance metrics

### Total Deployments

1149

Git commits

### Repository Age

195

Days active

### Contributors

3

Active contributors

### Last Deployment

2026-04-16

21:08:06

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

2026-04-16 b4dc9ddImprovement

Update Claude settings and rotate indexnow key

Add new probes to .claude/settings.local.json (Bash(xxd) and WebFetch for www.bing.com) and update the stored IndexNow key in .indexnow_key (key rotated). These changes enable additional local checks and refresh the indexing key without altering other configuration.

2026-04-16 3a9b5caFeature

Add IndexNow keyLocation and WebFetch entry

Include a keyLocation field in IndexNow submission payload so the API knows where the verification key is hosted (scripts/submit_indexnow.py). Also add WebFetch(domain:www.indexnow.org) to local Claude settings to allow fetching IndexNow resources during analysis (.claude/settings.local.json).

2026-04-16 ba1761cOther

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-16 35fe94dFeature

Bump GitHub Action versions and add gh checks

Upgrade action usages across workflows to newer releases (actions/cache -> v5, actions/cache/restore/save -> v5, actions/upload-artifact/download-artifact -> v7, actions/setup-node -> v6, slackapi/slack-github-action -> v3.0.1) to keep CI tooling up-to-date and compatible. Also add Bash patterns for gh run/api to .claude/settings.local.json to include gh CLI checks in local scans.

2026-04-16 8c89ec4Other

Bump Actions checkout and setup-python versions

Upgrade GitHub Actions used in workflow files: actions/checkout@v4 -> actions/checkout@v5 across all workflows, and actions/setup-python@v4/@v5 -> actions/setup-python@v6 where present. Updated workflows: deploy-static-site.yml, enable-cloudflare-indexing.yml, quality-checks.yml, rollback-site.yml, secret-scan.yml, spell-check-consolidated.yml. No behavioral changes aside from using newer action releases; existing fetch-depth and Python version settings are preserved.

  

2026-04-15 5ea7e91Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-15 864fb0dImprovement

Update html_transformer.py

2026-04-15 7e61095Improvement

Update validate_deployment.py

2026-04-15 6b0c3dfOther

Escape HTML in changelog commit messages

2026-04-15 2af65f3Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-15 9b6dcf3Other

Exclude consolidated-inline-styles from critical CSS

Add 'consolidated-inline-styles' to the EXCLUDED tuple in scripts/extract_critical_css.py to prevent double-counting of inline noscript styles during critical CSS extraction, matching the handling of other excluded assets like 'brutalist-theme' and 'fonts.css'.

2026-04-15 51da4e0Improvement

Use single-pass HTML transformer; update CI & Makefile

Add a new scripts/html_transformer.py that performs SEO fixes, image-to-<picture> conversion, performance hints, critical CSS extraction/inlining, head deduplication and HTML minification in a single parse cycle per file. Update .github/workflows/deploy-static-site.yml to wait for dpkg locks during apt operations and to replace the previous multi-step image/SEO/perf/CSS/HTML pipeline with a streamlined CSS optimization step and a single-pass HTML transformer step. Simplify Makefile targets to call the new transformer and to consolidate the CSS pipeline (remove separate critical extraction step). These changes reduce repeated HTML parsing, simplify CI steps, and add robustness to runner package installs.

2026-04-15 1e365caImprovement

Refactor deploy workflow and staging URL handling

Rework the GitHub Actions deploy flow and staging URL conversion:

  

2026-04-14 a3debdaDocs

Updated Readme

2026-04-14 cf71416Feature

Add 'purge all' KV cache support

Replace selective file-based purge with a purge-all workflow step that POSTs /.purge?all=true and requires CACHE_PURGE_TOKEN; step name and GitHub summary fields updated and response count parsed with jq. Update worker handler to support the all=true query: iterate HTML_CACHE.list to delete KV keys and corresponding Cache API entries, return JSON with purged count and timestamp, and improve missing-parameter error and cache request origin handling.

  

2026-04-12 f405ac7Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-12 ef66c3eDocs

Improve taxonomy name extraction from title

Refine the regex used to extract taxonomy names from page titles. Use a non-greedy match for patterns like "Docker Archives - James Kilby" and add a fallback to the previous pattern when the 'Archives' token isn't present. Also update the comment/example. This prevents incorrect captures for taxonomy names that include hyphens or other characters.

2026-04-12 39c71d5Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-12 09703e2Other

Deduplicate meta descriptions on paginated pages

Add fix_pagination_meta_description to detect /page/N/ URLs and append " - Page N" to meta description, og:description and twitter:description to avoid duplicate SEO content. The method strips trailing periods, truncates content to keep it within ~160 characters (adding ellipses if needed), and logs a brief message per modified page. Also call this new method during page processing so paginated archive pages get unique descriptions.

2026-04-12 5dd077cFix

fix: exclude changelog/stats from Brotli reuse loop

These directories are regenerated by post-deploy scripts every build,

2026-04-12 ea9706eFix

fix: resolve Brotli mismatch for post-deploy generated files

The Brotli reuse loop was copying stale .br files for

2026-04-12 8f05390Improvement

Reuse optimized assets, refine validation output

Workflow: improve reuse of previously-optimized assets by rsync-ing AVIF/WebP from public/ into static-output with --ignore-existing, count copied files, and replace originals only when the previous version is smaller. Preserve and reuse .br/.gz only when the static-output source matches the public source (compare sizes) and report how many compressed files were reused vs skipped as stale. Also remove redundant copy to public before validation.

  

2026-04-11 f10e886Other

Deduplicate head links and robust CSS preload

Add a pre-parse cleanup that strips accumulated <noscript> fallbacks and deduplicates <link> tags in <head> (_dedup_head_links), preventing runaway duplication on repeated pipeline runs. Make CSS externalization idempotent and self-healing: convert stylesheets to preload+onload safely, skip critical files (brutalist-theme, fonts.css), and add exactly one noscript fallback per preload link. Also adjust insertion order for the generated stylesheet link. Finally, switch BeautifulSoup usage in wp_to_static_generator.py from 'lxml' to 'html.parser' to improve parsing robustness.

2026-04-11 6e4b9d0Fix

fix: eliminate noscript accumulation and fix image sitemap parser

2026-04-11 236d8e3Fix

fix: resolve noscript tag explosion from non-idempotent CSS preload conversion

Root cause: _convert_css_to_preload() matched fallback links inside existing

2026-04-11 bae7ac9Feature

feat: add Google image sitemap support

Extends create_sitemap() to emit <image:image> entries for each post/page

2026-04-11 3649944Other

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-11 e4a85efFeature

Add www→non-www redirect to worker

Add a 301 www→non-www redirect at the start of _worker.template.js and public/_worker.js so cross-domain canonical redirects run in Advanced Mode Workers (which ignore _redirects). Remove the corresponding rule from public/_redirects and add a comment pointing to the worker. This ensures a single-hop canonical redirect and fixes Google Search Console crawl errors for www.jameskilby.co.uk.

Page generated: 2026-04-16 21:57:51 UTC  
Changelog powered by Git history and Lighthouse CI