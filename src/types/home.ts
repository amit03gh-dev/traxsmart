export interface HeroContentItem {
  title: string;
  subtitle: string[];
  backgroundLeft: string;
  backgroundRight: string;
  ctaLink: string;
}

export interface HorizontalCarousel {
  componentName: string;
  data: string[];
}

export interface CTA {
  lebel?: string;
  url?: string;
}

export interface StripViewCTA {
  img: string;
  alt: string;
  text: string;
  link: {
    href: string;
    label: string;
  };
}

export interface FeaturesViewItem {
  img: string;
  title: string;
  desc: string;
}

export interface SplitLayoutContent {
  header?: string;
  tile?: string;
  description?: string;
  listItems?: string[];
  cta?: CTA;
  contactNumber?: string;
  partners?: HorizontalCarousel;
  featuresView?: FeaturesViewItem[];
}

export interface StripViewContent {
  cta?: StripViewCTA;
}

export type SectionContent = HeroContentItem[] | SplitLayoutContent | StripViewContent | Record<string, unknown>;

export interface Section {
  sectionName: string;
  componentName: string;
  content: any;
}

export interface ApiResponse {
  data: Section[];
}
