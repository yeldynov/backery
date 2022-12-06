import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
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
      </NavLink>
    </div>
  );
};

export default Navbar;
