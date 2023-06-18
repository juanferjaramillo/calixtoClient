import {
  GET_PRODS_USER,
  GET_ALL_PRODUCTS,
  FILTER_BY_PROVIDER,
  FILTER_BY_NAME,
  RESET_BOARD,
  FILTER_BY_CATEG,
  FILTER_BY_DISPONIBILITY,
  FILTER_BY_PROPERTY,
} from "./actions";

const initialState = {
  allProducts: JSON.parse(sessionStorage.getItem("allProducts")) || [],
  filteredProducts: JSON.parse(sessionStorage.getItem("allProducts")) || [],
  providers: JSON.parse(sessionStorage.getItem("providers")) || [],
  categories: JSON.parse(sessionStorage.getItem("categ")) || [],
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
        categories: action.payload.categ,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload.allProds,
        filteredProducts: action.payload.allProds,
      };

    case FILTER_BY_PROVIDER:
      let prodsProvider = [];
      prodsProvider = state.filteredProducts.filter(
        (prod) => prod.provider.name === action.payload
      );
      return {
        ...state,
        filteredProducts: prodsProvider,
      };

    case FILTER_BY_CATEG:
      let prodsCateg = [];
      prodsCateg = state.filteredProducts.filter(
        (prod) => prod.category.name === action.payload
      );
      return {
        ...state,
        filteredProducts: prodsCateg,
      };

    case FILTER_BY_NAME:
      //let prodsName = [];
      const prodsName = state.filteredProducts.filter((p) =>
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

    case FILTER_BY_DISPONIBILITY:
      return {
        ...state,
        filteredProducts: state.filteredProducts.filter(
          (p) => p.stateId === action.payload
        ),
      };

    case FILTER_BY_PROPERTY:
      return {
        ...state,
        filteredProducts: state.filteredProducts.filter((p) => {
          const ic = p.icons.map((i) => i.id);
          return ic.includes(Number(action.payload));
        }),
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
