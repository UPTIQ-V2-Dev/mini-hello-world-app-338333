import { Routes, Route, Navigate } from 'react-router-dom';
import { HelloWorldPage } from './pages/HelloWorldPage';
import { LoginPage } from './pages/LoginPage';
import { isAuthenticated } from './lib/api';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    return !isAuthenticated() ? children : <Navigate to="/" replace />;
};

export const App = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <HelloWorldPage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
