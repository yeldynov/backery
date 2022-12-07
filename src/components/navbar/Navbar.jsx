import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './navbar.scss';

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
      <NavLink
        to='/'
        className={(navData) =>
          navData.isActive ? 'button-active link' : 'button link'
        }
      >
        About Us
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? 'button-active link' : 'button link'
        }
        to='/process'
      >
        Process
      </NavLink>
      <NavLink
        to='/products'
        className={(navData) =>
          navData.isActive ? 'button-active link' : 'button link'
        }
      >
        Products
      </NavLink>
      <NavLink
        to='/contacts'
        className={(navData) =>
          navData.isActive ? 'button-active link' : 'button link'
        }
      >
        Contacts
      </NavLink>
      <NavLink
        to='/basket'
        className={(navData) =>
          navData.isActive ? 'button-active link' : 'button link'
        }
      >
        Basket
        <div className='shopping-icon'>
          <ShoppingCartOutlinedIcon />
          {products.length !== 0 && (
            <span className='products-length'>{products.length}</span>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
