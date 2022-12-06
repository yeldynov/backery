import PhoneIcon from '../../assets/phone-icon.png';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='item'>
          <img src={PhoneIcon} alt='' />
          <span>phone numbers:</span>
          <span>(01792) 78-24-15</span>
          <span>(01792) 78-24-15</span>
        </div>
        <div className='item'>
          <img src={FacebookIcon} alt='' />
          <span>facebook:</span>
          <span>https://uk-ua.facebook.com/</span>
        </div>
        <div className='item'>
          <img src={InstagramIcon} alt='' />
          <span>instargram:</span>
          <span>https://www.instagram.com/lorys_bakery</span>
        </div>
      </div>

      <div className='footer-bottom'>Serhii Yeldynov design 2022</div>
    </div>
  );
};

export default Footer;
