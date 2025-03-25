import { Home, Briefcase, Layers, Award, Image, Mail } from "lucide-react";

const menus = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "Portfolio",
    url: "/portfolios/projects",
    icon: Briefcase,
  },
  {
    name: "Experience",
    url: "/experiences/works",
    icon: Layers,
  },
  {
    name: "Award",
    url: "/awards",
    icon: Award,
  },
  {
    name: "Gallery",
    url: "/galleries",
    icon: Image,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

export { menus };
