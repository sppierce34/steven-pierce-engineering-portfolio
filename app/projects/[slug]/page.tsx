import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getProject, projects } from "../../../lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Steven Pierce`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="case-study">
        <section className="case-hero shell">
          <div className="breadcrumb">
            <Link href="/">Work</Link>
            <span aria-hidden="true">/</span>
            <span>{project.number}</span>
          </div>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow">{project.kicker}</p>
              <h1>{project.title}</h1>
              <p className="case-summary">{project.summary}</p>
              <div className="case-actions">
                <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  {project.liveLabel} <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="mailto:sppierce34@yahoo.com">
                  Discuss this project
                </a>
              </div>
            </div>
            <div className="case-facts" aria-label="Project facts">
              <div>
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>
              <div>
                <span>Platforms</span>
                <strong>{project.platforms}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>Source</span>
                <strong>Private repository</strong>
              </div>
            </div>
          </div>
          <figure className="case-image">
            <img src={project.image} alt={project.imageAlt} />
            <figcaption>
              <span>Production interface</span>
              <span>Captured August 2026</span>
            </figcaption>
          </figure>
        </section>

        <section className="case-overview shell">
          <div>
            <p className="eyebrow">The product</p>
            <h2>Built around a real workflow.</h2>
          </div>
          <div className="overview-copy">
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="architecture-section">
          <div className="shell">
            <div className="section-intro architecture-intro">
              <div>
                <p className="eyebrow">Architecture</p>
                <h2>From user action to production service.</h2>
              </div>
              <p>
                A public, high-level view of the system. Credentials, private data,
                deployment identifiers, and source code remain protected.
              </p>
            </div>
            <div className="architecture-flow" role="list" aria-label={`${project.title} architecture flow`}>
              {project.architecture.map((node, index) => (
                <div className="architecture-node" role="listitem" key={node.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{node.label}</strong>
                  <p>{node.detail}</p>
                  {index < project.architecture.length - 1 && (
                    <i aria-hidden="true">→</i>
                  )}
                </div>
              ))}
            </div>
            <div className="stack-panel">
              <span>Technology stack</span>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="decisions-section shell">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Engineering decisions</p>
              <h2>What makes the system hold together.</h2>
            </div>
          </div>
          <div className="decision-grid">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </section>

        {project.secondaryImage && (
          <section className="secondary-shot shell">
            <div className="secondary-shot-copy">
              <p className="eyebrow">In the field</p>
              <h2>The physical environment is part of the system.</h2>
              <p>
                Camera position, lighting, athlete motion, hardware recovery, and
                capture timing all shape the software design.
              </p>
            </div>
            <figure>
              <img src={project.secondaryImage} alt={project.secondaryImageAlt} />
              <figcaption>Wide-angle source frame used by the capture pipeline.</figcaption>
            </figure>
          </section>
        )}

        <section className="next-project">
          <Link className="shell next-project-inner" href={`/projects/${nextProject.slug}`}>
            <div>
              <span>Next project</span>
              <strong>{nextProject.title}</strong>
            </div>
            <span className="next-arrow" aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
