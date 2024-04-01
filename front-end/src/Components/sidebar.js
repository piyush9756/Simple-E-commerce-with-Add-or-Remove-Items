import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { logout } from "../Redux/Slices/userSlice";
import { Button, Col, Container, Dropdown, Navbar, Row } from "react-bootstrap";
import { setCart } from "../Redux/Slices/cartSlice";
export default function SideBar() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.user);
    const cartItems = useSelector(state=> state.cart.cartItems);
    function handleLogOut(){
      dispatch(logout());
      dispatch(setCart([]));
    }
  return (
    <Col lg={2} md={12} className="px-0  text-center bg-light">
      <Navbar expand="lg" className="align-items-start">
        <Container fluid className="p-0 d-lg-flex flex-lg-column" >
          <Navbar.Brand> 
          <Link to="/" className="text-black text-decoration-none">
          <span className="fs-3 fw-bold">Sizzle Shop</span>
          </Link>
          </Navbar.Brand>
          <hr/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <div className=" p-3 text-black " >
     
      <Row>
        <Col md={12} lg={12} className="nav nav-pills text-center">
     <Dropdown className="nav-item mx-auto mt-3 ">
        <Dropdown.Toggle variant="info" id="dropdown-basic">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle mx-2 img-fluid"/>
        <strong>
          {user ?user.displayName:"Log In"}
        </strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {user &&
        <Button 
        className="dropdown-item"
        onClick={handleLogOut}
        >
          Log Out
        </Button>
        }
        
        {user && user.isAdmin &&
        <>
        <Link to="/adminpanel" className="dropdown-item">
        Admin Panel
        </Link>
        <Link to="/newproduct" className="dropdown-item">
          Add New Product
        </Link>
        </>
        }
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown> 
      </Col>
      </Row>
      <hr/>
      <ul className="nav nav-pills text-center "> 
        <li className="nav-item w-100">
          <Link to="/" className="nav-link text-black" aria-current="page">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        {
          !user && 
          <>
          <li className="nav-item w-100">
          <Link to="/signin" className="nav-link text-black">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Login
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link to="/signup" className="nav-link text-black">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            SignUp
          </Link>
        </li>
          </>
        }
        <li className="nav-item w-100">
          <Link to="/shop" className="nav-link text-black">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            Shop
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link to="/cart" className="nav-link text-black">
          <div className="nav-bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-quantity">
              <span>{cartItems.length}</span>
            </span>
          </div>
          </Link>
        </li>
      </ul>
          </div>
          </Navbar.Collapse>
          </Container>
          </Navbar>
            </Col>
    
  )
}


