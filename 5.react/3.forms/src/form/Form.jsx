import React, { useState } from 'react'
import './form.css'

const Form = (props) => {

    const[name,setName]=useState('');
    const[price,setPrice]=useState(0);
    const[img,setImg]=useState('');



    const nameChangeHandler = (event) =>{
        // console.log("Name change handler is working")
        setName(event.target.value)
    }

    const priceChangeHandler = (event) =>{
        // console.log("Name change handler is working")
        setPrice(event.target.value)
    }

    const imgUrlChangeHandler = (event) =>{
        // console.log("Name change handler is working")
        setImg(event.target.value)
    }

    const formSubmitted = (event) =>{
        event.preventDefault();
        // console.log(name)
        // console.log(price)
        // console.log(img)

        
        const product = {
            name: name.trim(),
            price: Number(price) || 0,
            imgUrl: img.trim()
        }

        if(props && typeof props.addProduct  === 'function'){
            props.addProduct(product)
        }

        // props.addProduct({name,price,imgUrl:img});

        setName('');
        setPrice('');
        setImg('')
    }

  return (
    <form onSubmit={formSubmitted} className='form' >
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={nameChangeHandler} placeholder='Product Name' value={name} />
    </div>
    <div>
        <label htmlFor="number">Price</label>
        <input type="text" id='number' onChange={priceChangeHandler}  placeholder='Product Price' value={[price]}/>
    </div>
    <div>
        <label htmlFor="img">Image Url</label>
        <input type="text" id='img' onChange={imgUrlChangeHandler} placeholder='Img Url' value={img}/>
    </div>

    <button type='sumbit'>Create Product</button>
    </form>
  )
}

export default Form