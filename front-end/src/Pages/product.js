import "./css/product.css";
import { useDispatch, useSelector } from "react-redux";
import CartButton from "../Components/smallComponents/CartButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleProduct } from "../Redux/Slices/productsSlice";
import { addToCart, quantityCounter, removeFromCart, sizePicker } from "../Redux/Slices/cartSlice";

export default function ProductPage(){
  const params = useParams();
  const productId = parseInt(params.productId);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSingleProduct({productId:productId}));
  },[dispatch,productId]);
  const cart = useSelector(state=>state.cart.cartItems);
  const productIndex = cart.findIndex(p => p.id === productId);
  const product = cart[productIndex];
  let isClothing;
  if(product){
    isClothing =  product.category.includes("clothing");
  }else{
    isClothing = false;
  }
  function handleAddToCart(){
    dispatch(addToCart({product:product}));
  };
  function handleRemoveFromCart(){
    dispatch(removeFromCart({product:product}));
  };
  function handleChangeQuantity(e){
    dispatch(quantityCounter({product:product,quantityNo:e.target.value}));
  };
  function handlePickedSize (size){
    console.log(size);
      dispatch(sizePicker({size: size,product:product}))
  }
    return(
      <div className="productPage-container">
    <section style={{backgroundColor: "#eee"}}>
        <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4" style={{minHeight: "100vh"}}>
        {product &&
        <div className="card overhiddenCh" style={{borderRadius: "15px"}}>
          <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={product.image}
              style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px" ,width: "150px"}} className="img-fluid"
              alt={product.title}
              
              />
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-dark">{product.title}</p>
                <p className="small text-muted">{product.category}</p>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="small text-muted"> rate:{product.rating.rate}</p>
                <p className="small text-muted"> count:{product.rating.count}</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          {isClothing? 
                <>
                <div className="size_color">
                <div className="title">SIZE</div>
                <div className="size_wrap">
                   <ul>
                   {product.sizes.map((size, i)=>{
                       return (
                       <li 
                       key={i}
                       onClick={()=>handlePickedSize(size)}
                       >
                        <span>{size}</span>
                        </li>);
                   })}
                  </ul> 
               </div>
               </div>
               </>
               : null}
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <p className="text-dark">Price:${product.price}</p>
            </div>
            {product.pickedSize && 
            <div className="d-flex justify-content-between">
              <p className="text-dark">pickedSize: {product.pickedSize}</p>
            </div>
            }
            
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
            <CartButton
              btnType="btn-outline-danger  fw-bold"
              btnName="Remove From Cart"
              btnFunction={handleRemoveFromCart}
              />
              <input  
              className="quantity-input" 
              type="number" 
              name="quantity" 
              value={product.cartQuantity} 
              onChange={handleChangeQuantity}
              />
              <CartButton 
              btnType="btn-success fw-bold"
              btnName="Add To Cart"
              btnFunction={handleAddToCart}
              />
            </div>
          </div>
        </div>}
      </div>
    </div>
  </div>
</section>
</div>
    )}
