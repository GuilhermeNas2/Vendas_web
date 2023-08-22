import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/loginScreen';

export const routeLogin: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello world!</div>,
  },

  {
    path: '/login',
    element: <LoginScreen />,
  },
];
