import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './product-item.scss';
import { addToCart } from '../../redux/cartReducer';
import LogoSmall from '../../assets/logo-small.png';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'rgba(246, 231, 223, 0.54)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const ProductItem = ({ product }) => {
  const { img, name, price, id, compounds, baker } = product;
  const [quantity, setQuantity] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice((quantity * price) / 100);
  }, [quantity, setQuantity, price]);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='product-item'>
        <img src={img} alt='' onClick={handleOpen} />
        <div className='name'>{name}</div>
        <div className='price'>{price}£ per 100 grams.</div>
        <hr />
        <div className='order'>
          <span className='grams'>{quantity} g</span>

          <button
            className='btnPlus'
            onClick={() => setQuantity((prev) => prev + 100)}
          >
            +
          </button>
          <button
            className='btnMinus'
            onClick={() =>
              setQuantity((prev) => (prev === 100 ? 100 : prev - 100))
            }
          >
            -
          </button>
          <div className='amount'>{totalPrice}£</div>
          <button
            className='btnOrder'
            type='submit'
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  name,
                  price,
                  img,
                  compounds,
                  baker,
                  quantity,
                  totalPrice,
                })
              )
            }
          >
            pre-order
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='modal'
      >
        <Box sx={style}>
          <img src={img} alt='' />

          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <div className='desc'>
              <div className='left'>
                <div className='name-modal'>{name}</div>
                <div className='price-modal'>{price}£ per 100 grams.</div>
              </div>
              <div className='center'>
                <img src={LogoSmall} alt='' />
                <p>Baker: Steven Cowley</p>
              </div>
              <div className='right'>
                <u>compound:</u> premium flour, water,
                <br /> sourdough from rye bran <br /> and flour
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ProductItem;
