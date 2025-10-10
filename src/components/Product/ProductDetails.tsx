"use client";

import { Feature } from "@/types/product";

// import { useState } from "react";

type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  // images: string[];
  features: Feature[];
  // technical: Record<string, string | number>;
};



type Props = {
  product: Product;
};

export default function ProductDetails({product}:Props) {
  const {title, description, category, features} = product

  return (
    <div className="col-12 col-lg-5 product-info">
      <span className="fw-500 text-dark-gray d-block">{category}</span>
      <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
        {title}
      </h3>
      <p className="w-100 xl-w-100 mx-auto text-dark-gray">
        {description}
      </p>

      <div className="mb-20px h-1px w-100 bg-extra-medium-gray d-block"></div>
      <div className="row mb-15px">
        {features && features.map((item,index)=>(
          <div key={index} className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className={`${item.icon} top-6px position-relative align-middle text-primary`}></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  {item.value}
                </span>
              </span>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
}
