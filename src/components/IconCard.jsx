import { tintStyles, tintRotation } from "../data/siteData";

/**
 * Icon + title + description card. `tint` picks one of the brand tints
 * directly; if omitted, `index` cycles through the standard rotation so
 * a mapped list gets varied but on-brand colors automatically.
 */
const IconCard = ({ icon: Icon, title, description, tint, index = 0, className = "" }) => {
  const resolvedTint = tint || tintRotation[index % tintRotation.length];
  const style = tintStyles[resolvedTint];

  return (
    <div
      className={`group animate-fade-in-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${className}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110"
        style={{ background: style.background, color: style.color }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mb-1.5 text-[var(--fs-h3)] font-semibold leading-[var(--lh-h3)] text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
    </div>
  );
};

export default IconCard;
