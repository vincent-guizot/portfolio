import { useEffect, useState } from "react";
import { Camera, Heart, Image as ImageIcon, MapPin, Share2, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import Tag from "./Tag";

const GalleryModal = ({ items, index, onClose, onNavigate }) => {
  const item = items[index];
  const [liked, setLiked] = useState(false);

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  useEffect(() => setLiked(false), [index]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 animate-fade-in" onClick={onClose}>
      <div
        className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-[var(--color-bg-surface)] shadow-[var(--shadow-card-hover)] animate-scale-in lg:grid-cols-[1.3fr_1fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <X size={18} />
        </button>

        {/* Image side */}
        <div
          className="relative flex min-h-[280px] items-center justify-center"
          style={{ background: `linear-gradient(160deg, ${item.coverFrom}, ${item.coverTo})` }}
        >
          <ImageIcon size={64} strokeWidth={1.2} className="text-white/25" />

          <button
            onClick={() => onNavigate((index - 1 + items.length) % items.length)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-text-primary)] transition-transform hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => onNavigate((index + 1) % items.length)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-text-primary)] transition-transform hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Info side */}
        <div className="flex flex-col p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-[var(--tint-blue)] px-2.5 py-1 text-xs font-semibold text-brand-blue">
              {item.category}
            </span>
            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
              {index + 1} of {items.length}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{item.title}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.date}</p>
          {item.location && (
            <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]">
              <MapPin size={13} /> {item.location}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Tag key={tag} tone="blue">#{tag.toLowerCase()}</Tag>
            ))}
          </div>

          <dl className="mt-5 flex flex-col gap-2 border-t border-[var(--color-border)] pt-4 text-sm">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                <Camera size={13} /> Camera
              </dt>
              <dd className="font-medium text-[var(--color-text-primary)]">{item.camera}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-[var(--color-text-secondary)]">Shot on</dt>
              <dd className="font-medium text-[var(--color-text-primary)]">{item.shotOn}</dd>
            </div>
          </dl>

          <div className="mt-auto flex gap-2 pt-6">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[var(--color-border-strong)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-brand-orange">
              <Download size={15} /> Download
            </button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[var(--color-border-strong)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-brand-orange">
              <Share2 size={15} /> Share
            </button>
            <button
              onClick={() => setLiked((v) => !v)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                liked ? "bg-brand-orange text-white" : "bg-brand-blue text-white"
              }`}
            >
              <Heart size={15} fill={liked ? "currentColor" : "none"} />
              {item.likes + (liked ? 1 : 0)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
