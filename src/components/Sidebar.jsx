import { NavLink } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";
import { navItems, profile, socialIcons } from "../data/siteData";

const Sidebar = ({ open, onClose }) => {
  const { Github, Linkedin, Instagram } = socialIcons;

  return (
    <>
      {/* Mobile scrim */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[var(--sidebar-width)] shrink-0 -translate-x-full flex-col bg-[var(--color-bg-sidebar)] px-6 py-8 text-white shadow-[var(--shadow-sidebar)] transition-transform duration-300 ease-out lg:translate-x-0 ${
          open ? "translate-x-0" : ""
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={onClose}
          className="mb-1 flex items-center gap-3"
        >
          <img
            src={logoIcon}
            alt="Vincent Sadino logo"
            className="h-11 w-11 object-contain"
          />
          <div className="leading-tight">
            <p className="text-lg font-bold">
              Vincent
              <br />
              Sadino<span className="text-brand-orange">.</span>
            </p>
          </div>
        </NavLink>
        <p className="mb-6 mt-2 text-xs leading-relaxed text-white/60">
          {profile.roles[0]}
          <br />
          {profile.roles[1]}
        </p>

        <div className="mb-4 h-px w-full bg-white/10" />

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-brand-orange text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Availability badge */}
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </div>

        {/* Social + footer */}
        <div className="mt-6 flex items-center gap-3">
          {[
            [Github, profile.social.github],
            [Linkedin, profile.social.linkedin],
            [Instagram, profile.social.instagram],
          ].map(([Icon, href], i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-brand-orange hover:text-brand-orange"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-white/40">
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved
        </p>
      </aside>
    </>
  );
};

export default Sidebar;
