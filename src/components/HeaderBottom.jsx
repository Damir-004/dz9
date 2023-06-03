import React, { useContext } from "react";
import { Context } from "../Context";
import Ingredients from "./Ingredients";

const HeaderBottom = () => {
  function handleClick(event) {
    var text = event.target.innerText;
    navigator.clipboard.writeText(text);
    alert("Текст скопирован: " + text);
  }
  const {state, dispatch, random, setCheckout, setLoad, randomID} =
  useContext(Context);
  return (
    <div className="app-bottom">
      <div className="app-bottom_left">
        <ul>
          <li>
            <img src={state[0].pizza.mainPicture} alt="Тесто" />
          </li>
          {state[0].pizza.ingredients.map((obj, i) => {
            if (obj.total ) {
              return (
                <li key={i}>
                  <img src={obj.picture} alt={obj.picture} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="app-bottom_right">
        <div className="title">
          <h2>Your pizza</h2>
          <span className="pizza-price">{state[0].pizza.price}$</span>
          <button className="btn-res" onClick={() => dispatch({ type: "reset" })}>
            Reset pizza
          </button>
        </div>
        <Ingredients />
        <div className="total">
          <h3>Total</h3>
          <span className="total-span">{state[0].pizza.price}$</span>
        </div>
        <div className="btns">
          <div className="btns-top">
            <button onClick={random}>Save pizza</button>
            <button onClick={() => setCheckout(true)}>Checkout pizza</button>
          </div>
          <div className="btns-bottom">
            <button onClick={() => setLoad(true)}>Load pizza</button>
          </div>
        </div>
        <div className="random">
          <p>Your id code <span onClick={handleClick}>{randomID}</span></p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;