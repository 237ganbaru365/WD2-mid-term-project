import CartItem from "./CartItem";

//Styles
import classes from "../../css/Cart.module.css";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (item) =>
    item.reduce((ack, item) => ack + item.amount * item.price, 0);

  return (
    <section>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </section>
  );
};

export default Cart;
