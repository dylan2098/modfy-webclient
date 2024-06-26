import data from '../assets/data.json';
import '../assets/scss/main.scss';
import { useEffect, useState, useReducer, useRef } from 'react';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CategoryFilters from '../components/products/categoryFilters';
import PromoSectionLarge from '../components/promo/promoSectionLarge';
import TestimonialsFade from '../components/promo/testimonialsFade';

import CatalogService from '../services/catalog.service';
import reducer from '../reducers/reducer';  
import Loading from '../components/loading';

export default function ProductListPage() {
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

  const getCatalogs = async () => {
    setLoading(true);
    const response: Response = await CatalogService.getCatalogs();

    if (!response || response.error) {
      return alert(response.message);
    }

    if (response.metadata) {
    dispatch({
        type: 'init',
        payload: {
          items: response.metadata,
          error: response.error,
          paging: 0,
        },
      });

      setLoading(false);
    }
  };

  useEffect(() => {
    getCatalogs();
  }, []);

  return (
    <>
      {loading && <Loading />}

      <Navbar />
      {/* <PromoSectionLarge
        title={'Collection is here'}
        full_description={data.products[0].full_description}
        pageHeaderBgImg={'https://res.cloudinary.com/dvweth7yl/image/upload/v1710921934/bg2.jpg'}
        pageHeaderMinVh='90vh'
      /> */}
      <div className='container my-5'>
        <div className='my-5'>
          <CategoryFilters title='Our products' catalogs={store.items}/>
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Promo Sections</h3>
          <p className='text-body'>Full-width with background image and large content</p>
          <TestimonialsFade
            pageHeaderBgImg={
              'https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80'
            }
            pageHeaderMinVh='50vh'
          />
        </div>

        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
