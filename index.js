const redux = require("redux");
const createStore = redux.createStore();
// 1)action
const BUY_CAKE = "BUY_CAKE";
const buyCake = () => {
  {
    type: BUY_CAKE;
  }
};

// 2)reducer
const initialState = {
  numOfCakes: 20,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// 3)store

const 
