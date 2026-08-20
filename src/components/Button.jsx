import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-brand-orange text-white hover:bg-[var(--color-accent-hover)] shadow-[0_8px_20px_rgba(255,107,0,0.28)]",
  outline:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:border-brand-orange hover:text-brand-orange",
  ghost:
    "bg-[var(--color-bg-surface-muted)] text-[var(--color-text-primary)] hover:bg-brand-orange hover:text-white",
};

/**
 * Shared CTA button. Renders a <Link> when `to` is provided, otherwise a
 * <button>. Icon is an optional lucide-react component.
 */
const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  className = "",
  type = "button",
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={17} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={17} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
