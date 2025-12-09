# Lume Personal Website Template

A modern, flexible personal website template built with [Lume](https://lume.land/) (Deno's static site generator), designed for developers, designers, consultants, and creators who want a professional web presence without the complexity.

Built with Tailwind CSS and VTO templates. Featured in the [Lume Showcase](https://lume.land/showcase/).

**[View Live Demo](https://lume-personal-site.hirefrank.deno.net/)** | **[Read Full Documentation](TEMPLATE.md)**

## Features

- **Responsive, mobile-first design** - Looks great on all devices
- **Blog/writings section** - Full markdown support with syntax highlighting
- **Projects showcase** - Display your work with emoji icons and descriptions
- **Services/coaching section** - Optional pricing cards, testimonials, and FAQs
- **Video embeds** - Showcase talks, demos, or content with metadata
- **Social links** - Connect all your profiles (GitHub, Twitter, LinkedIn, etc.)
- **URL redirects** - Create short links and vanity URLs
- **SEO optimized** - Automatic sitemap, robots.txt, and meta tags
- **Fast & lightweight** - Built with Deno and modern web standards

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

This template works with any hosting platform. Choose what fits your needs:

### Option 1: Deno Deploy (Recommended)

Best for dynamic features like redirects and on-demand rendering.

1. Push your repository to GitHub
2. Connect to [Deno Deploy](https://deno.com/deploy)
3. Deno Deploy auto-detects Lume and builds automatically
4. Done! Your site is live

### Option 2: Static Hosting

Perfect for Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.

```bash
deno task build
# Upload the _site/ folder to your hosting provider
```

### Option 3: Server with serve.ts

Run your own server with full control over middleware.

```bash
deno task build
deno run --allow-net --allow-read serve.ts
```

## Customization Checklist

Essential setup:
- [ ] Edit `content/_site.yml` with your info (name, email, domain, social links)
- [ ] Replace `content/static/images/profile.jpg` with your photo
- [ ] Replace `content/static/favicon.ico` with your favicon
- [ ] Update pages in `content/pages/` (home, about, etc.)
- [ ] Update or remove projects in `content/_data.yml`
- [ ] Add your writings to `content/writings/`

Optional:
- [ ] Configure redirects in `content/_redirects.yml`
- [ ] Customize colors in `content/styles.css`
- [ ] Update coaching section (pricing, testimonials, FAQs) or remove it

## Documentation

See [TEMPLATE.md](TEMPLATE.md) for:
- Complete configuration reference
- Content structure guide
- Styling customization
- Deployment instructions

## Why This Template?

This template was created to solve a common problem: setting up a personal website shouldn't require days of configuration. It provides:

- **Configuration over code** - Customize via YAML files, no need to edit templates
- **Sensible defaults** - Looks professional out of the box
- **Easy to extend** - Built on Lume's powerful plugin system
- **Deploy anywhere** - Works with Deno Deploy, Netlify, Vercel, GitHub Pages, etc.

Perfect for:
- 👩‍💻 Developers showcasing projects and technical writing
- 🎨 Designers building a portfolio
- 💼 Consultants offering services with testimonials
- 🎓 Educators sharing content and courses
- ✍️ Writers maintaining a blog

## License

MIT License - use freely for personal or commercial projects.

## Support

- **Documentation**: See [TEMPLATE.md](TEMPLATE.md) for detailed guides
- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/hirefrank/lume-personal-site/issues)
- **Lume Docs**: [lume.land/docs](https://lume.land/docs/)

Built with ❤️ using [Lume](https://lume.land/).
