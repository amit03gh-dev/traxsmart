"use client";

import { motion } from "framer-motion";
import TSX_CtaBanner1 from "../common/CtaBanner/TSX_CtaBanner1";

// Types
type CTA = {
  img: string;
  alt: string;
  text: string;
  link: {
    href: string;
    label: string;
  };
};

type Props = {
  data: {
    componentName: string;
    content: {
      cta: CTA;
    }
  };
};

export default function SectionSeven({ data }: Props) {
  const {cta} = data.content
  return (
    <section className="p-0 bg-theme">
      <motion.div
        className="container"
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TSX_CtaBanner1 data={cta}/>
      </motion.div>
    </section>
  );
}
