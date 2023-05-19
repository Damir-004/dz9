const initialState = [
  {
    pizza: {
      price: 3.0,
      id: "1",
      mainPicture: "./images/testo.jpg",
      ingredients: [
        {
          total: 0,
          text: "Cold cuts",
          price: 3,
          picture: "./images/feta.jpg",
        },
        {
          total: 0,
          text: "Pepperoni",
          price: 2.5,
          picture: "./images/cold-cuts.jpg",
        },
        {
          total: 0,
          text: "Feta",
          price: 1.5,
          picture: "./images/pepperoni.jpg",
        },
        {
          total: 0,
          text: "Mozzarella",
          price: 1,
          picture: "./images/mozzarella.jpg",
        },
        {
          total: 0,
          text: "Swiss cheese",
          price: 2,
          picture: "./images/swiss-cheese.jpg",
        },
        {
          total: 0,
          text: "Spices",
          price: 0.25,
          picture: "./images/spices.jpg",
        },
        {
          total: 0,
          text: "Vegatables",
          price: 0.75,
          picture: "./images/vegetables.jpg",
        },
      ],
    },
  },
];

export default initialState;