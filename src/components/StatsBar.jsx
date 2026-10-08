import { tintStyles, tintRotation } from "../data/siteData";

const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

/**
 * `columns` sets how many columns appear at the `sm` breakpoint and up
 * (mobile is always 2-up). `bare` drops the card chrome (border/shadow/
 * padding) for contexts that already sit inside a card, e.g. Education's
 * "Certifinuous Learning" panel.
 */
const StatsBar = ({ stats, columns = 4, bare = false, className = "" }) => {
  const chrome = bare
    ? ""
    : "rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)]";

  return (
    <div
      className={`grid grid-cols-2 gap-6 ${COLS[columns] || COLS[4]} ${chrome} ${className}`}
    >
      {stats.map(({ icon: Icon, value, label }, i) => {
        const tint = tintStyles[tintRotation[i % tintRotation.length]];
        return (
          <div
            key={label}
            className="flex animate-fade-in-up flex-col items-start gap-3"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
              style={{ background: tint.background, color: tint.color }}
            >
              <Icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold leading-tight text-[var(--color-text-primary)]">
                {value}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBar;
