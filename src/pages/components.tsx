import data from '../assets/data.json';
import '../assets/scss/main.scss';
import Navbar from '../components/navbar';
import ComplexNavbar from '../components/complexNavbar';
import ComplexNavbarDark from '../components/complexNavbarDark';
import Footer from '../components/footer';
import ComplexFooter from '../components/complexFooter';
import CardProduct from '../components/products/cardProduct';
import CardCategory from '../components/products/cardCategory';
import ProductOverviewGrid from '../components/products/productOverviewGrid';
import ProductOverviewGallery from '../components/products/productOverviewGallery';
import ShoppingCart from '../components/cart/shoppingCart';
import ShoppingCart2 from '../components/cart/shoppingCart2';
import ProductQuickview from '../components/products/productQuickview';
import ProductQuickview2 from '../components/products/productQuickview2';
import ProductFeature from '../components/products/productFeature';
import ProductFeature2 from '../components/products/productFeature2';
import CategoryFilters from '../components/products/categoryFilters';
import TestimonialsFade from '../components/promo/testimonialsFade';
import PromoSectionLarge from '../components/promo/promoSectionLarge';
import CheckoutOrderSummary from '../components/checkout/checkoutOrderSummary';
import CheckoutMultiStep from '../components/checkout/checkoutMultiStep';
import ReviewSimple from '../components/reviews/reviewSimple';
import ReviewSummaryChart from '../components/reviews/reviewSummaryChart';
import OrderSummaries from '../components/order/orderSummaries';
import OrderHistory from '../components/order/orderHistory';
import IncentiveLarge from '../components/incentives/incentiveLarge';
import IncentiveCols from '../components/incentives/incentiveCols';

let cartItems: any = [];
data.shoppingCart.map((id) =>
  data.products.filter((x) => x.id === id).map((x) => cartItems.push(x))
);
let cartItems2: any = [];
data.shoppingCart2.map((id) =>
  data.products.filter((x) => x.id === id).map((x) => cartItems2.push(x))
);

// filter reviews with ID 01
let productReviews = data.reviews.filter((x) => x.productID === '01');

let orderProducts: any = [];

data.orders[0].products.forEach((productDetails) => {
  data.products.forEach((product) => {
    if (product.id === productDetails.id) {
      orderProducts.push(product);
    }
  });
});

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

