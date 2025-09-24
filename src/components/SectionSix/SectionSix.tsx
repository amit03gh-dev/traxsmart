"use client";

import { useState, useEffect } from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import styles from "./section.six.module.css";

type FeatureKey =
  | "AIS140 VLTD"
  | "m2m eSIM Solutions"
  | "Software Solutions"
  | "Custom Manufacturing";

export default function SectionSix() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey>("AIS140 VLTD");

  const features = {
    "AIS140 VLTD": {
      image: "https://traxsmart.in/media/ais140stack/1.png",
      description: "Certified AIS140 vehicle tracking devices with advanced GPS technology for real-time monitoring and compliance.",
      icon: "bi-geo-alt",
    },
    "m2m eSIM Solutions": {
      image: "https://traxsmart.in/media/ais140stack/2.jpg",
      description: "Seamless connectivity solutions with embedded SIM technology for reliable machine-to-machine communication.",
      icon: "bi-wifi",
    },
    "Software Solutions": {
      image: "https://traxsmart.in/media/ais140stack/software.png",
      description: "Comprehensive software platforms for fleet management, analytics, and operational efficiency.",
      icon: "bi-code-slash",
    },
    "Custom Manufacturing": {
      image: "https://traxsmart.in/media/ais140stack/4.jpg",
      description: "Tailored hardware solutions designed to meet your specific requirements and use cases.",
      icon: "bi-gear-fill",
    },
  };

  const featureKeys: FeatureKey[] = Object.keys(features) as FeatureKey[];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="services" className={`py-5 ${styles.container}`}>
      <div className="container">
        {isMobile ? (
          <MobileView
            selectedFeature={selectedFeature}
            setSelectedFeature={setSelectedFeature}
            features={features}
            featureKeys={featureKeys}
          />
        ) : (
          <DesktopView
            selectedFeature={selectedFeature}
            setSelectedFeature={setSelectedFeature}
            features={features}
            featureKeys={featureKeys}
          />
        )}
      </div>
    </section>
  );
}