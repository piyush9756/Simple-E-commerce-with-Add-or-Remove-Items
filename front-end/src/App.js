import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/partials/footer';
import HomePage from './Pages/home';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';
import ContactPage from './Pages/contact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from './Redux/Slices/productsSlice';
import ProductPage from './Pages/product';
import CartPage from './Pages/cart';
import ShopPage from './Pages/shop';
import { categoryFilter } from './Redux/Slices/productsSlice';
import { logout, setUser } from './Redux/Slices/userSlice';
import { setCart } from './Redux/Slices/cartSlice';
function App() {
  const [isDropped , setIsDropped] = useState(false);
  const location = useLocation();
  const user = useSelector(state=>state.user.user);
  const products = useSelector(state => state.product.products);
  const cartItems = useSelector(state=> state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    dispatch(getProducts());
    if(user){
      dispatch(setUser(user));
    }
    dispatch(setCart(cart));
  },[dispatch]);
  function handleCategoryFilter(e){
dispatch(categoryFilter({fullProducts: products,category:e.target.value}))
  }
  function handleLogout(){
    dispatch(logout());
  }
  function handleToggleDropDown(e){
    setIsDropped(!isDropped);
  }
  return (
    <div className="App">
       <div className="home-container">
          <div className="sidebar-container">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
          {/* <!-- account dropdown --!> */}
        <div className="dropdown" onClick={handleToggleDropDown}>
      <div className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> */}
        <strong>{user &&user.displayName}</strong>
      </div>
      <ul className={isDropped?"dropdown-menu dropdown-menu-dark text-small shadow show":"dropdown-menu dropdown-menu-dark text-small shadow"} aria-labelledby="dropdownUser1" >
        <li><button className="dropdown-item" >New project...</button></li>
       {user &&user.isAdmin && <li><button className="dropdown-item" >Admin Panel</button></li>} 
        <li><button className="dropdown-item" >Profile</button></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className="dropdown-item" onClick={handleLogout}>Sign out</button></li>
      </ul>
    </div>
    <hr/>
    {/* <!-- Cart  --!> */}
    <li>
        <Link to= "/cart" className="nav-link text-white">
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
    <hr/>
    {/* <!-- list Items  --!> */}
    <ul className="nav nav-pills flex-column mb-auto"> 
      <li >
        <Link to="/" className="nav-link text-white" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      {!user && 
      <>
      <li>
        <Link to="/signin" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Login
        </Link>
      </li>
      <li>
        <Link to="/signup" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          SignUp
        </Link>
      </li>
      </>
      }
      <li>
        <Link to="/shop" className="nav-link text-white">
          
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Shop
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Contact Us
        </Link>
      </li>
      <li>
        <div className="nav-link text-white">
          {/* <!-- Filtering Options  --!> */}
          {location.pathname === "/shop" ?
          <div className="filterOptions">
          <label  htmlFor="categoryInput">Category</label>
          <select id="categoryInput" selected="men's clothing" onClick={handleCategoryFilter}>
            <option value="full items">Full Items</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          </div>: null
          }
          </div>
          </li>
    </ul>

    
  </div>
    </div>
    
    <div className="slideshow-container">
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
      <Route
      path="/contact"
      element={
        <ContactPage />
      }
      />
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
    </Routes>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
