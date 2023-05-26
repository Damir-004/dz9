export default function reducer (state, action) {
  switch (action.type) {
    case "del":
      const stateCopy = [...state];
      const pizzaCopy = {...stateCopy[0].pizza};
      let foundIngredient = false;
      pizzaCopy.ingredients = pizzaCopy.ingredients.map((ingredient) => {
        if (ingredient === action.payload && ingredient.total > 0) {
          foundIngredient = true;
          return {...ingredient, total: ingredient.total - 1};
        }
        return ingredient;
      });
      if (foundIngredient) {
        pizzaCopy.price = pizzaCopy.price - action.payload.price;
      }
      stateCopy[0].pizza = pizzaCopy;
      return stateCopy;
    case "add":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: state[0].pizza.price + action.payload.price,
            ingredients: state[0].pizza.ingredients.map((obj) =>
              obj === action.payload ? { ...obj, total: obj.total + 1 } : obj
            ),
          },
        },
      ];
    case "reset":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price: 3,
            ingredients: state[0].pizza.ingredients.map((obj) => ({
              ...obj,
              total: 0,
            })),
          },
        },
      ];
      
    case "new":
      const newObj = state;
      newObj[0].pizza.id = action.payload;
      const oldObj = JSON.parse(JSON.stringify(state));
      state = oldObj;
      oldObj[0].pizza.id = "";
      state.push(newObj[0]);
      return state;

    case "load":
      if (state[1].pizza.id === action.payload) {
        state[0] = state[1];
        return state;
      }
  }
}