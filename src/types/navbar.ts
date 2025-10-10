// types/navbar.ts
export interface SubmenuItem {
  id: number;
  label: string;
  url: string;
  icon?: string;
  isExternal?: boolean;
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  hasDropdown: boolean;
  dropdown_items?: SubmenuItem[];
  icon?: string;
}

export interface CTAButton {
  text: string;
  url: string;
  icon?: string;
}

export interface Logo {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface NavbarData {
  logo: Logo;
  menu_items: MenuItem[];
  phone_number: string;
  cta_button?: CTAButton;

}

export interface NavbarApiResponse {
 data: NavbarData
}

