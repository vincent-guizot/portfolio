import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";
import StatsBar from "../components/StatsBar";
import Timeline, { TimelineItem } from "../components/Timeline";
import { academicJourney, keyLearnings, certifications, learningStats } from "../data/siteData";

const Education = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageHero
        eyebrow="Education"
        titleLines={["Education That", "Shaped My Path"]}
        accentWord="Path"
        subtitle="A strong foundation in computer science and continuous learning have helped me grow, adapt, and create impact."
        quote="Education is not just about learning, it's about understanding, applying, and sharing."
      />

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="mb-5 text-xl font-bold text-[var(--color-text-primary)]">My Academic Journey</h2>
          <Timeline>
            {academicJourney.map((item, i) => (
              <TimelineItem key={item.institution} period={item.period} isLast={i === academicJourney.length - 1}>
                <div
                  className="animate-fade-in-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{item.institution}</h3>
                  <p className="text-sm font-medium text-brand-blue">{item.program}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.badges.map((badge) => (
                      <Tag key={badge} tone="blue">{badge}</Tag>
                    ))}
                  </div>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">Key Learnings</h3>
          <div className="flex flex-col gap-4">
            {keyLearnings.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--tint-blue)] text-brand-blue">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informal education */}
      <section>
        <h2 className="mb-5 text-xl font-bold text-[var(--color-text-primary)]">Informal Education</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="flex animate-fade-in-up flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div>
                <p className="text-sm font-semibold leading-snug text-[var(--color-text-primary)]">{cert.name}</p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{cert.issuer}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">{cert.year}</span>
                <ArrowUpRight size={14} className="text-brand-blue" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifinuous learning */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <p className="mb-1 h-1 w-10 rounded-full bg-brand-orange" aria-hidden="true" />
            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Certifinuous Learning</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Technology is always evolving. I make it a habit to learn, practice, and stay updated so I can build
              better solutions and share relevant knowledge.
            </p>
          </div>
          <StatsBar stats={learningStats} columns={2} bare />
        </div>
      </section>

      <CTASection
        title="Let's build something"
        accent="awesome together."
        subtitle="I'm always open to exciting projects and meaningful collaborations."
      />
    </div>
  );
};

export default Education;
