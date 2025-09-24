import OrderService from '@/services/Order.service';

export const revalidate = 600; // ISR: revalidate every 10 min

export default async function ProductsPage() {
  const services = await OrderService.getOrderById('1');
  console.log("response is >>>>>>>>>>>>>",services)
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Products</h1>
      <div className="row g-4">
        {/* {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <ServiceCard {...service} />
          </div>
        ))} */}
      </div>
    </div>
  );
}


