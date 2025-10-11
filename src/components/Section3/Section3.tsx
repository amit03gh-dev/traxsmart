"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import TX_SectionHeaderType1 from "../common/SectionHeader/TX_SectionHeaderType1";
import FeatureCardGridView1 from "../common/FeatureCardGridView/FeatureCardGridView1";

// ================== TYPES ==================
type EsimFeature = {
  img: string;
  title: string;
  desc: string;
};


type EsimDataProps = {
  header: string;
  title: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  features: EsimFeature[];
};

type Props = {
  data: EsimData;
};



type EsimData = {
  sectionName: string;
  componentName: string;
  content: EsimDataProps
};


// ================== COMPONENT ==================
export default function Section3({ data }: Props) {
  const {content}= data
  const scrollY = useMotionValue(0);
  const scrollTransform = useTransform(scrollY, [0, 1], [-30, 30]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section className="position-relative">
      <div
        className="container">
        {/* Row 1: Intro with text + image */}
        <div className="row justify-content-center mb-6 md-mb-10px">
          {/* <TX_SectionHeaderType1 data={content}/> */}
          <motion.div
            className="col-lg-7 col-12 md-mb-50px last-paragraph-no-margin"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                {content.header}
              </span>
            </div>
            <h2 className="text-dark-gray fw-700 ls-minus-2px">
              {content.title}
            </h2>
            <p className="w-85 lg-w-100 text-dark-gray">
              {content.description}
            </p> */}
            <TX_SectionHeaderType1 data={{header: content.header, title: content.title, description: content.description}}/>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="col-xl-4 col-lg-5 offset-xl-1 col-12"
            style={{ y: scrollTransform }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="overflow-hidden animation-float">
              <Image
              src={content.mainImage.src}
              alt={content.mainImage.alt}
              width={content.mainImage.width}
              height={content.mainImage.height}
              className="w-80 img-fluid"
            />
            </div>
            
          </motion.div>
        </div>

        {/* Row 2: Features */}
        <motion.div
          className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center sm-mb-50px"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FeatureCardGridView1 data={content.features}/>
        </motion.div>
      </div>
    </section>
  );
}