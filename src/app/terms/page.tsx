// app/terms-and-conditions/page.tsx
import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <section className="op-space-margin half-section bg-gradient-very-light-gray">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="alt-font fw-600 text-dark-gray mb-10px">
                Terms and Conditions
              </h1>
              <p className="text-muted">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="alert alert-info">
                <strong>Important:</strong> Please read these terms carefully
                before using our services.
              </div>
            </div>

            {/* Introduction */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">1. Introduction</h3>
              </div>
              <div className="card-body">
                <p>
                  Welcome to Your Traxsmart Limited. These Terms and Conditions
                  govern your use of our website, products, and services. By
                  accessing or using our services, you agree to be bound by
                  these terms and our Privacy Policy.
                </p>
                <p className="mb-0">
                  If you disagree with any part of these terms, you may not
                  access our services.
                </p>
              </div>
            </div>

            {/* Definitions */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">2. Definitions</h3>
              </div>
              <div className="card-body">
                <p>For the purposes of these Terms and Conditions:</p>
                <ul>
                  <li>
                    <strong>
                      &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;,
                      &quot;Our&quot;
                    </strong>{" "}
                    refers to Your Company.
                  </li>
                  <li>
                    <strong>
                      &quot;User&quot;, &quot;You&quot;, &quot;Your&quot;
                    </strong>{" "}
                    refers to the individual accessing our services.
                  </li>
                  <li>
                    <strong>&quot;Services&quot;</strong> refers to our website,
                    products, and all related services.
                  </li>
                  <li>
                    <strong>&quot;Content&quot;</strong> refers to text, images,
                    videos, and other materials available on our platform.
                  </li>
                  <li>
                    <strong>&quot;Account&quot;</strong> refers to the user
                    account created to access our services.
                  </li>
                </ul>
              </div>
            </div>

            {/* Account Terms */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">
                  3. Account Registration and Security
                </h3>
              </div>
              <div className="card-body">
                <h6 className="text-primary">Account Creation</h6>
                <p>
                  To access certain features, you must create an account. You
                  agree to:
                </p>
                <ul>
                  <li>Provide accurate, current, and complete information</li>
                  <li>
                    Maintain and update your information to keep it accurate
                  </li>
                  <li>Maintain the security of your password</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>

                <h6 className="text-primary mt-4">Account Eligibility</h6>
                <p>
                  You must be at least 18 years old to create an account. By
                  creating an account, you represent that you are at least 18
                  years old.
                </p>

                <div className="alert alert-warning">
                  <strong>Note:</strong> We reserve the right to suspend or
                  terminate accounts that violate these terms or provide false
                  information.
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">4. Payment Terms</h3>
              </div>
              <div className="card-body">
                <h6 className="text-primary">Payment Processing</h6>
                <p>
                  We use Razorpay as our payment service provider. By making a
                  payment, you agree to Razorpay&apos;s Terms of Service and Privacy
                  Policy.
                </p>

                <h6 className="text-primary mt-4">Payment Information</h6>
                <ul>
                  <li>All payments are processed in Indian Rupees (INR)</li>
                  <li>
                    We do not store your credit card or bank account details
                  </li>
                  <li>
                    Payment information is encrypted and transmitted securely
                  </li>
                  <li>
                    Razorpay is PCI-DSS compliant for secure payment processing
                  </li>
                </ul>

                <h6 className="text-primary mt-4">Pricing and Taxes</h6>
                <ul>
                  <li>
                    All prices are inclusive of applicable taxes unless stated
                    otherwise
                  </li>
                  <li>We reserve the right to change prices at any time</li>
                  <li>Changes in pricing will not affect completed orders</li>
                </ul>

                <h6 className="text-primary mt-4">Refunds</h6>
                <p>
                  Refunds are processed according to our Refund Policy. Please
                  refer to our
                  <Link href="/refund-policy" className="text-decoration-none">
                    {" "}
                    Refund Policy
                  </Link>{" "}
                  for detailed information.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">
                  5. User Responsibilities and Conduct
                </h3>
              </div>
              <div className="card-body">
                <p>As a user of our services, you agree not to:</p>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>Prohibited Activity</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-semibold">Illegal Activities</td>
                        <td>
                          Use services for any unlawful purpose or solicit
                          illegal activities
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Harassment</td>
                        <td>Harass, abuse, or harm another person</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Security Violations</td>
                        <td>
                          Attempt to bypass security measures or interfere with
                          service functionality
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Spam</td>
                        <td>Send spam or unsolicited messages</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">Intellectual Property</td>
                        <td>Infringe upon intellectual property rights</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold">False Information</td>
                        <td>Provide false or misleading information</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="alert alert-danger">
                  <strong>Violation Consequences:</strong> We reserve the right
                  to terminate your account and access to services for any
                  violations of these terms.
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">6. Intellectual Property Rights</h3>
              </div>
              <div className="card-body">
                <h6 className="text-primary">Our Content</h6>
                <p>
                  All content on our platform, including text, graphics, logos,
                  images, and software, is the property of Your Company or its
                  content suppliers and protected by intellectual property laws.
                </p>

                <h6 className="text-primary mt-4">User Content</h6>
                <p>
                  By submitting content to our platform, you grant us a
                  non-exclusive, worldwide, royalty-free license to use,
                  display, and distribute your content in connection with our
                  services.
                </p>

                <h6 className="text-primary mt-4">Copyright Complaints</h6>
                <p>
                  If you believe your intellectual property rights have been
                  violated, please contact us at legal@yourcompany.com with
                  detailed information about the alleged infringement.
                </p>

                <div className="alert alert-info">
                  <strong>Respect Intellectual Property:</strong> You may not
                  reproduce, distribute, or create derivative works from our
                  content without explicit permission.
                </div>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">7. Third-Party Links and Services</h3>
              </div>
              <div className="card-body">
                <p>
                  Our service may contain links to third-party websites or
                  services that are not owned or controlled by Your Company.
                </p>

                <h6 className="text-primary">Third-Party Services</h6>
                <ul>
                  <li>Payment processing through Razorpay</li>
                  <li>Shipping and delivery partners</li>
                  <li>Analytics and marketing services</li>
                  <li>Social media platforms</li>
                </ul>

                <h6 className="text-primary mt-4">No Responsibility</h6>
                <p>
                  We have no control over, and assume no responsibility for, the
                  content, privacy policies, or practices of any third-party
                  websites or services.
                </p>

                <p className="mb-0">
                  We strongly advise you to read the terms and conditions and
                  privacy policies of any third-party websites or services that
                  you visit.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">8. Limitation of Liability</h3>
              </div>
              <div className="card-body">
                <p>
                  To the fullest extent permitted by applicable law, Your
                  Company shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>

                <h6 className="text-primary">Specific Limitations</h6>
                <ul>
                  <li>
                    Damages resulting from your access to or use of our services
                  </li>
                  <li>
                    Any conduct or content of any third party on the services
                  </li>
                  <li>Any content obtained from the services</li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>

                <h6 className="text-primary mt-4">Maximum Liability</h6>
                <p>
                  In no event shall Our total liability to you for all damages
                  exceed the amount of one hundred Indian Rupees (₹100) or the
                  amount you have paid to Us in the last six months, whichever
                  is greater.
                </p>

                <div className="alert alert-warning">
                  <strong>Jurisdictional Limitations:</strong> Some
                  jurisdictions do not allow the exclusion of certain warranties
                  or limitations of liability, so the above limitations may not
                  apply to you.
                </div>
              </div>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">9. Disclaimer of Warranties</h3>
              </div>
              <div className="card-body">
                <p>
                  Your use of our services is at your sole risk. The services
                  are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We
                  disclaim all warranties of any kind, whether express or
                  implied.
                </p>

                <h6 className="text-primary">Specific Disclaimers</h6>
                <ul>
                  <li>We do not warrant uninterrupted or error-free service</li>
                  <li>
                    We do not warrant that results from using our services will
                    be accurate or reliable
                  </li>
                  <li>
                    We do not warrant that the services will meet your specific
                    requirements
                  </li>
                  <li>
                    We do not warrant that the services will be available at all
                    times
                  </li>
                </ul>

                <p className="mb-0">
                  No advice or information, whether oral or written, obtained by
                  you from us shall create any warranty not expressly stated in
                  these terms.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">10. Indemnification</h3>
              </div>
              <div className="card-body">
                <p>
                  You agree to defend, indemnify, and hold harmless Your Company
                  and its affiliates, officers, directors, employees, and agents
                  from and against any claims, damages, obligations, losses,
                  liabilities, costs, or debt arising from:
                </p>
                <ul>
                  <li>Your use of and access to our services</li>
                  <li>
                    Your violation of any term of these Terms and Conditions
                  </li>
                  <li>
                    Your violation of any third-party right, including
                    intellectual property rights
                  </li>
                  <li>
                    Any claim that your content caused damage to a third party
                  </li>
                </ul>
                <p className="mb-0">
                  This indemnification obligation will survive the termination
                  of these Terms and Conditions and your use of our services.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">11. Termination</h3>
              </div>
              <div className="card-body">
                <p>
                  We may terminate or suspend your account and access to our
                  services immediately, without prior notice or liability, for
                  any reason whatsoever, including without limitation if you
                  breach these Terms and Conditions.
                </p>

                <h6 className="text-primary">Upon Termination</h6>
                <ul>
                  <li>Your right to use our services will immediately cease</li>
                  <li>
                    If you wish to terminate your account, you may simply
                    discontinue using our services
                  </li>
                  <li>
                    All provisions of these Terms which by their nature should
                    survive termination shall survive
                  </li>
                </ul>

                <h6 className="text-primary mt-4">Survival</h6>
                <p className="mb-0">
                  All provisions of the Terms which by their nature should
                  survive termination shall survive termination, including,
                  without limitation, ownership provisions, warranty
                  disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">
                  12. Governing Law and Dispute Resolution
                </h3>
              </div>
              <div className="card-body">
                <h6 className="text-primary">Governing Law</h6>
                <p>
                  These Terms shall be governed and construed in accordance with
                  the laws of India, without regard to its conflict of law
                  provisions.
                </p>

                <h6 className="text-primary mt-4">Dispute Resolution</h6>
                <p>
                  Any dispute arising from these Terms shall be resolved
                  through:
                </p>
                <ol>
                  <li>Informal negotiation between the parties</li>
                  <li>Mediation by a mutually agreed-upon mediator</li>
                  <li>
                    Binding arbitration in accordance with Indian arbitration
                    laws
                  </li>
                  <li>
                    Legal proceedings in courts located in [Your City], India
                  </li>
                </ol>

                <h6 className="text-primary mt-4">Time Limitation</h6>
                <p className="mb-0">
                  Any cause of action or claim you may have with respect to our
                  services must be commenced within one (1) year after the claim
                  or cause of action arises.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">13. Changes to Terms</h3>
              </div>
              <div className="card-body">
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days&apos;s notice prior to any new terms
                  taking effect.
                </p>

                <h6 className="text-primary">Notification of Changes</h6>
                <ul>
                  <li>We will post the updated terms on this page</li>
                  <li>
                    We will update the &quot;Last updated&quot; date at the top of these
                    Terms
                  </li>
                  <li>We may notify registered users via email</li>
                </ul>

                <h6 className="text-primary mt-4">Continued Use</h6>
                <p className="mb-0">
                  By continuing to access or use our services after any
                  revisions become effective, you agree to be bound by the
                  revised terms. If you do not agree to the new terms, you are
                  no longer authorized to use our services.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card">
              <div className="card-header bg-light">
                <h3 className="h5 mb-0">14. Contact Information</h3>
              </div>
              <div className="card-body">
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us:
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>Email:</strong>
                      <br />
                      legal@yourcompany.com
                    </p>
                    <p>
                      <strong>Phone:</strong>
                      <br />
                      +91-XXXXX-XXXXX
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong>Address:</strong>
                      <br />
                      Your Company Name
                      <br />
                      123 Business Street
                      <br />
                      City, State 123456
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <p className="mt-3">
                  <strong>Response Time:</strong> We strive to respond to all
                  legal inquiries within 3-5 business days.
                </p>
              </div>
            </div>

            {/* Acceptance Section */}
            <div className="card bg-light mt-4">
              <div className="card-body text-center">
                <h5 className="card-title">Acceptance of Terms</h5>
                <p className="card-text mb-0">
                  By using our services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center mt-5">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link
                  href="/privacy-policy"
                  className="text-decoration-underline text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/shipping-policy"
                  className="text-decoration-underline text-secondary"
                >
                  Shipping Policy
                </Link>
                <Link href="/refund-policy" className="text-decoration-underline text-success">
                  Refund Policy
                </Link>
                {/* <Link href="/contact" className="btn btn-outline-info">
                  Contact Us
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
