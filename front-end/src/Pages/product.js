import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleProduct } from "../Redux/Slices/productsSlice";
import { addToCart, quantityCounter, removeFromCart, sizePicker } from "../Redux/Slices/cartSlice";
import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";

export default function ProductPage(){
  
  const params = useParams();
  const productId = params.productId;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSingleProduct({productId:productId}));
  },[dispatch,productId]);
  const cart = useSelector(state=>state.cart.cartItems);
  const productIndex = cart.findIndex(p => p._id === productId);
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
    if(product.cartQuantity <= 1){
      navigate("/");
    }
  };
  function handleChangeQuantity(e){
    dispatch(quantityCounter({product:product,quantityNo:e.target.value}));
  };
  function handlePickedSize (size){
      dispatch(sizePicker({size: size,product:product}))
  }
    return(
      <Container className="min-100 d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center text-capitalize">
          <Col lg={5}>
            {product &&
            <Card>
            <Card.Header>
              <Card.Img
              src={product.image}
              className="img-fluid p-5"
              />
            </Card.Header>
            <Card.Body className="d-flex flex-column  justify-content-around overflow-hidden ">
                    <Card.Title className="fw-bold text-black">
                        {product.title}
                    </Card.Title>
                    <Card.Text className="fw-semibold fs-6 text-secondary ">
                    {product.description}
                    </Card.Text>
                    
                    {isClothing? 
                    <>
                    <hr />
                <h5 className="fw-bold">SIZE</h5>
                <div className="d-flex justify-content-around">
                    {product.sizes.map((size, i)=>{
                        return (
                        <div className="btn btn-outline-danger rounded-circle border-2 border"
                        key={i}
                        onClick={()=>{handlePickedSize(size)}}
                        >
                        <span>{size}</span>
                        </div>);
                    })}
                    
                </div>
                <hr/>
                </>
                : null}  
                {product.pickedSize && 
                <div className="d-flex justify-content-center ">
              <p className="text-dark fw-bold">picked size: {product.pickedSize}</p>
            </div>
            }
                </Card.Body>
                <Card.Footer >
                  <Row className="my-2">
                  <strong className="text-black text-center"> Price: ${product.price * product.cartQuantity}</strong>
                  </Row>
                    <Row className=" py-2 px-1">
                  <Button 
                  variant="btn"
                  className="btn-outline-danger fw-bold"
                  onClick={handleRemoveFromCart}
                  >
                      <i className="fa-solid fa-cart-plus"></i>
                      Remove From Cart
                  </Button>
                  <FormControl 
                  type="number"
                  className="p-2 text-center"
                  name="quantity" 
                  value={product.cartQuantity} 
                  onChange={handleChangeQuantity}
                  />
                  <Button 
                  variant="btn"
                  className="btn-outline-dark fw-bold"
                  onClick={handleAddToCart}
                  >
                  <i className="fa-solid fa-cart-plus"></i>
                      Add To Cart
                  </Button>
                    </Row>
                </Card.Footer>
          </Card>
            }
          </Col>
        </Row>
      </Container>
    )}
