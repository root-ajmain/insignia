import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "../../../components/UI/Image";
import useContextData from "../../../hooks/useContextData";
import Rating from "react-rating";
import Button from "../../../components/UI/Button";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useError from "../../../hooks/useError";
import useSuccess from "../../../hooks/useSuccess";
import Spinner from "../../../components/common/Spinner";

const Review = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useContextData();
  const [rate, setRate] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleError = useError();
  const handleSuccess = useSuccess();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const post = {
      name: auth?.user?.firstName + " " + auth?.user?.lastName,
      email: auth?.user?.email,
      photoUrl: auth?.user?.photo?.cloudinaryUrl
        ? auth?.user?.photo?.cloudinaryUrl
        : auth?.user?.firstName?.split("")[0],
      details: formData?.details,
      rate: rate,
    };

    try {
      setIsLoading(true);
      const { data } = await axiosPrivate.post("/review/submit-review", post, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setIsLoading(false);
      reset();
      handleSuccess(data.message);
      navigate("/profile/personal-info#info");
    } catch ({ response }) {
      setIsLoading(false);
      const {
        data: { errorMessages },
      } = response;
      if (response.status === 429) {
        handleError(response.status, response.statusText);
      }
      handleError(response.status, errorMessages[0].message);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-brand__font__size__lg font-brand__font__semibold text-primary">
          Rate and review
        </h2>
      </div>
      <div className="h-full w-full py-2">
        <div className="w-fit flex items-center gap-2">
          <Image
            src={auth?.user?.photo?.cloudinaryUrl}
            className="w-12 h-12 rounded-full hidden md:block"
          />
          <div>
            <div className="text-brand__font__size__md font-brand__font__bold">
              <span>{auth?.user?.firstName}</span>{" "}
              <span>{auth?.user?.lastName}</span>
            </div>
            <div className="text-brand__detail__text text-brand__font__size__sm leading-tight">
              <p> Your review will be posted publicly on the web.</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <form onSubmit={handleSubmit(onSubmit)} className="md:ml-14">
            <div>
              <Rating
                className="text-brand__font__size__lg text-brand__orange"
                initialRating={rate}
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar />}
                onChange={(rate) => setRate(rate)}
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-md appearance-none border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-brand__font__size__sm p-4"
                name="details"
                id=""
                cols="30"
                rows="10"
                placeholder="Share details of your own experience about us!"
                {...register("details", {
                  required: true,
                  maxLength: 500,
                })}
              />

              {errors?.details?.type === "required" && (
                <small className="py-0.5 text-brand__dangerous">
                  Say Something!
                </small>
              )}
              {errors?.details?.type === "maxLength" && (
                <small className="py-0.5 text-brand__dangerous">
                  Max 250 characters!
                </small>
              )}
            </div>

            <div className="w-full flex justify-end gap-3 text-brand__font__size__md py-1.5 px-1">
              {isLoading ? (
                <Spinner styles="w-6 h-6 border-primary mr-1" />
              ) : (
                <Button
                  type="submit"
                  className="text-primary border border-primary px-4 rounded-md hover:bg-primary hover:text-white duration-200"
                >
                  Post
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
