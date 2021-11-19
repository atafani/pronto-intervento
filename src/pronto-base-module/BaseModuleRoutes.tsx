
import { Route,Routes  } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import TestPage from './pages/TestPage/TestPage';
import PrivateRoute from '../pronto-app/private-route';

const BaseModuleRoutes = () => {


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute><TestPage /></PrivateRoute>} />
      </Routes>
  );

};

export default BaseModuleRoutes;
