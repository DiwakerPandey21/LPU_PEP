import { useState } from 'react';
import './Products.css';

const Products = ({ name, price, imgUrl }) => {

  const [productPrice, setProductPrice] = useState(price);

  const priceHandler = () => {
    setProductPrice(100);
  };

  return (
    <figure className='product' onClick={priceHandler}>
      <img src={imgUrl} alt={name} />
      <h2>Name: {name}</h2>
      <h3>Price: Rs {productPrice}</h3>
    </figure>
  );
};

export default Products;
