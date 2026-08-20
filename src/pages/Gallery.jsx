import { useMemo, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import FilterPills from "../components/FilterPills";
import GalleryCard from "../components/GalleryCard";
import GalleryModal from "../components/GalleryModal";
import StatsBar from "../components/StatsBar";
import { galleryCategories, galleryItems, galleryStats } from "../data/siteData";

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((g) => g.category === category)),
    [category]
  );

  return (
    <div className="flex flex-col gap-10">
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange">Gallery</p>
          <h1 className="text-4xl font-bold leading-[1.15] text-[var(--color-text-primary)]">
            Moments &amp; <span className="text-brand-blue">Experiences</span>
            <span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            A collection of moments from my journey — work, travel, learning, and life.
          </p>
        </div>

        <div className="flex items-start gap-4 rounded-2xl bg-[var(--tint-blue)] p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Capturing Moments, Creating Memories</h3>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Here are some highlights from events, workshops, travels, and everyday adventures.
            </p>
          </div>
        </div>
      </section>

      <FilterPills options={galleryCategories} active={category} onChange={setCategory} />

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={i}
            onClick={() => setActiveIndex(filtered.findIndex((g) => g.id === item.id))}
          />
        ))}
      </div>

      <StatsBar stats={galleryStats} />

      {activeIndex !== null && (
        <GalleryModal
          items={filtered}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
