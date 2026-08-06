import type { Metadata } from "next";
import { ProjectCard } from "../components/ProjectCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Steven Pierce | Junior Software Engineer",
  description:
    "Production software projects by Steven Pierce across web, mobile, cloud, and computer vision.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="signal-dot" /> Junior software engineer
            </p>
            <h1>
              Software for the
              <br />
              <span>real world.</span>
            </h1>
            <p className="hero-lede">
              I build and operate full-stack, mobile, cloud, and computer-vision
              products—from the camera on the runway to the application in a
              customer&apos;s hand.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="/Steven-Pierce-Resume.pdf" target="_blank">
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-console" aria-label="Engineering profile summary">
            <div className="console-topline">
              <span>engineer.profile</span>
              <span className="console-live">AVAILABLE</span>
            </div>
            <div className="console-grid">
              <div>
                <span className="console-label">FOCUS</span>
                <strong>Production software</strong>
                <p>Web, mobile, cloud, vision</p>
              </div>
              <div>
                <span className="console-label">EDUCATION</span>
                <strong>Georgia Tech</strong>
                <p>M.S. Computer Science, Fall 2026</p>
              </div>
              <div>
                <span className="console-label">AI WORKFLOW</span>
                <strong>Agent-assisted</strong>
                <p>Codex, Claude Code, Cursor</p>
              </div>
              <div>
                <span className="console-label">LOCATION</span>
                <strong>Michigan</strong>
                <p>Open to junior engineering roles</p>
              </div>
            </div>
            <div className="console-stack">
              {[
                "Python",
                "TypeScript",
                "React Native",
                "Cloudflare",
                "Computer Vision",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Portfolio proof points">
          <div className="shell proof-grid">
            <div>
              <strong>03</strong>
              <span>Production case studies</span>
            </div>
            <div>
              <strong>Web + native</strong>
              <span>Shared cross-platform systems</span>
            </div>
            <div>
              <strong>AI-assisted</strong>
              <span>Specification through verification</span>
            </div>
            <div>
              <strong>End to end</strong>
              <span>Product, code, releases, operations</span>
            </div>
          </div>
        </section>

        <section className="projects-section shell" id="projects">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects that ship.</h2>
            </div>
            <p>
              Each project began with a real operational problem and grew into a
              working product with users, infrastructure, and release discipline.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="shell process-layout">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>AI speed, engineering judgment.</h2>
              <p className="process-lede">
                I use coding agents to move faster through implementation,
                debugging, testing, and documentation—while keeping product intent,
                system safety, and verification explicit.
              </p>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Define the operating problem</strong>
                  <p>Start with users, constraints, failure modes, and a testable outcome.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Build in verified slices</strong>
                  <p>Use Codex, Claude Code, and Cursor with scoped tasks and reviewable changes.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Run the whole system</strong>
                  <p>Test, release, monitor, document, and improve against live behavior.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
