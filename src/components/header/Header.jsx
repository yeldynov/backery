import './header.scss';
import SearchIcon from '../../assets/search-icon.png';
import PhoneIcon from '../../assets/phone-icon.png';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='left'>
          <button>
            <img src={PhoneIcon} alt='' />
          </button>
          <div className='phone'>(01792) 78-24-15</div>
        </div>
        <div className='right'>
          <input type='search' />
          <button>
            <img src={SearchIcon} alt='' />
          </button>
        </div>
      </div>
      <div className='header-bottom'>
        <img src={Logo} alt='' />
        <div className='title'>Lory's bakery</div>
        <div className='subtitle'>Hot bread for your breakfast.</div>
      </div>
    </div>
  );
};

export default Header;
