import axios from "axios";
import { useActionData } from "react-router-dom";

export const GET_AUTH_USER = "GET_AUTH_USER";
export const GET_PRODS_USER = "GET_PRODS_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER_BY_PROVIDER = "FILTER_BY_PROVIDER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const RESET_BOARD = "RESET_BOARD";
export const USER_LOGOUT = "USER_LOGOUT";
export const FILTER_BY_CATEG = "FILTER_BY_CATEG";
export const FILTER_BY_DISPONIBILITY = "FILTER_BY_DISPONIBILITY";
export const FILTER_BY_PROPERTY = "FILTER_BY_PROPERTY";

//----------------------USER ACTIONS--------------------------------
export const getAuthUser = (usr) => {
  //brings one specific user to the state
  return async function (dispatch) {
    let oneUsr = {};
    usr ? (oneUsr = (await axios.get(`/user/${usr}`)).data) : null;
    sessionStorage.setItem("AuthUsr", JSON.stringify(oneUsr[0]));
    localStorage.setItem("User", JSON.stringify(oneUsr[0].id));
    return dispatch({
      type: GET_AUTH_USER,
      payload: oneUsr,
    });
  };
};

export const getProdsUser = (usr) => {
  //brings the user products to the state
  return async function (dispatch) {
    let prodUser = [];
    let prove = [];
    let categ = [];
    usr
      ? ({ prodUser, prove, categ } = (
          await axios.get(`/prodsuser/${usr}`)
        ).data)
      : null;

    // prodUser
    //   ? prodUser.sort((a, b) => a.prioridad - b.prioridad)
    //   : console.log("sin ordenar");

    sessionStorage.setItem("allProducts", JSON.stringify(prodUser));
    sessionStorage.setItem("providers", JSON.stringify(prove));
    sessionStorage.setItem("categ", JSON.stringify(categ));
    return dispatch({
      type: GET_PRODS_USER,
      payload: { prodUser, prove, categ },
    });
  };
};

export const getAllUsers = () => {
  //brings all the users from the db to the state
  return async function (dispatch) {
    let allUsers = await axios.get("/owners");
    allUsers = allUsers.data;
    return dispatch({
      type: GET_ALL_USERS,
      payload: allUsers,
    });
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

//----------------------PRODUCT ACTIONS-------------------------------
export const getAllProducts = (owner) => {
  //brings all products from db to the state
  return async function (dispatch) {
    let allProds = await axios.get(`/prodsowner/${owner}`);
    allProds = allProds.data;
    //brings all products from db
    const provs = Array.from(new Set(allProds.map((p) => p.providers[0].name)));
    //Creates an array of providers with no repeated values
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: { allProds, provs },
    });
  };
};

export const filterByProvider = (provider) => {
  return {
    type: FILTER_BY_PROVIDER,
    payload: provider,
  };
};

export const filterByCategory = (categ) => {
  return {
    type: FILTER_BY_CATEG,
    payload: categ,
  };
};

export const filterByName = (name) => {
  return {
    type: FILTER_BY_NAME,
    payload: name,
  };
};

export const filterByDisponibility = (id) => {
  return {
    type: FILTER_BY_DISPONIBILITY,
    payload: id
  }
}

export const filterByProperty= (pro) => {
  return {
    type: FILTER_BY_PROPERTY,
    payload: pro
  }
}

export const resetBoard = () => {
  return {
    type: RESET_BOARD,
  };
};
