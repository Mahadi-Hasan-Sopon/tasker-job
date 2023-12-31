import { GoogleCircleFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ContentBox from "../../utils/ContentBox";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInWithGoogle, loginWithEmail } = useAuth();
  const navigate = useNavigate();

  // Login With Email
  const onSubmit = async (data) => {
    loginWithEmail(data.email, data.password)
      .then((user) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
          position: "top-end",
          timerProgressBar: true,
        });
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => Swal.fire(error.message));
  };

  // Login With Google

  const handleGoogleLogin = async () => {
    const data = await signInWithGoogle();
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>Login | Tasker</title>
      </Helmet>
      <ContentBox>
        <section className="bg-gray-50 mt-0.5">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
              Tasker
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-lg xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login to your account
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      {...register("password")}
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Login
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    {"Don't"} have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            {/* Social Login */}
            <Divider />
            <div className="w-full sm:max-w-md md:max-w-lg mx-auto">
              <p className="text-lg font-medium border-b border-b-slate-300 pb-1 inline-block">
                Or continue with
              </p>
              <div className="flex items-center justify-center gap-2 py-2">
                <div
                  onClick={handleGoogleLogin}
                  className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 rounded-lg py-2 px-4"
                >
                  <GoogleCircleFilled className="text-4xl text-orange-400" />
                  <p className="text-xl font-medium">Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentBox>
    </div>
  );
};

export default Login;
