import axios from "axios";

export const GET_AUTH_USER = "GET_AUTH_USER";
export const GET_PRODS_USER = "GET_PRODS_USER";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const FILTER_BY_PROVIDER = "FILTER_BY_PROVIDER";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const RESET_BOARD = "RESET_BOARD";
export const GET_ALL_USERS = "GET_ALL_USERS";

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
    usr ? ({prodUser, prove} = (await axios.get(`/prodsuser/${usr}`)).data) : null;
    sessionStorage.setItem("allProducts", JSON.stringify(prodUser));
    sessionStorage.setItem("providers", JSON.stringify(prove));
    return dispatch ({
      type: GET_PRODS_USER,
      payload: {prodUser, prove}
    })
  }
}

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
