import React, { useState } from 'react'
import './form.css'

const Form = () => {

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
        console.log(name)
        console.log(price)
        console.log(img)
    }


  return (
    <form onSubmit={formSubmitted} className='form' >
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={nameChangeHandler} placeholder='Product Name' />
    </div>
    <div>
        <label htmlFor="number">Price</label>
        <input type="text" id='number' onChange={priceChangeHandler}  placeholder='Product Price'/>
    </div>
    <div>
        <label htmlFor="img">Image Url</label>
        <input type="text" id='img' onChange={imgUrlChangeHandler} placeholder='Img Url'/>
    </div>

    <button>Create Product</button>
    </form>
  )
}

export default Form