const FilterPills = ({ options, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => {
      const isActive = option === active;
      return (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
            isActive
              ? "bg-brand-navy text-white"
              : "bg-[var(--color-bg-surface-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
          }`}
        >
          {option}
        </button>
      );
    })}
  </div>
);

export default FilterPills;
