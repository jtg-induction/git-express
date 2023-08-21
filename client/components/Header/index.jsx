import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import GithubLogo from '@images/github_logo.png';
import routes from '@constants/routes';
import UserMenu from '@components/UserMenu';
import { REDUX_ACTIONS } from '@reduxActions';
import SearchAutocomplete from '@components/SearchAutocomplete';
import constants from '@constants/common';
import {
  fetchUserDetails,
  fetchUserSearchResults,
} from '@redux/thunkActionCreators';
import { getStaticUrl } from '@utils';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathMatch = useMatch(routes.USER_DETAIL);

  const loggedInUserData = useSelector((state) => state.loggedInUserData);
  const isUserSearchResultsLoading = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.GET_USER_SEARCH_RESULTS]?.loading,
  );
  const isLoggedIn = Boolean(Object.keys(loggedInUserData).length);
  const dispatch = useDispatch();

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({
      type: REDUX_ACTIONS.DESTROY_SESSION,
    });
    navigate(routes.LOGIN, { replace: true });
  };

  const getSearchAutocompleteData = (data) =>
    data.map((item) => ({
      label: item.username,
      value: item.id,
      extraData: item,
    }));

  const getSearchUsers = async (searchText) => {
    /** Fetch search results only when search text is present */
    if (searchText) {
      const response = await dispatch(
        fetchUserSearchResults({
          searchText,
          count: constants.USER_SEARCH_RESULTS_COUNT,
        }),
      );

      return response.status === 200
        ? getSearchAutocompleteData(response.data)
        : [];
    }

    return [];
  };

  const handleUserSelectFromSearch = async (_e, value) => {
    if (pathMatch && pathMatch.pathname === pathname) {
      dispatch(fetchUserDetails(value.extraData.username));
    }
    navigate(
      getStaticUrl(routes.USER_DETAIL, {
        username: value.extraData.username,
      }),
    );
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 0 }} width={40} height={40}>
          <Link to={routes.HOME}>
            <img src={GithubLogo} alt="git" />
          </Link>
        </Box>
        {isLoggedIn && (
          <Box display="flex" gap={2} alignItems="center">
            <SearchAutocomplete
              placeholder="Search users"
              getResults={getSearchUsers}
              isLoading={isUserSearchResultsLoading}
              onChange={handleUserSelectFromSearch}
            />
            <UserMenu
              avatarSrc={loggedInUserData.avatarUrl}
              items={[
                {
                  label: 'Profile',
                  value: 'profile',
                  onClick: () => {
                    navigate(routes.HOME);
                  },
                },
                {
                  label: 'Logout',
                  value: 'logout',
                  onClick: () => {
                    logoutUser();
                  },
                },
              ]}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
