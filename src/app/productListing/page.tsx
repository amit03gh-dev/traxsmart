import productListingService from "@/services/ProductListing.service";
import { ProductItem } from "@/types/productListing";
import Image from "next/image";
import { notFound } from "next/navigation";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  label: string;
  link: string;
  category: string;
  price: string;
}

export interface ProductPageData {
  pageTitle: string;
  pageDescription: string;
  breadcrumbs: string[];
  products: Product[];
}

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | number>>;
}) {
  const { id } = await searchParams;
  if (!id) {
    // Trigger 404 page
    notFound();
  }
  const response = await productListingService.getProductById(id);
  const productsData = response.data || {};
  const { pageTitle, pageDescription, breadcrumbs, products } = productsData;
console.log("products >>>>>>>>>>",products)
  return (
    <>
      <section className="top-space-margin half-section bg-gradient-very-light-gray">
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            // data-anime='{ "el": "childs", "translateY": [-15, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 100, "easing": "easeOutQuad" }'
          >
            <div className="col-12 col-xl-8 col-lg-10 text-center position-relative page-title-extra-large">
              <h1 className="alt-font fw-600 text-dark-gray mb-10px">
                {pageTitle}
              </h1>
              <p className="text-dark-gray">{pageDescription}</p>
            </div>

            <div className="col-12 breadcrumb breadcrumb-style-01 d-flex justify-content-center">
              <ul>
                <li>
                  <a href="demo-fashion-store.html">Home</a>
                </li>
                <li>Products</li>
                <li>{breadcrumbs[2]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 ps-6 pe-6 lg-ps-2 lg-pe-2 sm-ps-0 sm-pe-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 md-mb-60px">
              <ul
                className="row g-4 shop-modern shop-wrapper  grid grid-4col xl-grid-3col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
                // data-anime='{ "el": "childs", "translateY": [-15, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
              >
                {/* <li className="grid-sizer"></li> */}

                {/* start shop item */}
                {products.map((item: ProductItem) => (
                  <li key={item.id} className="grid-item">
                    <div className="shop-box mb-10px">
                      <div className="shop-image mb-20px">
                        <a href="products-gps-tsindia140.html">
                          {/* <img src={item.image} alt="" /> */}
                          {/* {console.log("image is>>>>>>>>>>>>>",item.image.data.attributes.url)} */}
                          <Image
                            src={item.image}
                            alt={item.name || "Product Image"}
                            width={400} // adjust width
                            height={400} // adjust height
                            className="w-full h-auto"
                          />
                          <span className="lable new">New</span>
                          <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                        </a>
                        <div className="shop-buttons-wrap">
                          <a
                            href="products-gps-tsindia140.html"
                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart"
                          >
                            <i className="feather icon-feather-eye"></i>
                            <span className="quick-view-text button-text">
                              View Details
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="shop-footer text-center">
                        <a
                          href="products-gps-tsindia140.html"
                          className="alt-font text-dark-gray fs-19 fw-500"
                        >
                          {item.name}
                        </a>
                        <div className="price lh-22 fs-16">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
