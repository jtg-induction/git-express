import { Navigate } from 'react-router-dom';
import routes from '@constants/routes';
import { isUserAuthenticated } from 'utils';

const RouteGuard = ({ children, path, isPrivate }) => {
  const isAuthenticated = isUserAuthenticated();

  /** Routing - Private routes are redirected to login page if not authenticated */
  if (!isAuthenticated && isPrivate) {
    return <Navigate to={routes.LOGIN} replace />;
  }

  /** Routing - Login page is not accessible if user is authenticated */
  if (isAuthenticated && path === routes.LOGIN) {
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};

export default RouteGuard;
