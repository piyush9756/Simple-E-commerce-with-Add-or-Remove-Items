import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../Components/Slide/productItem';

export default function ShopPage() {
    const category = useSelector(state => state.product.category);
    const products = useSelector(state => state.product.filteredProducts);
  return (
    <>
           <div className="wrapper">
        <h1>{category?category:"All Items"}</h1>
        <div className="product_wrap">
        {products &&products.map(p=>{
          
          return(
          <ProductItem
              id = {p.id}
              key={p._id}
              imgSrc={p.image} 
              imgAlt="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel" 
              brandName={p.title}
              sizes={[40,42,44,46]}
              price = {p.price} 
              product = {p}
              />
          )
        })}
      </div>
    </div>
      </>
  )
}
