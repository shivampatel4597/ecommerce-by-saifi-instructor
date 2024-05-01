import React from "react";
import '../App.css'
const Header = (props) => {
  return (
    <div className="flex shopping-card">
        <div onClick={()=>props.handleShow(false)}>Shopping cart App</div>
        <div className="cart" onClick={()=>props.handleShow(true)}>Cart 
            <sup style={{ marginLeft: '5px' }}>{props.count}</sup>
        </div>
      </div>
  );
};

export default Header;
