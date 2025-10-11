import Image from "next/image";
import Text from "../common/Text";
import Header from "../common/Header";
import styles from "./section.six.module.css";

type FeatureKey =
  | "AIS140 VLTD"
  | "m2m eSIM Solutions"
  | "Software Solutions"
  | "Custom Manufacturing";

interface DesktopViewProps {
  selectedFeature: FeatureKey;
  setSelectedFeature: (feature: FeatureKey) => void;
  features: Record<FeatureKey, { image: string; description: string; icon: string }>;
  featureKeys: FeatureKey[];
}

export default function DesktopView({ 
  selectedFeature, 
  setSelectedFeature, 
  features, 
  featureKeys 
}: DesktopViewProps) {
  return (
    <div className="d-none d-md-block">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5">
          <div className="mb-5">
            <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
            <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
              Complete AIS140 Ecosystem
            </span>

            <Header as="h2" className="fw-900 mb-4">
              <span className={styles.gradientText}>Accelerate Your Business Growth</span>
            </Header>

            <Text className="text-muted fs-6">
              {"Transform your operations with Traxsmart's comprehensive AIS140 Stack featuring certified tracking devices and cutting-edge technology."}
            </Text>
          </div>

          {/* Feature Selection Cards */}
          <div className="row g-4">
            {featureKeys.map((feature) => (
              <div key={feature} className="col-12">
                <div
                  className={`${styles.featureCard} ${selectedFeature === feature ? styles.active : ""}`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                      <div className={`${styles.iconContainer} ${selectedFeature === feature ? styles.active : styles.default}`}>
                        <i className={`bi ${features[feature].icon} fs-4`}></i>
                      </div>
                      <div className="ms-4 flex-grow-1">
                        <h5 className={`${styles.featureTitle} ${selectedFeature === feature ? styles.active : ""}`}>
                          {feature}
                        </h5>
                      </div>
                      {selectedFeature === feature && (
                        <i className="bi bi-chevron-right fs-5 opacity-75"></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          {/* Image Display */}
          <div className={styles.imageContainer} style={{ height: "500px" }}>
            <Image
              src={features[selectedFeature].image}
              alt={selectedFeature}
              fill
              className="img-fluid rounded"
              style={{ objectFit: "contain" }}
              priority
              fetchPriority="high"
            />
          </div>

          {/* Description Box */}
          <div className={styles.descriptionBox}>
            <p className={styles.descriptionText}>
              {features[selectedFeature].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}