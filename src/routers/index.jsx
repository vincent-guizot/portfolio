import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import PortfolioDetail from "../pages/PortfolioDetail";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Achievements from "../pages/Achievements";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutMe /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <PortfolioDetail /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Education /> },
      { path: "achievements", element: <Achievements /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
