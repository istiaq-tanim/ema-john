import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   const {img,name,price,ratings,seller}=props.product;
   const handleToCart=props.handleToCart;
   console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='product-name'>{name}</h5>
            <p>Price: {price}</p>
            <p>Manufacturer {seller}</p>
            <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleToCart(props.product)} className='add-cart'>Add To Cart
            <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;