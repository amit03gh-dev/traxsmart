// const BASE_URL= 'https://dummyjson.com'
const BASE_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

// Order
export const HOME_URL = `${BASE_STRAPI_URL}/api/homes`;
export const NAVBAR_URL = `${BASE_STRAPI_URL}/api/navbars`;
export const PRODUCT_URL = `${BASE_STRAPI_URL}/api/products`;
export const FOOTER_URL = `${BASE_STRAPI_URL}/api/footers`;
