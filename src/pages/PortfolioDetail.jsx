import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Github, Star } from "lucide-react";
import ProjectThumb from "../components/ProjectThumb";
import Tag from "../components/Tag";
import Button from "../components/Button";
import IconCard from "../components/IconCard";
import StatsBar from "../components/StatsBar";
import CTASection from "../components/CTASection";
import { projects, techLogos } from "../data/siteData";

const TABS = ["Overview", "Features", "Screenshots", "Tech Stack", "My Role", "Results", "Links"];

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Overview");

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <div className="flex flex-col gap-8">
      <Link
        to="/portfolio"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue"
      >
        <ArrowLeft size={15} /> Back to Portfolio
      </Link>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          {project.featured && (
            <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-[var(--tint-orange)] px-3 py-1 text-xs font-semibold text-brand-orange">
              <Star size={12} /> Featured Project
            </span>
          )}
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">{project.name}</h1>
          <p className="mt-1 text-base font-medium text-[var(--color-text-secondary)]">{project.subtitle}</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={project.liveUrl} variant="primary" icon={ArrowUpRight}>
              Visit Live Site
            </Button>
            <Button href={project.sourceUrl} variant="outline" icon={Github}>
              View Source Code
            </Button>
          </div>
        </div>

        <ProjectThumb project={project} tall />
      </section>

      {/* Tabs */}
      <div className="flex gap-6 overflow-x-auto border-b border-[var(--color-border)]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`shrink-0 border-b-2 pb-3 text-sm font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? "border-brand-orange text-brand-orange"
                : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in">
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Overview</h2>
              <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.keyFeatures.slice(0, 4).map((f) => (
                  <div key={f.title} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{f.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-fit rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5 shadow-[var(--shadow-card)]">
              <dl className="flex flex-col gap-3 text-sm">
                {[
                  ["Project Type", project.meta.projectType],
                  ["Category", project.meta.projectCategory],
                  ["Duration", project.meta.duration],
                  ["Status", project.meta.status],
                  ["Client", project.meta.client],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] pb-3 last:border-0 last:pb-0">
                    <dt className="text-[var(--color-text-secondary)]">{label}</dt>
                    <dd className="font-medium text-[var(--color-text-primary)]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}

        {activeTab === "Features" && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Key Features</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.keyFeatures.map((f, i) => (
                <IconCard key={f.title} icon={CheckCircle2} title={f.title} description={f.description} index={i} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "Screenshots" && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Screenshots</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {project.screenshots.map((label, i) => (
                <div key={label} className="animate-fade-in-up" style={{ animationDelay: `${i * 70}ms` }}>
                  <ProjectThumb project={project} />
                  <p className="mt-2 text-center text-xs font-medium text-[var(--color-text-secondary)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Tech Stack" && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.techStack.map((t, i) => (
                <div
                  key={t.name}
                  className="flex animate-fade-in-up items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--tint-blue)] text-brand-blue">
                    {techLogos[t.name] ? (
                      <img src={techLogos[t.name]} alt={t.name} className="h-5 w-5 object-contain" />
                    ) : (
                      <Code2 size={18} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "My Role" && (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{project.myRole.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.myRole.description}
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.myRole.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
                  <CheckCircle2 size={14} className="shrink-0 text-brand-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Results" && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Results &amp; Impact</h2>
            <StatsBar stats={project.results} columns={project.results.length >= 4 ? 4 : 2} />
          </div>
        )}

        {activeTab === "Links" && (
          <div className="flex flex-col gap-3 sm:max-w-md">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 text-sm font-medium text-[var(--color-text-primary)] shadow-[var(--shadow-card)] transition-colors hover:border-brand-orange"
            >
              Live Demo <ArrowUpRight size={16} className="text-brand-blue" />
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 text-sm font-medium text-[var(--color-text-primary)] shadow-[var(--shadow-card)] transition-colors hover:border-brand-orange"
            >
              Source Code <Github size={16} className="text-brand-blue" />
            </a>
          </div>
        )}
      </div>

      <CTASection />
    </div>
  );
};

export default PortfolioDetail;
