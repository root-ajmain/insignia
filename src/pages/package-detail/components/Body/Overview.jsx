/* eslint-disable react/prop-types */
import { BsGlobe } from "react-icons/bs";

const Overview = ({ packageDetail }) => {
  return (
    <div id="overview">
      <div className="p-4 w-full sticky top-[175px] md:top-[140px] bg-white">
        <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
          <BsGlobe size={20} />
          <span className="text-brand__font__size__md">Overview</span>
        </h6>
      </div>

      <div className="pl-10 w-full text-brand__font__size__sm">
        <div
          dangerouslySetInnerHTML={{
            __html: packageDetail.overview,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Overview;
