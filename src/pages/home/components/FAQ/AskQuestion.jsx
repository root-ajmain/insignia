import Input from "../../../../components/UI/Input";
import { RiProfileLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsCardText } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "../../../../api/axios";
import useError from "../../../../hooks/useError";
import useSuccess from "../../../../hooks/useSuccess";
import Spinner from "../../../../components/common/Spinner";

const AskQuestion = () => {
  const handleError = useError();
  const handleSuccess = useSuccess();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("question/add/question", formData, {
        headers: { "Content-Type": "application/json" },
      });

      reset();
      handleSuccess(data.message);
      setIsLoading(false);
    } catch ({ response }) {
      const {
        data: { errorMessages },
      } = response;
      setIsLoading(false);
      if (response.status === 429) {
        handleError(response.status, response.statusText);
      }
      handleError(response.status, errorMessages[0].message);
    }
  };

  return (
    <div className="lg:max-w-[500px] w-full px-5 py-6 backdrop-blur-md rounded-xl border border-brand__gray__border">
      <div className="mb-4 text-white">
        <h3 className="text-brand__font__size__xl leading-tight">
          Any Question?
        </h3>
        <h3 className="text-brand__font__size__md">
          Don&apos;t worry, we can help.
        </h3>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-brand__font__semibold text-brand__font__size__sm">
            <div className="relative text-gray-600">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm"
                {...register("name", {
                  required: true,
                })}
              />

              <RiProfileLine className="absolute top-3 right-2" size={20} />
              {errors?.name?.type === "required" && (
                <small className="text-brand__dangerous">
                  Name is required
                </small>
              )}
            </div>
            <div className="relative text-gray-600">
              <input
                name="emailOrPhone"
                type="text"
                placeholder="Your phone or email"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm"
                {...register("emailOrPhone", {
                  required: true,
                })}
              />
              <TfiEmail className="absolute top-3 right-2" size={18} />
              {errors?.emailOrPhone?.type === "required" && (
                <small className="text-brand__dangerous">
                  Email or phone required
                </small>
              )}
            </div>

            <div className="relative text-gray-600">
              <textarea
                name="questionText"
                type="text"
                rows="6"
                placeholder="Please write your question"
                className="w-full rounded py-3 pl-4 pr-9 border-0 outline-none mb-2 placeholder:text-brand__font__size__sm resize-none"
                {...register("questionText", {
                  required: true,
                })}
              />
              <BsCardText className="absolute top-3 right-2" size={20} />
              {errors?.questionText?.type === "required" && (
                <small className="text-brand__dangerous">
                  Message required
                </small>
              )}
            </div>

            {isLoading ? (
              <div className="w-full flex justify-center">
                <Spinner styles="w-6 h-6 border-white mx-auto" />
              </div>
            ) : (
              <Input
                type="submit"
                value="Submit"
                className="w-full rounded bg-brand__orange text-white p-2 cursor-pointer hover:bg-primary duration-300 text-brand__font__size__md"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
