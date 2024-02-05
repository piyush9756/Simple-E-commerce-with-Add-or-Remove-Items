import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { register } from "../Redux/Slices/userSlice";
import { useState } from "react";
export default function RegisterPage(){
  const error = useSelector(state=> state.user.error);
  const isLoading = useSelector(state=> state.user.isLoading);
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [displayName ,setDisplayName] = useState("");
  const dispatch = useDispatch();
  function handleOnSubmit(e){
    e.preventDefault();
    dispatch(register({
      displayName:displayName,
      email:email,
      password:password
    }))
  }
    return (
        <div className="background">
       <div className="login-container">
    <div className="login-header">
      <h2>Welcome to <span>MindLink</span></h2>
      <p>SignUp </p>
    </div>
    <div className="login-form">
      <form method="post" onSubmit={handleOnSubmit}>
      <div className="input-group">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            onChange={(e)=> setDisplayName(e.target.value)}
            value={displayName}
            name="displayName" 
            placeholder="Name" 
            required 
            className="login-input"/>
        </div>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            name="email" 
            placeholder="Email" 
            required 
            className="login-input"/>
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input 
            type="password" 
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            name="password" 
            placeholder="Password" 
            required 
            className="login-input"/>
        </div>
        <div className="options">
          <label htmlFor="remember" className="login-label">
            <input type="checkbox" id="remember" className="login-input"/> Remember me
          </label>
          {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
        </div>
        <button type="submit" className="login-button">Login</button>
        {error && <div className="alert alert-danger"> {error}</div>}
        {isLoading && <p>Loading</p>}
      </form>
    </div>
    <div className="signup-link">
      Already Registered? <Link to="/signin">Sign In</Link>
    </div>
  </div>
        </div>
    )
}