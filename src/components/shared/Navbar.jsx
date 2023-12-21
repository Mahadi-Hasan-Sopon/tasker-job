import { NavLink } from "react-router-dom";

import {
  DollarOutlined,
  HomeOutlined,
  IdcardOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import ContentBox from "../../utils/ContentBox";

const Navbar = () => {
  return (
    <div className="px-5 py-3 bg-white shadow-md">
      <ContentBox>
        <div className={`flex items-center justify-between w-full`}>
          <div className="logo">
            <h1 className="text-3xl font-bold"> Tasker</h1>
          </div>
          <div className={`flex items-center`}>
            {navlinks.map(({ id, name, path, icon: Icon }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) => (isActive ? "text-blue-500" : "")}
              >
                <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
                  <Icon className="text-xl block -mt-1" />
                  <p className="font-medium text-lg">{name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </ContentBox>
    </div>
  );
};

export default Navbar;

const navlinks = [
  {
    id: 1,
    name: "Home",
    icon: HomeOutlined,
    path: "/",
  },
  {
    id: 2,
    name: "Pricing",
    icon: DollarOutlined,
    path: "/pricing",
  },
  {
    id: 3,
    name: "Contact",
    icon: IdcardOutlined,
    path: "/contact",
  },
  {
    id: 4,
    name: "Sign Up",
    icon: UserAddOutlined,
    path: "/signup",
  },
  {
    id: 5,
    name: "Login",
    icon: LoginOutlined,
    path: "/login",
  },
];
