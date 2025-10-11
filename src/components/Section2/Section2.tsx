"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TX_SectionHeaderType1 from "../common/SectionHeader/TX_SectionHeaderType1";
import TX_ListItemViewTwo from "../common/ListItemView/TX_ListItemViewTwo";
import ButtonViewOne from "../common/ButtonView/ButtonViewOne";
import TX_ContactView1 from "../common/ContactView/TX_ContactView1";
import TX_LogoSlider from "../common/Slider/TX_LogoSlider";

// Define props types


interface Button {
  text: string;
  href: string;
  icon?: string;
}

interface Contact {
  phone: string;
  label?: string;
}

interface AIS140Props {
  id?: string;
  tagline: string;
  title: string;
  description: string;
  listItems: string[];
  cta: Button;
  contact: Contact;
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

type AIS140 = {
  componentName: string;
  content: AIS140Props;
};

interface Props {
  data: AIS140;
}

export default function Section2({ data }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollY = useMotionValue(0);
  const scrollTransform = useTransform(scrollY, [0, 1], [-50, 50]);

  const { content } = data;
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) / 25;
        const moveY = (y - rect.height / 2) / 25;
        setPosition({ x: moveX, y: moveY });
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - sectionRect.top) /
              (sectionRect.height + window.innerHeight)
          )
        );
        scrollY.set(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const container = imageRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (container)
        container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scrollY]);

  return (
    <section
      id="ais140"
      ref={sectionRef}
      className="bg-gradient-solitude-blue-transparent"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side */}
          <motion.div
            className="col-xl-5 col-lg-6 col-md-9 md-mb-50px text-center text-lg-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TX_SectionHeaderType1 data={data.content} />
            <div className="mb-20px">
              {data.content.listItems?.map((f, i) => (
                <TX_ListItemViewTwo key={i} item={f} />
              ))}
            </div>

            <div className="d-inline-flex flex-wrap">
              {content.cta && <ButtonViewOne data={content.cta} />}
              {content.contact && <TX_ContactView1 data={content.contact} />}
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="col-xl-6 col-lg-6 offset-xl-1 position-relative">
            <motion.div
              ref={imageRef}
              className="w-80 ms-auto shadow-in"
              style={{
                translateX: position.x,
                translateY: position.y,
                y: scrollTransform,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={data.content.mainImage.src}
                alt={data.content.mainImage.alt}
                width={data.content.mainImage.width}
                height={data.content.mainImage.height}
                className="border-radius-15px w-100"
              />
            </motion.div>

            {data.content.secondaryImage && (
              <motion.div
                className="w-50 overflow-hidden position-absolute left-minus-40px bottom-20px shadow-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={data.content.secondaryImage.src}
                  alt={data.content.secondaryImage.alt}
                  width={data.content.secondaryImage.width}
                  height={data.content.secondaryImage.height}
                  className="border-radius-15px box-shadow-quadruple-large"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="row position-relative clients-style-08 mt-15">
          <TX_LogoSlider />
        </div>
      </div>
    </section>
  );
}
