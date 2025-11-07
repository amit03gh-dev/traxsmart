"use client";

import { Feature } from "@/types/product";
import ButtonViewOne from "../common/ButtonView/ButtonViewOne";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

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

export default function ProductDetails({ product }: Props) {
  const { title, description, category, features } = product;
  const [qty, setQty] = useState<number>(1);
  const handleQuantityChange = useCallback((type: string) => {
    setQty((prevQty) => {
      if (type === "decrease") {
        return prevQty > 1 ? prevQty - 1 : prevQty;
      }
      return prevQty + 1;
    });
  }, []);
  const estimatedDeliveryRange = useMemo(() => {
    const currentDate = new Date();
    const minimumDate = new Date(currentDate);
    minimumDate.setDate(currentDate.getDate() + 3);
    const maximumDate = new Date(currentDate);
    maximumDate.setDate(currentDate.getDate() + 10);
    const formatDate = (date: Date) =>
      date.toLocaleString("en-US", { month: "long", day: "2-digit" });
    return `${formatDate(minimumDate)} - ${formatDate(maximumDate)}`;
  }, []);
  return (
         <div className="col-12 col-lg-5 product-info">
        <span className="fw-500 text-dark-gray d-block">GPS Trackers</span>
        <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
          {title}
        </h3>

        <div className="d-block d-sm-flex align-items-center mb-15px">
          <div className="me-10px xs-me-0">
            <a href="#tab" className="section-link ls-minus-1px icon-small">
              <i className="bi bi-star-fill text-golden-yellow"></i>
              <i className="bi bi-star-fill text-golden-yellow"></i>
              <i className="bi bi-star-fill text-golden-yellow"></i>
              <i className="bi bi-star-fill text-golden-yellow"></i>
              <i className="bi bi-star-fill text-golden-yellow"></i>
            </a>
          </div>
          <a
            href="#tab"
            className="me-25px text-dark-gray fw-500 section-link xs-me-0"
          >
            165 Reviews
          </a>
          <div>
            <span className="text-dark-gray fw-500">SKU: </span>M492300
          </div>
        </div>

        <div className="product-price mb-10px">
          <span className="text-dark-gray fs-28 xs-fs-24 fw-700 ls-minus-1px">
            <del className="text-medium-gray me-10px fw-400">₹85.00</del>₹65.00
          </span>
        </div>

        <p className="w-100 xl-w-100 mx-auto text-dark-gray">
          {description}
        </p>

        <div className="d-flex align-items-center flex-column flex-sm-row mb-20px position-relative">
          <div className="quantity me-15px xs-mb-15px order-1">
            <button type="button" className="qty-minus" onClick={()=>handleQuantityChange('decrease')}>
              -
            </button>
            <input
              className="qty-text"
              type="text"
              id="1"
              value={qty}
              aria-label="submit"
              readOnly
            />
            <button type="button" className="qty-plus" onClick={()=>handleQuantityChange('increase')}>
              +
            </button>
          </div>

          <a
            href="demo-fashion-store-cart.html"
            className="btn btn-cart btn-extra-large btn-switch-text btn-box-shadow btn-none-transform btn-dark-gray left-icon btn-round-edge border-0 me-15px xs-me-0 order-3 order-sm-2"
          >
            <span>
              <span>
                <i className="feather icon-feather-shopping-bag"></i>
              </span>
              <span className="btn-double-text ls-0px" data-text="Buy Now">
                Buy Now
              </span>
            </span>
          </a>
        </div>

        <div className="mb-20px h-1px w-100 bg-extra-medium-gray d-block"></div>

        <div className="row mb-15px">
          <div className="col-12 icon-with-text-style-08">
            <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
              <div className="feature-box-icon me-10px">
                <i className="feather icon-feather-truck top-8px position-relative align-middle text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span>
                  <span className="alt-font text-dark-gray fw-500">
                    Estimated delivery:
                  </span>{" "}
                  {estimatedDeliveryRange}
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 icon-with-text-style-08 mb-10px">
            <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
              <div className="feature-box-icon me-10px">
                <i className="feather icon-feather-archive top-8px position-relative align-middle text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span>
                  <span className="alt-font text-dark-gray fw-500">
                    Free shipping & returns:
                  </span>{" "}
                  On all orders over $50
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-very-light-gray ps-30px pe-30px pt-25px pb-25px mb-20px xs-p-25px border-radius-4px">
          <span className="alt-font fs-17 fw-500 text-dark-gray mb-15px d-block lh-initial">
            Guarantee safe and secure checkout
          </span>
 <div>
          <Image src="/media/paymentMethod/visa.svg" width={50} height={40} className="h-40px me-5px mb-5px" alt="" />
          <Image src="/media/paymentMethod/mastercard.svg" width={50} height={40} className="h-40px me-5px mb-5px" alt="" />
          <Image src="/media/paymentMethod/amazonPay.svg"width={50} height={40} className="h-40px me-5px mb-5px" alt="" />
          <Image src="/media/paymentMethod/upi.svg" width={50} height={40} className="h-40px me-5px mb-5px" alt="" />
          {/* <Image src="/images/diners-club.svg" width={40} height={30} className="h-30px me-5px mb-5px" alt="" />
          <Image src="/images/union-pay.svg" width={40} height={30} className="h-30px" alt="" /> */}
        </div>
        </div>
      </div>
  );
}
