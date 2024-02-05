import "../css/slideshow.css";
import {useSelector } from "react-redux";
import ProductItem from "./productItem";
export default function SlideShow(props){
  const products = useSelector(state => state.product.products);
  const filteredProducts = products.filter(p=>p.category === props.category);
    return (
        <>
           <div className="wrapper">
           <h1 >{props.category}</h1>
        <div className="product_wrap">
        {filteredProducts &&filteredProducts.map(p=>{
          
          return(
            
          <ProductItem
              id = {p.id}
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
      </div>
    </div>
    <hr/>
    <hr/>
      </>
    )
}