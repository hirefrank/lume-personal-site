# Lume Personal Website Template

A modern, customizable personal website template built with [Lume](https://lume.land/) (Deno's static site generator), Tailwind CSS, and VTO templates.

Featured in the [Lume Template Showcase](https://lume.land/showcase/).

## Features

- Responsive, mobile-first design
- Blog/writings section with markdown support
- Projects showcase with emoji icons
- Coaching/services section with pricing cards
- Testimonials and FAQ components
- Video embeds with metadata
- Privacy-first analytics support (optional)
- Configurable social links
- URL redirects and short links
- Automatic sitemap and robots.txt

## Quick Start

```bash
# Clone the template
git clone https://github.com/hirefrank/lume-personal-site.git my-website
cd my-website

# Install Deno (if needed)
# https://deno.land/manual/getting_started/installation

# Configure your site
# Edit content/_site.yml with your information

# Run locally
deno task serve

# Build for production
deno task build
```

## Configuration

All site personalization is done in `content/_site.yml`:

```yaml
name: "Your Name"
handle: "yourhandle"
email: "hello@example.com"
domain: "example.com"
tagline: "Your tagline here"
profile_image: "/images/profile.jpg"

social:
  github: "username"
  twitter: "username"
  linkedin: "in/username"
```

See [TEMPLATE.md](TEMPLATE.md) for complete documentation.

## Project Structure

```
├── _config.ts              # Lume configuration
├── serve.ts                # Production server
├── content/
│   ├── _site.yml          # Site configuration
│   ├── _data.yml          # Content data (projects, plans, etc.)
│   ├── _redirects.yml     # URL redirects
│   ├── _includes/         # Templates (VTO)
│   ├── pages/             # Main pages (markdown)
│   ├── writings/          # Blog posts
│   ├── videos/            # Video embeds
│   └── static/            # Assets (images, fonts, favicon)
└── lib/
    ├── plugins.ts         # Lume plugins
    ├── types.ts           # TypeScript interfaces
    └── middleware/        # Server middleware
```

## Technologies

- [Deno](https://deno.land/) - JavaScript/TypeScript runtime
- [Lume](https://lume.land/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [VTO](https://lume.land/plugins/vento/) - Template engine

## Deployment

### Deno Deploy

1. Push to GitHub
2. Connect to [Deno Deploy](https://deno.com/deploy)
3. Set entry point: `serve.ts`

### Static Hosting

```bash
deno task build
# Deploy _site/ folder to Netlify, Vercel, GitHub Pages, etc.
```

## Customization Checklist

- [ ] Edit `content/_site.yml` with your info
- [ ] Replace `content/static/images/profile.jpg`
- [ ] Replace `content/static/favicon.ico`
- [ ] Update pages in `content/pages/`
- [ ] Update projects in `content/_data.yml`
- [ ] Configure redirects in `content/_redirects.yml`
- [ ] Customize colors in `content/styles.css`

## Documentation

See [TEMPLATE.md](TEMPLATE.md) for:
- Complete configuration reference
- Content structure guide
- Styling customization
- Deployment instructions

## License

MIT License - use freely for personal or commercial projects.

## Credits

Originally created by [Frank Harris](https://hirefrank.com). Built with [Lume](https://lume.land/).
