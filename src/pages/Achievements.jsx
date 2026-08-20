import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import StatsBar from "../components/StatsBar";
import IconCard from "../components/IconCard";
import CTASection from "../components/CTASection";
import { achievementStats, awards, keyAchievements, certifications, highlights } from "../data/siteData";

const Achievements = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageHero
        eyebrow="Achievements"
        titleLines={["Milestones That", "Matter"]}
        accentWord="Matter"
        subtitle="Grateful for every opportunity, challenge, and recognition along the way. Here are some of the achievements I'm proud of."
        quote="Every achievement is a step forward, but the journey is what truly makes it meaningful."
      />

      <StatsBar stats={achievementStats} />

      {/* Awards */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-[var(--color-text-primary)]">Recognition &amp; Awards</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map(({ year, icon: Icon, title, description, issuer }, i) => (
            <div
              key={title}
              className="flex animate-fade-in-up flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: i % 2 === 0 ? "var(--tint-orange)" : "var(--tint-blue)",
                    color: i % 2 === 0 ? "var(--color-primary-orange)" : "var(--color-primary-blue)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <span className="rounded-full bg-[var(--color-bg-surface-muted)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  {year}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
              <p className="mt-3 text-xs font-medium text-brand-blue">{issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key achievements */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-[var(--color-text-primary)]">Key Achievements</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {keyAchievements.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* Certifications + Highlights */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="mb-5 text-xl font-bold text-[var(--color-text-primary)]">Certifications</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="flex animate-fade-in-up items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 shadow-[var(--shadow-card)]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div>
                  <p className="text-sm font-semibold leading-snug text-[var(--color-text-primary)]">{cert.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{cert.issuer}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-[var(--color-text-secondary)]">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">Highlights</h3>
          <ul className="flex flex-col gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-[var(--color-text-primary)]">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Let's achieve more" accent="together." />
    </div>
  );
};

export default Achievements;
