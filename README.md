This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
traxsmart
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ bootstrap-provider.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.module.css
│  │  ├─ page.tsx
│  │  ├─ products
│  │  │  ├─ page.tsx
│  │  │  └─ [id]
│  │  │     └─ page.tsx
│  │  └─ responsive.css
│  ├─ components
│  │  ├─ AIS140
│  │  │  └─ Ais140.tsx
│  │  ├─ common
│  │  │  ├─ Button.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ Text.tsx
│  │  ├─ Contacts
│  │  │  └─ Contacts.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Home
│  │  │  └─ Home.tsx
│  │  ├─ Industries
│  │  ├─ Navbar
│  │  │  └─ Navbar.tsx
│  │  ├─ Partners
│  │  │  └─ OurPartners.tsx
│  │  ├─ Product
│  │  │  ├─ HighLightsListProps.tsx
│  │  │  ├─ PackagingAndShipping.tsx
│  │  │  ├─ ProductDetails.tsx
│  │  │  ├─ ProductFeatures.tsx
│  │  │  ├─ productGallary.tsx
│  │  │  ├─ ProductTabs.tsx
│  │  │  ├─ ProductVideo.tsx
│  │  │  └─ TechinicalSpecification.tsx
│  │  ├─ Products
│  │  ├─ SectionFive
│  │  │  └─ SectionFive.tsx
│  │  ├─ SectionFour
│  │  │  └─ SectionFour.tsx
│  │  ├─ SectionSix
│  │  │  └─ SectionSix.tsx
│  │  ├─ Services
│  │  ├─ Slider.tsx
│  │  ├─ VentelIOT
│  │  │  └─ IotSection.tsx
│  │  └─ VerticalSlider.tsx
│  ├─ config
│  │  └─ api.config.ts
│  ├─ declarations.d.ts
│  ├─ services
│  │  ├─ Api.service.ts
│  │  ├─ Home.service.ts
│  │  └─ Order.service.ts
│  ├─ staticData
│  │  └─ products.json
│  ├─ types
│  │  └─ product.ts
│  └─ utils
│     ├─ apiCallers.ts
│     ├─ axios.ts
│     └─ joinUrlPath.ts
└─ tsconfig.json

```