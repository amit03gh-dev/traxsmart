// app/page.tsx (or wherever your Home page is)

import AIS140 from "@/components/AIS140/Ais140";
import ContactSection from "@/components/Contacts/Contacts";
import HomeComp from "@/components/Home/Home";
import OurPartnersComp from "@/components/Partners/OurPartners";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionFour from "@/components/SectionFour/SectionFour";
import SectionSeven from "@/components/SectionSeven/SectionSeven";
import SectionSix from "@/components/SectionSix/SectionSix";
import EsimSection from "@/components/VentelIOT/IotSection";

import HomeService from "@/services/Home.service";

export const revalidate = 600;

export default async function Home() {
  const services = await HomeService.getProducts();

  // keep your AIS140 product data here
  const ais140Data = {
    tagline: "Our Flagship Product",
    title: "TSINDIA140",
    description:
      "Introducing TSIndia140, Traxsmart's flagship AIS140-compliant solution designed for superior vehicle tracking and fleet management. With IRNSS support, MFF2 eSIM capability, and adherence to both AIS140 and BIS 16833 standards, it delivers real-time insights for enhanced safety, reliability, and operational efficiency in modern transportation.",
    features: [
      { label: "AIS-140 & BIS-16833 compliant" },
      { label: "IP65 certified" },
      { label: "IRNSS Ready" },
      { label: "e-Sim (MFF2) Ready" },
    ],
    button: {
      text: "Discover more",
      href: "products-gps-tsindia140.html",
      icon: "feather icon-feather-thumbs-up",
    },
    contact: {
      phone: "18008895802",
      label: "Have any question?",
    },
    mainImage: {
      src: "/media/ais1402.png",
      alt: "AIS140 Device Main",
      width: 600,
      height: 400,
    },
    secondaryImage: {
      src: "/media/ais140.png",
      alt: "AIS140 Device Small",
      width: 400,
      height: 300,
    },
  };

  const esimData = {
  tagline: "Intelligent. Secure. Flexible.",
  title: "Ventel - m2m IoT connectivity services",
  description:
    "Ventel eSIM-enabled M2M connectivity solution revolutionizes IoT services for businesses by optimizing asset control and management. With remote management features and expedited services, our solution prioritizes M2M connectivity and security-by-design for safeguarding customer data.",
  mainImage: {
    src: "/media/e-sim-blue.png",
    alt: "Ventel IoT eSIM",
    width: 360,
    height: 360,
  },
  features: [
    {
      img: "/media/esim/1.png",
      title: "Space-Saving Design",
      desc: "Sleek and modern, offering more features in a compact form. Enjoy a lighter, more streamlined experience without compromising on performance.",
    },
    {
      img: "/media/esim/2.png",
      title: "Enhanced Security",
      desc: "Your privacy matters! eSIMs offer state-of-the-art security features, keeping your personal information safe from theft and loss.",
    },
    {
      img: "/media/esim/3.png",
      title: "Remote Provisioning",
      desc: "Say goodbye to fumbling with physical SIM cards! With eSIM, effortlessly switch between carriers and plans at the touch of a button.",
    },
    {
      img: "/media/esim/4.png",
      title: "AIS140 Compliant",
      desc: "Our DoT Certified M2M eSIMs ensure compliance with AIS140 standards, making them ideal for public transport and connected vehicle applications.",
    },
  ]
  
};

const heroData = {
  tagline: "Electronics Manufacturing Services",
  title: "Innovating Tomorrow's Technology Today",
  description:
    "TraxSmart specializes in cutting-edge electronics manufacturing services, delivering quality and efficiency to power your vision.",
  mainImage: {
    src: "https://manufacturing-today.com/wp-content/uploads/sites/4/2024/05/Electronics-Manufacturing-article-image-800x445.png",
    alt: "Electronics Manufacturing",
  },
  features: [
    { icon: "fa-solid fa-check", text: "State-of-the-Art Facilities" },
    { icon: "fa-solid fa-check", text: "End-to-End Solutions" },
    { icon: "fa-solid fa-check", text: "Commitment to Quality" },
  ],
  button: {
    text: "Discover more",
    href: "https://forms.gle/9TW51UbmnRzjowat7",
    icon: "feather icon-feather-thumbs-up",
  },
  contact: {
    label: "Have any question?",
    phone: "18002129911",
  },
  videoUrl: "https://www.youtube.com/embed/VYr5qKB8K1s?si=Zk7DCmmg7OD-hBZu",
};


const industries = [
    { title: "Logistics", img: "/media/domains/logistics.jpg" },
    { title: "Agriculture", img: "/media/domains/agriculture.jpg" },
    { title: "Emergency Services", img: "/media/domains/emergency-services.jpg" },
    { title: "Smart Waste", img: "/media/domains/swm.jpg" },
    { title: "Schools", img: "/media/domains/schools.jpg" },
    { title: "Mining", img: "/media/domains/mining.jpg" },
    { title: "Oil and Gas", img: "/media/domains/oil-and-gas.jpg" },
    { title: "Passerger Transit", img: "/media/domains/passenger_transit.jpg" },
    { title: "Railways", img: "/media/domains/railways.jpg" },
    { title: "Waterways", img: "/media/domains/waterways.jpg" },
  ];


  const ctaData = {
    cta: {
    img: "/media/support.png",
    alt: "support",
    text: "Save your precious time and effort spent for finding a solution.",
    link: {
      href: "https://forms.gle/9TW51UbmnRzjowat7",
      label: "Let's connect",
    },
  },
  }


  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <HomeComp />

      {/* Product Section */}
      {/* <AIS140 {...ais140Data} /> */}
      <AIS140  />

      {/* Partners */}
      {/* <OurPartnersComp /> */}

      {/* IoT */}
      <EsimSection data={esimData} />
      <SectionSeven data={ctaData}/>

      {/* Industries */}
      <SectionFour data={heroData} />

      {/* Case Studies */}
      <SectionFive data={industries} />
      {/* <SectionFive/> */}

      {/* More Services */}
      <SectionSix />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
