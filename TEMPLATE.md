# Lume Personal Website Template

A modern, customizable personal website template built with [Lume](https://lume.land/) (Deno's static site generator), Tailwind CSS, and VTO templates.

## Features

- Responsive design with mobile-first approach
- Blog/writings section with markdown support
- Video embeds with metadata
- Projects showcase
- Coaching/services section with pricing cards
- Testimonials and FAQ sections
- AI-powered intro email generator (optional)
- Privacy-first analytics support (optional)
- Configurable social links
- URL redirects and short links
- Automatic sitemap and robots.txt generation
- Deploy to Deno Deploy, Netlify, Vercel, or any static host

## Quick Start

### 1. Clone and Install

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git my-website
cd my-website

# Install Deno if you haven't already
# https://deno.land/manual/getting_started/installation
```

### 2. Configure Your Site

Edit `content/_site.yml` with your information:

```yaml
# Site Identity
name: "Your Name"
handle: "yourhandle"
email: "hello@example.com"
domain: "example.com"
tagline: "Your tagline here"
profile_image: "/images/profile.jpg"

# Social Media Links
social:
  github: "username"
  twitter: "username"
  linkedin: "in/username"
  # ... add or remove platforms as needed
```

### 3. Add Your Content

1. **Profile Image**: Replace `content/static/images/profile.jpg` with your photo
2. **Favicon**: Replace `content/static/favicon.ico`
3. **Pages**: Edit markdown files in `content/pages/`
4. **Writings**: Add blog posts to `content/writings/`
5. **Projects**: Update the projects list in `content/_data.yml`

### 4. Run Locally

```bash
deno task serve
```

Open http://localhost:3000 in your browser.

### 5. Deploy

```bash
deno task build
```

The built site will be in `_site/`. Deploy this folder to your hosting provider.

---

## Configuration Reference

### Site Configuration (`content/_site.yml`)

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Your full name (used in footer, meta tags) | Yes |
| `handle` | Your handle/username (displayed in logo) | Yes |
| `email` | Contact email address | Yes |
| `domain` | Your domain without https:// | Yes |
| `tagline` | Short description for meta tags | Yes |
| `profile_image` | Path to profile photo | Yes |
| `social.*` | Social media usernames | No |
| `services.*` | External booking URLs | No |
| `analytics.*` | Analytics configuration | No |
| `alt_domains` | Alternative domain redirects | No |

### Social Media Platforms

Supported platforms in `social`:

| Platform | Format | Example |
|----------|--------|---------|
| `github` | username | `"octocat"` |
| `twitter` | username | `"jack"` |
| `instagram` | username | `"instagram"` |
| `linkedin` | full path | `"in/satyanadella"` |
| `bluesky` | handle | `"jay.bsky.team"` |
| `mastodon` | username | `"Gargron"` |
| `youtube` | handle | `"Google"` |

Leave empty or remove lines for platforms you don't use.

### Analytics

```yaml
analytics:
  simple_analytics: true          # Enable Simple Analytics
  simple_analytics_domain: ""     # Custom domain (optional)
  vector_id: "your-vector-id"     # Vector analytics ID
```

Set values to empty strings or `false` to disable.

### Alternative Domains

Redirect other domains to specific pages:

```yaml
alt_domains:
  - domain: "otherdomain.com"
    redirect_to: "/coaching/"
    ref: "otherdomain"  # Optional: adds ?ref=otherdomain
```

---

## Content Structure

### Pages (`content/pages/`)

Main site pages as markdown files:

```markdown
---
title: About
description: Learn more about me
url: /about/
layout: base.vto
indexable: true
---

Your content here...
```

### Writings (`content/writings/`)

Blog posts with frontmatter:

```markdown
---
title: My First Post
description: A brief description
date: 2024-01-15
---

Post content...
```

### Videos (`content/videos/`)

Video embeds with metadata:

```markdown
---
title: Video Title
description: Video description
youtube_id: dQw4w9WgXcQ
start: 0
artist: Artist Name
video_title: Original Video Title
date: 2024-01-15
---
```

### Data File (`content/_data.yml`)

Configure navigation sections, projects, pricing plans, testimonials, and FAQs.

#### Sections (Navigation)

```yaml
sections:
  - url: '/'
    label: 'Home'
    show: false        # Hide from nav
    includes:
      - 'social.vto'   # Include components
  - url: '/about/'
    label: 'About'
    show: true
```

#### Projects

```yaml
projects:
  - title: 'Project Name'
    summary: 'Brief description'
    date: '2024-01-15'
    emoji: '🚀'
    url: 'https://github.com/...'
    draft: false       # Set true to hide
```

#### Pricing Plans

```yaml
plans:
  - name: Basic
    price: $100
    unit: per month
    description: 'Plan description'
    features:
      - Feature 1
      - Feature 2
```

#### Testimonials

```yaml
testimonials:
  - quote: "Great service!"
    name: Jane Doe
    title: CEO, Company
```

#### FAQs

```yaml
faqs:
  - question: How does this work?
    answer: It works like this...
```

---

## Redirects (`content/_redirects.yml`)

Configure URL redirects and short links:

```yaml
redirects:
  # Short links
  - from: "/cal"
    to: "https://cal.com/yourhandle/meeting"
    code: 302

  # Legacy URLs
  - from: "/old-page/"
    to: "/new-page/"

  # File redirects
  - from: "/resume"
    to: "/extras/resume.pdf"
```

---

## Styling

### Color Customization

Edit CSS variables in `content/styles.css`:

```css
:root {
  --hue: 26;                    /* Base hue for color scheme */
  --canvas: hsl(var(--hue), 20%, 97%);
  --on-canvas: hsl(var(--hue), 20%, 20%);
  --accent: hsl(8, 58%, 52%);   /* Accent color */
}
```

### Fonts

The template uses:
- **Quicksand** - Primary sans-serif font
- **CrimsonPro Italic** - Serif accent font

To change fonts, update `lib/plugins.ts` and add font files to `content/static/fonts/`.

---

## Optional Features

### AI Intro Email Generator

This feature helps visitors craft introduction emails. To enable:

1. Set up OpenAI API key:
   ```bash
   cp .env.example .env
   # Edit .env with your OPENAI_API_KEY
   ```

2. The `/intro/` page will be available

To disable: Remove the intro section from `_data.yml` sections.

### Coaching/Services Section

The coaching page includes pricing cards, testimonials, and FAQs. Customize or remove by:

1. Editing `plans`, `testimonials`, `faqs` in `_data.yml`
2. Updating `content/_includes/coaching.vto`
3. Removing `/coaching/` from sections if not needed

---

## Deployment

### Deno Deploy (Recommended)

1. Push to GitHub
2. Connect repo to [Deno Deploy](https://deno.com/deploy)
3. Set entry point: `serve.ts`
4. Add environment variables if using AI features

### Static Hosting (Netlify, Vercel, etc.)

```bash
deno task build
# Deploy _site/ folder
```

### GitHub Actions

The template includes `.github/workflows/deploy.yml` for automatic deployment.

---

## File Structure

```
├── _config.ts              # Lume configuration
├── serve.ts                # Production server
├── content/
│   ├── _site.yml          # Site configuration (EDIT THIS)
│   ├── _data.yml          # Content data
│   ├── _redirects.yml     # URL redirects
│   ├── _includes/         # Templates
│   │   ├── base.vto       # Main layout
│   │   ├── simple.vto     # Content wrapper
│   │   ├── social.vto     # Social links
│   │   └── ...
│   ├── pages/             # Main pages (markdown)
│   ├── writings/          # Blog posts
│   ├── videos/            # Video embeds
│   └── static/            # Static assets
│       ├── fonts/
│       ├── images/
│       └── favicon.ico
├── lib/
│   ├── plugins.ts         # Lume plugins
│   ├── types.ts           # TypeScript interfaces
│   └── middleware/        # Server middleware
└── intro/                 # AI intro feature (optional)
```

---

## Customization Checklist

- [ ] Update `content/_site.yml` with your information
- [ ] Replace `content/static/images/profile.jpg`
- [ ] Replace `content/static/favicon.ico`
- [ ] Edit `content/pages/home.md` (homepage content)
- [ ] Edit `content/pages/about.md`
- [ ] Update projects in `content/_data.yml`
- [ ] Configure navigation sections in `content/_data.yml`
- [ ] Set up redirects in `content/_redirects.yml` (optional)
- [ ] Configure analytics in `content/_site.yml` (optional)
- [ ] Customize colors in `content/styles.css` (optional)
- [ ] Add your writings to `content/writings/`
- [ ] Set up `.env` for AI features (optional)

---

## License

MIT License - Feel free to use this template for personal or commercial projects.

---

## Credits

Built with:
- [Lume](https://lume.land/) - Static site generator for Deno
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [VTO](https://lume.land/plugins/vento/) - Template engine
