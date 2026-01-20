import { createBrowserRouter } from 'react-router';
import { RouterProvider as Provider } from 'react-router/dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import { PAGE_PATHS } from '../shared/config/paths';

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
      path: PAGE_PATHS.HOME,
      Component: Home,
    },
    {
      path: PAGE_PATHS.LOGIN,
      Component: Login,
    },
  ]);
  return <Provider router={router} />;
}
