# Lume Personal Website Template - Complete Guide

A modern, customizable personal website template built with [Lume](https://lume.land/) (Deno's static site generator), Tailwind CSS, and VTO templates.

This comprehensive guide covers everything you need to set up and customize your personal website. For a quick overview, see [README.md](README.md).

## Features

- Responsive design with mobile-first approach
- Blog/writings section with markdown support
- Video embeds with metadata
- Projects showcase
- Coaching/services section with pricing cards
- Testimonials and FAQ sections
- Privacy-first analytics support (optional)
- Configurable social links
- URL redirects and short links
- Automatic sitemap and robots.txt generation
- Deploy to Deno Deploy, Netlify, Vercel, or any static host

## Quick Start

### 1. Clone and Install

```bash
# Clone the template
git clone https://github.com/hirefrank/lume-personal-site.git my-website
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

### Coaching/Services Section

The coaching page includes pricing cards, testimonials, and FAQs. Customize or remove by:

1. Editing `plans`, `testimonials`, `faqs` in `_data.yml`
2. Updating `content/_includes/coaching.vto`
3. Removing `/coaching/` from sections if not needed

---

## Deployment

### Deno Deploy (Recommended)

**Step 1: Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

**Step 2: Create Deno Deploy Project**

1. Go to [Deno Deploy](https://dash.deno.com/)
2. Click "New Project"
3. Select "Deploy from GitHub repository"
4. Authorize Deno Deploy to access your GitHub account
5. Select your repository
6. Configure the project:
   - **Entry Point**: `serve.ts`
   - **Install Step**: Leave blank (Deno handles dependencies automatically)
7. Click "Deploy"

**Step 3: Configure Custom Domain (Optional)**

1. In your Deno Deploy project settings, go to "Domains"
2. Click "Add Domain"
3. Enter your domain name
4. Add the provided DNS records to your domain registrar
5. Wait for DNS propagation (usually 5-30 minutes)

**Step 4: Environment Variables (Optional)**

In Deno Deploy project settings, add environment variables if needed:
- `SITE_DOMAIN`: Your custom domain (e.g., `example.com`) - only needed if you want to override the default

### Netlify

**Step 1: Build the Site**

```bash
deno task build
```

**Step 2: Deploy via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=_site
```

**Or Deploy via Netlify UI:**

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `_site` folder

**Step 3: Configure Build Settings (for automatic deployments)**

In `netlify.toml` (create at project root):

```toml
[build]
  command = "curl -fsSL https://deno.land/install.sh | sh && /opt/buildhome/.deno/bin/deno task build"
  publish = "_site"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

**Step 1: Build the Site**

```bash
deno task build
```

**Step 2: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Step 3: Configure Build Settings**

Create `vercel.json` at project root:

```json
{
  "buildCommand": "curl -fsSL https://deno.land/install.sh | sh && ~/.deno/bin/deno task build",
  "outputDirectory": "_site",
  "installCommand": "echo 'No install needed'"
}
```

### GitHub Pages

**Step 1: Create GitHub Action**

Create `.github/workflows/gh-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Deno
        uses: denoland/setup-deno@v2
        with:
          deno-version: v2.x

      - name: Build
        run: deno task build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Enable GitHub Pages**

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to main branch to trigger deployment

Your site will be available at `https://yourusername.github.io/your-repo/`

### Cloudflare Pages

**Step 1: Push to GitHub**

```bash
git push
```

**Step 2: Create Cloudflare Pages Project**

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub account and select your repository
4. Configure build settings:
   - **Build command**: `curl -fsSL https://deno.land/install.sh | sh && /opt/buildhome/.deno/bin/deno task build`
   - **Build output directory**: `_site`
   - **Root directory**: Leave empty
5. Click "Save and Deploy"

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
└── lib/
    ├── plugins.ts         # Lume plugins
    ├── types.ts           # TypeScript interfaces
    └── middleware/        # Server middleware
```

---

## Customization Checklist

### Essential Setup (Required)

- [ ] Update `content/_site.yml` with your information:
  - [ ] `name` - Your full name
  - [ ] `handle` - Your username/handle
  - [ ] `email` - Contact email address
  - [ ] `domain` - Your domain name
  - [ ] `tagline` - Site description for meta tags
- [ ] Replace `content/static/images/profile.jpg` with your photo
- [ ] Replace `content/static/favicon.ico` with your favicon
- [ ] Update social media links in `content/_site.yml`
- [ ] Edit `content/pages/home.md` with your homepage content
- [ ] Edit `content/pages/about.md` with your background
- [ ] Update projects list in `content/_data.yml` or remove draft projects
- [ ] Configure navigation sections in `content/_data.yml` (remove pages you don't need)

### Content (Recommended)

- [ ] Add your writings/blog posts to `content/writings/`
- [ ] Remove or publish draft writings
- [ ] Add your videos to `content/videos/` (or remove the section)
- [ ] Update or remove the coaching section in `content/_data.yml`:
  - [ ] Pricing plans
  - [ ] Testimonials
  - [ ] FAQs

### Optional Customization

- [ ] Set up custom redirects in `content/_redirects.yml`
- [ ] Customize color scheme in `content/styles.css`
- [ ] Configure alternative domains in `content/_site.yml`
- [ ] Add booking links (Cal.com, etc.) in `content/_site.yml` services section
- [ ] Update fonts in `lib/plugins.ts` if desired
- [ ] Test build locally: `deno task build`
- [ ] Test server locally: `deno task serve`

### Deployment

- [ ] Push code to GitHub
- [ ] Deploy to Deno Deploy or your preferred hosting platform
- [ ] Configure custom domain (if applicable)
- [ ] Test all pages and redirects in production
- [ ] Update README.md with your project information

---

## License

MIT License - Feel free to use this template for personal or commercial projects.

---

## Support & Community

- **Documentation**: This guide and [README.md](README.md)
- **Lume Documentation**: [lume.land/docs](https://lume.land/docs/)
- **Issues & Feature Requests**: [GitHub Issues](https://github.com/hirefrank/lume-personal-site/issues)
- **Lume Discord**: [Join the community](https://discord.gg/YbTmpACHWB)

## Credits

Built with:
- [Lume](https://lume.land/) - Static site generator for Deno
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [VTO](https://lume.land/plugins/vento/) - Template engine

## Contributing

Contributions are welcome! If you find bugs or have ideas for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the existing style and patterns.
