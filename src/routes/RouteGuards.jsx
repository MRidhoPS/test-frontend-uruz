import { Navigate, Outlet } from 'react-router-dom';
import { sessionService } from '../services/sessionService';

export const ProtectedRoute = () =>
  sessionService.isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;

export const PublicRoute = () =>
  sessionService.isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />;
