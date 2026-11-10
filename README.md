# Paul Zgondea — Executive Portfolio V4

[![Deploy Hugo site to Pages](https://github.com/pzgondea/portfolio_v4/actions/workflows/hugo.yml/badge.svg)](https://github.com/pzgondea/portfolio_v4/actions/workflows/hugo.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-paul.zgondea.com-22d3ee?style=flat&logo=cloudflare)](https://paul.zgondea.com/)
[![Hugo Extended](https://img.shields.io/badge/Hugo-v0.114.0-ff4088?style=flat&logo=hugo)](https://gohugo.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-datacloudarchitect-0a66c2?style=flat&logo=linkedin)](https://www.linkedin.com/in/datacloudarchitect/)

Executive architecture portfolio and personal profile of **Paul Zgondea** — Principal Cloud & Data Architect with **18+ years in enterprise data architecture**, **8+ years in cloud architecture & SRE**, and **2+ years in enterprise AI Ops & agentic workflows**.

Live production site: **[https://paul.zgondea.com/](https://paul.zgondea.com/)**

---

## Key Highlights

- **Executive Focus**: Centered strictly on Paul's personal track record, enterprise competencies, verified certifications, and career achievements.
- **Glitch-Free Dual-View Showcase**: Interactive tabbed switcher allowing visitors to toggle smoothly between an *Executive Overview* and the *Core Tech Stack*.
- **Gateway to Keystone Cloud**: Clean link-out banner connecting enterprise prospects to [Keystone Cloud Architects](https://keystonecloud.org/).
- **Architecture Intake Flow**: Interactive multi-step consultation modal with integrated Cal.com scheduling.
- **Cloudflare Edge Cache-Busting**: Dynamic timestamp query parameters (`?v={{ now.Unix }}`) ensure zero stale-asset lag.
- **Defensive Image Sizing**: Triple-layer bounding (HTML inline sizing, parent ring overflow containment, and global CSS reset) guarantees avatar rendering stability.

---

## Repository Structure

```
├── .github/workflows/
│   └── hugo.yml             # Modern GitHub Actions CI/CD pipeline for GitHub Pages
├── content/
│   └── about/index.en.md    # Markdown source for the /about page
├── layouts/
│   ├── index.html           # Master landing page layout and interaction markup
│   └── _default/
│       └── baseof.html      # Shell template for standard content pages
├── static/
│   ├── css/main.css         # Obsidian dark theme stylesheet and custom properties
│   ├── js/main.js           # Client interaction engine (spotlight, tabs, intake modal)
│   └── lib/images/          # Optimized vector and bitmap image assets
├── docs/
│   └── CHANGELOG.md         # Detailed release history and milestone transitions
├── scripts/
│   └── validate-docs.py     # Pre-commit documentation validator
├── hugo.toml                # Hugo site configuration and metadata
├── MIND_MAP.md              # Durable single-line concept graph (Orientation Tier 1)
├── MIND_MAP_FORMAT.md       # Format specification for MIND_MAP.md
├── AGENTS.md                # Agent instructions and operating rules
└── README.md                # Project overview and quick start guide
```

---

## Local Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) (`>= 0.114.0`)
- Git

### Build & Serve
```bash
# Clone repository
git clone https://github.com/pzgondea/portfolio_v4.git
cd portfolio_v4

# Run local development server
hugo server -D

# Test production minified build
hugo --gc --minify
```

### Documentation Validation
Validate that repository documentation strictly conforms to the grammar specification:
```bash
python3 scripts/validate-docs.py
```

---

## Documentation System

This repository follows a clean, structured documentation model:
- **[MIND_MAP.md](MIND_MAP.md)**: High-level durable orientation graph with navigational hubs `[1-5]`.
- **[MIND_MAP_FORMAT.md](MIND_MAP_FORMAT.md)**: Format specification defining single-line node grammar.
- **[AGENTS.md](AGENTS.md)**: Guidelines and operational instructions for developers and coding assistants.
- **[docs/CHANGELOG.md](docs/CHANGELOG.md)**: Release milestones and architectural transition logs.

---

## Safety & Backups

The branch `backup-main` is maintained as an untouched, verified fallback snapshot of the pre-revamp repository state (`origin/backup-main`).