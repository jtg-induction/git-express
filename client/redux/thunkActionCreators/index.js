import { REDUX_ACTIONS } from '@reduxActions';
import apiService from '@services/apiService';

export const signInToFetchUserData =
  (username, password) => async (dispatch) => {
    dispatch({
      type: REDUX_ACTIONS.LOADING_STATES,
      forAction: REDUX_ACTIONS.SIGN_IN_USER,
      payload: true,
    });
    const response = await apiService.signInUser(username, password);

    if (response.status === 200) {
      dispatch({
        type: REDUX_ACTIONS.SIGN_IN_USER,
        payload: response.data,
      });
    } else {
      dispatch({
        type: REDUX_ACTIONS.OPEN_SNACKBAR,
        payload: {
          message: response.data.error,
        },
      });
    }

    dispatch({
      type: REDUX_ACTIONS.LOADING_STATES,
      forAction: REDUX_ACTIONS.SIGN_IN_USER,
      payload: false,
    });

    return response;
  };

export const fetchUserDetails = (username) => async (dispatch) => {
  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_DETAILS,
    payload: true,
  });

  const response = await apiService.getUserDetails(username);

  if (response.status === 200) {
    dispatch({
      type: REDUX_ACTIONS.GET_USER_DETAILS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: REDUX_ACTIONS.OPEN_SNACKBAR,
      payload: {
        message: response.data.error,
      },
    });
  }

  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_DETAILS,
    payload: false,
  });

  return response;
};

export const fetchSuggestionsForUser = (count) => async (dispatch) => {
  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_SUGGESTIONS,
    payload: true,
  });
  const response = await apiService.getUserSuggestions(count);

  if (response.status === 200) {
    dispatch({
      type: REDUX_ACTIONS.GET_USER_SUGGESTIONS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: REDUX_ACTIONS.OPEN_SNACKBAR,
      payload: {
        message: response.data.error,
      },
    });
  }

  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_SUGGESTIONS,
    payload: false,
  });

  return response;
};

export const fetchUserSearchResults = (params) => async (dispatch) => {
  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_SEARCH_RESULTS,
    payload: true,
  });
  const response = await apiService.executeUserSearchQuery(params);

  if (response.status === 200) {
    dispatch({
      type: REDUX_ACTIONS.GET_USER_SEARCH_RESULTS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: REDUX_ACTIONS.OPEN_SNACKBAR,
      payload: {
        message: response.data.error,
      },
    });
  }

  dispatch({
    type: REDUX_ACTIONS.LOADING_STATES,
    forAction: REDUX_ACTIONS.GET_USER_SEARCH_RESULTS,
    payload: false,
  });

  return response;
};
