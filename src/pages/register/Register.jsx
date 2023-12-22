import { Link, useNavigate } from "react-router-dom";
import ContentBox from "../../utils/ContentBox";
import Logo from "../../assets/Logo.svg";
import { Divider } from "antd";
import { GoogleCircleFilled } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import uploadImage from "../../utils/uploadImage";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUserWithEmail, updateUserProfile, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)) {
      Swal.fire("Please Provide valid Email");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(data.password)
    ) {
      Swal.fire(
        "Password must be 6 character long, with at least one uppercase letter and one special character"
      );
      return;
    }
    if (data.password !== data.confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // convert image into formData for fetch method
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      // upload image to imgbb
      const isImage = await uploadImage(formData);
      console.log(isImage?.data);

      // register user with email and password
      const register = await createUserWithEmail(data.email, data.password);
      if (!register.user) {
        return Swal.error("User registration failed, Try again.");
      }

      // get image url
      const profileImage = isImage?.data?.display_url;
      console.log(profileImage);

      // save user to database
      const user = {
        name: data.name,
        email: data.email,
        role: "user",
        image: profileImage,
      };

      const UserResponse = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const userData = await UserResponse.json();
      console.log(userData);

      if (userData.acknowledged && userData.insertedId) {
        Swal.fire({
          icon: "success",
          title: "User Created Successfully.",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire("User Creation Failed, Try again.");
      }

      // update user name & avatar
      await updateUserProfile(register.user, data.name, profileImage).then(
        () => {
          Swal.fire("User Registration Successful.");
          navigate("/dashboard");
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire(error?.message);
    }
  };

  const handleGoogleLogin = async () => {
    await signInWithGoogle()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(error?.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Register | Tasker</title>
      </Helmet>
      <ContentBox>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto">
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
                  Create and account
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  "
                      placeholder="John Doe"
                    />
                  </div>
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
                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      {...register("confirm_password")}
                      id="confirm_password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Upload Profile Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold  file:bg-slate-600 file:text-slate-200 hover:file:bg-slate-700 border rounded-lg"
                      {...register("image")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 ">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Login here
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

export default Register;
