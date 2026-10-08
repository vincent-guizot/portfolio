const Tag = ({ children, tone = "neutral", logo, className = "" }) => {
  const tones = {
    neutral:
      "bg-[var(--color-bg-surface-muted)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
    blue: "bg-[var(--tint-blue)] text-brand-blue",
    orange: "bg-[var(--tint-orange)] text-brand-orange",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-transform duration-200 hover:scale-105 ${tones[tone]} ${className}`}
    >
      {logo && (
        <img
          src={logo}
          alt=""
          className="h-3.5 w-3.5 object-contain"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export default Tag;
