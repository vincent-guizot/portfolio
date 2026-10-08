import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProfilePortrait from "../components/ProfilePortrait";
import StatsBar from "../components/StatsBar";
import IconCard from "../components/IconCard";
import ProjectGridCard from "../components/ProjectGridCard";
import CTASection from "../components/CTASection";
import { homeStats, whatIDo, profile, projects } from "../data/siteData";

const Home = () => {
  const featured = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <section className="flex flex-col items-start justify-between gap-10 xl:flex-row lg:items-center">
        <div className="max-w-xl animate-fade-in-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-bold leading-[1.15] text-[var(--color-text-primary)] sm:text-5xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-brand-blue">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
            <span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-4 text-base font-medium text-[var(--color-text-secondary)]">
            {profile.roles[0]}
            <br />
            {profile.roles[1]}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
            {profile.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/portfolio" variant="primary" icon={ArrowRight}>
              View My Work
            </Button>
            <Button href="#" variant="outline" icon={Download}>
              Download CV
            </Button>
          </div>
        </div>

        <ProfilePortrait />
      </section>

      <StatsBar stats={homeStats} />

      {/* What I Do */}
      <section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">
              What I Do
            </p>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-[28px]">
              Turning Ideas Into{" "}
              <span className="text-brand-blue">Real Solutions</span>.
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            More About Me <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">
              Featured Projects
            </p>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-[28px]">
              Selected Work I'm{" "}
              <span className="text-brand-blue">Proud Of</span>.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            View All Projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectGridCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        title="Let's build something"
        accent="useful together."
        subtitle="Have an idea or project in mind? I'd love to hear about it."
      />
    </div>
  );
};

export default Home;
