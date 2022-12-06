import ProductItem from '../../components/product-item/ProductItem';
import './products.scss';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Dark wheat bread',
    price: 0.5,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 2,
    name: 'White rye bread',
    price: 0.45,
    img: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 3,
    name: 'Dark wheat bread',
    price: 1.0,
    img: 'https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  },
  {
    id: 4,
    name: 'Dark rye bread',
    price: 0.5,
    img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 5,
    name: 'Dark wheat bread',
    price: 0.75,
    img: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 6,
    name: 'Dark wheat bread',
    price: 0.5,
    img: 'https://images.unsplash.com/photo-1616841888027-89693dec0827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 7,
    name: 'Dark wheat bread',
    price: 0.45,
    img: 'https://images.unsplash.com/photo-1599819055803-717bba43890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 8,
    name: 'Dark bread + sesame',
    price: 1.0,
    img: 'https://images.unsplash.com/photo-1622808516114-02a5749cd965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: 9,
    name: 'White wheat bread',
    price: 0.5,
    img: 'https://images.unsplash.com/photo-1588616279830-ef7fa0299348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  },
];

const Products = () => {
  return (
    <div className='products'>
      <div className='title'>Products</div>
      <div className='products-list'>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
