import './basket-item.scss';

const BasketItem = ({ product }) => {
  const { img, name, price, compounds, baker } = product;
  return (
    <div className='basket-item'>
      <img src={img} alt='' />
      <div className='desc'>
        <div className='desc-title'>{name}</div>
        <div className='desc-price'>{price}£ per 100 grams.</div>
        <div className='compound'>
          <p>
            <u>Compounds:</u>
          </p>
          {compounds.map((comp) => (
            <p>{comp}</p>
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
          <input className='grams' type='number' value={100} step={100} />g
          <button className='btnPlus'>+</button>
          <button className='btnMinus'>-</button>
        </div>
        <div className='quantity'>
          <span>amount:</span>
          <span className='amount'>{price}£</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
