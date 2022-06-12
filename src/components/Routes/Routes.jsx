import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

export const PrivatRoute = ({ Component }) => {
  const navigate = useNavigate();
  const isAuth = useSelector( (state) => state.auth.data?.token );
  return isAuth ? <Component /> : <Navigate to="/admin" />;
};

export const PublicRoute = ({ Component }) => {
  const navigate = useNavigate();
  const isAuth = useSelector( (state) => state.auth.data?.token );
  return isAuth ? <Navigate to="/dashboard" /> : <Component />;
};
