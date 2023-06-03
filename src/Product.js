const initialState = [
  {
    pizza: {
      id:"",
      price: 3.0,
      // key: "1",
      mainPicture: "./images/testo.jpg",
      ingredients: [
        {
          key: "1",
          total: 0,
          text: "Cold cuts",
          price: 3,
          picture: "./images/feta.jpg",
        },
        {
          key: "2",
          total: 0,
          text: "Pepperoni",
          price: 2.5,
          picture: "./images/cold-cuts.jpg",
        },
        {
          key: "3",
          total: 0,
          text: "Feta",
          price: 1.5,
          picture: "./images/pepperoni.jpg",
        },
        {
          key: "4",
          total: 0,
          text: "Mozzarella",
          price: 1,
          picture: "./images/mozzarella.jpg",
        },
        {
          key: "5",
          total: 0,
          text: "Swiss cheese",
          price: 2,
          picture: "./images/swiss-cheese.jpg",
        },
        {
          key: "6",
          total: 0,
          text: "Spices",
          price: 0.25,
          picture: "./images/spices.jpg",
        },
        {
          key: "7",
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