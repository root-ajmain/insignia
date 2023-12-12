import Layout from "../../components/common/Layout";
import Image from "../../components/UI/Image";
import tourImg from "../../assets/images/masking/icon-Tour.ca16ca10.png";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";
import Button from "../../components/UI/Button";

const BookingScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const exitingBooking = JSON.parse(Cookies.get("booking"));

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  // console.log(exitingBooking);

  return (
    <Layout>
      <section className="py-5">
        <div className="max-w-screen-xl mx-auto p-content__padding">
          <div className="flex justify-between gap-4">
            <div className="w-full">
              {/* <div>
                <p className="text-brand__font__size__md font-brand__font__semibold text-primary">
                  Review Your Booking
                </p>

                <div className="rounded-md bg-white px-3 py-5 w-full leading-loose my-4">
                  <p className="text-primary font-brand__font__semibold">
                    {exitingBooking?.name} | {exitingBooking?.journeyDate}
                  </p>
                  <p className="text-brand__font__size__sm text-brand__detail__text">
                    <span>{exitingBooking?.area}</span>
                    {", "}
                    <span>{exitingBooking?.country}</span>
                  </p>
                  <p className="capitalize text-brand__detail__text">
                    Option:{" "}
                    <span className="font-brand__font__semibold">
                      {exitingBooking?.option?.option}
                    </span>
                  </p>
                  <p className="text-brand__detail__text">
                    Travelers X {exitingBooking?.totalPassenger}
                  </p>
                </div>
              </div> */}
              <div>
                <p className="text-brand__font__size__md font-brand__font__semibold text-primary">
                  Enter Traveler Details
                </p>

                <div className="rounded-md bg-white p-3 w-full my-4">
                  <p className="text-brand__detail__text">
                    Passenger: Adult (Primary Contact)
                  </p>

                  <br />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between gap-5">
                      <div className="w-full text-brand__detail__text">
                        <div className="border-b border-brand__gray__border flex items-center justify-between">
                          <div className="w-full">
                            <label htmlFor="first__name">First Name</label>
                            <input
                              id="first__name"
                              type="text"
                              name="first__name"
                              className="w-full p-2 placeholder:text-white outline-none border rounded"
                              {...register("first__name", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="text-brand__dangerous px-1 flex items-center gap-x-1">
                          {errors?.first__name?.type === "required" && (
                            <small className="py-0.5">
                              First name is required
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="w-full text-brand__detail__text">
                        <div className="border-b border-brand__gray__border flex items-center justify-between">
                          <div className="w-full">
                            <label htmlFor="last__name">Last Name</label>
                            <input
                              id="last__name"
                              type="text"
                              name="last__name"
                              className="w-full p-2 placeholder:text-white outline-none border"
                              {...register("last__name", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="text-brand__dangerous px-1 flex items-center gap-x-1">
                          {errors?.last__name?.type === "required" && (
                            <small className="py-0.5">
                              Last name is required
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="flex justify-between gap-5">
                      <div className="w-full text-brand__detail__text">
                        <div className="border-b border-brand__gray__border flex items-center justify-between">
                          <div className="w-full">
                            <label htmlFor="email">Email</label>
                            <input
                              id="email"
                              type="text"
                              name="email"
                              className="w-full p-2 placeholder:text-white outline-none border rounded"
                              {...register("email", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="text-brand__dangerous px-1 flex items-center gap-x-1">
                          {errors?.email?.type === "required" && (
                            <small className="py-0.5">
                              Email is required
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="w-full text-brand__detail__text">
                        <div className="border-b border-brand__gray__border flex items-center justify-between">
                          <div className="w-full">
                            <label htmlFor="mobile">Phone Number</label>
                            <input
                              id="mobile"
                              type="text"
                              name="mobile"
                              className="w-full p-2 placeholder:text-white outline-none border"
                              {...register("mobile", {
                                required: true,
                              })}
                            />
                          </div>
                        </div>
                        <div className="text-brand__dangerous px-1 flex items-center gap-x-1">
                          {errors?.mobile?.type === "required" && (
                            <small className="py-0.5">
                              Phone number is required
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-brand__orange hover:shadow-lg  hover:bg-primary duration-300 text-center p-2 rounded-md text-white font-brand__font__semibold"
                      >
                        Continue
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="max-w-[300px] w-full h-fit bg-white p-3 rounded-md">
              <div className="flex gap-3 border-b pb-4">
                <div className="w-[80px] h-[80px]">
                  <Image
                    className="w-full h-full object-cover rounded-md"
                    src={exitingBooking?.photo}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex gap-x-1">
                    <Image className="w-[20px] h-[20px]" src={tourImg} />{" "}
                    <span>Tour</span>
                  </div>
                  <p className="text-brand__font__size__sm text-primary leading-tight">
                    {exitingBooking?.name}
                  </p>
                  <p className="text-brand__font__size__sm text-brand__detail__text">
                    <span>{exitingBooking?.area}</span>
                    {", "}
                    <span>{exitingBooking?.country}</span>
                  </p>
                </div>
              </div>
              <div className="py-3 border-b">
                <p className="text-primary font-brand__font__semibold">
                  Fare Summary
                </p>

                <div className="flex justify-between text-brand__detail__text">
                  <div>
                    <p className="capitalize">
                      {exitingBooking?.option?.option}
                    </p>
                    <p>Travelers X {exitingBooking?.totalPassenger}</p>
                  </div>
                  <p>
                    BDT{" "}
                    <span className="font-brand__font__semibold">
                      {exitingBooking?.totalPrice.toLocaleString("en-US")}
                    </span>
                  </p>
                </div>
              </div>

              <div className="py-3 flex justify-between">
                <p className="capitalize">Total</p>
                <p className="capitalize">
                  BDT {exitingBooking?.totalPrice.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </Layout>
  );
};

export default BookingScreen;
