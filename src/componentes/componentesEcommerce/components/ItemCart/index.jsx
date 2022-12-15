import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import './itemCard.css'


export const ItemCart = ({ item }) => {
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  const { id } = item;

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} style={{width:'65px',borderRadius:'5px'}} />
      <div className="dataContainer" >
        <div className="left">
          <p>{item.name}</p>
          <div className="buttonsP" >
            <button className="buttons" onClick={() => AddItemToCart(item)}>AGREGAR</button>
            <button className="buttons bg-danger" onClick={() => DeleteItemToCart(id)}>Eliminar</button>
          </div>
        </div>
        <div className="right">
          <div className="amount">{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
