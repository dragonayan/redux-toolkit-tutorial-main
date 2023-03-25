import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
import { BeakerIcon } from '@heroicons/react/24/solid'
import CartItem from './CartItem';


const Navbar = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);
  console.log(cartItems)

  return (
    <>

      <nav>
        <div className='nav-center'>
          <h3>redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />

            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>


            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;