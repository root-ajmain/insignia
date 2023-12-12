/* eslint-disable react/prop-types */
import { popularDesignationCarouselResponsive } from "../../../../constants/common";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PDCard from "../../../../components/PDCard";
import Button from "../../../../components/UI/Button";

const PopularDestination = ({ packages }) => {
  return (
    <section className="pt-5 bg-gradient-to-b from-white from-10%  to-brand__ash__light to-90%">
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="md:py-10 w-full mb-4 text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight pr-3">
            Popular Destination
          </h2>
          <h3 className="mt-2">
            Place of interest that tourists visit, often for it’s inherent or
            exhibited natural or cultural value, historical significance,
            offering leisure and recreation for mind.
          </h3>
        </div>

        <Carousel
          arrows
          infinite
          autoPlay
          slidesToSlide={1}
          autoPlaySpeed={5000}
          customLeftArrow={
            <Button className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute cursor-pointer">
              <BsFillArrowLeftCircleFill />
            </Button>
          }
          customRightArrow={
            <Button className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-4xl absolute right-0 cursor-pointer">
              <BsFillArrowRightCircleFill />
            </Button>
          }
          responsive={popularDesignationCarouselResponsive}
        >
          {packages
            ?.filter((pg) => pg.isPopular)
            ?.map((item, index) => (
              <PDCard key={index} data={item} />
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PopularDestination;
