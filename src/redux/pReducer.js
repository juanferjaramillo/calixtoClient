import {
  GET_PRODS_USER,
  GET_ALL_PRODUCTS,
  FILTER_BY_PROVIDER,
  FILTER_BY_NAME,
  RESET_BOARD,
} from "./actions";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  providers: [],
  categories: [],
  icons: []
};

const pReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);

  switch (action.type) {
    case GET_PRODS_USER:
      return {
        ...state,
        allProducts: action.payload.prodUser,
        filteredProducts: action.payload.prodUser,
        providers: action.payload.prove,
        categories: action.payload.categs,
        icons: action.payload.icons
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload.allProds,
        filteredProducts: action.payload.allProds,
      };

    // case FILTER_BY_PROVIDER:
    //   let prodsProvider = [];
    //   action.payload === "TODOS"
    //     ? (prodsProvider = [...state.allProducts])
    //     : (prodsProvider = state.allProducts.filter(
    //         (prod) => prod.providers[0].name === action.payload
    //       ));
      // return {
      //   ...state,
      //   filteredProducts: prodsProvider,
      // };

    case FILTER_BY_NAME:
      let prodsName = [];
      prodsName = state.filteredProducts.filter((p) =>
        p.nombre.toLowerCase().includes(action.payload)
      );
      // state.allProducts.filter((p) => p.nombre.toLowerCase().includes(action.payload));
      return {
        ...state,
        filteredProducts: prodsName,
      };

    case RESET_BOARD:
      return {
        ...state,
        filteredProducts: [...state.allProducts],
      };

      return {
        ...state,
        filteredProducts: prodsName,
      };

    default:
      return { ...state };
  }
};
export default pReducer;