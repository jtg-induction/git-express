import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import { TwoColumnLayout } from '@layouts/TwoColumnLayout';
import GirlFlyingPaper from '@images/girl_flying_paper.svg';
import Header from '@components/Header';
import { LoginForm } from '@components/LoginForm/LoginForm';
import { signInToFetchUserData } from '@redux/thunkActionCreators';
import routes from '@constants/routes';
import { REDUX_ACTIONS } from '@reduxActions';
import { storeUserInStorage } from '@utils';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSigningIn = useSelector(
    (state) => state.loadings[REDUX_ACTIONS.SIGN_IN_USER]?.loading,
  );

  const handleFormSubmit = async (data) => {
    const response = await dispatch(
      signInToFetchUserData(data.username, data.password),
    );

    if (response.status === 200) {
      storeUserInStorage(data.username, data.password);
      navigate(routes.HOME);
    }
  };

  return (
    <TwoColumnLayout
      header={<Header />}
      leftContent={
        <Box
          height={(theme) => `calc(100vh - ${theme.typography.pxToRem(108)})`}
          maxHeight={800}
        >
          <SVG src={GirlFlyingPaper} />
        </Box>
      }
      rightContent={
        <LoginForm isLoading={isSigningIn} onSubmit={handleFormSubmit} />
      }
    />
  );
};

export default Login;
