import Flour from '../../assets/process/Flour.png';
import Sourdough from '../../assets/process/Sourdough.png';
import Water from '../../assets/process/Water.png';
import Dough from '../../assets/process/Dough.png';
import Bread from '../../assets/process/Bread.png';
import Plus from '../../assets/process/plus.png';
import Equals from '../../assets/process/equals.png';
import Arrow from '../../assets/process/arrow.png';
import Wrapper from '../../assets/process/process-wrapper.png';
import Breakfast from '../../assets/process/Breakfast.png';
import Gadgets from '../../assets/process/Gadgets.png';
import Order from '../../assets/process/Order_sheet.png';
import Shop from '../../assets/process/Shop.png';
import BottomImg from '../../assets/process/process-bottom-img.png';

import './process.scss';

const Process = () => {
  return (
    <div className='process'>
      <div className='title'>Process</div>
      <div className='subtitle'>Bread baking</div>
      <div className='bread-baking'>
        <div className='item'>
          <img src={Flour} alt='' />
          <div className='item-title'>Flour</div>
          <div className='item-text'>
            Flour is the soul of bread. We buy the highest quality flour only
            from the best millers. This is a flour of the highest quality, which
            meets all quality standards. We also do not use harmful additives.
            Our bread can be eaten by children as soon as their teeth erupt.
          </div>
        </div>
        <div className='symbol'>
          <img src={Plus} alt='' />
        </div>
        <div className='item'>
          <img src={Sourdough} alt='' style={{ marginBottom: '20px' }} />
          <div className='item-title'>Sourdough</div>
          <div className='item-text'>
            We do not use yeast in our production. Only sourdough, which we
            ourselves make according to a clear technology. The composition
            includes rye or wheat flour and bran. Yeast harms the body, and
            sourdough is ideal for nutrition.
          </div>
        </div>
        <div className='symbol'>
          <img src={Plus} alt='' />
        </div>
        <div className='item'>
          <img src={Water} alt='' style={{ marginBottom: '20px' }} />
          <div className='item-title'>Water</div>
          <div className='item-text'>
            We use only artesian water. Our water is further purified. Does not
            contain harmful metals. Only useful minerals.
          </div>
        </div>
        <div className='symbol'>
          <img src={Arrow} alt='' />
        </div>
        <div className='item'>
          <img src={Dough} alt='' />
          <div className='item-title'>Dough</div>
          <div className='item-text'>
            This is our technology. We take great care of these recipes. Also,
            our chefs regularly study and participate in competitions.
          </div>
        </div>
        <div className='symbol'>
          <img src={Equals} alt='' />
        </div>
        <div className='item'>
          <img src={Bread} alt='' style={{ marginBottom: '30px' }} />
          <div className='item-title'>Bread</div>
          <div className='item-text'>
            The result of our work. All ingredients are of the highest quality.
            Chefs ensure proper kneading and process control. And in the morning
            you can come to your bread and have a delicious breakfast. If you
            are here for the first time, we advise you to read the{' '}
            <b>
              <u>way of bread below</u>
            </b>
            .
          </div>
        </div>
      </div>

      <div className='wrapper'>
        <img src={Wrapper} alt='' />
      </div>

      <div className='bread-baking'>
        <div className='item'>
          <img src={Gadgets} alt='' />
          <div className='item-title'>Booking</div>
          <div className='item-text'>
            With the help of our website (or you can go to the bakery) you
            reserve the right amount of bread.
            <br />
            <b>Attention! We accept orders until 23:00.</b>
            <br />
            You order bread in the evening and pick it up the next morning.
          </div>
        </div>
        <div className='symbol'>
          <img src={Arrow} alt='' />
        </div>
        <div className='item'>
          <img src={Order} alt='' style={{ marginBottom: '20px' }} />
          <div className='item-title'>Order sheet </div>
          <div className='item-text'>
            An order sheet is generated on the site. We collect all orders and
            start baking bread at night. You enter your contact details so that
            we can contact you quickly.
          </div>
        </div>
        <div className='symbol'>
          <img src={Arrow} alt='' />
        </div>

        <div className='item'>
          <img src={Shop} width='110px' alt='' />
          <div className='item-title'>Warm meeting</div>
          <div className='item-text'>
            The first loaves of bread are ready even earlier. <br />
            <b>We open for our guests at 7:00.</b>
            <br /> We also have delicious coffee, warm and pleasant smell of
            bread... Mmm
          </div>
        </div>
        <div className='symbol'>
          <img src={Arrow} alt='' />
        </div>
        <div className='item'>
          <img src={Bread} alt='' style={{ marginBottom: '20px' }} />
          <div className='item-title'>Bread</div>
          <div className='item-text'>
            We use only artesian water. Our water is further purified. Does not
            contain harmful metals. Only useful minerals.
          </div>
        </div>

        <div className='symbol'>
          <img src={Arrow} alt='' />
        </div>
        <div className='item'>
          <img src={Breakfast} alt='' style={{ marginBottom: '30px' }} />
          <div className='item-title'>Breakfest</div>
          <div className='item-text'>
            If you prefer to have breakfast at home with your family, then we
            wish you bon appetit. Looking forward to seeing you again. .
          </div>
        </div>
      </div>

      <div className='image-bottom'>
        <img src={BottomImg} alt='' />
      </div>
    </div>
  );
};

export default Process;
