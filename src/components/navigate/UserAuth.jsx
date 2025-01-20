import { Navigate } from "react-router-dom";
import { getCookie } from "../../hooks/cookieHook";

const UserAuth = ({ children, toHome = 0 }) => {
  const login = getCookie("login");
  const token = getCookie("access");

  if (login && token) {
    return <Navigate to={`/`} />;
  }

  return children;
};

export default UserAuth;
