export const PORTFOLIO_HOME_URL = "https://portfolio.meetregistrationpv.com";

const PORTFOLIO_ORIGINS = {
  "portfolio.meetregistrationpv.com": PORTFOLIO_HOME_URL,
  "portfolio.landoncheckin.com": "https://portfolio.landoncheckin.com",
  "portfolio.pole-rental.com": "https://portfolio.pole-rental.com",
} as const;

export const HOST_ROOT_PROJECTS = {
  "portfolio.landoncheckin.com": "/projects/video-capture",
  "portfolio.pole-rental.com": "/projects/pole-rental",
} as const;

export function rootProjectPathForHost(hostname: string): string | undefined {
  return HOST_ROOT_PROJECTS[
    normalizedHostname(hostname) as keyof typeof HOST_ROOT_PROJECTS
  ];
}

export function portfolioOriginForHost(hostname: string | null): string {
  if (!hostname) return PORTFOLIO_HOME_URL;

  return (
    PORTFOLIO_ORIGINS[
      normalizedHostname(hostname) as keyof typeof PORTFOLIO_ORIGINS
    ] ?? PORTFOLIO_HOME_URL
  );
}

function normalizedHostname(hostname: string): string {
  return hostname.trim().toLowerCase().replace(/:\d+$/, "");
}
