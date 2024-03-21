import data from '../assets/data.json';
import '../assets/scss/main.scss';
import ComplexFooter from '../components/complexFooter';
import Navbar from '../components/navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='my-2'>
          <ComplexFooter />
        </div>
      </div>
    </>
  );
}
