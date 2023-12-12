import { RiProfileLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsCardText } from "react-icons/bs";
import Input from "../../components/UI/Input";
import Layout from "../../components/common/Layout";
import { useForm } from "react-hook-form";
import useError from "../../hooks/useError";
import useSuccess from "../../hooks/useSuccess";
import { useState } from "react";
import axios from "../../api/axios";
import Spinner from "../../components/common/Spinner";

const ContactUsScreen = () => {
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
    <Layout title="Contact us">
      <section className="h-full flex flex-col justify-center py-10">
        <div className="max-w-screen-xl w-full mx-auto p-content__padding flex flex-col justify-center items-center">
          <div className="w-full h-[400px] border group relative rounded-tl-md rounded-tr-md">
            <div className="absolute group-hover:bg-opacity-0 duration-300 top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 group-hover:invisible rounded-tl-md rounded-tr-md"></div>
            <iframe
              className="w-full h-full rounded-tl-md rounded-tr-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.041193892314!2d90.39749967600932!3d23.78154738757875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1695626580145!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            />
          </div>

          <div className="bg-white w-full flex flex-col md:flex-row gap-5 justify-between items-center py-10 rounded-bl-md rounded-br-md shadow-md">
            <div className="flex-1">
              <div className="max-w-[500px] mx-auto p-content__padding">
                <div>
                  <h5 className="text-brand__font__size__xl font-brand__font__semibold font-brand__font__family__fancy">
                    MEET US
                  </h5>
                  <p className="text-brand__font__size__sm">
                    A simple but effective use of flat design for the contact us
                    page. There is a short introduction, an address and a
                    contact us form to allow the website to receive message. The
                    map header works great as well as a concept.
                  </p>
                </div>
                <br />
                <div>
                  <h5 className="underline">Location</h5>
                  <h6>Dhaka, Bangladesh</h6>
                  <h6>insigniatourstravels2016@gmail.com</h6>
                  <h6>+880 1793-636525</h6>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full">
              <div className="max-w-[450px] w-full mx-auto px-5 pt-10 pb-2 bg-brand__ash border rounded-md">
                <div className="mb-4">
                  <h3 className="text-brand__font__size__lg leading-tight">
                    Contact form
                  </h3>
                </div>

                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="font-brand__font__semibold text-brand__font__size__sm pb-2">
                      <div className="relative text-gray-600">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm"
                          {...register("name", {
                            required: true,
                          })}
                        />

                        <RiProfileLine
                          className="absolute top-3 right-2"
                          size={20}
                        />
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
                          className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm"
                          {...register("emailOrPhone", {
                            required: true,
                          })}
                        />
                        <TfiEmail
                          className="absolute top-3 right-2"
                          size={18}
                        />
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
                          className="w-full rounded py-3 pl-4 pr-9 border outline-none mb-2 placeholder:text-brand__font__size__sm resize-none"
                          {...register("questionText", {
                            required: true,
                          })}
                        />
                        <BsCardText
                          className="absolute top-3 right-2"
                          size={20}
                        />
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUsScreen;
