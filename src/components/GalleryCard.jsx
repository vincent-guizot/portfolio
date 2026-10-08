import { Image as ImageIcon } from "lucide-react";

const GalleryCard = ({ item, onClick, index = 0 }) => (
  <button
    onClick={onClick}
    className="group relative flex aspect-[4/5] animate-fade-in-up flex-col justify-end overflow-hidden rounded-2xl text-left shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
    style={{
      background: `linear-gradient(160deg, ${item.coverFrom}, ${item.coverTo})`,
      animationDelay: `${index * 60}ms`,
    }}
  >
    <ImageIcon
      size={34}
      strokeWidth={1.3}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/25 transition-transform duration-500 ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-text-primary)]">
      {item.category}
    </span>

    <div className="relative p-4 text-white">
      <p className="text-sm font-semibold leading-snug">{item.title}</p>
      <p className="text-xs text-white/70">{item.date}</p>
    </div>
  </button>
);

export default GalleryCard;
