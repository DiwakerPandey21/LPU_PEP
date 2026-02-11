import { useState } from 'react';
import './Products.css'

const Products = (props) => {

  // let price = props.price
  const [price,setPrice] = useState(props.price);
  
  const priceHandler = () =>{
    // console.log("I was clicked");
    // price =100
    // console.log(price)

    setPrice(100);
  }

  return (
    // figure tag display our content along with our image
    <figure className='product' onClick={priceHandler}>
        <img src={props.imgUrl} alt={props.name} />
        <h2>Name: {props.name}</h2>
        <h3>Price: Rs {price}</h3>
    </figure>
  )
}

export default Products