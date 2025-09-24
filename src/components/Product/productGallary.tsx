"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  interval?: number; // autoplay interval in ms (default 3000)
}

export default function ProductGallery({ images, alt, interval = 3000 }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // cleanup
  }, [images.length, interval]);

  return (
    <div className="row">
      {/* Thumbnail Gallery */}
      <div className="col-md-2 d-flex flex-column gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            className={`border rounded p-1 bg-white ${
              selectedIndex === i ? "border-primary" : "border-light"
            }`}
            onClick={() => setSelectedIndex(i)}
          >
            <Image
              src={img}
              alt={`${alt} thumbnail ${i + 1}`}
              width={80}
              height={80}
              className="img-fluid"
            />
          </button>
        ))}
      </div>

      {/* Large Image */}
      <div className="col-md-10 text-center">
        <Image
          src={images[selectedIndex]}
          alt={alt}
          width={500}
          height={500}
          className="img-fluid rounded shadow-sm"
        />
      </div>
    </div>
  );
}
