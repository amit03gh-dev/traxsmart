import React from "react";

interface HighlightsListProps {
  points: string[];
}

export default function HighlightsList({ points }: HighlightsListProps) {
  return (
    <ul className="list-unstyled m-0 p-0">
      {points.map((point, i) => (
        <li key={i} className="d-flex align-items-start mb-3">
          <i className="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
          <span className="fw-medium">{point}</span>
        </li>
      ))}
    </ul>
  );
}
