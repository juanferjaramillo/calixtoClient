import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ONE_PRODUCT = "GET_ALL_PRODUCTS";
export const DISABLE_PRODUCT = "GET_ALL_PRODUCTS";
export const ENABLE_PRODUCT = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "GET_ALL_PRODUCTS";
export const FILTER_BY_PROVIDER = "FILTER_BY_PROVIDER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const RESET_BOARD = "RESET_BOARD";
export const GET_ALL_USERS = "GET_ALL_USERS";

//----------------------USER ACTIONS--------------------------------
export const getAllUsers = () => {
  //brings all the users from the db to the state
  return async function (dispatch) {
    let allUsers = await axios.get('/users');
    allUsers = allUsers.data;
    return dispatch({
      type: GET_ALL_USERS,
      payload: allUsers
    })
  }
}

//----------------------PRODUCT ACTIONS-------------------------------
export const getAllProducts = (owner) => {
  //brings all products from db to the state
  return async function (dispatch) {
    let allProds = await axios.get(`/product/${owner}`);
    allProds = allProds.data;
    //brings all products from db

    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: allProds,
    });
  };
};

export const filterByProvider = (provider) => {
  return {
    type: FILTER_BY_PROVIDER,
    payload: provider,
  };
};

export const filterByName = (name) => {
  return {
    type: FILTER_BY_NAME,
    payload: name,
  };
};

export const resetBoard = () => {
  return {
    type: RESET_BOARD,
  };
};

export const getOneProduct = (id) => {};

export const disableProduct = (id) => {};

export const enableProduct = (id) => {};

export const createProduct = (id) => {};
