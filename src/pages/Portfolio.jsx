import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import FilterPills from "../components/FilterPills";
import ProjectListCard from "../components/ProjectListCard";
import CTASection from "../components/CTASection";
import { portfolioCategories, projects } from "../data/siteData";

const Portfolio = () => {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="flex flex-col gap-10">
      <PageHero
        eyebrow="My Portfolio"
        titleLines={["Things I've Built", "With Passion"]}
        accentWord="Passion"
        subtitle="Here are some of the projects I've worked on. Each project taught me something new and brought ideas to life."
        quote="I enjoy turning ideas into useful digital products that make a real impact."
      />

      <FilterPills options={portfolioCategories} active={category} onChange={setCategory} />

      <div className="flex flex-col gap-6">
        {filtered.length > 0 ? (
          filtered.map((project, i) => <ProjectListCard key={project.slug} project={project} index={i} />)
        ) : (
          <p className="animate-fade-in rounded-2xl border border-dashed border-[var(--color-border)] p-10 text-center text-sm text-[var(--color-text-secondary)]">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>

      <CTASection
        title="Have an idea in mind?"
        accent="Let's build something amazing together."
        subtitle="I'm always open to exciting projects and meaningful collaborations."
      />
    </div>
  );
};

export default Portfolio;
