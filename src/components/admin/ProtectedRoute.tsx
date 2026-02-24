import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
    if (!isLoggedIn) return <Navigate to="/admin/login" replace />;
    return <>{children}</>;
};

export default ProtectedRoute;
