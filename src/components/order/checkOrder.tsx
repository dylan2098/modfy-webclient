export default function CheckOrder() {
  return (
    <>
      <div className='col-6 p-3 p-md-5'>
        <h5 className='mb-4'>Check Order Status</h5>
        <div className='form-group'>
          <label>Email address</label>
          <input type='email' className='form-control' placeholder='Enter your email address' />
        </div>
        <div className='form-group'>
          <label>Order number</label>
          <input type='text' className='form-control' placeholder='Enter your order number' />
        </div>

        <a className='btn btn-dark w-100 mt-3' type='button' href='/check-order'>
          Check Status
        </a>
      </div>
    </>
  );
}
