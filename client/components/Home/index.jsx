import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import DetailCard from '@components/DetailCard';
import Header from '@components/Header';
import UserSuggestion from '@components/UserSuggestion';
import { TwoColumnLayout } from '@layouts/TwoColumnLayout';
import { REDUX_ACTIONS } from '@reduxActions';
import React from 'react';
import Loader from '@components/Loader';

const Home = () => {
  const loggedInUserData = useSelector((state) => state.loggedInUserData);

  const isBaseLoading = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.SIGN_IN_USER]?.loading,
  );

  return (
    <React.Fragment>
      {isBaseLoading && <Loader />}
      <TwoColumnLayout
        header={<Header />}
        leftContent={
          <Box mt={4} ml={4}>
            <DetailCard {...loggedInUserData} />
          </Box>
        }
        rightContent={
          <Box mt={4} mr={4}>
            <UserSuggestion />
          </Box>
        }
      />
    </React.Fragment>
  );
};

export default Home;
