import {
  GET_AUTH_USER,
  GET_ALL_USERS, 
} from "./actions";

const initialState = {
  authUser: {}
};

const uReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);
  
  switch (action.type) {

  case GET_AUTH_USER:
    return {
      ...state,
      authUser: action.payload,
    }
    
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return { ...state };
  }
};
export default uReducer;