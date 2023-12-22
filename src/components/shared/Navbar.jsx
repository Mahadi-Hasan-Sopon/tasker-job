import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import {
  AppstoreOutlined,
  DollarOutlined,
  HomeOutlined,
  IdcardOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import ContentBox from "../../utils/ContentBox";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const Navbar = () => {
  const { user, loading, logOutUser } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logOutUser().then(
      (res) => {
        console.log(res);
        Swal.fire(
          "Logged Out",
          "You have been logged out successfully",
          "success"
        );
        if (location.pathname.includes("/dashboard")) {
          navigate("/");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/ZXScD70/avatar.png";
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
            <HomeOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Home</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/pricing"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
            <DollarOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Pricing</p>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/contact"
        >
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
            <IdcardOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Contact</p>
          </div>
        </NavLink>
      </li>

      {!loading && user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "font-medium bg-base-100 text-blue-500"
                : ""
            }
            to="/dashboard"
          >
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
              <AppstoreOutlined className="text-xl block -mt-1" />
              <p className="font-medium text-lg">Dashboard</p>
            </div>
          </NavLink>
        </li>
      )}

      {loading && (
        <div className="flex flex-col gap-4 w-52">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        </div>
      )}
      {!loading && !user ? (
        <>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium bg-base-100 text-blue-500"
                  : ""
              }
              to="/signup"
            >
              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
                <UserAddOutlined className="text-xl block -mt-1" />
                <p className="font-medium text-lg">Sign Up</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium bg-base-100 text-blue-500"
                  : ""
              }
              to="/login"
            >
              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
                <LoginOutlined className="text-xl block -mt-1" />
                <p className="font-medium text-lg">Login</p>
              </div>
            </NavLink>
          </li>
        </>
      ) : (
        !loading && (
          <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
            <div className="avatar flex flex-col justify-center items-center">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  onError={handleImageError}
                />
              </div>
              <h3 className="text-sm font-semibold mt-2">
                {user?.displayName?.length > 12
                  ? user?.displayName.slice(0, 12) + "..."
                  : user?.displayName}
              </h3>
            </div>
            <button
              onClick={handleLogout}
              type="button"
              className="opacity-100 font-medium py-2.5 min-h-auto h-auto text-red-400"
            >
              <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-md hover:text-white hover:bg-blue-500">
                <PoweroffOutlined className="text-xl block -mt-1" />
                <p className="font-medium text-lg">LogOut</p>
              </div>
            </button>
          </div>
        )
      )}
    </>
  );

  return (
    <div className="py-3 bg-white shadow-md">
      <ContentBox>
        <div className={`flex items-center justify-between w-full`}>
          <Link to="/" className="logo flex items-center gap-2 cursor-pointer">
            <img src={Logo} alt="" className="w-10 h-10 block mr-2" />
            <h1 className="hidden sm:block text-2xl sm:text-3xl font-bold ">
              Tasker
            </h1>
          </Link>
          <div className={`largeNave hidden lg:flex items-center list-none`}>
            {navItems}
          </div>
          <div
            className={`toggleBar lg:hidden cursor-pointer relative max-w-xs w-full flex justify-end`}
          >
            <MenuFoldOutlined
              onClick={() => setOpenMenu(!openMenu)}
              className="text-2xl block transition-all duration-500"
            />
            <div
              className={`mobileNav ${
                openMenu
                  ? "flex absolute top-14 -right-4 z-50 w-full h-screen bg-slate-100 transition-all duration-400 ease-in-out"
                  : "transition-all duration-300 w-full absolute top-14 ease-in-out -right-[calc(100%+10rem)]"
              } list-none flex-col gap-4`}
            >
              {navItems}
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  );
};

export default Navbar;
