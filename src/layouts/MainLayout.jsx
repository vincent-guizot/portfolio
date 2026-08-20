import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and reset scroll on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)]">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-h-screen flex-col lg:pl-[var(--sidebar-width)]">
        <Topbar onMenuClick={() => setMenuOpen(true)} />
        <main className="flex-1 px-5 py-8 sm:px-8 lg:py-10">
          <div key={location.pathname} className="mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-10 animate-fade-in-up">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
