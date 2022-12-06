import PhoneIcon from '../../assets/phone-dark.png';
import FacebookIcon from '../../assets/facebook-dark.png';
import InstagramIcon from '../../assets/instagram-dark.png';

import './contacts.scss';

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='title'>Contacts</div>
      <div className='contacts-info'>
        <div className='item'>
          <div className='left'>
            <img src={PhoneIcon} alt='' />
            <span>phone numbers:</span>
          </div>
          <div className='right'>
            <span>(01792) 78-24-15</span>
            <br />
            <span>(01792) 78-24-15</span>
          </div>
        </div>
        <div className='item'>
          <div className='left' style={{ gap: '70px' }}>
            <img src={FacebookIcon} alt='' />
            <span> facebook:</span>
          </div>
          <div className='right'>
            <span>https://uk-ua.facebook.com/lorys_bakery</span>
          </div>
        </div>
        <div className='item'>
          <div className='left'>
            <img src={InstagramIcon} alt='' />
            <span>instargram:</span>
          </div>
          <div className='right'>
            <span>https://www.instagram.com/lorys_bakery</span>
          </div>
        </div>
      </div>
      <div className='subtitle'>How to get here?</div>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20522.887273047912!2d36.23583757653811!3d49.98584267834778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f054bbe88f%3A0x4d6dc6818b6c0427!2sMaidan%20Konstytutsii!5e0!3m2!1sru!2sua!4v1670181769311!5m2!1sru!2sua'
          width='100%'
          height='700'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          title='map'
        ></iframe>
      </div>
      <div className='subtitle'>
        Store opening hours: Sunday - Monday 7 AM -5 PM
      </div>
      <div className='subtitle' style={{ fontWeight: 900 }}>
        Welcome!
      </div>
    </div>
  );
};

export default Contacts;
