import React, { useContext } from "react";
import { CartContext } from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css';


const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="tp" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
       <button onClick={() => decrement(id)}> <img src="./img/decr.png" alt="" /></button>
          <input type="text" placeholder={quantity} disabled /> 
          
         <button  onClick={() => increment(id)}> <img src="./img/incr.png" alt="" /> </button>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <button onClick={() => removeItem(id)}>  <img src="./img/delete.png" alt="" />

          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
