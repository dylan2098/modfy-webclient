import { useEffect, useState, useReducer, useRef } from 'react';
import Cookies from 'universal-cookie';
import reducer from '../../reducers/reducer';
import Loading from '../../components/loading';
import ProductService from '../../services/product.service';
import BasketService from '../../services/basket.service';

import ProductRating from '../reviews/reviewRating';
import ProductGallery from './productGallery';
import ProductSizes from './productSizes';
import Alert from '../cart/alert';
import { useParams, useSearchParams } from 'react-router-dom';

interface Props {
  title?: string;
  colors?: string[];
  images?: {
    src: string;
    alt: string;
  }[];
  full_description?: string;
  price?: number;
  highlights?: string[];
  details?: string;
  rating?: number;
  reviews?: number;
  sizes?: any;
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes,
}: Props) {
  type Response = {
    metadata: [];
    error: boolean;
    message: string;
  };

  const initialized = useRef({
    items: [],
  });

  const [store, dispatch] = useReducer(reducer, initialized);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);

  let { productId } = useParams();

  const getProduct = async (productId: string) => {
    setLoading(true);
    const response: Response = await ProductService.getProduct(productId);

    if (!response || response.error) {
      return alert(response.message);
    }

    if (response.metadata) {
      dispatch({
        type: 'get_item',
        payload: {
          item: response.metadata,
          error: response.error
        },
      });

      setLoading(false);
    }
  };

  useEffect(() => {
    productId && getProduct(productId);
  }, []);

  const onClickAddToCart = async (productId: string) => {
    const cookies = new Cookies(null, { path: '/' });

    if(!cookies.get('basket')) {
      const response = await BasketService.addToBakset(productId, 1);

      if(!response || response.error) {
        return alert(response.message);
      }
  
      if(response && response.metadata && response.metadata[0] && response.metadata[0].basket_id) {
        cookies.set('basket', response.metadata[0].basket_id);
      }
    } else {
      console.log('update basket');
    }

    setNotify(true);
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className='card card-product card-plain'>

          <div className='row'>
            {images?.length != 0 && <ProductGallery images={store && store.item && store.item.attribute_images} />}
            <div className='col-12 col-lg-6 ps-lg-5'>
              {title?.length != 0 && <h2 className='mt-4'>{store && store.item && store.item.product_name}</h2>}
              {full_description?.length != 0 && <p className='mb-5'>{full_description}</p>}

                {store.item && store.item.gross_price && (
                  <div className='d-flex'>
                    <h3 className='font-weight-normal'>${store.item && store.item.gross_price}</h3>
                    <input className='opacity-0' defaultValue={store.item && store.item.gross_price} />
                  </div>
                )}

                {rating != 0 && (
                  <>
                    <h3 className='sr-only'>Reviews</h3>
                    <div className='d-flex'>
                      <ProductRating rating={4} />
                      <span className='ms-3'>{reviews} reviews</span>
                    </div>
                  </>
                )}
                {sizes.size != 0 && <ProductSizes sizes={sizes} />}
                <button className='btn btn-dark btn-lg' type='button' onClick={() => onClickAddToCart(store.item && store.item.product_id)}>
                  Add to cart
                </button>

                {
                  notify && <Alert message='Product added to cart' />
                }
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-12 col-lg-6'>
              <h4>Product Description</h4>
              <p>
                There’s nothing I really wanted to do in life that I wasn’t able to get good at.
                That’s my skill. I’m not really specifically talented at anything except for the
                ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be
                wrong because you can’t learn anything from a compliment.
              </p>
              {highlights && highlights.length != 0 && (
                <>
                  <h6>Benefits</h6>
                  <ul className='text-sm'>
                    {highlights.map((highlight, i) => (
                      <li key={i} className='mb-2'>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {details && details.length != 0 && (
                <>
                  <h6>More about product</h6>
                  <p>{details}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
