import { Navigate } from "react-router-dom";
import { getCookie } from "../../hooks/cookieHook";

const NotAuth = ({ children, toHome = 0 }) => {
  const login = getCookie("login");
  const token = getCookie("access");

  if (!login || !token) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default NotAuth;
