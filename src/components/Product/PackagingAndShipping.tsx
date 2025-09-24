"use client";

interface ProductPackagingProps {
  packaging: {
    items: string[];
    shipping: string[];
    bulkOrders: string;
  };
}

export default function ProductPackaging({ packaging }: ProductPackagingProps) {
  return (
    <div className="row g-4">
      {/* Packaging Information */}
      <div className="col-md-4">
        <h5 className="fw-bold mb-3">Packaging Information</h5>
        <ul className="list-unstyled">
          {packaging.items.map((item, i) => (
            <li key={i} className="d-flex align-items-start mb-2">
              <i className="fa-solid fa-check text-primary me-2 mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Shipping Information */}
      <div className="col-md-4">
        <h5 className="fw-bold mb-3">Shipping Information</h5>
        <ul className="list-unstyled">
          {packaging.shipping.map((ship, i) => (
            <li key={i} className="d-flex align-items-start mb-2">
              <i className="fa-solid fa-check text-primary me-2 mt-1"></i>
              <span>{ship}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bulk Orders */}
      <div className="col-md-4">
        <h5 className="fw-bold mb-3">Bulk Orders</h5>
        <p className="text-muted">{packaging.bulkOrders}</p>
      </div>
    </div>
  );
}
