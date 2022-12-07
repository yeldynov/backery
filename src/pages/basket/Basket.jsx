import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetCart } from '../../redux/cartReducer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import BasketItem from '../../components/basket-item/BasketItem';
import './basket.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'rgba(246, 231, 223, 0.54)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products);
  console.log(products);

  const total = () => {
    let total = 0;
    products?.forEach((item) => (total += item.totalPrice));
    console.log(total);
    return total.toFixed(2);
  };

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    console.log(products); // TODO: send order to backend.
    dispatch(resetCart());
    window.scrollTo(0, 0);
    navigate('/contacts');
  };

  const orderNumber = (Math.random() * 10000000).toFixed();

  return (
    <>
      <div className='basket'>
        <div className='title'>Basket</div>
        {products.length > 0 ? (
          <>
            <div className='container'>
              {products?.map((item) => (
                <BasketItem product={item} key={item.id} />
              ))}
            </div>
            <hr />
            <div className='total'>
              <div className='left'>Total</div>
              <div className='right'>{total()}£</div>
            </div>
            <div className='button-container'>
              <button onClick={handleOpen}>Create Order</button>
            </div>
          </>
        ) : (
          <h1>
            No products in the Basket. <br /> Maybe add one?
          </h1>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='modal'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Your Order Placed!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Thanks for ordering at Lory's Bakery! <br />
            Your order number is <b>#{orderNumber}</b>. <br /> You can pick up
            your order from 7 am to 5 pm.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Basket;
