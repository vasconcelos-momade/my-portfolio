type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "1rem" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
