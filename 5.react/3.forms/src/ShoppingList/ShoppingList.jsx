import React from 'react'
import Products from '../Products/Products'
import Form from '../form/Form'

const ShoppingList = () => {

    const products = [
        {
            name: 'Iphone 15',
            price: '86000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1btSrbwHJwuFCdIJlnteDwHq1OZX9__ZVfg&s'
        },
        {
            name: 'Mackbook',
            price: '120000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6TFsbhy4mVR6S8Rsy5yrb4nq1f-BqUQm4Q&s'
        },
        {
            name: 'Ipad',
            price: '86000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ5p4U9ts6y-soddhtGNsl-lPMhslq_E0Iw&s'
        },
        {
            name: 'Headphone',
            price: '23000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe168p7s7sHdKyL5nm8mrXfZw-8buKT1amw&s'
        },
        {
            name: 'Headphone',
            price: '23000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe168p7s7sHdKyL5nm8mrXfZw-8buKT1amw&s'
        },
        {
            name: 'Headphone',
            price: '23000',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe168p7s7sHdKyL5nm8mrXfZw-8buKT1amw&s'
        },
    ]



  return (
    
    <section className='products-container'>
        <Form/>
        
        {products.map((product,idx)=>{
            return <Products key={idx} name={product.name} price={product.price} imgUrl={product.imgUrl}/>
        })}
    </section>
  )
}

export default ShoppingList