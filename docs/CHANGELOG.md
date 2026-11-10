# CHANGELOG — Architecture & Deployment Milestones

All notable changes and architectural transitions for the Paul Zgondea executive portfolio (`paul.zgondea.com`) are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [v4.3.0] — 2026-11-10
### Added
- **AI Ops Specialization**: Added 2+ years AI Ops competence across hero eyebrow, executive overview bio, metrics grid, and site metadata.
- **5th Metric Box**: Added a 5th metric box (`2+ Years AI Ops & Agents`) with responsive auto-wrapping grid layout.
- **Repository Documentation**: Added `MIND_MAP.md` durable orientation index with navigational hubs `[1-5]`, format specification in `MIND_MAP_FORMAT.md`, and `AGENTS.md` operating manual.
- **Documentation Validator**: Created `scripts/validate-docs.py` to enforce single-line node grammar and line length limits.

### Changed
- **Full Career History Alignment**: Aligned all 9 professional positions and dates with verified LinkedIn profile:
  - Keystone Cloud Architects (Mar 2026 — Present, Co-Founder & Principal Cloud Architect)
  - Fullsteam (Jan 2018 — Present, Cloud Architecture Consultant / SRE)
  - NMFTA (Nov 2023 — Present, Cloud Architecture Consultant)
  - OSF Digital (Mar 2026 — Aug 2026, Senior Data Architect — GCP & Salesforce Data Cloud)
  - SPRCHRGR (Oct 2023 — Nov 2025, Cloud & Data Consultant)
  - Toptal (Dec 2020 — Aug 2025, DBA / Cloud Architect)
  - OSF Digital (Dec 2022 — Aug 2023, DBA / Cloud Consultant)
  - Performax Inc (Jan 2022 — Oct 2022, Cloud Architecture Consultant)
  - OSF Digital (2009 — 2014, Team Lead and Senior DBA)
- **Credential Cleanliness**: Removed defunct/expired external verification links from all 6 credential cards while preserving verified competence badges and monospace code tags.

---

## [v4.2.0] — 2026-11-10
### Fixed
- **Avatar Dimension Blowup**: Fixed 1024px raw sketch avatar expanding across the viewport caused by Cloudflare CDN caching (`max-age=14400`) of stale stylesheets.
- **HTML Inline Constraints**: Added explicit HTML attributes `width="78" height="78"` and inline CSS `style="width:78px; height:78px; max-width:78px; max-height:78px; border-radius:50%; object-fit:cover;"` directly on the `<img>` tag and `.profile-avatar-ring`.
- **Primary Avatar Source**: Switched primary image from 1MB `pz.jpeg` to lightweight, crisp `pz_small.jpg` (256×256, 11KB).
- **Global Image Reset**: Added `img, svg, picture, video, canvas { max-width: 100%; height: auto; display: block; }` in `static/css/main.css`.

### Added
- **Cloudflare Cache-Busting**: Added `?v={{ now.Unix }}` dynamic timestamp parameter to CSS and JS link tags in `layouts/index.html` and `layouts/_default/baseof.html` to instantly bypass Cloudflare edge cache.
- **LinkedIn Profile Synchronization**: Updated all LinkedIn URLs across templates, content markdown, and theme configuration to `https://www.linkedin.com/in/datacloudarchitect/`.

---

## [v4.1.0] — 2026-11-10
### Changed
- **Eliminated 3D Perspective Glitch**: Removed erratic 3D CSS perspective card rotation (`#founder-flip-card`) in favor of a smooth tabbed view switcher (`Executive Overview` vs `Core Tech Stack`) with opacity crossfade.
- **Personal Profile Focus**: Removed duplicated company bento pitches to ensure site remains 100% focused on Paul's personal track record, experience, and credentials.
- **Keystone Cloud Gateway**: Added a dedicated gateway banner linking visitors cleanly to `https://keystonecloud.org/` for enterprise consulting.

### Retained
- **Direct Collaboration CTA**: Preserved the high-impact intake card, one-click email copying, and interactive 4-step intake modal with Cal.com integration.

---

## [v4.0.0] — 2026-11-10
### Fixed
- **CI/CD Pipeline Upgrade**: Modernized `.github/workflows/hugo.yml` by replacing deprecated GitHub Actions (`actions/checkout@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`), resolving Pages deployment failures.

### Added
- **Safety Snapshot**: Pushed untouched backup branch `backup-main` to `origin/backup-main` (SHA `b116eac`).
