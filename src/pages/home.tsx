import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import ComplexNavbar from '../components/complexNavbar';
import CardProduct from '../components/products/cardProduct';
import CardCategory from '../components/products/cardCategory';

export default function HomePage() {
  return (
    <div className='container'>
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

      <div className="row mb-5">
        <div className="d-block text-center mb-5">
          <h3>Shop by category</h3>
          <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a>
        </div>
        <div className="col-md-6">
          <CardCategory
            classList = "h-100"
            cta = ""
            thumb_src = {data.categories[4].thumb_src}
            title = {data.categories[4].title}
          />
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <CardCategory
              thumb_src = {data.categories[5].thumb_src}
              title = {data.categories[5].title}
            />
          </div>
          <div className="">
            <CardCategory
              thumb_src = {data.categories[6].thumb_src}
              title = {data.categories[6].title}
            />
          </div>
        </div>
      </div>


      <div className='my-2'>
        <ComplexFooter />
      </div>
    </div>
  );
}
