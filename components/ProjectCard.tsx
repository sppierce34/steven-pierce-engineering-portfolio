import type { Project } from "../lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a className="project-shot" href={project.portfolioUrl}>
        <img src={project.image} alt={project.imageAlt} />
        <span className="shot-index">{project.number}</span>
      </a>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.kicker}</span>
          <span className="status-dot">{project.status}</span>
        </div>
        <h3>
          <a href={project.portfolioUrl}>{project.title}</a>
        </h3>
        <p>{project.summary}</p>
        <div className="tag-row" aria-label="Technology stack">
          {project.stack.slice(0, 5).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="card-actions">
          <a className="text-link" href={project.portfolioUrl}>
            Read case study <span aria-hidden="true">→</span>
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live app <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
