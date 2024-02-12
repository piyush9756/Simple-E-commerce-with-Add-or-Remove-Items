import React from 'react'
import "./css/darkMode.css";
import { switchTheme } from '../../Redux/Slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DarkModeButton() {
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.theme.darkTheme);
    function handleSwitchTheme(){
        dispatch(switchTheme());
      };
  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="one-quarter" id="switch">
        <input type="checkbox" className="checkbox" id="chk" onChange={handleSwitchTheme} value={isDark} />
        <label className="label" htmlFor="chk">
        <i className="fas fa-moon "></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
        </label>
        </div>
    </div>
  )
}
