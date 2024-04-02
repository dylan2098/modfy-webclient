import data from '../../assets/data.json';
import CardProduct from '../products/cardProduct';

interface Props {
  title: string;
  catalogs: [];
}

export default function ProductOverview({ title, catalogs }: Props) {
  return (
    <>
      <div className='card card-product card-plain'>
        <div className='d-flex border-bottom pb-3'>
          {title.length != 0 && <h2 className='mb-3'>{title}</h2>}
          <div className='d-flex ms-auto align-items-center'>
            <div className='dropdown'>
              <button
                className='btn btn-link text-dark mb-0 dropdown-toggle'
                type='button'
                id='sortButton'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Sort
              </button>
              <ul className='dropdown-menu' aria-labelledby='sortButton'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Most Popular
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Best Rating
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Newest
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Price: High to Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12 col-md-4'>
            {catalogs &&
              catalogs.length > 0 &&
              catalogs.map(
                (catalog: any, i) =>
                  catalog && (catalog.catalog_status === 1) && (
                    <div key={i} className='accordion' id='accordionArrivals'>
                      <div className='accordion-item'>
                        <h5 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button border-bottom border-top font-weight-bold py-4'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target={'#collapseThree-' + catalog.catalog_id}
                            aria-expanded='false'
                            aria-controls={'collapseThree-' + catalog.catalog_id}
                          >
                            {catalog.catalog_name}
                            <i
                              className='collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3'
                              aria-hidden='true'
                            ></i>
                            <i
                              className='collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3'
                              aria-hidden='true'
                            ></i>
                          </button>
                        </h5>

                        <div
                          id={'collapseThree-' + catalog.catalog_id}
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionArrivals'
                        >
                          <div className='accordion-body text-sm opacity-8'>

                            {
                              catalog && catalog.categories && catalog.categories.length > 0 && catalog.categories.map((category: any, i: number) => (
                                <div className='form-check justify-content-start' key={category.category_id}>
                                  <input
                                    className='form-check-input me-2'
                                    type='checkbox'
                                    value=''
                                    id='customCheck1'
                                  />
                                  <label className='custom-control-label mb-0'>{category.category_name}</label>
                                </div>
                              ))
                            }
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
          <div className='col-12 col-md-8'>
            <div className='d-flex h-100'>
              <div className='row'>
                {data.products.slice(0, 3).map((product, i) => (
                  <div className='col-md-6 col-lg-4' key={i}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
