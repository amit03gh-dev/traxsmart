import Section1 from "@/components/Section1/Section1";
import Section2 from "@/components/Section2/Section2";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6/Section6";
import Section7 from "@/components/Section7/Section7";
import Section8 from "@/components/Section8/Section8";

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
      <Section1 data={comp1} />

      {/* Product Section */}
      <Section2 data={comp2} />
      {/* <AIS140  /> */}

      {/* IoT */}
      <Section3 data={comp3} />
      <Section4 data={comp4}/>

      <Section5 data={comp5} />

      {/* Case Studies */}
      <Section6 data={comp6} />

      {/* More Services */}
      <Section7 data={comp7} />

      {/* Contact */}
      <Section8 data={comp8} />
    </main>
  );
}
