import {
  GET_ALL_PRODUCTS,
  FILTER_BY_PROVIDER,
  FILTER_BY_NAME,
  RESET_BOARD
} from "./actions";

const initialState = {
  page: 1,
  allProducts: [],
  filteredProducts: [],
};

const reducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);

  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };

    case FILTER_BY_PROVIDER:
      let prodsProvider = [];
      console.log(action.payload);
      action.payload === "TODOS"
        ? (prodsProvider = [...state.allProducts])
        : (prodsProvider = state.allProducts.filter(
            (prod) => prod.providers[0].nombre === action.payload
          ));

      return {
        ...state,
        filteredProducts: prodsProvider,
      };

    case FILTER_BY_NAME:
      let prodsName = [];
      prodsName=
        state.filteredProducts.filter((p) => p.nombre.toLowerCase().includes(action.payload));
        // state.allProducts.filter((p) => p.nombre.toLowerCase().includes(action.payload));
        return {
          ...state,
          filteredProducts: prodsName
        }


      case RESET_BOARD:
        return {
          ...state,
          filteredProducts: [...state.allProducts]
        }

      return {
        ...state,
        filteredProducts: prodsName,
      };

    //     case ORDER_BY_ATTACK:
    //       console.log("ordering by attack");
    //       const arrOBA = [...state.cardsFiltered];
    //       action.payload === "des"
    //         ? arrOBA.sort((a, b) => a.attack - b.attack)
    //         : arrOBA.sort((a, b) => b.attack - a.attack);
    //       return {
    //         ...state,
    //         cardsFiltered: arrOBA,
    //         page: 1,
    //         orderByAttack: action.payload,
    //         orderByName: "none",
    //       };
    //   }

    default:
      return { ...state };
  }
};
export default reducer;
