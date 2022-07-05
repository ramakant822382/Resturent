import React, { useContext } from "react";
import './Cart.css'
import { CartContext } from "./Cart";

const Navbar = () => {const { totalItems } = useContext(CartContext);
  
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./img/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
          <img src="./img/cart.png" alt="cart-logo" />
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
