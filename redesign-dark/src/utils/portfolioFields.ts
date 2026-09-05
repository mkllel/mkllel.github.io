import type { PortfolioResourceLink } from './firebase';

export const normalizeResourceLinks = (resources: PortfolioResourceLink[]): PortfolioResourceLink[] =>
  resources.filter(resource => resource.url.trim()).map(resource => {
    const label = resource.label?.trim();
    return { url: resource.url.trim(), ...(label ? { label } : {}) };
  });
