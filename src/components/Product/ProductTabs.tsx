"use client";

import { useState } from "react";
import { Feature } from "@/types/product";
import ProductVideo from "./ProductVideo";
import ProductFeatures from "./ProductFeatures";
import HighlightsList from "./HighLightsListProps";
import ProductTechnical from "./TechinicalSpecification";
import ProductPackaging from "./PackagingAndShipping";

interface ProductTabsProps {
  description: {
    title: string;
    text: string;
    highlights: string[];
    image?: string;
    video?: string;
  };
  features: Feature[];
  technical: Record<string, string | number>;
  packaging: {
    items: string[];
    shipping: string[];
    bulkOrders: string[];
  };
}

export default function ProductTabs({
  description,
  features,
  technical
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "features" | "technical" | "packaging"
  >("description");

  return (
    <div className="mt-4">
      {/* Tabs */}
      <ul className="custom-tabs d-flex gap-5 mb-4 border-bottom">
        {["description", "features", "technical", "packaging"].map((tab) => (
          <li key={tab} className="list-unstyled">
            <button
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            >
              {tab === "description" && "Description"}
              {tab === "features" && "Features"}
              {tab === "technical" && "Technical Specifications"}
              {tab === "packaging" && "Packaging and Shipping"}
            </button>
          </li>
        ))}
      </ul>

      {/* Description */}
      {activeTab === "description" && (
        <div className="row align-items-center py-4">
          <div className="col-md-7">
            <h5 className="text-primary fw-semibold">
              Unrivaled Reliability, Ultimate Control. Track Smarter, Drive
              Safer.
            </h5>
            <h3 className="fw-bold">{description.title}</h3>
            <p>{description.text}</p>

            {/* ✅ Highlights */}
            <HighlightsList points={description.highlights} />
          </div>

          <div className="col-md-5 text-center">
            <ProductVideo
              image={description.image || "/placeholder.jpg"}
              videoUrl={
                description.video ||
                "https://www.youtube.com/embed/dQw4w9WgXcQ"
              }
              title={description.title}
            />
          </div>
        </div>
      )}

      {/* Features */}
      {activeTab === "features" && <ProductFeatures features={features} />}

      {/* Technical */}
      {/* {activeTab === "technical" && (
        <div>
          <h4>Technical Specifications</h4>
          <table className="table table-bordered">
            <tbody>
              {Object.entries(technical).map(([k, v]) => (
                <tr key={k}>
                  <td className="fw-semibold">{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}

      {activeTab === "technical" && (
  <div>
    <h4>Technical Specifications</h4>
    <ProductTechnical technical={technical} />
  </div>
)}


      {/* Packaging */}
      {/* {activeTab === "packaging" && (
        <div>
          <h4>Packaging and Shipping</h4>
          <p>{packaging}</p>
        </div>
      )} */}

      {activeTab === "packaging" && (
  <div>
    <ProductPackaging
      packaging={{
        items: [
          "TSindia140 GPS Device",
          "Wiring Harness",
          "External GNSS & GSM Antennas (if applicable)",
          "SOS Button (AIS140 variant)",
          "Installation Guide",
        ],
        shipping: [
          "Free shipping on orders over ₹10,000",
          "Standard delivery: 3–7 business days",
          "Express delivery available at checkout",
          "International shipping via DHL/FedEx",
          "Secure, pre-tested and sealed packaging",
        ],
        bulkOrders:
          "We support large-scale deployment for fleet operators, system integrators, OEMs, and government projects. Special pricing, custom branding, and integration support available for orders of 50 units or more. Reach out to our sales team for volume discounts and tailored logistics.",
      }}
    />
  </div>
)}


      {/* Custom Tabs CSS */}
      <style jsx>{`
        .tab-btn {
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 500;
          color: #6c757d; /* gray */
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }

        .tab-btn:hover {
          color: #000;
        }

        .tab-btn.active {
          color: #000;
          font-weight: 600;
        }

        .tab-btn.active::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: #000;
        }
      `}</style>
    </div>
  );
}
