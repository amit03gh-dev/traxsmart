"use client";
import ProductDescriptionTab from "./ProductDescriptionTab";
import FeaturesTab from "./FeaturesTab";
import TechicalSpecification from "./TechicalSpecification";
import PackagingAndShipping from "./PackagingAndShipping";
import { ProductDetails } from "@/types/product";
import Contactus from "./Contactus";

interface ProductTabsProps {
  productDetails: ProductDetails;
}

export default function ProductTabs({ productDetails }: ProductTabsProps) {
  const { componentType, data } = productDetails;

  // Safely find tabs
  const tabDescription = data.find(tab => tab.tabTitle === "Description");
  const features = data.find(tab => tab.tabTitle === "Features");
  const technicalSpecifications = data.find(tab => tab.tabTitle === "Technical Specifications");
  const packaging = data.find(tab => tab.tabTitle === "Packaging and Shipping");

  return (
    <div className="container">
      <div className="row">
        {componentType === "TXTabView" && (
          <div className="col-12 tab-style-04">
            <ul className="nav nav-tabs border-0 justify-content-center alt-font fs-19">
              {data.map((tab, index) => (
                <li key={tab.idx} className="nav-item">
                  <a
                    data-bs-toggle="tab"
                    href={`#tab_five${index + 1}`}
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                  >
                    {tab.tabTitle}
                    <span className="tab-border bg-dark-gray"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mb-5 h-1px w-100 bg-extra-medium-gray sm-mt-10px xs-mb-8"></div>

            <div className="tab-content">
              {tabDescription && (
                <div className="tab-pane fade in active show" id="tab_five1">
                  <ProductDescriptionTab data={tabDescription.tabPane.data} />
                </div>
              )}

              {features && (
                <div className="tab-pane fade in" id="tab_five2">
                  <FeaturesTab
                    componentType={features.tabPane.componentType}
                    data={features.tabPane.data}
                  />
                </div>
              )}

              {technicalSpecifications && (
                <div className="tab-pane fade in" id="tab_five3">
                  <TechicalSpecification
                    componentType={technicalSpecifications.tabPane.componentType}
                    data={technicalSpecifications.tabPane.data}
                  />
                </div>
              )}

              {packaging && (
                <div className="tab-pane fade in" id="tab_five4">
                  <PackagingAndShipping
                    componentType={packaging.tabPane.componentType}
                    data={packaging.tabPane.data}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Contactus/>
    </div>
  );
}
