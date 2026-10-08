import { LayoutDashboard } from "lucide-react";

/**
 * Project visual. Shows a real screenshot when one is available:
 *   - `src` prop (e.g. a specific screenshot), otherwise
 *   - the project's first screenshot (`project.screenshots[0].url`).
 * Projects without screenshots (e.g. API case studies) fall back to a
 * gradient panel built from `coverFrom` / `coverTo`.
 */
const ProjectThumb = ({
  project,
  src,
  alt,
  className = "",
  tall = false,
  rounded = "rounded-2xl",
}) => {
  const image = src ?? project.screenshots?.[0]?.url;
  const frame = `relative overflow-hidden ${rounded} ${tall ? "aspect-[16/10]" : "aspect-[4/3]"} ${className}`;

  if (image) {
    return (
      <div
        className={`${frame} border border-[var(--color-border)] bg-[var(--color-bg-surface-muted)]`}
      >
        <img
          src={image}
          alt={alt ?? `${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={`${frame} flex items-center justify-center`}
      style={{
        background: `linear-gradient(135deg, ${project.coverFrom}, ${project.coverTo})`,
      }}
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-white" />
        <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-white" />
      </div>
      <LayoutDashboard
        size={40}
        className="relative text-white/70"
        strokeWidth={1.4}
      />
      <span className="absolute bottom-3 left-4 text-sm font-semibold tracking-wide text-white/90">
        {project.name}
      </span>
    </div>
  );
};

export default ProjectThumb;
