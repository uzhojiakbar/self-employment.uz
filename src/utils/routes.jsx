import { Navigate } from "react-router-dom";
import NotAuth from "../components/navigate/notAuth";
import { FaHome } from "react-icons/fa";
import { LoginOutlined } from "@ant-design/icons";
import Login from "../pages/login/login";
import UserAuth from "../components/navigate/UserAuth";

export const routes = [
  {
    id: 1,
    name: "Bosh sahifa",
    route: "/",
    element: (
      <NotAuth>
        <Navigate to={"/home"} />
      </NotAuth>
    ),
    icon: <FaHome />,
    NotAuth: true,
    onlyAdmins: false,
    visible: false,
    parent: true,
  },
  {
    id: 6,
    name: "Login",
    route: "/login",
    element: (
      <UserAuth>
        <Login />
      </UserAuth>
    ),
    icon: <LoginOutlined />,
    NotAuth: false,
    onlyAdmins: false,
    visible: false,
  },
];
