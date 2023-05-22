import React from "react";

const CheckoutInfo = ({ allFalse, state }) => {
  return (
    <div className="checkout-info">
        <div className="container">
            <div className="checkout-info__ingredients">
            <h1>Ingredient info</h1>
            <ul>
            {state[0].pizza.ingredients.map((obj, i) => {
                if (obj.total > 0) {
                return (
                    <li key={i}>
                    <span>{obj.text}</span>
                    <img src={obj.picture} alt="" />
                    <span>{obj.total}</span>
                    </li>
                );
                }
            })}
            </ul>
            </div>
            <h1>Checkout info:</h1>
            <div className="info">
                <span>Name:</span>
                <input type="text" />
            </div>
            <div className="info">
                <span>Email:</span>
                <input type="email" />
            </div>
            <div className="delivery">
                <span>Choose delivery method</span>
                <select name="" id="">
                    <option value="">Delivary</option>
                    <option value="">Local pickup</option>
                </select>
            </div>
            <div className="note">
                <span>Additional notes:</span>
                <textarea name="" id=""></textarea>
            </div>
            <div className="client">
                <span>Are you a regular client?</span>
                <input type="radio" name="asd" id="a1" />
                <label htmlFor="a1">Yes</label>
                <input type="radio" name="asd" id="a2" />
                <label htmlFor="a2">No</label>
            </div>
            <div className="code">
                <span>Do you have a coupon code?</span>
                <input type="checkbox" />
            </div>
            <div className="coupon">
                <span>Coupon:</span>
                <input type="text" />
            </div>
            <div className="info-button">
                <button>Reset</button>
                <button onClick={allFalse}>Submit</button>
            </div>
        </div>
    </div>
  );
};

export default CheckoutInfo;
