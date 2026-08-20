import ProfilePortrait from "./ProfilePortrait";

/**
 * `titleLines` is an array of strings rendered on separate lines.
 * `accentWord` (optional) is highlighted in brand blue within the title,
 * and a trailing orange dot is appended automatically — matching the
 * two-tone headline signature seen across every hero in the design system.
 */
const PageHero = ({ eyebrow, titleLines, accentWord, subtitle, portrait = true, quote, infoItems }) => {
  return (
    <section className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
      <div className="max-w-xl animate-fade-in-up">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[var(--fs-h1)] font-bold leading-[var(--lh-h1)] text-[var(--color-text-primary)] sm:text-4xl sm:leading-[1.15]">
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line.split(accentWord ?? "\0").map((part, j, arr) => (
                <span key={j}>
                  {part}
                  {j < arr.length - 1 && <span className="text-brand-blue">{accentWord}</span>}
                </span>
              ))}
              {i === titleLines.length - 1 && <span className="text-brand-orange">.</span>}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">{subtitle}</p>
        )}
      </div>

      {portrait && <ProfilePortrait quote={quote} infoItems={infoItems} />}
    </section>
  );
};

export default PageHero;
