import ProtectedRoute from '../components/ProtectedRoute';
import Admin from './Admin';

const AdminRoute = () => (
  <ProtectedRoute>
    <Admin />
  </ProtectedRoute>
);

export default AdminRoute;
