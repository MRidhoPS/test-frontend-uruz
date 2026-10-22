import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './RouteGuards';
import LoginView from '../views/LoginView';
import DashboardView from '../views/DashboardView';
import NotFoundView from '../views/NotFoundView';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<LoginView />} />
    </Route>
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<DashboardView />} />
    </Route>
    <Route path="*" element={<NotFoundView />} />
  </Routes>
);

export default AppRouter;
