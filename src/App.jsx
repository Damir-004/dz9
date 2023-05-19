import React, { useReducer, useState } from "react";
import Checkout from "./components/Checkout.jsx";
import Load from "./components/Load.jsx";
import Product from "./Product";
import reducer from "./reducer";
import { Context } from "./Context";
import HeaderBottom from "./components/HeaderBottom";

function App() {
  const [state, dispatch] = useReducer(reducer, Product);
  const [load, setLoad] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [randomID, setRandomID] = useState(""); 
  const [randomCoupon, setRandomCoupon] = useState("");
  const add = (obj) => {
    dispatch({ type: "add", payload: obj });
  };
  const del = (obj) => {
    dispatch({ type: "del", payload: obj });
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
      console.log("1");
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
            setCheckout={setCheckout}
            state={state}
          />
        ) : null}
      </div>
    </Context.Provider>
  );
}

export default App;