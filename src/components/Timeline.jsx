const Timeline = ({ children }) => (
  <div className="relative flex flex-col gap-8">{children}</div>
);

/**
 * A single timeline row: period label on the left, a dot+connecting line
 * in the middle, and arbitrary content on the right.
 */
export const TimelineItem = ({ period, active, isLast, children }) => (
  <div className="grid grid-cols-[100px_28px_1fr] gap-4 sm:grid-cols-[130px_28px_1fr]">
    <div className="pt-1 text-sm font-semibold text-[var(--color-text-secondary)]">
      {period}
    </div>

    <div className="flex flex-col items-center">
      <span
        className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ring-4 ${
          active
            ? "bg-brand-orange ring-[var(--tint-orange)]"
            : "bg-brand-blue ring-[var(--tint-blue)]"
        }`}
      />
      {!isLast && (
        <span className="mt-1 w-px flex-1 bg-[var(--color-border)]" />
      )}
    </div>

    <div className="pb-2">{children}</div>
  </div>
);

export default Timeline;
