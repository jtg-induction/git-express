import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SVG from 'react-inlinesvg';
import { useNavigate, useParams } from 'react-router-dom';

import GirlFlyingPaper from '@images/girl_flying_paper.svg';
import Header from '@components/Header';
import { TwoColumnLayout } from '@layouts/TwoColumnLayout';
import DetailCard from '@components/DetailCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '@redux/thunkActionCreators';
import { REDUX_ACTIONS } from '@reduxActions';
import Loader from '@components/Loader';
import { DetailCardSkeleton } from '@components/Skeletons';

export const UserDetail = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const loggedInUserData = useSelector((state) => state.loggedInUserData);
  const isBaseLoading = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.SIGN_IN_USER]?.loading,
  );
  const isUserDetailLoading = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.GET_USER_DETAILS]?.loading,
  );

  useEffect(() => {
    if (loggedInUserData.username) {
      dispatch(fetchUserDetails(username));
    }
  }, [loggedInUserData]);

  return (
    <React.Fragment>
      {isBaseLoading && <Loader />}
      <TwoColumnLayout
        header={<Header />}
        leftContent={
          <Box mt={2} pl={2}>
            <Button
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
            <Box
              height={(theme) =>
                `calc(100vh - ${theme.typography.pxToRem(124)})`
              }
              maxHeight={800}
            >
              <SVG src={GirlFlyingPaper} />
            </Box>
          </Box>
        }
        rightContent={
          <Box mt={5}>
            {isUserDetailLoading ? (
              <DetailCardSkeleton />
            ) : (
              <DetailCard {...userDetails} />
            )}
          </Box>
        }
      />
    </React.Fragment>
  );
};
