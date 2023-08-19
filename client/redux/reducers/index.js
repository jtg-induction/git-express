import { combineReducers } from 'redux';
import user from './userReducer';
import snackbar from './snackbarReducer';
import loadings from './loadings';
import { REDUX_ACTIONS } from '@reduxActions';

const appReducer = combineReducers({
  ...user,
  snackbar,
  loadings,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === REDUX_ACTIONS.DESTROY_SESSION) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
