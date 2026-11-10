# URPAC static migration verification

Completed 10 November 2026. No publication, DNS, GitHub repository or personal-portfolio modification was performed.

## Backup

`/Users/shubhankarksharma/Documents/WebDev/urpac-react-backup-2026-11-10`

A complete copy was made before modifying source files. SHA-256 comparison verified all 6,522 regular files, including installed dependencies and production/draft outputs. The backup remains intact.

## Result

Working root: `/Users/shubhankarksharma/Documents/WebDev/urpac-website`.

Created complete static index.html, css/style.css, js/main.js, assets/social.svg, 14 legacy route entrypoints, 404.html, favicon.svg, robots.txt, sitemap.xml, CNAME and .nojekyll. Updated README and launch shortcut. Preserved content/projects.json and the original /social.svg asset URL. React/TypeScript/Vite sources, packages, dependencies, scripts and generated build directories are retained only in the backup, not required by the static site.

## Checks completed

- All 15 index routes plus 404.html returned HTTP 200 when requested directly from a Python server.
- Every internal HTML link, asset path and fragment resolves to an existing file/element.
- The static CSS is byte-for-byte identical to the original source CSS.
- Homepage body was rendered once from the original components during migration; final pages contain all text and SVG markup without any client rendering requirement.
- Browser verified diagram layer change and matching aria-pressed/graphic label updates.
- Native expertise accordion expanded and showed its original descriptions and lists.
- Browser verified /projects/ redirects to /#work, matching existing behavior.
- Desktop and a 390-pixel iframe viewport inspected. Existing responsive CSS and typography preserved.
- Browser console returned no warnings or errors on homepage and private case preview.
- Private case opened by direct URL and survived browser refresh.
- No JavaScript modules, React runtime, TypeScript source, npm manifest, node_modules or build requirement exists in the deployable folder.
- Production HTML excludes the private case slug/content. The published project collection remains empty, exactly as before.

## Preserved private material

Static draft: `/Users/shubhankarksharma/Documents/WebDev/urpac-draft-static-2026-11-10/projects/covid-residential-repositioning/index.html`.

The case text, diagram, confidentiality notice, draft banner and noindex rules are preserved outside the publishable root. Original reusable templates and unreachable earlier components remain in the complete backup.

## Differences and limits

No known live interaction was dropped. Route redirects now use static HTML refresh instead of React/location routing, with complete page fallback. Copyright year still updates through vanilla JavaScript. SEO canonical, Open Graph and sitemap now use the supplied urpac.shubhankarsharma.com domain; indexing is enabled for the eventual public site. Local CNAME creation does not configure DNS or publish anything.

Google Fonts remains external, as before. SVG social previews remain subject to platform support. Automated exhaustive cross-browser/device testing was not performed. Shared HTML is now edited directly; JSON edits no longer generate pages automatically. The currently unused React form/filter gallery are archived, not resurrected as new public features.

## Preview

```sh
cd /Users/shubhankarksharma/Documents/WebDev/urpac-website
python3 -m http.server 8002
```

Open http://localhost:8002/. Publish the directory itself only when approved; no compilation is needed.
