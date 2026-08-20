import { LayoutDashboard } from "lucide-react";

/**
 * Placeholder project visual — a gradient panel with a soft "dashboard"
 * glyph. No real product screenshots ship with this template; swap this
 * for an <img> once you have real project screenshots in src/assets/.
 */
const ProjectThumb = ({ project, className = "", tall = false, rounded = "rounded-2xl" }) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${rounded} ${
        tall ? "aspect-[16/10]" : "aspect-[4/3]"
      } ${className}`}
      style={{
        background: `linear-gradient(135deg, ${project.coverFrom}, ${project.coverTo})`,
      }}
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-white" />
        <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-white" />
      </div>
      <LayoutDashboard size={40} className="relative text-white/70" strokeWidth={1.4} />
      <span className="absolute bottom-3 left-4 text-sm font-semibold tracking-wide text-white/90">
        {project.name}
      </span>
    </div>
  );
};

export default ProjectThumb;
