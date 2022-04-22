import { product } from "../mockData";

const defaultState = product;
const defaultStateFilter = ''

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": return [...state, action.payload]
    default:
      return state;
  }
};

export const filterProductReducer = (state = defaultStateFilter, action) => {
  switch (action.type) {
    case "FILTER_PRODUCT":
      return  action.payload

    default:
      return state;
  }
};

