import { useNavigate } from 'react-router-dom';
import { sessionService } from '../services/sessionService';

export default function useDashboardPresenter() {
  const navigate = useNavigate();
  const session = sessionService.get();

  const handleLogout = () => {
    sessionService.clear();
    navigate('/login', { replace: true });
  };

  return { session, handleLogout };
}
