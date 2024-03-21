import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import OrderSummaries from '../components/order/orderSummaries';
import IncentiveLarge from '../components/incentives/incentiveLarge';

let orderProducts: any = [];

data.orders[0].products.forEach((productDetails) => {
  data.products.forEach((product) => {
    if (product.id === productDetails.id) {
      orderProducts.push(product);
    }
  });
});

export default function OrderSummaryPage() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='my-5'>
          <h3 className='mt-5'>Order Summaries</h3>
          <p className='text-body'>With order summary sidebar</p>
          <OrderSummaries
            order={{ ...data.orders[0], orderNumber: data.orders[0].orderNumber.toString() }}
            products={orderProducts}
          />
        </div>

        <div className='my-5'>
          <IncentiveLarge order={''} />
        </div>

        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
