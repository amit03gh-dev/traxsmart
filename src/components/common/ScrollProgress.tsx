"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = document.documentElement.clientHeight;

      // Toggle visibility
      setVisible(scrollTop > window.innerHeight / 2);

      // Calculate scroll percentage
      const maxScrollTop = scrollHeight - windowHeight;
      const percentage = (scrollTop / (maxScrollTop - window.innerHeight / 2)) * 100;
      setScrollPercent(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`scroll-progress ${visible ? "visible d-none d-xxl-block" : ""}`}>
      <button
        onClick={scrollToTop}
        aria-label="scroll"
        className="scroll-top"
      >
        <span className="scroll-text">Scroll</span>
        <span className="scroll-line">
          <span
            className="scroll-point"
            style={{ height: `${scrollPercent}%` }}
          ></span>
        </span>
      </button>
    </div>
  );
}
