import {
  GET_ALL_USERS, GET_AUTH_USER,
} from "./actions";

const initialState = {
  authUser: {},
  allUsers: {}
};

const uReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);

  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

      case GET_AUTH_USER:
        return {
          ...state,
          authUser: action.payload,
        }

    default:
      return { ...state };
  }
};
export default uReducer;
