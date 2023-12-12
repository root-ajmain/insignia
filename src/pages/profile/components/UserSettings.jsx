import { useState } from "react";
import Button from "../../../components/UI/Button";
import useContextData from "../../../hooks/useContextData";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Spinner from "../../../components/common/Spinner";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useError from "../../../hooks/useError";
import useSuccess from "../../../hooks/useSuccess";

const UserSettings = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { auth } = useContextData();
  const { user } = auth;
  const axiosPrivate = useAxiosPrivate();
  const handleError = useError();
  const handleSuccess = useSuccess();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const { data } = await axiosPrivate.post(
        "/auth/change/password",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      reset();
      setIsLoading(false);
      handleSuccess(data.message);
    } catch ({ response }) {
      const {
        data: { errorMessages },
      } = response;
      setIsLoading(false);
      handleError(response.status, errorMessages[0].message);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-brand__font__size__lg font-brand__font__semibold text-primary mb-2">
          Settings
        </h2>
        <p className="text-brand__font__size__sm text-brand__detail__text">
          Manage your email address, mobile number and password
        </p>
      </div>

      <div className="py-2">
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Email</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{user?.email ? user?.email : "N/A"}</span>
          </div>
        </div>

        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Phone</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>
              {user?.traveler?.emergencyContact
                ? user?.traveler?.emergencyContact
                : "N/A"}
            </span>
          </div>
        </div>

        {isPasswordOpen ? (
          <div className="my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="flex flex-col md:flex-row py-1">
                  <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text flex items-center">
                    <label htmlFor="current-password">Current Password</label>
                  </div>
                  <div className="md:max-w-[300px] w-full font-brand__font__semibold relative">
                    <input
                      type={isCurrentPasswordVisible ? "text" : "password"}
                      id="current-password"
                      name="currentPassword"
                      placeholder="● ● ● ● ● ●"
                      className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      {...register("currentPassword", {
                        required: true,
                      })}
                    />
                    {errors?.currentPassword?.type === "required" && (
                      <small className="py-0.5 text-brand__dangerous">
                        Password is required
                      </small>
                    )}

                    <div className="cursor-pointer bg-white w-fit p-1 absolute right-1 top-1.5">
                      {isCurrentPasswordVisible ? (
                        <AiOutlineEye
                          onClick={() =>
                            setIsCurrentPasswordVisible((prev) => !prev)
                          }
                          size={22}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() =>
                            setIsCurrentPasswordVisible((prev) => !prev)
                          }
                          size={22}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row py-1">
                  <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text flex items-center">
                    <label htmlFor="new-password">New Password</label>
                  </div>
                  <div className="md:max-w-[300px] w-full font-brand__font__semibold relative">
                    <input
                      type={isNewPasswordVisible ? "text" : "password"}
                      id="new-password"
                      name="newPassword"
                      placeholder="● ● ● ● ● ●"
                      className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      {...register("newPassword", {
                        required: true,
                        pattern: /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
                      })}
                    />
                    {errors?.newPassword?.type === "required" && (
                      <small className="py-0.5 text-brand__dangerous">
                        Password is required
                      </small>
                    )}

                    {errors?.newPassword?.type === "pattern" && (
                      <small className="py-0.5 text-brand__dangerous">
                        <span className="block">At least 8 characters</span>
                        <span className="block">
                          Contains a special character
                        </span>
                      </small>
                    )}

                    <div className="cursor-pointer bg-white w-fit p-1 absolute right-1 top-1.5">
                      {isNewPasswordVisible ? (
                        <AiOutlineEye
                          onClick={() =>
                            setIsNewPasswordVisible((prev) => !prev)
                          }
                          size={22}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={() =>
                            setIsNewPasswordVisible((prev) => !prev)
                          }
                          size={22}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[500px] w-full h-[80px] p-2 flex justify-end">
                {isLoading ? (
                  <Spinner styles="w-6 h-6 border-primary mt-2" />
                ) : (
                  <div className="flex items-center justify-end gap-x-2">
                    <Button
                      onClick={() => setIsPasswordOpen((prev) => !prev)}
                      className="border border-primary w-fit h-fit px-4 py-1 rounded-md text-primary"
                    >
                      Close
                    </Button>

                    <input
                      type="submit"
                      value="Save"
                      className="px-4 py-1.5 rounded-md text-white bg-primary hover:bg-secondary duration-200 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="flex py-4">
            <div className="max-w-[170px] md:max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
              <span>Password</span>
            </div>
            <div className="flex-1 font-brand__font__semibold text-primary">
              <Button onClick={() => setIsPasswordOpen((prev) => !prev)}>
                Change Password ?
              </Button>
            </div>
          </div>
        )}
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default UserSettings;
