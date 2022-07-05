import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';

import { CartContext } from "./Cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (item.length === 0) {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <scroll className="cart-items-container">
                  <h1>Empty Cart</h1>
                </scroll>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <scroll className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </scroll>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <button>
              <Link to={'/cheackout'}>Chekout</Link>   </button>
               <br></br>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </section>
        </>
      );
    }
  }
};

export default ContextCart;
