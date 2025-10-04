"use client";

import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import Image from "next/image";

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
    cta: CTA;
  };
};

export default function SectionSeven({ data }: Props) {
  return (
    <section className="p-0 bg-theme">
      <motion.div
        className="container"
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="row align-items-center justify-content-center g-0">
          <div className="col-auto d-flex align-items-center">
            <Image
              src={data.cta.img}
              alt={data.cta.alt}
              width={122}
              height={92}
              // className="w-15"
            />
            <div className="fs-17 lh-26 last-paragraph-no-margin text-white pt-15px pb-15px fw-500">
              <p>
                {data.cta.text}{" "}
                <a
                  href={data.cta.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-line-bottom text-white"
                >
                  {data.cta.link.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
