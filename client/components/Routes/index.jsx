import { Fragment } from 'react';
import { Route, Routes as RoutesRoot, BrowserRouter } from 'react-router-dom';

import Home from '@components/Home';
import Login from '@components/Login';
import RouteGuard from '@components/RouteGuard';
import { UserDetail } from '../UserDetail';
import routes from '@constants/routes';
import UserAuthentication from '@components/UserAuthentication';

const routeConfig = [
  {
    path: routes.HOME,
    Component: Home,
    isPrivate: true,
    exact: true,
  },
  {
    path: routes.LOGIN,
    Component: Login,
    isPrivate: false,
    exact: true,
  },
  {
    path: routes.USER_DETAIL,
    Component: UserDetail,
    isPrivate: true,
    exact: true,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesRoot>
        {routeConfig.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={
                <UserAuthentication>
                  <RouteGuard {...route}>
                    <route.Component />
                  </RouteGuard>
                </UserAuthentication>
              }
            />
          );
        })}
        <Route path="*" Component={<Fragment />} />
      </RoutesRoot>
    </BrowserRouter>
  );
};

export default Routes;
