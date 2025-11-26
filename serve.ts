import Server from 'lume/core/server.ts';
import onDemand from 'lume/middlewares/on_demand.ts';
import site, { siteConfig } from './_config.ts';
import { redirects, notFound, cacheBusting } from './lib/middleware.ts';

const server = new Server({
  root: `${Deno.cwd()}/_site`,
  port: 3000,
});

// Domain routing middleware for alternative domains
// Configured via alt_domains in _site.yml
server.use(async (request, next) => {
  const host = request.headers.get('host');

  if (host && siteConfig.alt_domains && Array.isArray(siteConfig.alt_domains)) {
    for (const altDomain of siteConfig.alt_domains) {
      const domainPattern = new RegExp(`^(www\\.)?${altDomain.domain.replace('.', '\\.')}$`);
      if (domainPattern.test(host)) {
        const redirectUrl = `https://${siteConfig.domain}${altDomain.redirect_to}`;
        const ref = altDomain.ref ? `?ref=${altDomain.ref}` : '';
        return new Response(null, {
          status: 302,
          headers: { Location: `${redirectUrl}${ref}` },
        });
      }
    }
  }

  return await next(request);
});

server.use(redirects);
server.use(onDemand({ site }));
server.use(notFound());
server.use(cacheBusting());

server.start();

console.warn('Listening on http://localhost:3000');
