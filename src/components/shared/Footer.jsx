import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-50">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                  Tasker
                </span>
              </Link>
              <p className="text-lg mt-3 text-slate-500">
                Task management in your fingertips.
              </p>
              <p className="text-lg mt-4 text-slate-500">
                Hotline: +880 1641 819 262
              </p>
              <p className="text-lg text-slate-500">Dhaka, Bangladesh</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Resources
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Follow us
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Mahadi-Hasan-Sopon"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mahadi-hasan-sopon"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Tasker
              </a>
              . All Rights Reserved by <strong>Mahadi Hasan</strong>
            </span>
            <div className="flex mt-4 sm:justify-center gap-3 sm:mt-0">
              {/* Icons */}
              <Link
                to="https://www.facebook.com/D.Eng.Mahadi.Hasan"
                target="_blank"
              >
                <FacebookFilled className="text-blue-500 text-xl" />
              </Link>
              <Link to="https://twitter.com/MahadiSopon" target="_blank">
                <TwitterSquareFilled className="text-blue-400 text-xl" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mahadi-hasan-sopon"
                target="_blank"
              >
                <LinkedinFilled className="text-blue-600 text-xl" />
              </Link>
              <Link to="https://github.com/Mahadi-Hasan-Sopon" target="_blank">
                <GithubFilled className="text-slate-600 text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
