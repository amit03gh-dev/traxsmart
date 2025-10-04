// app/products/[id]/page.tsx
import { Metadata } from "next";
import ProductGallery from "@/components/Product/productGallary";
// import ProductTabs from "@/components/Product/ProductTabs";
import products from "@/staticData/products.json";
import { GalleryImage, Product } from "@/types/product";
import ImageSlider from "@/components/Product/ImageSlider";
// import Image from "next/image";
import ProductDetails from "@/components/Product/ProductDetails";
import ProductTabs from "@/components/Product/ProductTabs";

export async function generateStaticParams() {
  return (products as Product[]).map((p) => ({
    id: p.id,
  }));
}

// SEO metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
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
const galleryImages: GalleryImage[] = [
  { src: "/media/tsindia140/5.jpg", title: "Rugged Built" },
  { src: "/media/tsindia140/2.jpg", title: "IP65 Rating" },
  { src: "/media/tsindia140/3.jpg", title: "1000mAh" },
  { src: "/media/tsindia140/8.jpg", title: "9-90v" },
  { src: "/media/tsindia140/6.jpg", title: "Multi Sensor Support" },
];
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = (products as Product[]).find((p) => p.id === params.id);

  if (!product) return <div className="container py-5">Product not found</div>;

  return (
    <>
      <section
        className="top-space-margin bg-gradient-very-light-gray pt-20px pb-20px ps-45px pe-45px sm-ps-15px sm-pe-15px"
        style={{ marginTop: "35px" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 breadcrumb breadcrumb-style-01 fs-14">
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <a href="#">GPS Trackers</a>
                </li>
                <li>TSINDIA140</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-60px pb-0 md-pt-30px">
        <div className="container">
          <div className="row">
            <ProductGallery galleryImages={galleryImages} />
            <ProductDetails />
          </div>
        </div>
      </section>

      <section id="tab">
        <ProductTabs/>
      <ImageSlider />
      </section>


      {/* <section className="pt-0">
        <div className="container">
          <div className="row">
            <div
              className="row position-relative clients-style-08"
              // data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 800, "delay":100, "staggervalue": 150, "easing": "easeOutQuad" }'
            >
              <div className="text-center mb-50px">
                <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                  Our Empanelments
                </span>
              </div>

              <div
                className="col swiper text-center feather-shadow"
                // data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 3000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false, "pauseOnMouseEnter": false}, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 7 }, "768": { "slidesPerView": 6 }, "576": { "slidesPerView": 5 } }, "effect": "slide" }'
              >
                <div className="swiper-wrapper marquee-slide">
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/1.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/2.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/3.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/4.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/5.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/6.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/7.png" alt="" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#">
                      <img className="w-80" src="/media/clients/8.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );

  // return (
  //   <div className="container py-5">
  //     <div className="row">
  //       {/* Left + Center (Gallery) */}
  //       <div className="col-md-7">
  //         <ProductGallery images={product.images} alt={product.name} />
  //       </div>

  //       {/* Right (Info) */}
  //       <div className="col-md-5">
  //         <h1 className="fw-bold">{product.name}</h1>
  //         <p>{product.description}</p>
  //         <ul className="list-unstyled mt-3">
  //           {product.features.map((f, i) => (
  //             <li key={i} className="d-flex align-items-center mb-2">
  //               <i className="fa-solid fa-circle-check text-primary me-2"></i>
  //               <strong>{f.key}: </strong> {f.value}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>

  //     {/* Tabs Section */}
  //     <div className="row mt-5">
  //       <div className="col-12">
  //         <ProductTabs
  //           description={product.productTabs.description}
  //           features={product.productTabs.features}
  //           technical={product.productTabs.technical}
  //           packaging={product.productTabs.packaging}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}
