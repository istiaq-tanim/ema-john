import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
   const [products,setProducts]= useState([]);
   const [cart,setCart]=useState([])
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
   
    const handleToCart = (product) =>
   {
     let newCart=[...cart,product];
     setCart(newCart)
   }
    return (
        <div  className='shop-container'>
            <div className='product-container'>
               {
                 products.map(product => <Product key={product.id} product={product}
                  handleToCart={handleToCart}
                 ></Product>)
               }
            </div>

            <div className='cart-container'>
                <h5>Our Order</h5>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;