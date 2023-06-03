import React from "react";

const Load = ({ setLoad, setRandomCoupon, loadPizza}) => {
  return (
    <div className="load">
      <div className="load-content">
        <span onClick={() => setLoad(false)}>x</span>
        <h3>Your id coupon:</h3>
        <div className="load-content__coupon">
          <input
            onChange={(e) => setRandomCoupon(e.target.value)}
            type="text"
          />
          <button onClick={() => loadPizza() || setLoad(false)}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Load;