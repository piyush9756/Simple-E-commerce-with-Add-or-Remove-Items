import {useSelector } from "react-redux";
import ProductItem from "./productItem";
import { Container, Row } from "react-bootstrap";
export default function SlideShow(props){
  const products = useSelector(state => state.product.products);
  const filteredProducts = products.filter(p=>p.category === props.category);
    return (
        <>
           <Container className="px-5">
           <h1 className="fw-bold fst-italic">{props.category}</h1>
        <Row className="">
        {filteredProducts &&filteredProducts.map(p=>{
          
          return(
          <ProductItem
              id = {p._id}
              key={p._id}
              imgSrc={p.image} 
              imgAlt="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel" 
              brandName={p.title}
              sizes={p.sizes}
              price = {p.price} 
              product = {p}
              />
          )
        })}
      </Row>
    </Container>
    <hr className="border-3 border-danger"/>
    <hr className="border-3 border-danger"/>
    
      </>
    )
}