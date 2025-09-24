import Image from "next/image";
import Text from "../common/Text";
import Header from "../common/Header";
import styles from "./section.six.module.css";

type FeatureKey =
  | "AIS140 VLTD"
  | "m2m eSIM Solutions"
  | "Software Solutions"
  | "Custom Manufacturing";

interface MobileViewProps {
  selectedFeature: FeatureKey;
  setSelectedFeature: (feature: FeatureKey) => void;
  features: Record<FeatureKey, { image: string; description: string; icon: string }>;
  featureKeys: FeatureKey[];
}

export default function MobileView({ 
  selectedFeature, 
  setSelectedFeature, 
  features, 
  featureKeys 
}: MobileViewProps) {
  return (
    <div className="d-block d-md-none">
      <div className="text-center mb-5">
        <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
        <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
          One-stop AIS140 Solution
        </span>

        <Header as="h2" className="fw-800 mt-2 mb-3">
          <span className={styles.gradientText}>Grow Your AIS140 Business</span>
        </Header>

        <Text className="text-muted">
          {"Elevate your business with Traxsmart's comprehensive AIS140 Stack solution."}
        </Text>
      </div>

      {/* Feature Selection Cards */}
      <div className={styles.featureScroll}>
        {featureKeys.map((feature) => (
          <div
            key={feature}
            className={`${styles.featureCard} ${selectedFeature === feature ? styles.active : ""}`}
            onClick={() => setSelectedFeature(feature)}
          >
            {/* {selectedFeature === feature && (
              <div className={styles.activeBadge}>
                <i className="bi bi-check-circle-fill me-1"></i>
                Active
              </div>
            )} */}
            
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-center text-center">
                <div className={`${styles.iconContainer} ${selectedFeature === feature ? styles.active : styles.default}`}>
                  <i className={`bi ${features[feature].icon} fs-4`}></i>
                </div>
                <div className="ms-3">
                  <h6 className={`${styles.featureTitle} ${selectedFeature === feature ? styles.active : ""}`}>
                    {feature}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Display */}
      <div className={styles.imageContainer}>
        <Image
          src={features[selectedFeature].image}
          alt={selectedFeature}
          fill
          className="img-fluid rounded shadow"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Description Box */}
      <div className={styles.descriptionBox}>
        <p className={styles.descriptionText}>
          {features[selectedFeature].description}
        </p>
      </div>

      {/* Indicator Dots */}
      <div className={styles.indicatorDots}>
        {featureKeys.map((feature) => (
          <div
            key={feature}
            className={`${styles.dot} ${selectedFeature === feature ? styles.active : ""}`}
            onClick={() => setSelectedFeature(feature)}
          />
        ))}
      </div>
    </div>
  );
}