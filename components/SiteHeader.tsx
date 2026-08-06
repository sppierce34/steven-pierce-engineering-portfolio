import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Steven Pierce home">
          <span className="brand-mark">SP</span>
          <span className="brand-copy">
            <strong>Steven Pierce</strong>
            <small>Software engineer</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#projects">Projects</Link>
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
