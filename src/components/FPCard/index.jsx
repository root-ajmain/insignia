/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Button from "../UI/Button";
import Image from "../UI/Image";

const FPCard = ({ pkg }) => {
  const { id, featuredPicture, regularPrice, name, locationDetails } = pkg;

  return (
    <div className="relative shadow-2xl group overflow-hidden">
      <div className="h-[490px] w-full relative ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>

        {/* Image */}
        <Image
          className="w-full h-full object-cover"
          src={featuredPicture?.cloudinaryUrl}
          alt=""
        />
      </div>
      {/* Content */}
      <div className="absolute bottom-2 group-hover:bottom-[500px] group-hover:opacity-0 duration-700 w-full p-2">
        <div>
          <h2 className="text-white text-sm md:text-base lg:text-xl text-center font-brand__font__bold font-brand__font__family__fancy">
            {name}
          </h2>
          <h3 className="text-white text-md text-center font-font__thin">
            {locationDetails.area}, {locationDetails.country}
          </h3>
          <div className="w-[50px] h-0.5 mx-auto bg-white"></div>
        </div>
      </div>
      <div className="absolute -bottom-24 opacity-0 group-hover:bottom-0 group-hover:opacity-100 duration-300 w-full px-2 py-5 text-white backdrop-blur-lg flex flex-col items-center justify-center">
        <p className="my-1">Start From: ${regularPrice}</p>
        <Button className="border  py-1 px-4">
          <HashLink to={`/package-detail/${id}`}>Explore</HashLink>
        </Button>
      </div>
    </div>
  );
};

export default FPCard;
