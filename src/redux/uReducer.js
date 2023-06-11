import {
  GET_AUTH_USER,
  GET_ALL_USERS, 
  USER_LOGOUT
} from "./actions";

const initialState = {
  authUser: JSON.parse(sessionStorage.getItem("AuthUsr")) || {}
};

const uReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);
  
  switch (action.type) {

  case GET_AUTH_USER:
    return {
      ...state,
      authUser: action.payload[0],
    }
    
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

      case USER_LOGOUT:
        return {
          ...state,
          authUser: {}
        }

    default:
      return { ...state };
  }
};
export default uReducer;
