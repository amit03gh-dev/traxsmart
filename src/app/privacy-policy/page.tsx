// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <section className='op-space-margin half-section bg-gradient-very-light-gray'>
      <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="alt-font fw-600 text-dark-gray mb-10px">Privacy Policy</h1>
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <div className="alert alert-info">
              <strong>Important:</strong> This policy describes how we collect, use, and protect your personal information.
            </div>
          </div>

          {/* Introduction */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Introduction</h3>
            </div>
            <div className="card-body">
              <p>
                At Your Company, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our website and services.
              </p>
              <p className="mb-0">
                By using our services, you consent to the practices described in this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Information We Collect</h3>
            </div>
            <div className="card-body">
              <h6 className="text-primary">Personal Information</h6>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>Name and contact details (email address, phone number)</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely through Razorpay)</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h6 className="text-primary mt-4">Automatically Collected Information</h6>
              <p>When you visit our website, we automatically collect:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Cookies and usage data</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website details</li>
              </ul>

              <h6 className="text-primary mt-4">Payment Information</h6>
              <p>
                All payments are processed through Razorpay. We do not store your credit card 
                or bank account details on our servers. Razorpay handles all payment information 
                in compliance with PCI-DSS standards.
              </p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">How We Use Your Information</h3>
            </div>
            <div className="card-body">
              <p>We use the information we collect for the following purposes:</p>
              
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Purpose</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Order Processing</td>
                      <td>To process and fulfill your orders, including shipping and delivery</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Customer Service</td>
                      <td>To provide customer support and respond to your inquiries</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Account Management</td>
                      <td>To create and manage your account</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Marketing</td>
                      <td>To send promotional communications (with your consent)</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Website Improvement</td>
                      <td>To analyze website usage and improve our services</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Legal Compliance</td>
                      <td>To comply with legal obligations and prevent fraud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Data Sharing and Disclosure */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Data Sharing and Disclosure</h3>
            </div>
            <div className="card-body">
              <p>We may share your information with:</p>
              
              <h6 className="text-primary">Service Providers</h6>
              <ul>
                <li>
                  <strong>Razorpay:</strong> For payment processing
                </li>
                <li>
                  <strong>Shipping Partners:</strong> For order delivery
                </li>
                <li>
                  <strong>Email Service Providers:</strong> For communication
                </li>
                <li>
                  <strong>Analytics Providers:</strong> For website analysis
                </li>
              </ul>

              <h6 className="text-primary mt-4">Legal Requirements</h6>
              <p>
                We may disclose your information if required by law or in response to:
              </p>
              <ul>
                <li>Court orders or legal processes</li>
                <li>Government requests</li>
                <li>To protect our rights and property</li>
                <li>To prevent fraud or security issues</li>
              </ul>

              <h6 className="text-primary mt-4">Business Transfers</h6>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information 
                may be transferred to the new entity.
              </p>

              <div className="alert alert-warning">
                <strong>Note:</strong> We do not sell your personal information to third parties for marketing purposes.
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Data Security</h3>
            </div>
            <div className="card-body">
              <p>
                We implement appropriate security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h6 className="text-primary">Security Measures Include:</h6>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>PCI-DSS compliance for payment processing</li>
              </ul>

              <h6 className="text-primary mt-4">Payment Security</h6>
              <p>
                All payment transactions are processed through Razorpay, which is PCI-DSS compliant. 
                We do not store sensitive payment information on our servers.
              </p>

              <div className="alert alert-info">
                <strong>Remember:</strong> While we implement strong security measures, 
                no method of transmission over the Internet is 100% secure.
              </div>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Cookies and Tracking Technologies</h3>
            </div>
            <div className="card-body">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website.
              </p>

              <h6 className="text-primary">Types of Cookies We Use:</h6>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Cookie Type</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Essential Cookies</td>
                      <td>Required for website functionality</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Preference Cookies</td>
                      <td>Remember your settings and preferences</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Analytics Cookies</td>
                      <td>Help us understand how visitors use our site</td>
                      <td>2 Years</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Marketing Cookies</td>
                      <td>Track effectiveness of advertising campaigns</td>
                      <td>90 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h6 className="text-primary mt-4">Managing Cookies</h6>
              <p>
                You can control cookie settings through your browser preferences. 
                However, disabling essential cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Your Privacy Rights</h3>
            </div>
            <div className="card-body">
              <p>You have the following rights regarding your personal information:</p>
              
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <strong>Right to Access:</strong> Request copies of your personal data
                    </li>
                    <li>
                      <strong>Right to Rectification:</strong> Correct inaccurate information
                    </li>
                    <li>
                      <strong>Right to Erasure:</strong> Request deletion of your data
                    </li>
                    <li>
                      <strong>Right to Restrict Processing:</strong> Limit how we use your data
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <strong>Right to Data Portability:</strong> Receive your data in a readable format
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to certain data processing
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
                    </li>
                    <li>
                      <strong>Right to Complain:</strong> Lodge a complaint with authorities
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-3">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Data Retention</h3>
            </div>
            <div className="card-body">
              <p>
                We retain your personal information only for as long as necessary to fulfill 
                the purposes outlined in this policy, unless a longer retention period is 
                required or permitted by law.
              </p>
              
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Data Type</th>
                      <th>Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Account Information</td>
                      <td>As long as your account is active + 2 years</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Order Information</td>
                      <td>7 years for tax and legal purposes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Marketing Data</td>
                      <td>Until consent is withdrawn</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Website Analytics</td>
                      <td>26 months</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Customer Service Records</td>
                      <td>3 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Third-Party Links</h3>
            </div>
            <div className="card-body">
              <p>
                Our website may contain links to third-party websites. This Privacy Policy 
                applies only to our services. We are not responsible for the privacy practices 
                of other websites.
              </p>
              <p className="mb-0">
                We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Children&apos;s Privacy</h3>
            </div>
            <div className="card-body">
              <p>
                Our services are not intended for children under the age of 13. We do not 
                knowingly collect personal information from children under 13.
              </p>
              <p className="mb-0">
                If you believe we have collected information from a child under 13, 
                please contact us immediately.
              </p>
            </div>
          </div>

          {/* International Data Transfers */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">International Data Transfers</h3>
            </div>
            <div className="card-body">
              <p>
                Your information may be transferred to and processed in countries other than 
                your country of residence. These countries may have different data protection laws.
              </p>
              <p className="mb-0">
                We ensure appropriate safeguards are in place to protect your information 
                when transferred internationally.
              </p>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Changes to This Privacy Policy</h3>
            </div>
            <div className="card-body">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p className="mb-0">
                We encourage you to review this Privacy Policy periodically for any changes. 
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="h5 mb-0">Contact Us</h3>
            </div>
            <div className="card-body">
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <strong>Email:</strong><br />
                    privacy@yourcompany.com
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    +91-XXXXX-XXXXX
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Address:</strong><br />
                    Your Company Name<br />
                    123 Business Street<br />
                    City, State 123456<br />
                    India
                  </p>
                </div>
              </div>

              <p className="mt-3">
                <strong>Data Protection Officer:</strong><br />
                For privacy-specific concerns, contact our Data Protection Officer at: dpo@yourcompany.com
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
              <Link href="/refund-policy" className="btn btn-outline-success">
                Refund Policy
              </Link>
              <Link href="/contact" className="btn btn-outline-info">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default PrivacyPolicy;