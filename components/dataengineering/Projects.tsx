const VisualCard = ({ project }: { project: ProjectsProps["projects"][number] }) => {
  return (
    /* Break-inside-avoid prevents a card from splitting across two columns */
    <div className="mb-4 break-inside-avoid">
      <div className="group relative bg-[#1d1d1d]/30 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-purple-500/50">
        <img src={project.image} alt="" className="w-full h-auto block" />
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
    /* Using CSS columns for the 'jagged' masonry effect. 
       'columns-1' for mobile, 'md:columns-2' for larger screens.
    */
    <section className="w-full p-2 md:p-6 lg:p-10">
      <div className="columns-1 md:columns-2 gap-4 w-full space-y-4">
        {projects.map((project) => (
          <VisualCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
