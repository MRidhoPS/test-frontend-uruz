import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import Button from '../components/Button';

const NotFoundView = () => {
  const navigate = useNavigate();

  return (
    <AuthCard title="Halaman tidak ditemukan" subtitle="Alamat yang Anda buka tidak tersedia.">
      <Button fullWidth onClick={() => navigate('/', { replace: true })}>
        Kembali ke beranda
      </Button>
    </AuthCard>
  );
};

export default NotFoundView;
