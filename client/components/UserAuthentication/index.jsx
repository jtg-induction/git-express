import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isUserAuthenticated } from '@utils';
import { useEffect } from 'react';
import { signInToFetchUserData } from 'redux/thunkActionCreators';
import routes from '@constants/routes';
import { REDUX_ACTIONS } from '@reduxActions';
import constants from '@constants/index';

const UserAuthentication = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    const isAuthenticated = isUserAuthenticated();

    if (isAuthenticated) {
      const response = await dispatch(
        signInToFetchUserData(
          window.localStorage.getItem(constants.STORAGE_KEYS.USER_NAME),
          window.localStorage.getItem(constants.STORAGE_KEYS.USER_AUTH_TOKEN),
        ),
      );
      if (response.status !== 200) {
        window.localStorage.clear();
        dispatch({
          type: REDUX_ACTIONS.DESTROY_SESSION,
        });
        navigate(routes.LOGIN, { replace: true });
      }
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return children;
};

export default UserAuthentication;
