import { REDUX_ACTIONS } from '@reduxActions';

const userDetails = (state = {}, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.GET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const loggedInUserData = (state = {}, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.SIGN_IN_USER:
      return action.payload;
    default:
      return state;
  }
};

const userSuggestions = (state = [], action) => {
  switch (action.type) {
    case REDUX_ACTIONS.GET_USER_SUGGESTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default { userDetails, loggedInUserData, userSuggestions };
