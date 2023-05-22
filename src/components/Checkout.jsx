import React from "react";

const Checkout = ({ setCheckout, setCheckoutInfo, state }) => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h2>Your Order</h2>
        <span>The pizza has the following ingredients:</span>
        <ul>
          {state[0].pizza.ingredients.map((obj, i) => {
            if (obj.total > 0) {
              return (
                <li key={i}>
                  {obj.text}: {obj.total}
                </li>
              );
            }
          })}
        </ul>

        <h3>Total price: {state[0].pizza.price}$</h3>
        <span>Continue to checkout?</span>
        <div className="bottom__btn">
          <button onClick={() => setCheckout(false)}>Cancel</button>
          <button onClick={() => setCheckoutInfo(true) || setCheckout(false)}>Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;