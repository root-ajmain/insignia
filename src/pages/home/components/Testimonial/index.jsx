import { useEffect, useState } from "react";
import { faqCarouselResponsive } from "../../../../constants/common";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RVCard from "../../../../components/RVCard";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button";
import axios from "../../../../api/axios";

const Testimonial = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get("/review?isSelected=true");

        setSelectedReviews(data?.data);
      } catch ({ response }) {
        // console.log(response);
      }
    };

    handleData();
  }, []);

  return (
    <section className="pt-10 lg:pb-20 my-10">
      <div className="max-w-screen-xl w-full mx-auto p-content__padding bg-testimonial__background bg-center bg-cover">
        <div className="pb-10 px-5 w-full text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight bg-brand__ash__light ms-auto">
            What Travelers says
          </h2>
          <h3 className="text-brand__font__size__md ms-auto bg-brand__ash__light">
          Exploring a new city, hiking through nature, relaxing on a beach, travelers often have a lot to say about their experiences what can be both insightful and inspiring, offering a glimpse into the diverse and enriching world of travel.
          </h3>
        </div>

        <Carousel
          additionalTransfrom={0}
          className="shadow-lg"
          arrows
          infinite
          autoPlay
          autoPlaySpeed={5000}
          customLeftArrow={
            <Button className="bg-black hover:bg-white border border-brand__gray__border text-white hover:text-black opacity-80 hover:opacity-100 duration-300 rounded-full text-4xl absolute left-0 cursor-pointer">
              <BsFillArrowLeftCircleFill />
            </Button>
          }
          customRightArrow={
            <Button className="bg-black hover:bg-white border border-brand__gray__border text-white hover:text-black opacity-80 hover:opacity-100 duration-300 rounded-full text-4xl absolute right-0 cursor-pointer">
              <BsFillArrowRightCircleFill />
            </Button>
          }
          responsive={faqCarouselResponsive}
        >
          {selectedReviews?.map((item, index) => (
            <RVCard key={index} data={item} />
          ))}
        </Carousel>

        <div className="mt-20 h-[180px] bg-ask__qus__background bg-center bg-cover flex rounded-xl w-full shadow-2xl">
          <div className="basis-[0%] md:basis-[40%]"></div>
          <div className="basis-[100%] md:basis-[60%] bg-[#1D1C55] flex flex-col justify-center items-center text-white rounded-xl">
            <div>
              <h4 className="text-brand__font__size__md font-brand__font__semibold">
                Still have a question that needs a
              </h4>
              <h4 className="text-brand__font__size__md font-brand__font__semibold">
                little human touch?
              </h4>
              <Link
                className="block bg-brand__orange w-fit py-1.5 px-3 rounded mt-3"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
