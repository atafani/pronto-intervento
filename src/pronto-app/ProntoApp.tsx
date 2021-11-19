
import { BrowserRouter } from 'react-router-dom';
import BaseModuleRoutes from '../pronto-base-module/BaseModuleRoutes'
import TestModuleRoutes from '../pronto-test-module/TestModuleRoutes'
const ProntoApp = () => {

  return (
    <BrowserRouter>
     <BaseModuleRoutes />
     <TestModuleRoutes />
    </BrowserRouter>
  );
};

export default ProntoApp;
