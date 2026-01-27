import { createBrowserRouter } from 'react-router';
import { RouterProvider as Provider } from 'react-router/dom';
import ArmyGuide from '@/pages/Customer/ArmyGuide';
import CustomerService from '@/pages/Customer/CustomerService';
import MinorGuide from '@/pages/Customer/MinorGuide';
import ProxyGuide from '@/pages/Customer/ProxyGuide';
import MyPage from '@/pages/MyPage/MyPage';
import Counsel from '@/pages/MyPage/pages/Counsel';
import ProtectedRoute from '@/shared/routes/ProtectedRoute';
import ChatAdminPage from '../pages/Chat/ChatAdminPage';
import ChatConsultPage from '../pages/Chat/ChatConsultPage';
import ChatManualPage from '../pages/Chat/ChatManualPage';
import ChatPage from '../pages/Chat/ChatPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import LoginForm from '../pages/Login/LoginForm';
import Signup from '../pages/Login/Signup';
import Tips from '../pages/MyPage/pages/Tips';
import PersonalityTest from '../pages/PersonalityTest/PersonalityTest';
import Plan from '../pages/Plan/Plan';
import PlanCompare from '../pages/Plan/PlanCompare';
import PlanDetail from '../pages/Plan/PlanDetail';
import Subscribe from '../pages/Subscribe/Subscribe';
import SubscribeDetail from '../pages/Subscribe/SubscribeDetail';
import Summary from '../pages/Summary/SummaryPage';
import { PAGE_PATHS } from '../shared/config/paths';

export default function RouterProvider() {
  const router = createBrowserRouter([
    {
      path: PAGE_PATHS.LOGIN,
      Component: Login,
    },
    {
      path: PAGE_PATHS.LOGIN_FORM,
      Component: LoginForm,
    },
    {
      path: PAGE_PATHS.SIGNUP,
      Component: Signup,
    },
    {
      path: PAGE_PATHS.HOME,
      Component: Home,
    },
    {
      path: PAGE_PATHS.CHAT,
      Component: ChatPage,
    },
    {
      path: PAGE_PATHS.CHAT_MANUAL,
      Component: ChatManualPage,
    },
    {
      path: '/chat/consult',
      Component: ChatConsultPage,
    },
    {
      path: '/chat/admin',
      Component: ChatAdminPage,
    },
    {
      path: PAGE_PATHS.SUMMARY,
      Component: Summary,
    },
    {
      element: <ProtectedRoute />,
      children: [
        { path: '/mypage', Component: MyPage },
        { path: '/counsel', Component: Counsel },
        { path: '/mypage/tips', Component: Tips },
      ],
    },
    {
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
    },
    {
      path: PAGE_PATHS.PLAN,
      Component: Plan,
    },
    {
      path: PAGE_PATHS.PLAN_DETAIL,
      Component: PlanDetail,
    },
    {
      path: PAGE_PATHS.PLAN_COMPARE,
      Component: PlanCompare,
    },
    {
      path: PAGE_PATHS.SUBSCRIBE,
      Component: Subscribe,
    },
    {
      path: PAGE_PATHS.SUBSCRIBE_DETAIL,
      Component: SubscribeDetail,
    },
    {
      path: PAGE_PATHS.PERSONALITY_TEST,
      Component: PersonalityTest,
    },
  ]);
  return <Provider router={router} />;
}
