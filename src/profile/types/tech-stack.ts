export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icons for dark/light mode. */
};
