import { PORTFOLIO_HOME_URL } from "../lib/site-urls";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-kicker">Let&apos;s build something useful.</p>
          <a className="footer-email" href="mailto:sppierce34@yahoo.com">
            sppierce34@yahoo.com
          </a>
        </div>
        <div className="footer-links">
          <a href={`${PORTFOLIO_HOME_URL}/#projects`}>Projects</a>
          <a href="/Steven-Pierce-Resume.pdf" target="_blank">
            Résumé
          </a>
          <a href="https://github.com/sppierce34" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
