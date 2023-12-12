/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Image from "../UI/Image/index";
import { ImLocation } from "react-icons/im";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdInfo } from "react-icons/md";

const PG2Card = ({ data }) => {
  const {
    featuredPicture,
    name,
    locationDetails,
    regularPrice,
    cancelationText,
    durationText,
    tags,
    id,
  } = data;
  return (
    <div className="flex flex-col md:flex-row justify-between h-full lg:h-[240px] bg-white rounded mb-4 border">
      <div className="flex-1 p-4">
        <Image
          className="w-full h-full object-cover rounded-sm"
          src={featuredPicture?.cloudinaryUrl}
        />
      </div>

      <div className="basis-[70%] flex flex-col md:flex-row gap-5 justify-between text-secondary">
        <div className="text-brand__font__size__sm leading-relaxed p-4 basis-[75%] flex flex-col justify-between">
          <div>
            <h2 className="text-brand__font__size__md font-brand__font__semibold capitalize">
              {name}
            </h2>
            <h3 className="flex items-center gap-x-1 my-1 capitalize leading-tight">
              <ImLocation />{" "}
              <span>
                {locationDetails?.area}, {locationDetails?.country}
              </span>
            </h3>
          </div>

          <div className="my-1">
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
            <div className="flex flex-wrap gap-1 text-brand__font__size__xs text-brand__detail__text">
              {tags.map((item) => (
                <div
                  key={item?._id}
                  className="py-1 px-2 bg-[#EBF0F4] rounded"
                >
                  {item?.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right h-full flex flex-col justify-end basis-[35%] text-white rounded bg-pg__card__background bg-cover bg-left bg-no-repeat py-3">
          <div className="flex flex-col justify-center gap-3 items-center h-full">
            <div>
              <small>Starting From</small>
              <p>
                BDT{" "}
                <span className="font-brand__font__bold text-brand__font__size__lg leading-tight">
                  {regularPrice.toLocaleString("en-US")}
                </span>
              </p>
              <small>Per Person</small>
            </div>
            <HashLink
              to={`/package-detail/${id}`}
              className={`block w-fit mx-auto text-center py-1 px-4 rounded bg-white text-primary font-brand__font__semibold`}
            >
              Explore
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PG2Card;
