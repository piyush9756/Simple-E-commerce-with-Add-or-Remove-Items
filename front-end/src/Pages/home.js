import "./css/home.css";
import { useSelector } from "react-redux";
import SlideShow from "../Components/Slide/SlideShow";

export default function HomePage(){
  const products = useSelector(state => state.product.products);
  let categoryArray;
  if(products){
     categoryArray = [...new Set(products.map(product=>{
    return product.category}))];
  }
  
    return (
        <div className="slideshow-container ">
        {categoryArray&&categoryArray.map(c=>{
          return(
            <SlideShow category ={c}
            key={c}
            />
          )
        })}
        </div>
        
    )
}