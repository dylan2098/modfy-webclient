import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';
import CheckOrder from '../components/order/checkOrder';

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <h3>My Modfy Account</h3>
        <p>Members will enjoy many benefits.</p>
        <div className='my-2'>
          <section className='bg-gray-100 px-2'>
            <div className='row'>
              {/* Start Register Page */}
              <div className='col-6 p-3 p-md-5 text-gray-100'>
                <h5 className='mb-4'>Register Account</h5>
                <div className='form-group'>
                  <label>First name</label>
                  <input type='text' className='form-control' placeholder='Enter your first name' />
                </div>
                <div className='form-group'>
                  <label>Last name</label>
                  <input type='text' className='form-control' placeholder='Enter your last name' />
                </div>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email address'
                  />
                </div>
                <div className='form-group'>
                  <label>Phone number</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className='form-group'>
                  <label>Gender</label>
                  <input type='text' className='form-control' placeholder='Enter your gender' />
                </div>
                <div className='form-group'>
                  <label>Date of birth</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your date of birth'
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter your password'
                  />
                </div>
                <div className='form-group'>
                  <label>Confirm password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter your confirm password'
                  />
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    readOnly={false}
                    defaultChecked={false}
                  />
                  <label className='custom-control-label'>Sign me up for all the latest offers and exclusives from Modfy</label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    readOnly={false}
                    defaultChecked={false}
                  />
                  <label className='custom-control-label'>I have read and agree the Terms and Conditions</label>
                </div>

                <a className='btn btn-dark w-100 mt-4' type='button' href='/dashboard'>
                  Submit
                </a>

                <div className='mt-2 mb-4 position-relative text-center'>
                  <p className='text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3'>
                    or
                  </p>
                </div>
                <div className='card-footer text-center pt-0 px-lg-2 px-1'>
                  <p className='mb-4 text-sm mx-auto'>
                    Do you have an account?
                    <a href='/login' className='text-dark font-weight-bold'>
                      &nbsp; Log in &nbsp;
                    </a>
                    or
                    <a href='javascript:;' className='text-dark font-weight-bold'>
                      &nbsp; Forgot
                    </a>
                  </p>
                </div>
              </div>

              <CheckOrder />
            </div>
          </section>
        </div>
        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
