import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CheckOrder from '../components/order/checkOrder';

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

export default function CheckOrderPage() {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='my-2'>
          <section className='bg-gray-100 px-2'>
            <div className='row'>
              <CheckOrder />
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
