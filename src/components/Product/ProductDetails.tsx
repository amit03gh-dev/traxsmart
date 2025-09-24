"use client";

import { useState } from "react";

type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  features: string[];
  technical: Record<string, string | number>;
};


type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "technical">("features");

  return (
    <div className="container py-5">
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Specs
          </button>
        </li>
      </ul>

      {/* Features Tab */}
      {activeTab === "features" && (
        <ul className="list-group list-group-flush mt-3">
          {product.features.map((f, i) => (
            <li key={i} className="list-group-item">{f}</li>
          ))}
        </ul>
      )}

      {/* Technical Tab */}
      {activeTab === "technical" && (
        <div className="mt-3">
          <table className="table table-bordered">
            <tbody>
              {Object.entries(product.technical).map(([key, val]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
