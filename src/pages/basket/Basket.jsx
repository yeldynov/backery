import BasketItem from '../../components/basket-item/BasketItem';
import './basket.scss';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Dark wheat bread',
    price: 0.5,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    compounds: ['premium flour', 'water', 'sourdough from rye bran and flour'],
    baker: 'John Walkins Jr.',
  },
  {
    id: 2,
    name: 'White rye bread',
    price: 0.45,
    img: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    compounds: ['premium flour', 'water', 'sourdough from rye bran and flour'],
    baker: 'John Walkins Jr.',
  },
  {
    id: 3,
    name: 'Dark wheat bread',
    price: 1.0,
    img: 'https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    compounds: ['premium flour', 'water', 'sourdough from rye bran and flour'],
    baker: 'John Walkins Jr.',
  },
];

const Basket = () => {
  return (
    <div className='basket'>
      <div className='title'>Basket</div>
      <div className='container'>
        {DUMMY_PRODUCTS.map((item) => (
          <BasketItem product={item} />
        ))}
      </div>
      <hr />
      <div className='total'>
        <div className='left'>Total</div>
        <div className='right'>2.95£</div>
      </div>
      <div className='button-container'>
        <button>Create Order</button>
      </div>
    </div>
  );
};

export default Basket;
