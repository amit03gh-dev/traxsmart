"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function MagicCursor() {
  useEffect(() => {
    const ball = document.getElementById("ball-cursor");
    const ballLoader = document.getElementById("ball-cursor-loader");

    if (!ball || !ballLoader) return;

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.65;
    const active = false;

    const mouseMove = (e: MouseEvent) => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      mouse.x = e.pageX;
      mouse.y = e.pageY - scrollY;
    };

    const updatePosition = () => {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;
        gsap.to(ball, {
          x: pos.x,
          y: pos.y,
          duration: 0.4,
          overwrite: "auto",
        });
      }
    };

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      borderWidth: "0",
      opacity: 1,
    });

    document.addEventListener("mousemove", mouseMove);
    gsap.ticker.add(updatePosition);

    // hover effect for elements with .magic-cursor
    const hoverHandler = () => {
      gsap.to(ball, { borderWidth: "2px", scale: 1, duration: 0.3 });
      gsap.to(ballLoader, {
        borderWidth: "2px",
        top: 2,
        left: 2,
        duration: 0.2,
      });
      document.querySelector(".magic-cursor-wrapper")?.classList.add("sliderhover");
    };

    const leaveHandler = () => {
      gsap.to(ball, {
        borderWidth: "2px",
        scale: 1,
        borderColor: "transparent",
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(ballLoader, {
        borderWidth: "2px",
        top: 0,
        left: 0,
        duration: 0.2,
      });
      document.querySelector(".magic-cursor-wrapper")?.classList.remove("sliderhover");
    };

    const magicEls = document.querySelectorAll(".magic-cursor");
    magicEls.forEach((el) => {
      el.addEventListener("mouseenter", hoverHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    // hide on links/pagination etc
    const hideEls = document.querySelectorAll(
      ".swiper-button-next, .swiper-button-prev, .swiper-pagination, a:not(.force-magic-cursor)"
    );

    const hideHandler = () => {
      (document.querySelector(".magic-cursor-wrapper") as HTMLElement).style.opacity = "0";
    };
    const showHandler = () => {
      (document.querySelector(".magic-cursor-wrapper") as HTMLElement).style.opacity = "1";
    };

    hideEls.forEach((el) => {
      el.addEventListener("mouseenter", hideHandler);
      el.addEventListener("mouseleave", showHandler);
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      gsap.ticker.remove(updatePosition);
      magicEls.forEach((el) => {
        el.removeEventListener("mouseenter", hoverHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
      hideEls.forEach((el) => {
        el.removeEventListener("mouseenter", hideHandler);
        el.removeEventListener("mouseleave", showHandler);
      });
    };
  }, []);

  return (
    <div className="magic-cursor-wrapper magic-drag-cursor">
      
      <div id="ball-cursor">
        <div id="ball-cursor-loader">
        </div>
      </div>
    </div>
  );
}
