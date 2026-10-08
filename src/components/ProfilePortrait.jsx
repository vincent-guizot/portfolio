import { profile } from "../data/siteData";

/* How much taller the photo is than the circle (1 = no pop-out).
   1.25 lets the head rise ~25% of the circle's height above it. */
const POP_OUT = 1.25;

/* Blob width per size. The blob is always square (aspect-square). */
const BLOB_SIZES = {
  lg: "w-[260px] sm:w-[340px] xl:w-[360px] 2xl:w-[400px]",
  sm: "w-[220px] sm:w-[300px]",
};

/* Shared floating-card chrome. */
const CARD =
  "absolute z-10 animate-fade-in-up rounded-2xl bg-[var(--color-bg-surface)] p-3 shadow-[var(--shadow-card-hover)] sm:p-4";

const QuoteCard = ({ text, className = "" }) => (
  <div className={`${CARD} max-w-[160px] sm:max-w-[210px] ${className}`}>
    <span
      className="font-serif text-2xl leading-none text-brand-blue"
      aria-hidden="true"
    >
      &ldquo;
    </span>
    <p className="mt-1 text-[11px] italic leading-relaxed text-[var(--color-text-primary)] sm:text-xs">
      {text}
    </p>
  </div>
);

/**
 * Circular "blob" portrait with a pop-out photo, decorative shapes and
 * floating cards (tagline top-left, quote bottom-right — or a quick-info
 * card instead, e.g. on About Me). Renders /public/portrait.png, which
 * must have a transparent background for the pop-out effect.
 *
 * Layout: the wrapper reserves room for the cards with padding (from `sm`
 * up), so the cards sit inside the component's own box and never overlap
 * neighbouring content or spill off-screen. On phones the padding is
 * dropped, the quote card overlaps the blob's corner, and the tagline card
 * is hidden (there's no room for it without covering the face).
 */
const ProfilePortrait = ({
  size = "lg",
  quote = profile.quote,
  tagline = profile.tagline,
  infoItems,
}) => {
  const showQuotes = !infoItems;
  // Left padding only when the tagline card needs room on the left.
  const leftPad = showQuotes && tagline ? "sm:pl-28" : "";

  return (
    <div
      className={`relative mx-auto w-full max-w-[360px] shrink-0 animate-fade-in pb-12 pt-8 sm:w-auto sm:max-w-none sm:pb-10 sm:pr-14 sm:pt-10 xl:mx-0 ${leftPad}`}
    >
      {/* Blob backdrop */}
      <div
        className={`relative mx-auto flex aspect-square ${BLOB_SIZES[size] ?? BLOB_SIZES.lg} items-center justify-center rounded-[42%_58%_65%_35%/45%_45%_55%_55%] bg-[var(--color-bg-surface-muted)]`}
      >
        {/* Decorations */}
        <div
          className="absolute -right-2 -top-6 grid animate-float grid-cols-4 gap-1.5 opacity-40"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-brand-blue" />
          ))}
        </div>
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

        {/* Portrait — pop-out: the photo frame is POP_OUT x the circle's
            height and bottom-aligned, so its bottom is clipped to the circle
            while the head spills out over the top. */}
        <div className="relative h-[78%] w-[78%]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-navy to-[#1e293b] shadow-inner" />
          <div
            className="absolute inset-x-0 bottom-0 overflow-hidden"
            style={{
              height: `${POP_OUT * 100}%`,
              // Round only the bottom edge to match the circle: horizontal
              // radius 50% of the width, vertical radius = half the circle's
              // height as a % of this taller frame.
              borderRadius: `0 0 50% 50% / 0 0 ${50 / POP_OUT}% ${50 / POP_OUT}%`,
            }}
          >
            <img
              src="/portrait.png"
              alt={profile.name}
              className="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      {showQuotes && tagline && (
        <QuoteCard
          text={tagline}
          className="left-0 top-[18%] hidden sm:block"
        />
      )}
      {showQuotes && quote && (
        <QuoteCard text={quote} className="bottom-0 right-0" />
      )}

      {infoItems && (
        <div
          className={`${CARD} bottom-0 right-0 flex w-[210px] flex-col gap-2 sm:w-[230px]`}
        >
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
