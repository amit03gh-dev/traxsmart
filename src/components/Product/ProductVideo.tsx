"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductVideoProps {
  image: string;
  videoUrl: string; // YouTube embed link or video file
  title?: string;
}

export default function ProductVideo({
  image,
  videoUrl,
  title = "Product Video",
}: ProductVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="text-center">
      {/* Thumbnail with play button */}
      <div className="position-relative d-inline-block">
        <Image
          src={image}
          alt={title}
          width={450}
          height={280}
          className="img-fluid rounded shadow"
          style={{ objectFit: "cover" }}
          priority
          fetchPriority="high"
        />
        <button
          onClick={() => setShowVideo(true)}
          className="btn btn-light rounded-circle position-absolute shadow-lg d-flex align-items-center justify-content-center play-btn-glow"
          style={{
            width: 80,
            height: 80,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
          aria-label="Play product video"
        >
          <i className="bi bi-play-fill text-primary" style={{ fontSize: 32 }} />
        </button>
      </div>

      {/* Modal with video */}
      {showVideo && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          style={{ zIndex: 1050 }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="ratio ratio-16x9"
            style={{ maxWidth: "1000px", width: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* CSS for glow effect */}
      <style jsx>{`
        .play-btn-glow {
          position: relative;
        }
        .play-btn-glow::before,
        .play-btn-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.4);
          z-index: -1;
          animation: pulse 2s infinite;
        }
        .play-btn-glow::after {
          animation-delay: 1s;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
