import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import OrderHistory from '../components/order/orderHistory';

let orderHistoryProducts: any = new Set();

data.orders.forEach((order) => {
  order.products.forEach((productDetails) => {
    data.products.forEach((product) => {
      if (product.id === productDetails.id) {
        orderHistoryProducts.add(product);
      }
    });
  });
});

export default function OrderTrackingPage() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='my-2'>
          <section className='pt-7 px-2'>
            <div className='row'>
              <OrderHistory orders={data.orders} products={orderHistoryProducts} />
            </div>
          </section>
        </div>
        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
