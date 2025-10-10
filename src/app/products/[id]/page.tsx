// app/products/[id]/page.tsx
import { Metadata } from "next";
import ProductGallery from "@/components/Product/productGallary";
import ImageSlider from "@/components/Product/ImageSlider";
import productService from "@/services/Product.service";
import { ProductData } from "@/types/product";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductTabs from "@/components/Product/productTabView/ProductTabs";
import Link from "next/link";

export const revalidate = 7776000; 
// 🔁 Revalidate this page every 60 seconds (ISR caching)
// You can also use 'force-cache' or 'no-store' depending on your needs.


export async function generateStaticParams() {
  const response = await productService.getProducts();
  const allProducts: ProductData[] = response.data || [];

  return allProducts.map((p) => ({
    id: p.id.toString(),
  }));
}


// 2. SEO Metadata (Dynamic <head>)
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const response = await productService.getProducts();
  const allProducts: ProductData[] = response.data || [];
  const product = allProducts[0]?.data?.find(
    (p: any) => p.id.toString() === params.id
  );

  if (!product) {
    return {
      title: "Product Not Found | Traxsmart",
      description: "The product you are looking for does not exist.",
      robots: { index: false },
    };
  }

  return {
    title: `${product.title} | Traxsmart`,
    description: product.description || "View detailed product specifications and features.",
    openGraph: {
      title: `${product.title} | Traxsmart`,
      description: product.description,
      images: product.images?.length
        ? [{ url: product.images[0].src }]
        : []
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Traxsmart`,
      description: product.description,
      images: product.images?.length
        ? [product.images[0].src]
        : [],
    },
  };
}


export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await productService.getProducts();
  const allProducts = response.data || [];
  const product = allProducts[0]?.data?.find(
    (p: any) => p.id.toString() === params.id
  );

  if (!product)
    return <div className="container py-5">Product not found</div>;

  return (
    <>
      {/* 🧭 Breadcrumb */}
      <section className="top-space-margin bg-gradient-very-light-gray pt-20px pb-20px ps-45px pe-45px sm-ps-15px sm-pe-15px">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 breadcrumb breadcrumb-style-01 fs-14">
              <ul>
                <li>
                  {/* <a href="/">Home</a> */}
                   <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">{product.category}</a>
                </li>
                <li>{product.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🖼️ Product Details Section */}
      <section className="pt-60px pb-0 md-pt-30px">
        <div className="container">
          <div className="row">
            <ProductGallery galleryImages={product.images} />
            <ProductDetails
              product={{
                id: product.id,
                title: product.title,
                category: product.category,
                description: product.description,
                features: product.features,
              }}
            />
          </div>
        </div>
      </section>

      {/* 🧩 Tabs Section */}
      <section id="tab">
        <ProductTabs productDetails={product.productDetails} />
      </section>

      {/* 🖼️ Image Slider Section */}
      <section className="pt-0">
        <div className="container">
          <ImageSlider />
        </div>
      </section>
    </>
  );
}
