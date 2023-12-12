/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Image from "../UI/Image";

const PDCard = ({ data }) => {
  const { id, featuredPicture, locationDetails, regularPrice } = data;
  return (
    <HashLink
      to={`/package-detail/${id}`}
      className={`max-w-[300px] h-[450px] rounded-xl overflow-hidden m-2 relative card__inner__shadow bg-center bg-cover bg-no-repeat cursor-pointer block`}
      style={{ backgroundImage: `url(${featuredPicture?.cloudinaryUrl})` }}
    >
      <div className="max-w-[250px] w-full mx-auto flex justify-between items-center p-1.5 text-white absolute left-0 right-0 bottom-5 backdrop-blur-3xl border border-brand__gray__border rounded-xl">
        <div className="flex flex-col justify-between items-start">
          <div className="flex items-center gap-x-1 mb-1">
            <Image
              className="w-7 h-7 rounded-full"
              src={`https://flagsapi.com/${locationDetails?.countryCode}/flat/64.png`}
              alt="Flag"
            />
            <p className="font-brand__font__family__fancy mt-1.5">
              {locationDetails?.country}
            </p>
          </div>
          <p className="text-brand__font__size__sm font-brand__font__semibold">
            {locationDetails?.area}
          </p>
        </div>
        <div>
          <p className="text-brand__font__size__xs">Start From</p>
          <p className="text-base font-bold text-end">
            $<span>{regularPrice}</span>
          </p>
        </div>
      </div>
    </HashLink>
  );
};

export default PDCard;
