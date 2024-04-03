import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../Components/productItem';
import { Col, Container, Row , Form } from 'react-bootstrap';
import { categoryFilter } from '../Redux/Slices/productsSlice';

export default function ShopPage({show}) {
    const category = useSelector(state => state.product.category);
    const products = useSelector(state => state.product.filteredProducts);
    const dispatch = useDispatch();
    function handleCategoryFilter(e){
      console.log(e.target.value);
      dispatch(categoryFilter({fullProducts: products,category:e.target.value}))
        }
  return (
    <>
           <Container className="px-5">
        <h1>{category?category:"All Items"}</h1>
        <Row>
          <Col lg={12}>
            <Form.Group>
          <Form.Check
            inline
            type="radio"
            label="Full Items"
            name='group1'
            value="full items"
            onClick={handleCategoryFilter}
            />
             <Form.Check
            inline
            type="radio"
            label="Electronics"
            name='group1'
            value="electronics"
            onClick={handleCategoryFilter}
            />
          <Form.Check
            inline
            type="radio"
            label="Men Clothing"
            name='group1'
            value="men's clothing"
            onClick={handleCategoryFilter}
            />
             <Form.Check
            inline
            type="radio"
            label="Women Clothing"
            name='group1'
            value="women's clothing"
            onClick={handleCategoryFilter}
            />
             <Form.Check
            inline
            type="radio"
            label="Jewelery"
            name='group1'
            value="jewelery"
            onClick={handleCategoryFilter}
            />
            </Form.Group>
          </Col>
        </Row>
        <Row>
        {products &&products.map(p=>{
          return(
          <ProductItem
              id = {p._id}
              key={p._id}
              imgSrc={p.image} 
              imgAlt= {p.title} 
              brandName={p.title}
              sizes={[40,42,44,46]}
              price = {p.price} 
              product = {p}
              description={p.description}
              showDelete={show}
              />
          )
        })}
      </Row>
    </Container>
      </>
  )
}
