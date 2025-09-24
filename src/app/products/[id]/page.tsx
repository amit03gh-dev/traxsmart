// app/products/[id]/page.tsx
import { Metadata } from "next";
import ProductGallery from "@/components/Product/productGallary";
import ProductTabs from "@/components/Product/ProductTabs";
import products from "@/staticData/products.json";
import { Product } from "@/types/product";

export async function generateStaticParams() {
  return (products as Product[]).map((p) => ({
    id: p.id,
  }));
}

// SEO metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = (products as Product[]).find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found | My Store",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${product.name} | My Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.length ? [{ url: product.images[0] }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: product.images?.length ? [product.images[0]] : [],
    },
  };
}

// Revalidate every 60 * 60 * 24 * 60 seconds (≈ 2 months)
export const revalidate = 5184000;

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = (products as Product[]).find((p) => p.id === params.id);

  if (!product) return <div className="container py-5">Product not found</div>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left + Center (Gallery) */}
        <div className="col-md-7">
          <ProductGallery images={product.images} alt={product.name} />
        </div>

        {/* Right (Info) */}
        <div className="col-md-5">
          <h1 className="fw-bold">{product.name}</h1>
          <p>{product.description}</p>
          <ul className="list-unstyled mt-3">
            {product.features.map((f, i) => (
              <li key={i} className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-circle-check text-primary me-2"></i>
                <strong>{f.key}: </strong> {f.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="row mt-5">
        <div className="col-12">
          <ProductTabs
            description={product.productTabs.description}
            features={product.productTabs.features}
            technical={product.productTabs.technical}
            packaging={product.productTabs.packaging}
          />
        </div>
      </div>
    </div>
  );
}
