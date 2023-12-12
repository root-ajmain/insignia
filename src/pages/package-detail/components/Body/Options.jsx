/* eslint-disable react/prop-types */

import { IoIosOptions } from "react-icons/io";

const Options = ({ packageDetail }) => {
  return (
    <div id="options">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
            <IoIosOptions size={20} />
            <span className="text-brand__font__size__md">Options</span>
          </h6>
        </div>
        <div className="pl-10 w-full text-brand__font__size__sm">
          <div
            dangerouslySetInnerHTML={{
              __html: packageDetail.options,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Options;
