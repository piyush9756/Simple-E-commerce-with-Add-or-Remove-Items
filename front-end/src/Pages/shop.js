import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../Components/productItem';
import { Container, Row } from 'react-bootstrap';

export default function ShopPage() {
    const category = useSelector(state => state.product.category);
    const products = useSelector(state => state.product.filteredProducts);
  return (
    <>
           <Container className="px-5">
        <h1>{category?category:"All Items"}</h1>
        <Row>
        {products &&products.map(p=>{
          return(
          <ProductItem
              id = {p._id}
              key={p._id}
              imgSrc={p.image} 
              imgAlt="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel" 
              brandName={p.title}
              sizes={[40,42,44,46]}
              price = {p.price} 
              product = {p}
              description={p.description}
              />
          )
        })}
      </Row>
    </Container>
      </>
  )
}
