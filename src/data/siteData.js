/* ---------------------------------------------------------------------- *
 * siteData.js — single entry point for all site content.
 *
 * The actual data now lives in smaller files, one per page/section.
 * This file only re-exports them, so every component can keep importing
 * from "../data/siteData" exactly as before.
 *
 *   profile.js        → profile
 *   navigation.js     → navItems
 *   home.js           → homeStats, whatIDo
 *   portfolio/        → portfolioCategories, projects (one file per project)
 *   experience.js     → experienceStats, experienceTimeline, experienceWhatIDo, techIUse
 *   education.js      → academicJourney, keyLearnings, certifications, learningStats
 *   achievements.js   → achievementStats, awards, keyAchievements, highlights
 *   about.js          → quickInfo, myStory, milestones, beliefs, skillGroups, aFewNumbers
 *   gallery.js        → galleryCategories, galleryStats, galleryItems
 *   contact.js        → contactInfo
 *   theme.js          → tintRotation, tintStyles, socialIcons, uiIcons
 *   techLogos.js      → techLogos
 * ---------------------------------------------------------------------- */

export * from "./profile";
export * from "./navigation";
export * from "./home";
export * from "./portfolio";
export * from "./experience";
export * from "./education";
export * from "./achievements";
export * from "./about";
export * from "./gallery";
export * from "./contact";
export * from "./theme";
export * from "./techLogos";
