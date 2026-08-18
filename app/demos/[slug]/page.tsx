import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDemo } from "../../../components/ProjectDemo";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { getDemoScenario } from "../../../lib/demo-scenarios";
import { getProject, projects } from "../../../lib/projects";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} Recruiter Demo | Steven Pierce`;
  const description = `Explore a read-only ${project.title} demo built with fictional sample data and no production-system access.`;
  const image = new URL(project.image, project.demoUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: project.demoUrl },
    openGraph: {
      title,
      description,
      url: project.demoUrl,
      images: [{ url: image, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const scenario = getDemoScenario(slug);
  if (!project || !scenario) notFound();

  return (
    <>
      <SiteHeader />
      <ProjectDemo
        scenario={scenario}
        projectUrl={project.portfolioUrl}
        liveUrl={project.liveUrl}
      />
      <SiteFooter />
    </>
  );
}
