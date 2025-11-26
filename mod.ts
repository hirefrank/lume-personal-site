/**
 * Lume Personal Website Template
 *
 * This module enables remote installation of the template.
 * Users can import this theme directly from a URL.
 *
 * Usage:
 * ```ts
 * import lume from "lume/mod.ts";
 * import theme from "https://deno.land/x/lume_personal_template/mod.ts";
 *
 * const site = lume();
 * site.use(theme());
 *
 * export default site;
 * ```
 */

import type { Site } from 'lume/core/site.ts';

export interface ThemeOptions {
  /**
   * Override the source directory for theme files
   * @default "./content"
   */
  src?: string;
}

/**
 * Configure the personal website theme
 */
export default function theme(options: ThemeOptions = {}) {
  return (site: Site) => {
    const { src = './content' } = options;

    // Add remote files from this theme
    // These are the template files that make up the theme
    site
      .remoteFile('_includes/base.vto', import.meta.resolve('./content/_includes/base.vto'))
      .remoteFile('_includes/simple.vto', import.meta.resolve('./content/_includes/simple.vto'))
      .remoteFile('_includes/social.vto', import.meta.resolve('./content/_includes/social.vto'))
      .remoteFile('_includes/projects.vto', import.meta.resolve('./content/_includes/projects.vto'))
      .remoteFile('_includes/coaching.vto', import.meta.resolve('./content/_includes/coaching.vto'))
      .remoteFile('_includes/calendar.vto', import.meta.resolve('./content/_includes/calendar.vto'))
      .remoteFile('_includes/intro.vto', import.meta.resolve('./content/_includes/intro.vto'))
      .remoteFile('styles.css', import.meta.resolve('./content/styles.css'));

    // Copy static assets
    site.copy('static', './');
  };
}

export { theme };
