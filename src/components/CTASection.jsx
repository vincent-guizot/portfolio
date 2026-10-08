import { Send } from "lucide-react";
import Button from "./Button";

const CTASection = ({
  title = "Let's build something",
  accent = "amazing together.",
  subtitle = "I'm always open to exciting projects and meaningful collaborations.",
  primaryLabel = "Let's Talk",
  primaryIcon = Send,
  primaryTo = "/contact",
  secondaryLabel = "View My Work",
  secondaryTo = "/portfolio",
}) => {
  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[var(--tint-orange)] p-8 sm:flex-row sm:items-center">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
          <Send size={18} />
        </div>
        <div>
          <h3 className="text-[var(--fs-h2)] font-semibold leading-[var(--lh-h2)] text-[var(--color-text-primary)]">
            {title} <span className="text-brand-orange">{accent}</span>
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 gap-3">
        <Button to={primaryTo} variant="primary" icon={primaryIcon}>
          {primaryLabel}
        </Button>
        <Button to={secondaryTo} variant="outline">
          {secondaryLabel}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
