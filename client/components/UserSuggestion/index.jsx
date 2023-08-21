import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestionsForUser } from '@redux/thunkActionCreators';
import { Avatar, Box, Chip, Skeleton, Typography } from '@mui/material';
import { REDUX_ACTIONS } from '@reduxActions';
import { useNavigate } from 'react-router-dom';
import routes from '@constants/routes';
import { getStaticUrl } from '@utils';
import constants from '@constants/common';

const UserSuggestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.GET_USER_SUGGESTIONS]?.loading,
  );
  const userSuggestions = useSelector((state) => state.userSuggestions);
  const loggedInUserData = useSelector((state) => state.loggedInUserData);

  useEffect(() => {
    if (!userSuggestions.length && loggedInUserData.username) {
      dispatch(fetchSuggestionsForUser(constants.SUGGESTIONS_FOR_USER_COUNT));
    }
  }, [userSuggestions, loggedInUserData]);

  return (
    <Box>
      <Typography marginBottom={2} variant="h5" fontWeight={600}>
        Suggestions
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {isLoading
          ? new Array(10)
              .fill(1)
              .map((_, index) => (
                <Skeleton
                  key={index.toString()}
                  width={120}
                  height={32}
                  component={Box}
                  borderRadius="16px"
                  animation="wave"
                  variant="rectangular"
                />
              ))
          : userSuggestions.map((user) => (
              <Chip
                key={user.id}
                onClick={() => {
                  navigate(
                    getStaticUrl(routes.USER_DETAIL, {
                      username: user.username,
                    }),
                  );
                }}
                label={
                  <Box display="flex" gap={0.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                      }}
                      src={user.avatarUrl}
                    />
                    <Typography variant="body2">{user.username}</Typography>
                  </Box>
                }
              />
            ))}
      </Box>
    </Box>
  );
};

export default UserSuggestion;
