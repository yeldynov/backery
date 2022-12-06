import './product-item.scss';

const ProductItem = ({ product }) => {
  const { img, name, price } = product;

  return (
    <div className='product-item'>
      <img src={img} alt='' />
      <div className='name'>{name}</div>
      <div className='price'>{price}£ per 100 grams.</div>
      <hr />
      <form className='order'>
        <input className='grams' type='number' value={100} step={100} />g
        <button className='btnPlus'>+</button>
        <button className='btnMinus'>-</button>
        <div className='amount'>{price}£</div>
        <button className='btnOrder' type='submit'>
          pre-order
        </button>
      </form>
    </div>
  );
};

export default ProductItem;
