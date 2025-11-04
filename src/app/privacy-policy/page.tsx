// pages/policies.tsx
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <section className="top-space-margin half-section bg-gradient-very-light-gray">
     <Head>
        <title>Privacy Policy | Your Company Name</title>
      </Head>

      <div className="container my-5 text-dark-gray">
        <h1 className="mb-4 mb-4 text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100 text-center">Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how
          <strong> Trsxsmart Limited </strong>. We collects,
          uses, and protects your personal information when you visit or make a
          purchase on our website.
        </p>

        <h4 className="mt-4">Information We Collect</h4>
        <p>
          We may collect personal details such as your name, contact number,
          address, email ID, and payment details when you interact with our
          website or place an order.
        </p>

        <h4 className="mt-4">How We Use Information</h4>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To improve our website and customer experience</li>
          <li>To send order updates and promotional offers (optional)</li>
        </ul>

        <h4 className="mt-4">Data Security</h4>
        <p>
          We use industry-standard security protocols to protect your data.
          Sensitive information is transmitted using SSL encryption.
        </p>

        <h4 className="mt-4">Contact Us</h4>
        <p>
          If you have any questions, email us at{" "}
          <a href="mailto:info@traxsmart.in">
            info@traxsmart.in
          </a>
          .
        </p>
      </div>
    </section>
  );
}


