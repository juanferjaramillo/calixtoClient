import {
  GET_AUTH_USER,
  USER_LOGOUT,
  GET_CLIENT,
  SEARCH_CLIENT,
  EXIT_CLIENT,
  // GET_ALL_USERS,
} from "./actions";

const initialState = {
  authUser: JSON.parse(sessionStorage.getItem("AuthUsr")) || {},
  client: {},
};

const uReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);

  switch (action.type) {
    case GET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload[0],
      };

    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };

    case SEARCH_CLIENT:
      return {
        ...state,
        client: action.payload,
      };

    case EXIT_CLIENT:
      return {
        ...state,
        client: action.payload,
      };

    // case GET_ALL_USERS:
    //   return {
    //     ...state,
    //     allUsers: action.payload,
    //   };

    case USER_LOGOUT:
      return {
        ...state,
        authUser: {},
      };

    default:
      return { ...state };
  }
};
export default uReducer;
