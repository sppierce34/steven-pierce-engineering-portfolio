import { PORTFOLIO_HOME_URL } from "../lib/site-urls";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={PORTFOLIO_HOME_URL} aria-label="Steven Pierce home">
          <span className="brand-mark">SP</span>
          <span className="brand-copy">
            <strong>Steven Pierce</strong>
            <small>Software engineer</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href={`${PORTFOLIO_HOME_URL}/#projects`}>Projects</a>
          <a href="mailto:sppierce34@yahoo.com">Contact</a>
          <a
            className="nav-pill"
            href="https://github.com/sppierce34"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
