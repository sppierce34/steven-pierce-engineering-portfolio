export const PORTFOLIO_HOME_URL = "https://portfolio.meetregistrationpv.com";

export const HOST_ROOT_PROJECTS = {
  "portfolio.landoncheckin.com": "/projects/video-capture",
  "portfolio.pole-rental.com": "/projects/pole-rental",
} as const;

export function rootProjectPathForHost(hostname: string): string | undefined {
  return HOST_ROOT_PROJECTS[
    hostname.toLowerCase() as keyof typeof HOST_ROOT_PROJECTS
  ];
}
