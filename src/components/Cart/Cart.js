import React, { useContext } from "react";
import ContextProvider from "../../store/CartProvider";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = (props) => {
 const ctx = useContext(ContextProvider);

 const addItem = (item) => {
   ctx.cartIncrease(item);
 };

 const decreaseItem = (item) => {
   ctx.cartDecrease(item);
 };

 return (
   <Modal>
     <div className={classes['cart-modal']}>
       <ul>
         {ctx.cartItems.map((item, index) => {
           const itemInItems = ctx.items.find(
             (i) => i.medicine === item.medicine
           );

           return (
             <li key={index}>
               {item.medicine} || Rs.{item.price} || Quantity: {item.amount}
               {itemInItems && itemInItems.amount > 0 && (
                 <button onClick={() => addItem(item)} className={classes['cart-button']}>+</button>
               )}
               <button onClick={() => decreaseItem(item)} className={classes['cart-button']}>-</button>
             </li>
           );
         })}
       </ul>
       <div className={classes['total']}>
         <span>
           Total Cart Value: <b>Rs.{ctx.totalAmount}</b>
         </span>
       </div>
       <div>
         <button onClick={props.onClose} className={classes['close-button']}>Close</button>
       </div>
     </div>
   </Modal>
 );
};

export default Cart;

