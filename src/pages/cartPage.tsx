import { useEffect, useState, useReducer, useRef } from 'react';
import data from '../assets/data.json';
import Cookies from 'universal-cookie';
import '../assets/scss/main.scss';

import Navbar from '../components/navbar';
import UpperNavbar from '../components/store/upperNavbar';
import CardProduct from '../components/products/cardProduct';

import ShoppingCart from '../components/cart/shoppingCart';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';
import ComplexFooter from '../components/complexFooter';
import ProductService from '../services/product.service';
import BasketService from '../services/basket.service';
import reducer from '../reducers/reducer';
import Loading from '../components/loading';

export default function CartPage() {
  type Response = {
    metadata: [] | any;
    error: boolean;
    message: string;
  };

  const initialized = useRef({
    items: [],
  });

  const [store, dispatch] = useReducer(reducer, initialized);
  const [loading, setLoading] = useState(false);

  const getBasket = async () => {
    const cookies = new Cookies(null, { path: '/' });

    if (cookies.get('basket')) {
      setLoading(true);
      const basketId = cookies.get('basket');

      const response: Response = await BasketService.getBasket(basketId);
      if (!response || response.error) {
        return alert(response.message);
      }

      if (response && response.metadata && response.metadata.basket) {
        const items = response.metadata.basket;

        const products = await Promise.all(items.map((item: any) => ProductService.getProduct(item.product_id).then((res) => res.metadata)));

        dispatch({
          type: 'init',
          payload: {
            items: products,
            error: response.error
          },
        });
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Navbar />

      {loading && <Loading />}
      {!loading && store.items && store.items.length > 0 && (
        <>
          <ShoppingCart products={store.items} />
          <div className='container'>
            <div className='row mt-7'>
              <h5 className='mb-4'>You may also like...</h5>
              {data.products.map((product) => (
                <div className='col-md-6 col-lg-3'>
                  <CardProduct
                    key={product.id}
                    thumb_src={product.thumb_src}
                    thumb_alt={product.thumb_alt}
                    color={product.color}
                    title={product.title}
                    price={product.price}
                    position='left'
                  />
                </div>
              ))}
            </div>
            <hr className='dark horizontal my-5' />
            <div className='my-2'>
              <ComplexFooter />
            </div>
          </div>
        </>
      )}
    </>
  );
}
