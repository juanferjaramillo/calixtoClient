import axios from 'axios';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ONE_PRODUCT = 'GET_ALL_PRODUCTS';
export const DISABLE_PRODUCT = 'GET_ALL_PRODUCTS';
export const ENABLE_PRODUCT = 'GET_ALL_PRODUCTS';
export const CREATE_PRODUCT = 'GET_ALL_PRODUCTS';
export const FILTER_BY_PROVIDER = 'FILTER_BY_PROVIDER';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const getAllProducts = () => {
  //brings all products to the state
  return async function (dispatch) {
    let allProds = await axios.get("/product")
    allProds = allProds.data;
    //brings all products from db
    console.log("actions: allProds");
    console.log(allProds);

      return dispatch ({
        type: GET_ALL_PRODUCTS,
        payload: allProds,
      });
  }
};

export const filterByProvider = (provider) => {
  return {
    type: FILTER_BY_PROVIDER,
    payload: provider,
  }
}

export const filterByName = (name) => {
console.log(name);
  return {
    type: FILTER_BY_NAME,
    payload: name,
  }
}

export const getOneProduct = (id) => {}

export const disableProduct = (id) => {}

export const enableProduct = (id) => {}

export const createProduct = (id) => {}