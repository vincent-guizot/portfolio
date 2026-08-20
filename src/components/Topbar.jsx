import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, Moon, Send, Sun } from "lucide-react";
import { navItems } from "../data/siteData";
import useTheme from "../hooks/useTheme";

const notifications = [
  { title: "New message from a client", time: "2h ago" },
  { title: "WareTrack hit 100+ stars on GitHub", time: "1d ago" },
];

const Topbar = ({ onMenuClick }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [notifOpen, setNotifOpen] = useState(false);

  const current = navItems.find((item) =>
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  );

  return (
    <header className="sticky top-0 z-30 flex h-[var(--topbar-height)] items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg-page)]/90 px-5 backdrop-blur sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface-muted)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Home
          {current && current.path !== "/" && (
            <>
              {" "}
              / <span className="font-medium text-brand-blue">{current.name}</span>
            </>
          )}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-[var(--color-bg-surface-muted)] hover:text-[var(--color-text-primary)]"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-[var(--color-bg-surface-muted)] hover:text-[var(--color-text-primary)]"
          >
            <Bell size={18} />
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
              {notifications.length}
            </span>
          </button>

          {notifOpen && (
            <>
              <button
                aria-label="Close notifications"
                className="fixed inset-0 z-10 cursor-default"
                onClick={() => setNotifOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-2 w-72 animate-scale-in rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-2 shadow-[var(--shadow-card-hover)] origin-top-right">
                {notifications.map((n) => (
                  <div key={n.title} className="rounded-xl px-3 py-2.5 hover:bg-[var(--color-bg-surface-muted)]">
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{n.title}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{n.time}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] sm:inline-flex"
        >
          <Send size={15} />
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Topbar;
