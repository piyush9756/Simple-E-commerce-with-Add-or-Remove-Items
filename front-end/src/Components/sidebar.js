import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { logout } from "../Redux/Slices/userSlice";
export default function SideBar() {
  const dispatch = useDispatch();
    const cartItems = useSelector(state=> state.cart.cartItems);
    function handleLogOut(){
      dispatch(logout())
    }
  return (
    <div className="sidebar-container">
      <button onClick={handleLogOut} >-----</button>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto"> 
      <li className="nav-item">
        <Link href="/" className="nav-link text-white" aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        <Link href="/signin" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Login
        </Link>
      </li>
      <li>
        <Link href="/signup" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          SignUp
        </Link>
      </li>
      <li>
        <Link href="/contact" className="nav-link text-white">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Contact Us
        </Link>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
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
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
  )
}


