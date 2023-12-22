import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Divider } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import useAuth from "../hooks/useAuth";

const DashboardSidebar = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="dashboard-sidebar flex flex-col gap-4 justify-center list-none h-full  w-full">
      <Link to="/" className="logo flex items-center gap-2 cursor-pointer">
        <img src={Logo} alt="" className="w-10 h-10 block mr-2" />
        <h1 className="hidden md:block text-2xl sm:text-3xl font-bold ">
          Tasker
        </h1>
      </Link>
      <Divider className="my-2" />

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-medium bg-slate-100 text-blue-500 w-full" : ""
          }
          to="/dashboard"
        >
          <div className="flex items-center justify-start gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
            <AppstoreOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Dashboard</p>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-slate-100 text-blue-500"
              : ""
          }
          to="/"
        >
          <div className="flex items-center justify-start gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
            <HomeOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Home</p>
          </div>
        </NavLink>
      </li>
      <div className="flex-grow"></div>

      <div className="logout flex justify-center w-full">
        <button
          onClick={handleLogout}
          type="button"
          className="opacity-100 font-medium text-red-400 w-full border border-red-300 rounded-md"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-5 rounded-md hover:text-white hover:bg-blue-500">
            <PoweroffOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">LogOut</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
