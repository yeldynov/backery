import { useEffect, useState } from 'react';
import './basket-item.scss';
import { removeItem } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const BasketItem = ({ product }) => {
  const { id, img, name, price, compounds, baker, quantity } = product;
  const [quantityNew, setQuantityNew] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice((quantityNew * price) / 100);
  }, [quantityNew, setQuantityNew, price]);

  return (
    <div className='basket-item' key={id}>
      <img src={img} alt='' />
      <div className='desc'>
        <div className='desc-title'>{name}</div>
        <div className='desc-price'>{price}£ per 100 grams.</div>
        <div className='compound'>
          <p>
            <u>Compounds:</u>
          </p>
          {compounds.map((comp) => (
            <p key={Math.random()}>{comp}</p>
          ))}
        </div>
        <div className='baker'>Baker: {baker}</div>
      </div>
      <div className='adds'>
        <div className='input-group'>
          <input type='checkbox' id='sesame' />
          <label htmlFor='sesame'>add sesame</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='seeds' />
          <label htmlFor='seeds'>add seeds</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='dates' />
          <label htmlFor='dates'>add dates</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='hot' />
          <label htmlFor='hot'>get the bread hot</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='cut' />
          <label htmlFor='cut'>cut bread</label>
        </div>
      </div>
      <div className='amount'>
        <div className='weight'>
          <span>weight:</span>
          <span className='grams'>{quantityNew} g</span>
          <button
            className='btnPlus'
            onClick={() => setQuantityNew((prev) => prev + 100)}
          >
            +
          </button>
          <button
            className='btnMinus'
            onClick={() =>
              setQuantityNew((prev) => (prev === 100 ? 100 : prev - 100))
            }
          >
            -
          </button>
        </div>
        <div className='quantity'>
          <span>amount:</span>
          <span className='amount'>{totalPrice}£</span>
        </div>
        <button className='removeBtn' onClick={() => dispatch(removeItem(id))}>
          remove from basket
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
