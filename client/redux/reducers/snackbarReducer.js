import { REDUX_ACTIONS } from '@reduxActions';

const initialState = { message: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.OPEN_SNACKBAR:
      return {
        open: true,
        ...action.payload,
      };
    case REDUX_ACTIONS.CLOSE_SNACKBAR:
      return {
        open: false,
        ...initialState,
      };
    default:
      return state;
  }
};
