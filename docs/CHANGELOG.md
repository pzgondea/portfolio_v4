# CHANGELOG — Architecture & Deployment Milestones

All notable changes and architectural transitions for the Paul Zgondea executive portfolio (`paul.zgondea.com`) are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [v4.4.3] — 2026-11-10
### Fixed
- **AWS Dark Mode Logo Contrast**: Changed the AWS text fill color from dark navy (`#252F3E`) to crisp white (`#FFFFFF`) in `aws_3.svg`, `aws.svg`, and `aws_small.svg`, ensuring the "aws" lettering is sharply legible against dark obsidian cards while preserving the signature orange smile arrow.

---

## [v4.4.2] — 2026-11-10
### Changed
- **Official Microsoft Certification Badges**: Upgraded Cards 1 and 2 from generic corporate wordmarks to the official Microsoft Certified Expert vector badge lockup (`microsoft_certified_shield_lockup.svg`) featuring the authentic blue-navy Expert shield with stars and silver banner.
- **De-cluttered Credentials Grid**: Removed noisy, repetitive green status pills (`CHARTER CERTIFICATION`, `ACTIVE CERTIFICATION`) from cards 1–5 to achieve a clean, executive aesthetic. Replaced Toptal's status pill with an understated inline `View Public Profile ↗` link (`.toptal-link`).
- **Harmonized Card Sizing**: Standardized `.cred-header` and `.cred-logo-wrapper` min-height to 42px and `.cred-logo` to 38px height with 170px max-width across all 6 credential cards.

---

## [v4.4.1] — 2026-11-10
### Changed
- **Modern Microsoft Credential Icons**: Replaced legacy 23×23 `#f3f3f3` grey-box Microsoft icon with official, transparent-background modern Microsoft vector wordmark (`static/lib/images/Microsoft_logo.svg`) perfectly scaled to `.cred-logo` specifications (32px height, 130px max width).
- **Official Microsoft Certification Assets**: Integrated official Microsoft Learn Expert badge vector (`microsoft_certified_expert.svg`) and modern brand lockup assets into repository assets.

---

## [v4.4.0] — 2026-11-10
### Fixed
- **Intake Funnel Data Loss**: Captured environment, objective, and briefing notes from steps 1–3 and formatted them into a structured brief displayed in step 4, prefilling Cal.com query parameters (`?notes=...`) and direct links, plus adding a one-click "Copy Brief" utility.
- **Modal Keyboard Focus Trap**: Trapped Tab navigation inside active modal and restored focus to triggering button on modal dismissal (Escape or click).
- **Articles Template Rendering**: Created `layouts/posts/single.html` to override the theme layout and render architectural essays with matching dark obsidian aesthetics and direct consultation CTA.

### Changed
- **Removed Informal Channels**: Removed Telegram and Skype links from hero quick-connect, about page, and footer channels to reinforce executive enterprise positioning.
- **First-Person Executive Voice**: Rewrote all profile copy (hero bio, about page, and bottom CTA) from third-person agency phrasing to authoritative first-person executive voice.
- **Grounded Credentials**: Replaced unverified checkmark badges with grounded charter/certification tags and added a direct public profile link to the Toptal card.
- **Outcome-Driven Experience**: Enhanced career bullets across 9 roles with concrete uptime SLAs, cutover metrics, and FinOps outcomes while keeping prose concise.
- **WCAG AA Accessibility & Typography**: Upgraded `--text-dim` contrast to `#94a3b8` (>5:1 ratio), bumped sub-12px micro-fonts to ≥0.75rem, added visible focus outlines, ARIA tab roles, and `@media (prefers-reduced-motion: reduce)`.

### Added
- **Optimized Social Card (`og:image`)**: Generated 1200×630 branded social share card `static/lib/images/og_card.jpg` (62KB, down from 1.1MB raw headshot) for LinkedIn, X, and Slack link previews.
- **Robots.txt & Sitemap Linking**: Enabled `enableRobotsTXT = true` in `hugo.toml` and added `layouts/robots.txt` referencing `sitemap.xml`.
- **Navigation Articles Link**: Added "Articles" link in main navigation bar, mobile drawer, and footer linking to "A Wild Ride: 18 Years in Data, 8 Years in the Cloud".

---

## [v4.3.0] — 2026-11-10
### Added
- **Complete Favicon Suite**: Generated and deployed custom obsidian brand monogram (`PZ`) favicons across all modern formats: `favicon.svg`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png` (180x180), and multi-frame `favicon.ico`.
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
