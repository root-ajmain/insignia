import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import Input from "../../components/UI/Input";
import axios from "../../api/axios";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import useContextData from "../../hooks/useContextData";
import useSuccess from "../../hooks/useSuccess";
import useError from "../../hooks/useError";

const ForgetPasswordScreen = () => {
  const { auth } = useContextData();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSuccess = useSuccess();
  const handleError = useError();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const { data } = await axios.post("/auth/forgot/password", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setIsLoading(false);
      handleSuccess(data.message);
      reset();
      navigate(from, { replace: true });
    } catch ({ response }) {
      setIsLoading(false);
      const {
        data: { errorMessages },
      } = response;
      handleError(response.status, errorMessages[0].message);
    }
  };

  return (
    <Layout title="Forgot password">
      <section className="md:h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-screen-xl w-full flex items-center justify-center mx-auto p-content__padding border h-full py-10">
          <div className="bg-white p-10 max-w-[450px] w-full shadow-lg border-t-4 border-primary rounded-md">
            <div className="w-full">
              <h1 className="text-brand__font__size__lg text-primary font-brand__font__bold">
                Forgot your password?
              </h1>
              <p className="text-brand__font__size__sm max-w-[325px] text-brand__detail__text leading-snug my-3">
                Please enter your email address and we&rsquo;ll send you a link
                to reset your password.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              {/* Email validation */}
              <div>
                <div className="border flex items-center justify-between">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="w-full p-3 outline-none"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </div>
                </div>
                <div className="bg-brand__orange text-white px-1 flex items-center gap-x-1">
                  {errors?.email?.type && <AiOutlineWarning size={14} />}
                  {errors?.email?.type === "required" && (
                    <small className="py-0.5">Email is required</small>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <small className="py-0.5">Input valid email</small>
                  )}
                </div>
              </div>

              <div className="w-full p-2 text-center mt-8 bg-primary border border-brand__gray__border text-white font-brand__font__semibold rounded-3xl cursor-pointer hover:bg-secondary duration-300 shadow-lg flex flex-col items-center justify-center">
                {isLoading ? (
                  <Spinner styles="w-6 h-6 border-white" />
                ) : (
                  <Input
                    type="submit"
                    value="Send Link"
                    className="w-full cursor-pointer"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgetPasswordScreen;
