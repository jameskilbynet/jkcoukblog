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

1068

Git commits

### Repository Age

180

Days active

### Contributors

3

Active contributors

### Last Deployment

2026-04-01

20:31:04

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

2026-04-01 b00031fOther

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-01 0dfcc4bFix

Upgrade BlogPosting to TechArticle, fix BreadcrumbList URLs/positions, fix Person name

\- Add item to JSON-LD URL_KEYS so BreadcrumbList standalone script item

2026-04-01 489e75eOther

Merge branch 'main' of https://github.com/jameskilbynet/jkcoukblog

2026-04-01 be382c2Other

Absolutify only string URL keys; always recurse

Guard URL absolution to only operate on string values (avoid treating lists/objects as strings) and ensure the fixer always recurses into nested dicts/lists. This fixes cases where keys like "image" can be objects (e.g. ImageObject) so their inner URL fields ("@id", "url", etc.) are normalized, while leaving non-string values such as sameAs lists to be handled separately.

2026-04-01 6a2c7d3Fix

Fix JSON-LD absolute URLs and update workflow

Add JSON-LD URL fixer to scripts/fix_seo_issues.py and call it from the CI workflow after convert_to_staging.py. The new fix_jsonld_absolute_ids() method walks