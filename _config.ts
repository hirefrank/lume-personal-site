import lume from 'lume/mod.ts';
import plugins from './lib/plugins.ts';
import { redirects, notFound } from './lib/middleware.ts';
import { parse as parseYaml } from 'lume/deps/yaml.ts';
import type { SiteConfig } from './lib/types.ts';

// Load site configuration from _site.yml
const siteConfigPath = './content/_site.yml';
const siteConfigText = await Deno.readTextFile(siteConfigPath);
const siteConfig = parseYaml(siteConfigText) as SiteConfig;

// Determine the site URL
const siteUrl = Deno.env.get('SITE_DOMAIN')
  ? `https://${Deno.env.get('SITE_DOMAIN')}`
  : `https://${siteConfig.domain}`;

const site = lume({
  src: './content',
  location: new URL(siteUrl),
  server: {
    middlewares: [redirects, notFound()],
  },
});

const pageConfigs: Array<{ path: string; layout: string; tags?: string[]; indexable?: boolean }> = [
  { path: '/pages', layout: 'simple.vto' },
  { path: '/writings', layout: 'simple.vto', tags: ['writing'] },
  { path: '/videos', layout: 'simple.vto', tags: ['video'], indexable: true },
];

pageConfigs.forEach(({ path, layout, tags, indexable }) => {
  site.data('layout', layout, path);
  if (tags) site.data('tags', tags, path);
  if (indexable) site.data('indexable', indexable, path);
});

// Make site config available to templates
site.data('site', {
  title: siteConfig.name,
  name: siteConfig.handle,
  description: siteConfig.tagline,
  email: siteConfig.email,
  domain: siteConfig.domain,
  profile_image: siteConfig.profile_image,
});

// Make siteConfig available for advanced template usage
site.data('siteConfig', siteConfig);

site.use(plugins());

export default site;
export { siteConfig };
