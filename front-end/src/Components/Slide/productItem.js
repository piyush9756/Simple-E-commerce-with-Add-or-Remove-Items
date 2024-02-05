import {useDispatch} from "react-redux";
import { addToCart} from "../../Redux/Slices/cartSlice";
import {Link} from "react-router-dom";
import "../css/productItem.css";
export default function ProductItem({imgSrc,imgAlt,brandName,sizes,price,id,product}){
    const dispatch = useDispatch();
    const isClothing = product.category.includes("clothing");
    return (
        
        <div className="product_item">
            <Link to={`/product/${id}`} className="link-img">
            <div className="img">
              <img src={imgSrc} alt={imgAlt} className="img-slide"/>
              <p className="brand_name">{brandName}</p>
            </div>
            </Link>
            {/* <!-- Size --!> */}
                {isClothing? 
                <div className="size_color">
                <div className="title">SIZE</div>
                <div className="size_wrap">
                   <ul>
                   {sizes.map((size, i)=>{
                       return (
                       <li key={i}>
                        <span>{size}</span>
                        </li>);
                   })}
                  </ul> 
               </div>
               </div>
               : null}
                
            {/* <!-- Price --!> */}
            <div className="price">
                <p>${price}</p>
            </div>
            {/* <!-- Buy Option --!> */}
                <Link to={`/product/${id}`}>
                <button type="button" className="btn btn-success" onClick={()=>{
                 dispatch(addToCart({product:product}))
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                Add To Cart 
                </button>
                </Link>
                
        
          </div>
    )
}