import React, { useContext } from "react";
import { Context } from "../Context";
const Ingredients = () => {
  const { state, del, add } = useContext(Context);
  return (
    <ul className="ingredients">
      {state[0].pizza.ingredients.map((obj, i) => {
        return (
          <li className="li" key={i}>
            <div>
              <h3>{obj.text}</h3>
              <span>{obj.price}$</span>
            </div>
            <div className="box-btns">
              <button className="btn-ms btn" onClick={() => del(obj)}>-</button>
              <span className="li-total">{obj.total}</span>
              <button className="btn-ps btn" onClick={() => add(obj)}>+</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Ingredients;
