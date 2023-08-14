import { REDUX_ACTIONS } from '@reduxActions';

const userDetails = (state = {}, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.GET_USER_DETAILS:
      return state.data;
    default:
      return state;
  }
};

export default { userDetails };
