"use client";

interface ProductTechnicalProps {
  technical: Record<string, string | number>;
}

export default function ProductTechnical({ technical }: ProductTechnicalProps) {
  const entries = Object.entries(technical);

  return (
    <div className="card shadow-sm border-0 rounded-3">
      <div className="card-body p-0">
        {entries.map(([k, v], i) => (
          <div
            key={k}
            className={`row align-items-center m-0 ${
              i % 2 === 0 ? "bg-dark-subtle" : "bg-light-subtle"
            } border-bottom`}
          >
            {/* Key */}
            <div className="col-md-4 fw-bold py-3 text-dark">{k}:</div>

            {/* Value */}
            <div className="col-md-8 py-3 text-secondary">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
