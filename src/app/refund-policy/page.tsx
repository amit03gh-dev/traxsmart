import Head from "next/head";

export default function RefundPolicy() {
  return (
    <section className="top-space-margin half-section bg-gradient-very-light-gray">
      <Head>
        <title>Refund & Cancellation Policy | Traxsmart Limited</title>
      </Head>

      <div className="container my-5 text-dark-gray">
        <h1 className="mb-4 text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100 text-center">Refund & Cancellation Policy</h1>
        <p className="text-dark-gray">
          Thank you for shopping with <strong>Trsxsmart Limited</strong>. If you
          are not entirely satisfied with your purchase, we’re here to help.
        </p>

        <h4 className="mt-4">Cancellations</h4>
        <p>
          Orders can be cancelled within <strong>24 hours</strong> of purchase
          by contacting our support team at{" "}
          <a href="mailto:info@traxsmart.in">
            info@traxsmart.in
          </a>
          .
        </p>

        <h4 className="mt-4">Refunds</h4>
        <p>
          Once we receive your request and inspect the issue, we’ll notify you
          of the refund status. If approved, your refund will be processed to
          the original payment method within <strong>7–10 business days</strong>.
        </p>

        <h4 className="mt-4">No Refund Cases</h4>
        <ul>
          <li>Incorrect or incomplete information provided by the customer</li>
          <li>Customized or personalized products</li>
          <li>Services already rendered</li>
        </ul>
      </div>
    </section>
  );
}
