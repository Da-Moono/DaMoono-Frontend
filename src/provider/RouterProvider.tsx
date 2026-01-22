import { createBrowserRouter } from 'react-router';
import { RouterProvider as Provider } from 'react-router/dom';
<<<<<<< HEAD
import Admin from '../pages/Admin/Admin';
import ChatManualPage from '../pages/Chat/ChatManualPage';
import ChatPage from '../pages/Chat/ChatPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Summary from '../pages/Summary/SummaryPage';
=======
import ArmyGuide from '@/pages/Customer/ArmyGuide';
import CustomerService from '@/pages/Customer/CustomerService';
import MinorGuide from '@/pages/Customer/MinorGuide';
import ProxyGuide from '@/pages/Customer/ProxyGuide';
import Home from '../pages/Home/Home';
>>>>>>> 3e2f934 (feat : 고객센터 페이지 구현)
import { PAGE_PATHS } from '../shared/config/paths';

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
<<<<<<< HEAD
      path: PAGE_PATHS.LOGIN,
      Component: Login,
    },
    {
=======
>>>>>>> 3e2f934 (feat : 고객센터 페이지 구현)
      path: PAGE_PATHS.HOME,
      Component: Home,
    },
    {
<<<<<<< HEAD
      path: PAGE_PATHS.CHAT,
      Component: ChatPage,
    },
    {
      path: PAGE_PATHS.CHAT_MANUAL,
      Component: ChatManualPage,
    },
    {
      path: PAGE_PATHS.SUMMARY,
      Component: Summary,
    },
    {
      path: PAGE_PATHS.ADMIN,
      Component: Admin,
=======
      path: PAGE_PATHS.CUSTOMER_SERVICE,
      element: <CustomerService />,
    },

    {
      path: PAGE_PATHS.ARMY_GUIDE,
      element: <ArmyGuide />,
    },
    {
      path: PAGE_PATHS.PROXY_GUIDE,
      element: <ProxyGuide />,
    },

    {
      path: PAGE_PATHS.MINOR_GUIDE,
      element: <MinorGuide />,
>>>>>>> 3e2f934 (feat : 고객센터 페이지 구현)
    },
  ]);
  return <Provider router={router} />;
}
