// app/refund-policy/page.tsx
import React from 'react';
import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <section className='op-space-margin half-section bg-gradient-very-light-gray'>
          <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="alt-font fw-600 text-dark-gray mb-10px">Refund & Cancellation Policy</h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div className="alert alert-info">
              <strong>Important:</strong> Please read this policy carefully before making a purchase.
            </div>
          </div>

          {/* Overview */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Policy Overview</h3>
            </div>
            <div className="card-body">
              <p>
                At Traxsmart Limited, we strive to ensure complete customer satisfaction. 
                This Refund and Cancellation Policy outlines the terms and conditions 
                for refunds, returns, and order cancellations.
              </p>
              <p className="mb-0">
                By making a purchase on our platform, you agree to the terms outlined in this policy.
              </p>
            </div>
          </div>

          {/* Order Cancellation */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Order Cancellation</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Before Shipping</h6>
              <p>
                You can cancel your order before it has been shipped. To cancel an order:
              </p>
              <ul>
                <li>Go to &quot;My Orders&quot; in your account</li>
                <li>Select the order you wish to cancel</li>
                <li>Click &quot;Cancel Order&quot;</li>
                <li>Provide a reason for cancellation (optional)</li>
              </ul>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Order Status</th>
                      <th>Cancellation Availability</th>
                      <th>Refund Process</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Order Placed</td>
                      <td>Yes - Immediate</td>
                      <td>Full refund within 2 hours</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Processing</td>
                      <td>Yes - Within 1 hour</td>
                      <td>Full refund within 4 hours</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Shipped</td>
                      <td>No</td>
                      <td>Return must be initiated after delivery</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Out for Delivery</td>
                      <td>No</td>
                      <td>Return must be initiated after delivery</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-warning">
                <strong>Note:</strong> Once an order has been shipped, it cannot be cancelled. 
                You can return the product after delivery as per our return policy.
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Refund Policy</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Eligibility for Refund</h6>
              <p>We offer refunds under the following circumstances:</p>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="card border-success mb-3">
                    <div className="card-body">
                      <h6 className="card-title text-success">✅ Eligible Cases</h6>
                      <ul className="small mb-0">
                        <li>Defective or damaged products</li>
                        <li>Wrong product delivered</li>
                        <li>Product not as described</li>
                        <li>Missing items from order</li>
                        <li>Cancelled orders</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-danger mb-3">
                    <div className="card-body">
                      <h6 className="card-title text-danger">❌ Non-Eligible Cases</h6>
                      <ul className="small mb-0">
                        <li>Change of mind</li>
                        <li>Product no longer needed</li>
                        <li>Found cheaper elsewhere</li>
                        <li>Opened software/products</li>
                        <li>Personalized/custom items</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="text-primary mt-4">Refund Methods</h6>
              <p>Refunds are processed using the original payment method:</p>
              <ul>
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                <li><strong>Net Banking:</strong> 3-5 business days</li>
                <li><strong>UPI:</strong> 1-2 business days</li>
                <li><strong>Wallet:</strong> 2-4 business days</li>
              </ul>
            </div>
          </div>

          {/* Return Process */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Return Process</h3>
            </div>
            <div className="card-body">
              <p>Follow these steps to return a product:</p>
              
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="card border-primary h-100">
                    <div className="card-body">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '50px', height: '50px'}}>
                        <strong>1</strong>
                      </div>
                      <h6>Initiate Return</h6>
                      <small className="text-muted">
                        Request return within 7 days of delivery
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card border-primary h-100">
                    <div className="card-body">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '50px', height: '50px'}}>
                        <strong>2</strong>
                      </div>
                      <h6>Get Approval</h6>
                      <small className="text-muted">
                        We verify eligibility within 24 hours
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card border-primary h-100">
                    <div className="card-body">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '50px', height: '50px'}}>
                        <strong>3</strong>
                      </div>
                      <h6>Ship Product</h6>
                      <small className="text-muted">
                        Use provided return label
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="card border-primary h-100">
                    <div className="card-body">
                      <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '50px', height: '50px'}}>
                        <strong>4</strong>
                      </div>
                      <h6>Receive Refund</h6>
                      <small className="text-muted">
                        After quality check (2-3 days)
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="text-primary mt-4">Return Conditions</h6>
              <p>For a return to be accepted, the product must:</p>
              <ul>
                <li>Be in original packaging</li>
                <li>Have all tags and labels attached</li>
                <li>Be unused and in original condition</li>
                <li>Include all accessories and freebies</li>
                <li>Have the original invoice</li>
              </ul>
            </div>
          </div>

          {/* Refund Timeline */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Refund Timeline</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Stage</th>
                      <th>Duration</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Return Request</td>
                      <td>24 hours</td>
                      <td>Approval process</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Pickup/Shipping</td>
                      <td>1-2 days</td>
                      <td>Product collection</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Quality Check</td>
                      <td>1-2 days</td>
                      <td>After receiving product</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Refund Initiation</td>
                      <td>1 day</td>
                      <td>After quality approval</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Bank Processing</td>
                      <td>3-7 days</td>
                      <td>Depends on payment method</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info">
                <strong>Total Time:</strong> Most refunds are completed within <strong>7-10 business days</strong> from return approval.
              </div>
            </div>
          </div>

          {/* Digital Products & Services */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Digital Products & Services</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Software & Digital Downloads</h6>
              <p>
                Due to the nature of digital products, we generally do not offer refunds for:
              </p>
              <ul>
                <li>Software downloads</li>
                <li>Digital subscriptions</li>
                <li>E-books and digital content</li>
                <li>Online courses</li>
                <li>Activated license keys</li>
              </ul>

              <h6 className="text-primary mt-4">Exceptions</h6>
              <p>Refunds may be considered for digital products in cases of:</p>
              <ul>
                <li>Technical issues preventing product use</li>
                <li>Duplicate purchases</li>
                <li>Product not as described</li>
                <li>Unauthorized purchase</li>
              </ul>

              <div className="alert alert-warning">
                <strong>Note:</strong> For digital product refund requests, contact our support team within 24 hours of purchase.
              </div>
            </div>
          </div>

          {/* Partial Refunds */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Partial Refunds</h3>
            </div>
            <div className="card-body">
              <p>In certain cases, partial refunds may be issued:</p>
              
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Situation</th>
                      <th>Refund Amount</th>
                      <th>Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Minor Damage</td>
                      <td>Up to 50%</td>
                      <td>Product functional with cosmetic damage</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Missing Accessories</td>
                      <td>Value of missing items</td>
                      <td>Main product received</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Opened Package</td>
                      <td>Up to 30%</td>
                      <td>Product unused but packaging opened</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Late Delivery</td>
                      <td>Shipping cost</td>
                      <td>Delivery beyond promised timeline</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Shipping Costs for Returns */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Return Shipping Costs</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Free Return Shipping</h6>
              <p>We cover return shipping costs for:</p>
              <ul>
                <li>Defective products</li>
                <li>Wrong items delivered</li>
                <li>Damaged during shipping</li>
                <li>Product not as described</li>
              </ul>

              <h6 className="text-primary mt-4">Customer-Paid Returns</h6>
              <p>Return shipping is at customer&apos;s expense for:</p>
              <ul>
                <li>Change of mind</li>
                <li>Ordered wrong product</li>
                <li>No longer needed</li>
                <li>Found better price</li>
              </ul>

              <div className="alert alert-info">
                <strong>Free Pickup:</strong> For eligible returns, we provide free pickup from your location.
              </div>
            </div>
          </div>

          {/* Exceptions & Special Cases */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Exceptions & Special Cases</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Non-Returnable Items</h6>
              <p>The following items cannot be returned or refunded:</p>
              <ul>
                <li>Personalized or custom-made products</li>
                <li>Perishable goods and groceries</li>
                <li>Intimate apparel and swimwear</li>
                <li>Software and digital products (after download)</li>
                <li>Gift cards and vouchers</li>
                <li>Health and hygiene products</li>
                <li>Products marked &quot;Final Sale&quot;</li>
              </ul>

              <h6 className="text-primary mt-4">Special Circumstances</h6>
              <p>We may make exceptions in cases of:</p>
              <ul>
                <li>Bereavement or medical emergency</li>
                <li>Natural disasters affecting delivery</li>
                <li>Technical errors on our platform</li>
                <li>Fraudulent transactions</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Refund Support</h3>
            </div>
            <div className="card-body">
              <p>
                For any questions about refunds, cancellations, or returns, 
                please contact our customer support team:
              </p>
              
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>Email:</strong><br />
                    refunds@yourcompany.com
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
                  <p>
                    <strong>Response Time:</strong><br />
                    Within 24 hours for email<br />
                    Immediate for phone calls
                  </p>
                </div>
              </div>

              <div className="alert alert-success">
                <strong>Quick Resolution:</strong> Most refund and cancellation requests are resolved within 48 hours.
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
                We reserve the right to update this Refund and Cancellation Policy at any time. 
                Changes will be posted on this page with an updated revision date.
              </p>
              <p className="mb-0">
                Continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center mt-5">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/terms" className="btn btn-outline-primary">
                Terms & Conditions
              </Link>
              <Link href="/shipping-policy" className="btn btn-outline-secondary">
                Shipping Policy
              </Link>
              <Link href="/privacy-policy" className="btn btn-outline-success">
                Privacy Policy
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

export default RefundPolicy;