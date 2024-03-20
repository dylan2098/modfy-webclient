import data from '../assets/data.json';
import '../assets/scss/main.scss';
import CardCategory from '../components/products/cardCategory';
import ProductFeature from '../components/products/productFeature';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TestimonialsFade from '../components/promo/testimonialsFade';
import PromoSectionLarge from '../components/promo/promoSectionLarge';

let cartItems: any = [];
data.shoppingCart.map((id) =>
  data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
);

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <PromoSectionLarge
        title={'Collection is here'}
        full_description={data.products[0].full_description}
        pageHeaderBgImg={'https://res.cloudinary.com/dvweth7yl/image/upload/v1710921934/bg2.jpg'}
        pageHeaderMinVh='90vh'
      />
      <div className='container my-5'>
        <div className='d-block text-center mb-5'>
          <h3>Shop by category</h3>
          <a className='text-dark font-weight-bold' href='#'>
            Browse all categories &#62;
          </a>
        </div>
        <div className='row mb-5'>
          {data.categories.slice(0, 4).map((category) => (
            <div className='col-md-6 col-lg-3'>
              <CardCategory
                thumb_src={category.thumb_src}
                collection={category.collection}
                title={category.title}
              />
            </div>
          ))}
        </div>

        <PromoSectionLarge
          title='Basic Starter Pack'
          full_description={data.products[0].full_description}
          pageHeaderBgImg={'https://res.cloudinary.com/dvweth7yl/image/upload/v1710921934/bg2.jpg'}
          pageHeaderMinVh='50vh'
          pageHeaderRadius='1rem'
        />
        <div className='my-5'>
          <ProductFeature
            title='Product Features'
            images={data.products[2].images}
            full_description='Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible'
            featuresDetails={new Map(Object.entries(data.products[0].featuresDetails || {}))}
          />
        </div>
        <div className='mt-5 mb-10'>
          <TestimonialsFade
            pageHeaderBgImg={
              'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80'
            }
            pageHeaderMinVh='50vh'
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
