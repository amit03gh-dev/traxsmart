"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import TX_SectionHeaderType1 from "../SectionHeader/TX_SectionHeaderType1";
import ButtonViewOne from "../ButtonView/ButtonViewOne";
import TX_ContactView1 from "../ContactView/TX_ContactView1";

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
  videoUrl?: string;
};

type Props = {
  data: HeroData;
};

// ================= COMPONENT =================
export default function TX_SplitContentMediaLeft({ data }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  const scrollY = useMotionValue(0);
  // const floatY = useTransform(scrollY, [0, 1], [-30, 30]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section className="p-0">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left: Large image with Play Button */}
          <motion.div
            className="col-xxl-7 col-lg-6 cover-background md-h-600px sm-h-400px"
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={data.mainImage.src}
                alt={data.mainImage.alt}
                fill
                priority
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="shadow"
                fetchPriority="high"
              />
            </div>

            {data.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="btn btn-light rounded-circle position-absolute shadow-lg d-flex align-items-center justify-content-center play-btn-glow"
                style={{
                  width: 96,
                  height: 96,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
                aria-label="Play demo"
              >
                <i className="bi bi-play-fill text-primary" style={{ fontSize: 36 }} />
              </button>
            )}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="col-xxl-5 col-lg-6 bg-solitude-blue p-6 xl-p-4 md-p-50px sm-p-30px"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TX_SectionHeaderType1 data={{header: data.header, description: data.description, title: data.title}}/>
            {/* <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                {data.header}
              </span>
            </div>
            <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">{data.title}</h3>
            <p className="w-80 sm-w-100 text-dark-gray">{data.description}</p> */}

            <div className="mb-20px">
              {data.features.map((feature, i) => (
                // <TX_ListItemViewTwo  item={feature} key={i}/>
                <div key={i} className="icon-with-text-style-08 mb-10px">
                  <div className="feature-box feature-box-left-icon-middle">
                    <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                      <i className={feature.icon + " fs-14 text-dark-gray"}></i>
                    </div>
                    <div className="feature-box-content">
                      <span className="text-dark-gray fw-600">{feature.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-inline-flex flex-wrap">
                <ButtonViewOne data={{href: data.cta.href, icon: data.cta.icon, text: data.cta.text}}/>
                <TX_ContactView1 data={{phone: data.contact.phone, label: data.contact.label}}/>

            </div>
          </motion.div>

          
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && data.videoUrl && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          style={{ zIndex: 1050 }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="ratio ratio-16x9"
            style={{ maxWidth: "1000px", width: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={data.videoUrl}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 🔹 Extra CSS for wave/glow effect */}
      <style jsx>{`
        .play-btn-glow {
          position: relative;
        }
        .play-btn-glow::before,
        .play-btn-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.4);
          z-index: -1;
          animation: pulse 2s infinite;
        }
        .play-btn-glow::after {
          animation-delay: 1s;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

