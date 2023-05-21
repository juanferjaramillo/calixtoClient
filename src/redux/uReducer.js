import {
  GET_ALL_USERS
} from "./actions";

const initialState = {
  authUser: {},
  allUsers: {},
};

const uReducer = (state = initialState, action) => {
  //console.log(`action: ${action.type}`);

  switch (action.type) {
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
