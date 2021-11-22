import { FC } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC = (props: any) => {
  const { children } = props;

  const userisAuthenticated = true; // createHook after redux store

  return userisAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
