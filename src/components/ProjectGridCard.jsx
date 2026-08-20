import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectThumb from "./ProjectThumb";
import Tag from "./Tag";
import { techLogos } from "../data/siteData";

const ProjectGridCard = ({ project, index = 0 }) => (
  <Link
    to={`/portfolio/${project.slug}`}
    className="group flex animate-fade-in-up flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="overflow-hidden">
      <div className="transition-transform duration-500 ease-out group-hover:scale-105">
        <ProjectThumb project={project} rounded="rounded-none" />
      </div>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
      <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">{project.subtitle}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((t) => (
          <Tag key={t.name} logo={techLogos[t.name]}>{t.name}</Tag>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-transform duration-200 group-hover:translate-x-1">
        View Project <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

export default ProjectGridCard;
