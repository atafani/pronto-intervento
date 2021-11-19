
import { Route,Routes  } from 'react-router-dom';
import TestModulePage from './pages/TestModulepage/TestModulepage';


const BaseModuleRoutes = () => {

  return (
    <Routes>
      <Route path="/testmodule" element={<TestModulePage />} />
      </Routes>
  );

};

export default BaseModuleRoutes;