export default function ComponentPage() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h3>Product Lists</h3>
        <p>Components and blocks for Product Lists</p>
        <div className='row mt-5'>
          {data.products.map((product) => (
            <div className='col-md-6 col-lg-3'>
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                color={product.color}
                colors={product.colors}
                title={product.title}
                description={product.description}
                price={product.price}
                position='center'
              />
            </div>
          ))}
        </div>

        <h3>Product Lists</h3>
        <p>Cards with full details</p>
        <div className='row'>
          {data.products.map((product) => (
            <div className='col-md-6 col-lg-3'>
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                color={product.color}
                colors={product.colors}
                title={product.title}
                description={product.description}
                price={product.price}
                position='left'
              />
            </div>
          ))}
        </div>

        <div className='row mb-8'>
          <div className='d-block text-center mb-5'>
            <h3>Shop by category</h3>
            <a className='text-dark font-weight-bold' href='#'>
              Browse all categories &#62;
            </a>
          </div>
          {data.categories.slice(0, 4).map((category) => (
            <div className='col-md-6 col-lg-3'>
              <CardCategory
                thumb_src={category.thumb_src}
                title={category.title}
                collection={category.collection}
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

        <div className='my-10'>
          <h3>Product Overview</h3>
          <p className='mb-5'>With image grid</p>

          <ProductOverviewGrid
            colors={data.products[0].colors}
            images={data.products[0].images}
            title={data.products[0].title}
            full_description={data.products[0].full_description}
            price={data.products[0].price}
            highlights={data.products[0].highlights}
            details={data.products[0].details}
            rating={data.products[0].rating}
            reviews={data.products[0].reviews}
            sizes={data.products[0].sizes}
          />
        </div>

        <div className='my-5'>
          <h3>Product Overview</h3>
          <p className='mb-5'>Product Overviews with image gallery and expandable details</p>

          <ProductOverviewGallery
            colors={data.products[1].colors}
            images={data.products[1].images}
            title={data.products[1].title}
            full_description={data.products[1].full_description}
            price={data.products[1].price}
            rating={data.products[1].rating}
            reviews={data.products[1].reviews}
            data={data.products[1].data}
          />
        </div>

        <div className='my-10'>
          <ShoppingCart products={cartItems} />
        </div>

        <div className='my-10'>
          <ShoppingCart2 products={cartItems2} />
        </div>

        {/* <div className='my-10'>
          <h3>Category filters</h3>
          <p className='mb-5'>With inline actions and expandable sidebar filters</p>
          <CategoryFilters title='Our products' catalogs={}/>
        </div> */}

        <div className='my-10'>
          <h3>Product Quickviewers</h3>
          <p className='mb-5'>With color selector, size selector, and details link</p>

          <ProductQuickview
            colors={data.products[0].colors}
            thumb_src={data.products[0].thumb_src}
            title={data.products[0].title}
            price={data.products[0].price}
            rating={data.products[0].rating}
            reviews={data.products[0].reviews}
            sizes={
              data.products[0].sizes ? new Map(Object.entries(data.products[0].sizes)) : new Map()
            }
            images={data.products[0].images}
          />

          <h3 className='mt-7'>Product Quickviewers</h3>
          <p className='mb-5'>With large size selector</p>
          <ProductQuickview2
            colors={data.products[1].colors}
            thumb_src={'https://res.cloudinary.com/dvweth7yl/image/upload/v1710921943/mirror.png'}
            title='Sofa'
            price={data.products[1].price}
            rating={data.products[1].rating}
            reviews={data.products[1].reviews}
          />
        </div>

        <div className='my-10'>
          <ProductFeature
            title={data.products[0].title}
            images={data.products[2].images}
            full_description={data.products[0].full_description}
            featuresDetails={
              data.products[0].featuresDetails
                ? new Map(Object.entries(data.products[0].featuresDetails))
                : new Map()
            }
          />
        </div>

        <div className='my-10'>
          <ProductFeature2
            title={data.products[0].title}
            full_description={data.products[0].full_description}
            images={data.products[2].images}
            data={
              data.products[2].featuresDetails
                ? new Map(Object.entries(data.products[2].featuresDetails))
                : new Map()
            }
          />
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Complex Navbar White</h3>
          <a className='text-dark font-weight-bold' href='#'>
            Browse all categories &#62;
          </a>
          <br />
          <br />
          <ComplexNavbar />
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

          <h3 className='mt-5'>Complex Navbar Dark</h3>
          <a className='text-dark font-weight-bold' href='#'>
            Browse all categories &#62;
          </a>
          <br />
          <br />
          <ComplexNavbarDark />
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
        </div>

        <div className='my-10'>
          <h3>Simple Footer</h3>
          <Footer />

          <h3 className='mt-8'>Complex Footer</h3>
          <ComplexFooter />
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

        <div className='my-10'>
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

        <div className='my-10'>
          <h3>Checkout Forms</h3>
          <p>Split with order summary</p>
          <CheckoutOrderSummary products={cartItems} />
        </div>

        <div className='my-10'>
          <h3>Checkout Forms</h3>
          <p>SWith order summary sidebar</p>
          <CheckoutMultiStep products={cartItems2} />
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Product reviews</h3>
          <p className='text-body'>Simple with avatars</p>
          <ReviewSimple reviews={data.reviews} />
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Product reviews</h3>
          <p className='text-body'>With summary chart</p>
          {productReviews && (
            <ReviewSummaryChart
              reviews={productReviews.map((review) => ({
                ...review,
                productID: Number(review.productID),
              }))}
            />
          )}
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Order Summaries</h3>
          <p className='text-body'>With order summary sidebar</p>
          <OrderSummaries
            order={{ ...data.orders[0], orderNumber: data.orders[0].orderNumber.toString() }}
            products={orderProducts}
          />
        </div>

        <div className='my-10'>
          <OrderHistory orders={data.orders} products={orderHistoryProducts} />
        </div>

        <div className='my-10'>
          <IncentiveLarge order={''} />
        </div>

        <div className='my-10'>
          <h3 className='mt-5'>Features</h3>
          <p className='text-body'>3-column with illustrations and header</p>
          <IncentiveCols order={''} />
        </div>
        <Footer />
      </div>
    </>
  );
}
