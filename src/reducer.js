import { ACTIONS } from "./action";
import { v4 as uuid } from "uuid";

// create two new case to increase & decrease the item count in redux
const initialState = {
  isLoggedIn: false,
  user: {
    id: "",
    userName: "",
    email: "",
    password: ""
  },
  cartItems: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    case ACTIONS.SIGNUP:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          id: uuid(),
          ...state.user,
          ...action.payload
        }
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        cartItems: []
      };
    case ACTIONS.ADD_TO_CART:
      console.log("payload", action.payload);
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.item_count++;
        return state;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case ACTIONS.INCREASE_ITEM_COUNT:
      state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          item.item_count++;
        }
        return state;
      });
      break;
    case ACTIONS.DECREASE_ITEM_COUNT:
      state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          item.item_count--;
        }
        return state;
      });

      break;
    default:
      return state;
  }
};
