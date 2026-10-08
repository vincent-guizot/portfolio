import {
  Github,
  Linkedin,
  Instagram,
  Wrench,
  Puzzle,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Theme & shared icon helpers
 * ---------------------------------------------------------------------- */

/* Tint rotation reused by every icon-square across the site — cycles
   through the brand palette so nothing outside the design system is used. */
export const tintRotation = ["blue", "orange", "navy", "slate"];

export const tintStyles = {
  blue: { background: "var(--tint-blue)", color: "var(--color-primary-blue)" },
  orange: { background: "var(--tint-orange)", color: "var(--color-primary-orange)" },
  navy: { background: "var(--tint-navy)", color: "var(--color-dark-navy)" },
  slate: { background: "var(--tint-slate)", color: "var(--color-slate-gray)" },
};

export const socialIcons = { Github, Linkedin, Instagram };
export const uiIcons = { Puzzle, Wrench };
