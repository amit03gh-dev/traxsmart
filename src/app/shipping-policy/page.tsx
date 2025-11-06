// app/shipping-policy/page.tsx
import React from 'react';
import Link from 'next/link';

const ShippingPolicy = () => {
  return (
    <section className='top-space-margin half-section bg-gradient-very-light-gray'>
         <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="alt-font fw-600 text-dark-gray mb-10px">Shipping Policy</h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Shipping Information */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Shipping & Delivery Information</h3>
            </div>
            <div className="card-body">
              <p>
                We are committed to delivering your orders safely and on time. 
                This policy outlines our shipping procedures, delivery timelines, 
                and what you can expect when you place an order with us.
              </p>
            </div>
          </div>

          {/* Processing Time */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Order Processing Time</h3>
            </div>
            <div className="card-body">
              <p>
                All orders are processed within <strong>1-2 business days</strong> 
                (Monday to Friday, excluding public holidays) after receiving your order.
              </p>
              <ul>
                <li>Standard orders: 1-2 business days</li>
                <li>Customized products: 3-5 business days</li>
                <li>Bulk orders: 5-7 business days</li>
              </ul>
            </div>
          </div>

          {/* Shipping Methods */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Shipping Methods & Delivery Time</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Shipping Method</th>
                      <th>Delivery Time</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard Shipping</td>
                      <td>5-7 business days</td>
                      <td>₹49</td>
                    </tr>
                    <tr>
                      <td>Express Shipping</td>
                      <td>2-3 business days</td>
                      <td>₹149</td>
                    </tr>
                    <tr>
                      <td>Next Day Delivery</td>
                      <td>1 business day</td>
                      <td>₹299</td>
                    </tr>
                    <tr>
                      <td>Free Shipping</td>
                      <td>7-10 business days</td>
                      <td>Free on orders above ₹999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Shipping Areas */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Shipping Areas</h3>
            </div>
            <div className="card-body">
              <p>We currently ship to the following locations:</p>
              <div className="row">
                <div className="col-md-6">
                  <h6>Major Cities</h6>
                  <ul>
                    <li>Delhi NCR</li>
                    <li>Mumbai</li>
                    <li>Bangalore</li>
                    <li>Chennai</li>
                    <li>Kolkata</li>
                    <li>Hyderabad</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Tier 2 & 3 Cities</h6>
                  <ul>
                    <li>Pune</li>
                    <li>Ahmedabad</li>
                    <li>Jaipur</li>
                    <li>Lucknow</li>
                    <li>Chandigarh</li>
                    <li>And 200+ more cities</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted small">
                For remote locations, delivery may take additional 2-3 business days.
              </p>
            </div>
          </div>

          {/* Shipping Costs */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Shipping Costs</h3>
            </div>
            <div className="card-body">
              <p>Shipping costs are calculated based on:</p>
              <ul>
                <li>Delivery location</li>
                <li>Package weight and dimensions</li>
                <li>Shipping method selected</li>
                <li>Order value</li>
              </ul>
              <div className="alert alert-info">
                <strong>Free Shipping:</strong> Enjoy free standard shipping on all orders above ₹999.
              </div>
            </div>
          </div>

          {/* Order Tracking */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Order Tracking</h3>
            </div>
            <div className="card-body">
              <p>
                Once your order is shipped, you will receive a confirmation email with 
                your tracking number and a link to track your package.
              </p>
              <ul>
                <li>Real-time tracking updates</li>
                <li>SMS notifications for major milestones</li>
                <li>Estimated delivery date</li>
                <li>Delivery attempt notifications</li>
              </ul>
            </div>
          </div>

          {/* Delivery Issues */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Delivery Issues</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Failed Delivery Attempts</h6>
              <p>
                If delivery attempts fail due to incorrect address, recipient not available, 
                or other reasons, our courier partner will typically attempt delivery 2 more times.
              </p>

              <h6 className="text-primary mt-4">Incorrect Shipping Address</h6>
              <p>
                Please ensure your shipping address is correct. If an order is returned to us 
                due to an incorrect address, you will be responsible for additional shipping 
                charges to resend the package.
              </p>

              <h6 className="text-primary mt-4">Damaged Packages</h6>
              <p>
                If your package arrives damaged, please contact us within 24 hours of delivery 
                with photos of the damaged package and contents.
              </p>
            </div>
          </div>

          {/* International Shipping */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">International Shipping</h3>
            </div>
            <div className="card-body">
              <p>
                We currently offer international shipping to select countries. 
                International orders may be subject to:
              </p>
              <ul>
                <li>Customs duties and taxes</li>
                <li>Import restrictions</li>
                <li>Longer delivery times (10-20 business days)</li>
                <li>Higher shipping costs</li>
              </ul>
              <p className="text-muted">
                Contact our customer support for international shipping availability and rates.
              </p>
            </div>
          </div>

          {/* Holiday Schedule */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Holiday Schedule</h3>
            </div>
            <div className="card-body">
              <p>
                Please note that orders placed during the following periods may experience 
                delayed processing and shipping:
              </p>
              <ul>
                <li>National holidays</li>
                <li>Festive seasons (Diwali, Christmas, etc.)</li>
                <li>Extreme weather conditions</li>
                <li>Courier partner holidays</li>
              </ul>
              <p>
                We will notify customers of any expected delays during these periods.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Shipping Support</h3>
            </div>
            <div className="card-body">
              <p>
                For any questions about shipping, delivery, or tracking your order, 
                please contact our customer support team:
              </p>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>Email:</strong><br />
                    shipping@yourcompany.com
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    +91-XXXXX-XXXXX
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Support Hours:</strong><br />
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Policy Updates</h3>
            </div>
            <div className="card-body">
              <p>
                We reserve the right to update this shipping policy at any time. 
                Changes will be posted on this page with an updated revision date.
              </p>
              <p className="text-muted mb-0">
                Continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/terms" className="btn btn-outline-primary">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="btn btn-outline-secondary">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="btn btn-outline-success">
                Refund Policy
              </Link>
              <Link href="/contact" className="btn btn-outline-info">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default ShippingPolicy;