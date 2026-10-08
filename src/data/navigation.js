import {
  Home as HomeIcon,
  UserRound,
  Briefcase,
  Layers,
  GraduationCap,
  Trophy,
  Image as ImageIcon,
  Mail,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Navigation
 * ---------------------------------------------------------------------- */
export const navItems = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About Me", path: "/about", icon: UserRound },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Experience", path: "/experience", icon: Layers },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Gallery", path: "/gallery", icon: ImageIcon },
  { name: "Contact", path: "/contact", icon: Mail },
];
