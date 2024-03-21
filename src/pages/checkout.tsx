import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CheckoutMultiStep from '../components/checkout/checkoutMultiStep';

let cartItems2: any = [];
data.shoppingCart2.map((id) =>
  data.products.filter((x) => x.id === id).map((x) => cartItems2.push(x))
);

export default function CheckoutPageStep1() {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='my-5'>
          <h3>Checkout Forms</h3>
          <p>SWith order summary sidebar</p>
          <CheckoutMultiStep products={cartItems2} />
        </div>

        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
