/* eslint-disable react/prop-types */
import Image from "../UI/Image";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdInfo } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const PGCard = ({ data }) => {
  const {
    id,
    name,
    durationText,
    cancelationText,
    regularPrice,
    featuredPicture,
    locationDetails,
  } = data;


  return (
    <div className="w-full h-full md:h-[250px]">
      <div className="flex flex-col md:flex-row justify-between h-full shadow rounded-2xl">
        <div className="basis-[30%] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full card__inner__shadow rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl"></div>
          <Image
            className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl md:rounded-bl-2xl"
            src={featuredPicture?.cloudinaryUrl}
          />
        </div>

        <div className="basis-[50%] flex flex-col justify-between border-t border-b p-5 bg-brand__ash">
          <h3 className="text-brand__font__size__md font-brand__font__bold font-brand__font__family__fancy capitalize leading-tight">
            {name}
          </h3>
          <h3 className="flex items-center font-brand__font__bold capitalize">
            {locationDetails.area}, {locationDetails.country}
          </h3>
          <div className="text-brand__font__size__base flex flex-col mb-2 text-brand__detail__text">
            <p>
              <small className="flex items-center gap-1">
                <span>
                  <BiSolidTimeFive />
                </span>
                <span>{durationText}</span>
              </small>
            </p>
            <p className="leading-tight">
              <small className="">
                <span>
                  <MdInfo className="inline-block mb-0.5 mr-1" />
                </span>
                <span>{cancelationText}</span>
              </small>
            </p>
          </div>
          <HashLink
            className={`block w-fit ml-auto text-center py-2 px-4 rounded bg-[#007186] hover:bg-secondary duration-300 text-white`}
            to={`/package-detail/${id}`}
          >
            Explore
          </HashLink>
        </div>

        <div
          className={`basis-[30%] bg-[#007186] rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl md:rounded-br-2xl text-white flex flex-col items-center justify-center gap-3 py-5`}
        >
          <h6 className="leading-tight">Starting From</h6>
          <h6 className="leading-tight">
            BDT{" "}
            <span className="font-brand__font__bold text-brand__font__size__lg">
              {regularPrice}
            </span>
          </h6>
          <h6 className="leading-tight">Per Person</h6>
        </div>
      </div>
    </div>
  );
};

export default PGCard;
