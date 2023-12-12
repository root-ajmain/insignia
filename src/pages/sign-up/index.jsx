import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HashLink } from "react-router-hash-link";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import useContextData from "../../hooks/useContextData";
import useCustomGoogleLogin from "../../hooks/useCustomGoogleLogin";
import useLogin from "../../hooks/useLogin";
import Spinner from "../../components/common/Spinner";
import useError from "../../hooks/useError";

const SignUpScreen = () => {
  const { auth, setAuth } = useContextData();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [isVisible, setIsVisible] = useState(false);
  const handleGoogleLogin = useCustomGoogleLogin();
  const handleError = useError();
  const { handleLogin, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // auth check
  useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, [auth.user, from, navigate]);

  const onSubmit = async (formData) => {
    await handleLogin(
      formData,
      setAuth,
      navigate,
      from,
      reset,
      "/auth/register"
    );
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      await handleGoogleLogin(code, setAuth, navigate, from);
    },
    flow: "auth-code",
    onError: () => {
      handleError(400, "Something went wrong!");
    },
  });

  return (
    <section className="h-[100vh] flex flex-col items-center justify-center relative bg-sign__up__form__background bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 backdrop-blur"></div>
      <div className="max-w-screen-xl w-full mx-auto p-content__padding md:h-[600px] relative">
        <div className="w-full h-full mx-auto bg-primary rounded-2xl flex flex-col-reverse md:flex-row justify-between border border-brand__gray__border">
          <div className="basis-[40%] w-full h-full flex flex-col justify-center items-center text-white py-5 p-content__padding">
            <div className="lg:max-w-[350px] w-full mx-auto">
              <div className="w-full">
                <Button
                  onClick={googleLogin}
                  className="flex justify-center items-center gap-x-2 bg-white hover:bg-brand__bg__hover p-2 w-full rounded-3xl shadow-lg"
                >
                  <FcGoogle size={28} />
                  <span className="font-brand__font__semibold text-black">
                    Login with Google
                  </span>
                </Button>
                <p className="text-center mt-2">or use your email account</p>
              </div>
              <br />
              <br />
              <div className="relative">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  {/* Name validation */}
                  <div>
                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="First name"
                          name="firstName"
                          className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                          {...register("firstName", {
                            required: true,
                            maxLength: 15,
                            pattern: /^[A-Za-z ]+$/i,
                          })}
                        />
                      </div>
                    </div>
                    <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                      {errors?.firstName?.type && (
                        <AiOutlineWarning size={15} />
                      )}
                      {errors?.firstName?.type === "required" && (
                        <small className="py-0.5">Name is required</small>
                      )}
                      {errors?.firstName?.type === "maxLength" && (
                        <small className="py-0.5">
                          Name cannot exceed 30 characters
                        </small>
                      )}
                      {errors?.firstName?.type === "pattern" && (
                        <small className="py-0.5">
                          Alphabetical characters only
                        </small>
                      )}
                    </div>
                  </div>

                  <br />

                  <div>
                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Last name"
                          name="lastName"
                          className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                          {...register("lastName", {
                            required: true,
                            maxLength: 15,
                            pattern: /^[A-Za-z ]+$/i,
                          })}
                        />
                      </div>
                    </div>
                    <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                      {errors?.lastName?.type && <AiOutlineWarning size={15} />}
                      {errors?.lastName?.type === "required" && (
                        <small className="py-0.5">Name is required</small>
                      )}
                      {errors?.lastName?.type === "maxLength" && (
                        <small className="py-0.5">
                          Name cannot exceed 30 characters
                        </small>
                      )}
                      {errors?.lastName?.type === "pattern" && (
                        <small className="py-0.5">
                          Alphabetical characters only
                        </small>
                      )}
                    </div>
                  </div>

                  <br />

                  {/* Email validation */}
                  <div>
                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                      </div>
                    </div>
                    <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                      {errors?.email?.type && <AiOutlineWarning size={15} />}
                      {errors?.email?.type === "required" && (
                        <small className="py-0.5">Email is required</small>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <small className="py-0.5">Input valid email</small>
                      )}
                    </div>
                  </div>

                  <br />

                  {/* Password validation */}
                  <div>
                    <div className="border-b border-brand__gray__border flex items-center justify-between">
                      <div className="w-full">
                        <input
                          type={isVisible ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          className="w-full bg-primary py-1.5 pr-1 placeholder:text-white outline-none"
                          {...register("password", {
                            required: true,
                            pattern:
                              /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
                          })}
                        />
                      </div>
                      <div className="cursor-pointer">
                        {isVisible ? (
                          <AiOutlineEye
                            onClick={() => setIsVisible(!isVisible)}
                            size={22}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            onClick={() => setIsVisible(!isVisible)}
                            size={22}
                          />
                        )}
                      </div>
                    </div>
                    <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                      {errors?.password?.type && <AiOutlineWarning size={15} />}
                      {errors?.password?.type === "required" && (
                        <small className="py-0.5">Password is required</small>
                      )}
                      {errors?.password?.type === "pattern" && (
                        <small className="py-0.5">
                          <span className="block">At least 8 characters</span>
                          <span className="block">
                            Contains a special character
                          </span>
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    {isLoading ? (
                      <Spinner styles="w-6 h-6 border-white mt-2" />
                    ) : (
                      <Input
                        type="submit"
                        value="Sign Up"
                        className="max-w-[150px] w-full mr-auto p-2  text-center bg-white border border-brand__gray__border text-primary font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-transparent hover:text-white duration-300 shadow-lg"
                      />
                    )}
                  </div>
                </form>
                <div className="mt-8 text-center">
                  <span>
                    Already have an Account?{" "}
                    <HashLink className="underline" to="/sign-in">
                      Sign In
                    </HashLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[60%] rounded-2xl bg-sign__up__form__background bg-center bg-cover relative h-full flex flex-col justify-center items-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
            <div className="relative text-white text-brand__font__size__sm md:text-brand__font__size__lg uppercase text-center font-brand__font__family__fancy">
              <p className="py-10">
                “Traveling – it leaves you speechless,
                <br /> then turns you into <br /> a storyteller.”
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 mr-auto w-full md:max-w-[150px]">
          <HashLink
            to="/"
            className="block py-2 px-6 w-full mr-auto p-2 text-center bg-white border border-brand__gray__border text-primary font-brand__font__semibold rounded-md cursor-pointer hover:bg-transparent hover:text-white duration-300 shadow-lg"
          >
            Home
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default SignUpScreen;
