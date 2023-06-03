import React, { useReducer, useState, useEffect } from "react";
import Checkout from "./components/Checkout";
import CheckoutInfo from "./components/CheckoutInfo";
import Load from "./components/Load";
import Product from "./Product";
import reducer from "./reducer";
import { Context } from "./Context";
import HeaderBottom from "./components/HeaderBottom";

function App() {
  const [state, dispatch] = useReducer(reducer, Product);
  const [randomID, setRandomID] = useState(""); 
  const [randomCoupon, setRandomCoupon] = useState("");
  const [load, setLoad] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState(false);
  const add = (obj) => {
    dispatch({ type: "add", payload: obj });
  };
  const del = (obj) => {
    dispatch({ type: "del", payload: obj });
  };
  const allFalse = () => {
    setCheckout(false);
    setCheckoutInfo(false);
  };
  const random = () => {
    let alphabet = "ABCDEFGHIKLMNOPQRSTVWXYZabcdefghiklmnopqrstvwxz123456789";
    let random = "";
    while (random.length < 10) {
      let index = Math.floor(Math.random() * alphabet.length);
      random += alphabet[index];
    }
    setRandomID(random);
    dispatch({ type: "new", payload: random });
  };
  const loadPizza = () => {
    if (randomCoupon === randomID) {
      dispatch({ type: "load", payload: randomID });
      console.log("10");
    }
  };
  const value = {
    state,
    dispatch,
    del,
    add,
    random,
    setCheckout,
    setLoad,
    randomID,
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={value}>
      <div className="app">
        <div className="app-top">
          <span>Build your pizza</span>
          <span>Ingredients</span>
        </div>
        <HeaderBottom />
        {load ? (
          <Load
            setLoad={setLoad}
            setRandomCoupon={setRandomCoupon}
            loadPizza={loadPizza}
            randomCoupon={randomCoupon}
          />
        ) : null}
        {checkout ? (
          <Checkout
            state={state}
            setCheckout={setCheckout}
            setCheckoutInfo={setCheckoutInfo}
          />
        ) : null}
        {checkoutInfo ? (
          <CheckoutInfo allFalse={allFalse} state={state} />
        ) : null}
      </div>
    </Context.Provider>
  );
}

export default App;



