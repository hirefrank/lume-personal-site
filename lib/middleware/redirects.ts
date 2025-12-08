import redirectsMiddleware from 'lume/middlewares/redirects.ts';
import { parse as parseYaml } from 'lume/deps/yaml.ts';

interface RedirectEntry {
  from: string;
  to: string;
  code?: 301 | 302 | 303 | 307 | 308 | 200;
}

interface RedirectsConfig {
  redirects: RedirectEntry[];
}

// Load redirects from YAML config file
let redirectsConfig: RedirectsConfig = { redirects: [] };

try {
  const configPath = './content/_redirects.yml';
  const configText = await Deno.readTextFile(configPath);
  redirectsConfig = parseYaml(configText) as RedirectsConfig;
} catch (error) {
  // Config file doesn't exist or is invalid - use empty redirects
  // This is normal for fresh installs
}

// Convert array format to the object format Lume expects
type RedirectValue = string | { to: string; code: 301 | 302 | 303 | 307 | 308 | 200 };
const definitions: Record<string, RedirectValue> = {};

if (redirectsConfig.redirects && Array.isArray(redirectsConfig.redirects)) {
  for (const redirect of redirectsConfig.redirects) {
    if (redirect.from && redirect.to) {
      if (redirect.code && redirect.code !== 301) {
        definitions[redirect.from] = {
          to: redirect.to,
          code: redirect.code,
        };
      } else {
        definitions[redirect.from] = redirect.to;
      }
    }
  }
}

export { definitions };

export default redirectsMiddleware({
  redirects: definitions,
  strict: false,
});
