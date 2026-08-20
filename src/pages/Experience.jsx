import { Download, Component } from "lucide-react";
import PageHero from "../components/PageHero";
import StatsBar from "../components/StatsBar";
import Tag from "../components/Tag";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import Timeline, { TimelineItem } from "../components/Timeline";
import { experienceStats, experienceTimeline, experienceWhatIDo, techIUse, techLogos } from "../data/siteData";

const Experience = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageHero
        eyebrow="Experience"
        titleLines={["My Journey,", "Building Experience"]}
        accentWord="Experience"
        subtitle="Over the years, I've worked with amazing teams and clients to build products, solve problems, and create meaningful impact through technology and education."
      />

      <StatsBar stats={experienceStats} />

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Timeline>
            {experienceTimeline.map((job, i) => (
              <TimelineItem key={`${job.company}-${job.period}`} period={job.period} active={job.type === "Full-time"} isLast={i === experienceTimeline.length - 1}>
                <div
                  className="animate-fade-in-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{job.company}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        job.type === "Full-time"
                          ? "bg-[var(--tint-orange)] text-brand-orange"
                          : "bg-[var(--tint-blue)] text-brand-blue"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-brand-blue">{job.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <Tag key={tag} logo={techLogos[tag]}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </TimelineItem>
            ))}
          </Timeline>

          <Button href="#" variant="outline" icon={Download} className="mt-6">
            Download Full CV
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)]">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">What I Do</h3>
            <div className="flex flex-col gap-4">
              {experienceWhatIDo.map(({ icon: Icon, title, description }) => (
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

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)]">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-text-primary)]">Tech I Use</h3>
            <div className="grid grid-cols-3 gap-3">
              {techIUse.map((tech, i) => (
                <div
                  key={tech}
                  className="flex animate-fade-in-up flex-col items-center gap-1.5 rounded-xl border border-[var(--color-border)] p-3 text-center transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-orange"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {techLogos[tech] ? (
                    <img src={techLogos[tech]} alt={tech} className="h-4 w-4 object-contain" />
                  ) : (
                    <Component size={16} className="text-brand-blue" />
                  )}
                  <span className="text-[11px] font-medium leading-tight text-[var(--color-text-primary)]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Experience;
