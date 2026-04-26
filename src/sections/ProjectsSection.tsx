import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
