import {ADD_PRODUCT, FILTER_PRODUCT} from "./actionTypes";

export const addProductAction = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
export const filterProductAction = (payload) => {
  return {
    type: FILTER_PRODUCT,
    payload
  }
}
