// import Image from "next/image";
import AIS140 from "@/components/AIS140/Ais140";
import ContactSection from "@/components/Contacts/Contacts";
import HomeComp from "@/components/Home/Home";
// import styles from "./page.module.css";
import OurPartnersComp from "@/components/Partners/OurPartners";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionFour from "@/components/SectionFour/SectionFour";
import SectionSix from "@/components/SectionSix/SectionSix";
import IoTSection from "@/components/VentelIOT/IotSection";
import HomeService from "@/services/Home.service";

export const revalidate = 600;

export default async function Home() {
    const services = await HomeService.getProducts();
    console.log("response is >>>>>>>>>>>>>",services)
  return (
    <div>
      {/* <Navbar /> */}
      <HomeComp />
      <AIS140 />
      <OurPartnersComp />
      <IoTSection />
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <ContactSection/>
    </div>
  );
}
