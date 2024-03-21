import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CheckoutOrderSummary from '../components/checkout/checkoutOrderSummary';

let cartItems: any = [];
data.shoppingCart.map((id) =>
  data.products.filter((x) => x.id === id).map((x) => cartItems.push(x))
);

export default function CheckoutPageStep2() {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
      <div className='my-5'>
          <h3>Checkout Forms</h3>
          <p>Split with order summary</p>
          <CheckoutOrderSummary products={cartItems} />
        </div>

        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
