const VisualCard = ({ project }: { project: ProjectsProps["projects"][number] }) => {
  return (
    <div className="group relative bg-[#1d1d1d]/30 border border-white/5 rounded-xl overflow-hidden transition-all hover:border-purple-500/30">
      <div className="w-full relative aspect-video md:h-[500px] lg:h-[650px] overflow-hidden">
        <img src={project.image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

interface ProjectsProps {
  projects: Array<{
    id: string;
    image: string;
    title?: string;
    description?: string;
    categories?: string[];
    githubUrl?: string;
  }>;
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="w-full p-2 md:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {projects.map((project) => (
          <VisualCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
