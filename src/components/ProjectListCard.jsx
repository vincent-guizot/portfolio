import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectThumb from "./ProjectThumb";
import Tag from "./Tag";
import { techLogos } from "../data/siteData";

const ProjectListCard = ({ project, index = 0 }) => (
  <article
    className="grid animate-fade-in-up grid-cols-1 gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-6 lg:grid-cols-[320px_1fr]"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <Link to={`/portfolio/${project.slug}`} className="block overflow-hidden rounded-xl">
      <ProjectThumb project={project} tall rounded="rounded-xl" />
    </Link>

    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-bold text-brand-blue">{project.index}</span>
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--tint-orange)] px-2.5 py-0.5 text-xs font-semibold text-brand-orange">
            <Star size={11} /> Featured
          </span>
        )}
      </div>

      <Link to={`/portfolio/${project.slug}`}>
        <h3 className="mt-1.5 text-xl font-bold text-[var(--color-text-primary)] transition-colors hover:text-brand-blue">
          {project.name}
        </h3>
      </Link>
      <p className="text-sm font-medium text-[var(--color-text-secondary)]">{project.subtitle}</p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {project.description}
      </p>

      <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
            <CheckCircle2 size={14} className="shrink-0 text-brand-blue" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((t) => (
          <Tag key={t.name} logo={techLogos[t.name]}>{t.name}</Tag>
        ))}
      </div>

      <Link
        to={`/portfolio/${project.slug}`}
        className="group mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue"
      >
        View Project
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  </article>
);

export default ProjectListCard;
