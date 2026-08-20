import { Image as ImageIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import IconCard from "../components/IconCard";
import StatsBar from "../components/StatsBar";
import CTASection from "../components/CTASection";
import Tag from "../components/Tag";
import {
  quickInfo,
  myStory,
  milestones,
  beliefs,
  skillGroups,
  aFewNumbers,
  techLogos,
} from "../data/siteData";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-14">
      <PageHero
        eyebrow="About Me"
        titleLines={["Get to Know", "Me Better"]}
        accentWord="Better"
        subtitle="I'm Vincent Sadino, a Full Stack Developer, IT Trainer, and Software Consultant. I enjoy building useful digital products, sharing knowledge, and helping people turn ideas into real solutions."
        infoItems={quickInfo}
      />

      {/* My Story */}
      <section className="rounded-2xl bg-[var(--tint-orange)] p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr_260px]">
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-[#1e293b] text-white/60 lg:aspect-auto">
            <ImageIcon size={48} strokeWidth={1.2} />
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--color-text-primary)]">My Story</h2>
            <div className="flex flex-col gap-3">
              {myStory.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {milestones.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-surface)] text-brand-blue shadow-[var(--shadow-card)]">
                  <Icon size={16} />
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

      {/* What I Believe In */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[var(--color-text-primary)]">What I Believe In</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* Skills & Numbers */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h2 className="mb-5 text-2xl font-bold text-[var(--color-text-primary)]">Skills &amp; Tools</h2>
          <div className="flex flex-col gap-5">
            {skillGroups.map(({ group, skills }) => (
              <div key={group}>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-brand-blue">{group}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag key={skill} logo={techLogos[skill]}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold text-[var(--color-text-primary)]">A Few Numbers</h2>
          <StatsBar stats={aFewNumbers} columns={2} />
        </div>
      </section>

      <CTASection
        title="Let's create something"
        accent="awesome together."
        subtitle="I'm always excited to work on new ideas and meaningful projects."
      />
    </div>
  );
};

export default AboutMe;
