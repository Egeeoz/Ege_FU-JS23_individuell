import { useState } from "react";
import "../styles/cart.css";
import useStore, { selectTotalPrice } from "../store";
import { Link } from "react-router-dom";

const Cart = () => {
  // State for opening and closing cart
  const [isOpen, setIsOpen] = useState(false);

  // function to open and close the cart
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Destructures `cartItems`, `increaseQuantity`, and `decreaseQuantity` from global state for managing cart items and their quantities.
  const { cartItems, increaseQuantity, decreaseQuantity } = useStore(
    (state) => ({
      cartItems: state.cartItems,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    })
  );

  // Accesses the total price from global state using the `selectTotalPrice` selector.
  const totalPrice = useStore(selectTotalPrice);

  // Retrieves the `emptyCart` function from global state to clear the shopping cart.
  const emptyCart = useStore((state) => state.emptyCart);

  return (
    <>
      <section className="cart-icon" onClick={toggleCart}></section>
      {/* Condtional classname for */}
      <div className={`cart-view ${isOpen ? "open" : ""}`}>
        <h1>Din Beställning</h1>
        {cartItems.length > 0 ? (
          <section className="cart-items">
            {cartItems.map((item, index) => (
              <section key={index} className="cart-items">
                <section className="cart-items-list">
                  <p className="cart-item">{item.name}</p>

                  <section className="quantity">
                    <button
                      className="vector-up"
                      onClick={() => increaseQuantity(item.name)}
                    ></button>
                    <p className="item-quantity">{item.quantity}</p>
                    <button
                      className="vector-down"
                      onClick={() => decreaseQuantity(item.name)}
                    ></button>
                  </section>
                </section>

                <p className="cart-item-price">
                  {item.price * item.quantity} kr
                </p>
              </section>
            ))}
          </section>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}

        <section className="cart-info">
          <section className="total-price-section">
            <p className="total-text">Total</p>
            <p className="total-price">{totalPrice} kr</p>
          </section>
          <p className="small-info-text">inkl moms + drönarleverans</p>
        </section>

        <section className="button-section">
          <Link to="/status" className="cart-button" onClick={emptyCart}>
            Take my money!
          </Link>
        </section>
      </div>
    </>
  );
};

export default Cart;
