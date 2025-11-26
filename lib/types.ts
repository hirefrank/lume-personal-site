/**
 * TypeScript interfaces for site configuration and data schemas
 */

// =============================================================================
// Site Configuration (_site.yml)
// =============================================================================

export interface SocialLinks {
  github?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  bluesky?: string;
  mastodon?: string;
  youtube?: string;
}

export interface ExternalServices {
  cal_discovery?: string;
  cal_booking?: string;
  cal_meet?: string;
}

export interface AnalyticsConfig {
  simple_analytics?: boolean;
  simple_analytics_domain?: string;
  vector_id?: string;
}

export interface AltDomain {
  domain: string;
  redirect_to: string;
  ref?: string;
}

export interface SiteConfig {
  name: string;
  handle: string;
  email: string;
  domain: string;
  tagline: string;
  profile_image: string;
  social: SocialLinks;
  services: ExternalServices;
  analytics: AnalyticsConfig;
  alt_domains: AltDomain[];
}

// =============================================================================
// Content Data (_data.yml)
// =============================================================================

export interface Section {
  url: string;
  label: string;
  show: boolean;
  includes?: string[];
}

export interface Project {
  title: string;
  summary: string;
  date: string;
  emoji: string;
  post: string | null;
  url: string | null;
  draft?: string;
}

export interface Plan {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MetasConfig {
  site: string;
  twitter: string;
  icon: string;
  lang: string;
  generator: boolean;
}

export interface SiteData {
  sections: Section[];
  projects: Project[];
  plans: Plan[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  metas: MetasConfig;
}

// =============================================================================
// Redirects Configuration (_redirects.yml)
// =============================================================================

export interface RedirectEntry {
  from: string;
  to: string;
  code?: 301 | 302 | 303 | 307 | 308 | 200;
}

export interface RedirectsConfig {
  redirects: RedirectEntry[];
}
