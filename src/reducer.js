export default function reducer (state, action) {
  switch (action.type) {
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
    case "del":
      return [
        {
          pizza: {
            ...state[0].pizza,
            price:
              action.payload.total >= 0
                ? state[0].pizza.price - action.payload.price
                : state[0].pizza.price,
            ingredients: state[0].pizza.ingredients.map((obj) =>
              obj === action.payload ? { ...obj, total: obj.total - 1 } : obj
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
      oldObj[0].pizza.price = 3;
      oldObj[0].pizza.id = "";
      oldObj[0].pizza.ingredients.map((obj) => {
        obj.total = 0;
        return obj;
      });
      state.push(newObj[0]);
      return state;

    case "load":
      if (state[1].pizza.id === action.payload) {
        state[0] = state[1];
        return state;
      }
  }
}