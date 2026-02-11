import './Products.css'

const Products = (props) => {
  return (
    // figure tag display our content along with our image
    <figure className='product'>
        <img src={props.imgUrl} alt={props.name} />
        <h2>Name: {props.name}</h2>
        <h3>Price: ${props.price}</h3>
    </figure>
  )
}

export default Products