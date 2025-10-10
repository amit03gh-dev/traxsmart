"use client";

import { Feature } from "@/types/product";

interface ProductFeaturesProps {
  features: Feature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="card shadow-sm border-0 rounded-3">
      <div className="card-body p-0">
        {features.map((f, i) => (
          <div
            key={i}
            className={`row align-items-center m-0 ${
              i % 2 === 0 ? "bg-dark-subtle" : "bg-light-subtle"
            } border-bottom`}
          >
            {/* Feature Key */}
            <div className="col-md-4 fw-bold py-3 text-dark">
              {f.key}:
            </div>

            {/* Feature Value */}
            <div className="col-md-8 py-3 text-secondary">
              {f.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
