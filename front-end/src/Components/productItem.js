import {useDispatch, useSelector} from "react-redux";
import { addToCart} from "../Redux/Slices/cartSlice";
import {Link} from "react-router-dom";
import { Card, Col, Row , Button } from "react-bootstrap";
import { removeProduct } from "../Redux/Slices/adminSlice";
export default function ProductItem({imgSrc,imgAlt,brandName,sizes,price,description,id,product ,showDelete}){
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user.user);
    const handleDeleteProduct = (e)=>{
        dispatch(removeProduct({productId :id}))
        console.log(id);
    }
    const isClothing = product.category.includes("clothing"); 
    return (
        <Col  lg={3} md={6} sm={12} className="d-flex py-2 ">
        <Card className="border-2 border-secondary rounded-5 bg-hover">
            <Card.Header>
            <Card.Img 
            variant="top" 
            src={imgSrc} 
            className="img-fluid p-4" alt={imgAlt}
            />
            </Card.Header>
                <Card.Body className="d-flex flex-column  justify-content-around overflow-hidden">
                    <Card.Title className="fw-bold text-black">
                        {brandName}
                    </Card.Title>
                    <Card.Text className="fw-semibold fs-6 text-secondary">
                    {description}
                    </Card.Text>
                    
                    {isClothing&& 
                    <>
                    <hr />
                <h5 className="fw-bold">SIZE</h5>
                <Row className="justify-content-around ">
                    
                    {sizes.map((size, i)=>{
                        return (
                            <Col xl={3} lg={6} md={6} sm={6} xs={6} key={i} > 
                        <div   className="btn btn-outline-danger rounded-circle border-2 border p-2 m-1">
                        <span>{size}</span>
                        </div>
                        </Col>);
                    })}
                </Row>
                </>
                }  
                </Card.Body>
                <Card.Footer>
                    <strong className="text-black">Price: ${price}</strong>
                    {}
                    
               {showDelete && user && user.isAdmin ?
                <Button  variant="btn" className="btn-outline-danger mx-2" onClick={handleDeleteProduct}><i className="fa-solid fa-trash"></i></Button>
                :
                <Link 
                    to={`/product/${id}`}
                    className="btn btn-outline-dark mt-auto mx-2 fw-semibold rounded-4"
                    variant="secondary" 
                    onClick={()=>{
                        dispatch(addToCart({product:product}))
                    }}>
                        <i className="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    
                </Link>
                } 
                </Card.Footer>
            
        </Card>
        </Col>
           

   )
}   
