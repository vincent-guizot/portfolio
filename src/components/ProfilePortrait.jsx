import { profile } from "../data/siteData";

/**
 * Circular "blob" portrait slot with decorative dot-grid + a floating quote
 * card, matching the hero pattern used across every inner page. Renders
 * /public/portrait.png — swap that file for a different photo any time.
 */
const ProfilePortrait = ({ size = "lg", quote = profile.quote, infoItems }) => {
  const dimensions =
    size === "lg" ? "h-[320px] w-[320px]" : "h-[220px] w-[220px]";

  return (
    <div className="relative shrink-0 animate-fade-in">
      {/* Decorative dot grid */}
      <div
        className="absolute -right-2 -top-4 grid animate-float grid-cols-4 gap-1.5 opacity-40"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-brand-blue" />
        ))}
      </div>

      {/* Blob backdrop */}
      <div
        className={`relative flex ${dimensions} items-center justify-center rounded-[42%_58%_65%_35%/45%_45%_55%_55%] bg-[var(--color-bg-surface-muted)]`}
      >
        <div
          className="absolute -left-3 top-6 h-6 w-6 animate-float rounded-full bg-[var(--tint-orange)]"
          aria-hidden="true"
        />
        <svg
          className="absolute -right-1 top-1/3 h-10 w-16 text-brand-blue opacity-50"
          viewBox="0 0 64 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 20C10 6 18 22 26 12S42 2 50 10s10 8 12 2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Portrait */}
        <div className="flex h-[78%] w-[78%] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-navy to-[#1e293b] text-white shadow-inner">
          <img src="/portrait.png" alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Floating quote card */}
      {!infoItems && quote && (
        <div className="absolute -bottom-6 -right-4 max-w-[210px] animate-fade-in-up rounded-2xl bg-[var(--color-bg-surface)] p-4 shadow-[var(--shadow-card-hover)] sm:right-[-24px]">
          <span className="text-2xl font-serif leading-none text-brand-blue">
            &ldquo;
          </span>
          <p className="mt-1 text-xs italic leading-relaxed text-[var(--color-text-primary)]">
            {quote}
          </p>
        </div>
      )}

      {/* Floating quick-info card (alternative to the quote, e.g. About Me) */}
      {infoItems && (
        <div className="absolute -bottom-8 -right-4 flex w-[230px] animate-fade-in-up flex-col gap-2 rounded-2xl bg-[var(--color-bg-surface)] p-4 shadow-[var(--shadow-card-hover)] sm:right-[-28px]">
          {infoItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs text-[var(--color-text-primary)]"
            >
              <Icon size={14} className="shrink-0 text-brand-blue" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePortrait;
