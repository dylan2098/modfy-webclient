import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CardProduct from '../components/products/cardProduct';
import CardCategory from '../components/products/cardCategory';
import TestimonialsFade from '../components/promo/testimonialsFade';
import PromoSectionLarge from '../components/promo/promoSectionLarge';
import IncentiveLarge from '../components/incentives/incentiveLarge';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mt-4'>
          {data.products.map((product) => (
            <div className='col-12 col-md-6 col-lg-3'>
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>

        <div className='row mb-5'>
          <div className='d-block text-center mb-5'>
            <h3>Shop by category</h3>
            <a className='text-dark font-weight-bold' href='#'>
              Browse all categories &#62;
            </a>
          </div>
          <div className='col-md-6'>
            <CardCategory
              classList='h-100'
              cta=''
              thumb_src={data.categories[4].thumb_src}
              title={data.categories[4].title}
            />
          </div>
          <div className='col-md-6'>
            <div className='mb-4'>
              <CardCategory
                thumb_src={data.categories[5].thumb_src}
                title={data.categories[5].title}
              />
            </div>
            <div className=''>
              <CardCategory
                thumb_src={data.categories[6].thumb_src}
                title={data.categories[6].title}
              />
            </div>
          </div>
        </div>

        <div className='my-5'>
          <h3 className='mt-5'>Promo Sections</h3>
          <p className='text-body'>With fading background image and testimonials</p>
          <PromoSectionLarge
            title={data.products[0].title}
            full_description='The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?'
            pageHeaderBgImg={
              'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
            pageHeaderMinVh='50vh'
            pageHeaderRadius='1rem'
          />
        </div>

        <div className='my-5'>
          <IncentiveLarge order={''} />
        </div>

        <div className='my-5'>
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
