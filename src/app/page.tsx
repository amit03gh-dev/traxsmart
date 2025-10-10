import AIS140 from "@/components/AIS140/Ais140";
import ContactSection from "@/components/Contacts/Contacts";
import HomeComp from "@/components/Home/Home";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionFour from "@/components/SectionFour/SectionFour";
import SectionSeven from "@/components/SectionSeven/SectionSeven";
import SectionSix from "@/components/SectionSix/SectionSix";
import EsimSection from "@/components/VentelIOT/IotSection";

import HomeService from "@/services/Home.service";

export const revalidate = 7776000;

export default async function Home() {
  const services = await HomeService.getProducts();
  const comp1= services.data[0]
  const comp2 = services.data[1]
  const comp3 = services.data[2]
  const comp4 = services.data[3]
  const comp5 = services.data[4]
  const comp6 = services.data[5]
  const comp7 = services.data[6]
  const comp8 = services.data[7]

 
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <HomeComp data={comp1} />

      {/* Product Section */}
      <AIS140 data={comp2} />
      {/* <AIS140  /> */}

      {/* IoT */}
      <EsimSection data={comp3} />
      <SectionSeven data={comp4}/>

      <SectionFour data={comp5} />
      {/* <SectionFour data={heroData} /> */}

      {/* Case Studies */}
      <SectionFive data={comp6} />

      {/* More Services */}
      <SectionSix data={comp7} />

      {/* Contact */}
      <ContactSection data={comp8} />
    </main>
  );
}
