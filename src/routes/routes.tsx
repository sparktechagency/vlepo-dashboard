import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/TermsCondition';
import FAQs from '../pages/dashboard/FAQs';
import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Profile from '../pages/dashboard/profile/Profile';
import EventManagements from '../pages/dashboard/EventManagement/EventManagements ';
import Users from '../pages/dashboard/Users';
import PrivateProvider from './PrivateProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateProvider> <App /> </PrivateProvider> ,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'events', element: <EventManagements /> },
            { path: 'users', element: <Users /> },
            { path: 'make-admin', element: <MakeAdmin /> },
            { path: 'terms', element: <TermsCondition /> },
            { path: 'faqs', element: <FAQs /> },
            { path: 'notification', element: <Notification /> },
            { path: 'profile', element: <Profile /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
