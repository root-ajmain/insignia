/* eslint-disable react/prop-types */

import { HiOutlineLocationMarker } from "react-icons/hi";

const Location = ({ packageDetail }) => {
  return (
    <div id="location">
      <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4 border-t mt-5">
        <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
          <HiOutlineLocationMarker size={20} />
          <span className="text-brand__font__size__md">Location</span>
        </h6>
      </div>
      <div className="pl-10 w-full text-brand__font__size__sm">
        <div
          dangerouslySetInnerHTML={{
            __html: packageDetail.location,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Location;
