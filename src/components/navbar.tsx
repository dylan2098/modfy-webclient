import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSignIn, faLocation } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0'>
      <div className='container px-1'>
        {/* <a className="navbar-brand font-weight-bolder ms-lg-0 " href="/home">Modfy Ecommerce</a> */}
        <Link to='/home' className='className="navbar-brand font-weight-bolder ms-lg-0 '>
          Modfy Ecommerce
        </Link>
        <button
          className='navbar-toggler shadow-none ms-2'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navigation'
          aria-controls='navigation'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon mt-2'>
            <span className='navbar-toggler-bar bar1'></span>
            <span className='navbar-toggler-bar bar2'></span>
            <span className='navbar-toggler-bar bar3'></span>
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navigation'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a
                className='nav-link text-dark font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                href='/product-list'
              >
                Products
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                id='pagesSupport'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Support
              </a>
              <ul className='dropdown-menu' aria-labelledby='pagesSupport'>
                <li>
                  <a className='dropdown-item' href='/faq'>
                    FAQs
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                id='pagesDiscover'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Discover
              </a>
              <ul className='dropdown-menu' aria-labelledby='pagesDiscover'>
                <li>
                  <a className='dropdown-item' href='/blogs'>
                    Blogs
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/meet-the-team'>
                    Meet The Team{' '}
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link text-dark font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                href='/check-order'
              >
                Check Order
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-dark font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                href='/find-store'
              >
                <FontAwesomeIcon icon={faLocation} /> &nbsp; Find Store
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-dark font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                href='/cart'
              >
                <FontAwesomeIcon icon={faShoppingBag} /> &nbsp; Cart
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-dark font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                href='/login'
              >
                <FontAwesomeIcon icon={faSignIn} /> &nbsp; Login
              </a>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 '
                aria-current='page'
                id='flags'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img src='https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/US.png' />{' '}
                &nbsp; English (US)
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink2'>
                <li>
                  <a className='dropdown-item' href='#'>
                    <img src='https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/DE.png' />{' '}
                    &nbsp; Deutsch
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    <img src='https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/GB.png' />{' '}
                    &nbsp; English (UK)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
