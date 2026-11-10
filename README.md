# URPAC — static website

Plain HTML, CSS and vanilla JavaScript. No installation, compilation, framework, bundler or build process is required.

## Preview

```sh
cd /Users/shubhankarksharma/Documents/WebDev/urpac-website
python3 -m http.server 8002
```

Open http://localhost:8002/. Alternatively open START-WEBSITE.command.

## Files

- index.html: complete rendered homepage, including all content and inline SVG graphics.
- css/style.css: original stylesheet, unchanged, including responsive layouts, font imports, transitions and reduced-motion support.
- js/main.js: urban diagram layer buttons and accessible state updates. Accordions and navigation use native HTML.
- assets/social.svg, favicon.svg: original brand assets. social.svg remains at its original URL too.
- Section/service directories: actual index.html files preserving the previous redirects to homepage sections. They contain the complete page as fallback when refresh redirects are disabled.
- robots.txt, sitemap.xml, CNAME: root custom-domain deployment metadata for urpac.shubhankarsharma.com.
- content/projects.json: unchanged empty published-project collection, retained as reference; the browser does not fetch it.

Edit HTML and CSS directly. If shared content changes, also update the fallback markup in the legacy route files. No automatic JSON-to-page generation remains.

## Deployment readiness

The project directory itself is the publishable root. GitHub Pages can serve these files directly, with no npm or compilation step. .nojekyll bypasses Jekyll processing. CNAME is only a local file; no DNS or GitHub setting has been changed. Deploying and configuring the domain remain the owner's actions.

Google Fonts remains an external font dependency, exactly as before, with system fallbacks. The original SVG social artwork is preserved; social networks vary in SVG preview support.

## Preserved originals and unpublished work

Complete original backup: ../urpac-react-backup-2026-11-10/ (6,522 original files verified byte-for-byte before migration, including node_modules, sources and both build outputs).

Separate static draft preview: ../urpac-draft-static-2026-11-10/. Do not publish this folder. Run a separate loopback server there to review /projects/covid-residential-repositioning/. The full case text, draft warning, and noindex controls are retained. Original template records remain in the complete backup.

No public project detail pages existed at migration time: content/projects.json was empty. The public /projects/ address continues to lead to the homepage's development-context section. Previously removed/unreachable React form and gallery components remain in the backup; they were not live features of the site.
