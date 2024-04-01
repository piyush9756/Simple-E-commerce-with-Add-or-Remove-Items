import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Pages/home';
import {Container , Row , Col } from "react-bootstrap";
import { Route, Routes,  Navigate } from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from './Redux/Slices/productsSlice';
import ProductPage from './Pages/product';
import CartPage from './Pages/cart';
import ShopPage from './Pages/shop';
import { setUser } from './Redux/Slices/userSlice';
import { setCart } from './Redux/Slices/cartSlice';
import AdminPanel from './Pages/AdminPanel';
import SideBar from './Components/sidebar';
function App() {
  const user = useSelector(state=>state.user.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    dispatch(getProducts());
    if(user){
      dispatch(setUser(user));
    }
    if(cart){
      dispatch(setCart(cart));
    }
  },[dispatch]);



  return (
    <Container fluid className="app" >
      <Row className="min-100">
      <SideBar/>
      <Col lg={10} md={12} className="px-0 ">
    <Routes>
      <Route 
      path="/"
      element={
        <HomePage />
      }
      />
      <Route
      path="/signin"
      element={!user ?
        <LoginPage /> :
        <Navigate to="/"/>
      }
      />
      <Route
      path="/signup"
      element={!user ?
        <RegisterPage />:
        <Navigate to="/"/>
      }
      />
  {/*     <Route
      path="/contact"
      element={
        <ContactPage />
      }
      /> */}
      <Route 
      path="/product/:productId"
      element={<ProductPage />}
      />
      <Route
      path="/cart"
      element={<CartPage />}
      />
      <Route
      path="/shop"
      element={<ShopPage />}
      />
      <Route
      path="adminpanel"
      element={ <AdminPanel/>}
      />
    </Routes>
      </Col>
      </Row>
      <Row>
{/*       <Footer /> */}
      </Row>
      </Container>
  );
}

export default App;
