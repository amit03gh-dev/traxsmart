"use client";
import TX_SplitContentMediaLeft from "../common/MediaTextLayout/TX_SplitContentMediaLeft";

// ================= TYPES =================
type HeroFeature = {
  icon: string; // icon class
  text: string;
};

type HeroButton = {
  text: string;
  href: string;
  icon: string;
};

type HeroContact = {
  label: string;
  phone: string;
};

type HeroData = {
  content: { 
  header: string;
  title: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
  };
  features: HeroFeature[];
  cta: HeroButton;
  contact: HeroContact;
  videoUrl?: string;}
};

type Props = {
  data: HeroData;
};

// ================= COMPONENT =================
export default function Section5({ data }: Props) {

  return (
   <TX_SplitContentMediaLeft data={data.content}/>
  );
}

