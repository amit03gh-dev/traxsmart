// types/footer.ts

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  link: string;
}

export interface FooterContact {
  phone: string;
  email: string;
}

export interface FooterData {
  logo: FooterLogo;
  address: string;
  contact: FooterContact;
  sections: FooterSection[];
}

export interface FooterApiResponse {
  data: FooterData;
}
