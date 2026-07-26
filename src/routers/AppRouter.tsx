import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import NoPageFound from '../pages/NotFound';
import UserRouter from '../modules/user/UserRouter';
import MessageRouter from '../modules/messages/MessageRouter';
import HomeRouter from '../modules/home/HomeRouter';
import ProfileRouter from '../modules/profile/ProfileRouter';
import useUser from '../hooks/useUser';
import ProtectedRoute from '../auth/ProtectedRoute';

export const AppRouter = () => {

    const { isLoggedIn } = useUser()
    return (
        <Routes >
            <Route path='/' element={<MainLayout />}>

                <Route index element={<HomeRouter />} />

                <Route path='user/*' element={<UserRouter />} />

                <Route path='messages/*' element={<MessageRouter />} />
                <Route path='profile/' element={
                    <ProtectedRoute isAllowed={isLoggedIn} routePath={`/messages`} >
                        <ProfileRouter />
                    </ProtectedRoute>} />

                <Route path="*" element={<NoPageFound />} />
            </Route>

        </Routes >
    );
};


