const { REDUX_ACTIONS } = require('@reduxActions');

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.LOADING_STATES:
      return {
        ...state,
        [action.forAction]: {
          loading: action.payload,
        },
      };
    default:
      return state;
  }
};
