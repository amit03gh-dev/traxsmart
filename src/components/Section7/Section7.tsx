"use client";

import TX_SectionHeader2 from "../common/SectionHeader/TX_SectionHeader2";
import TabView1 from "../common/TabView/TabView1";

interface TabItem {
  id: string;
  icon: string;
  title: string;
  image: string;
  desc: string;
}

interface SectionSixData {
  header: string;
  title: string;
  description: string;
  tabs: TabItem[];
}

interface Props {
  data:{
    componentName: string;
    content: SectionSixData
  }
}

export default function Section7({ data }: Props) {
  const {content} = data
  return (
    <section className="bg-gradient-solitude-blue-transparent" id="services">
      <div className="container">
        <TX_SectionHeader2 data={{header: content.header, description: content.description, title: content.title}}/>
        <TabView1 data={content.tabs}/>
      </div>
    </section>
  );
}

