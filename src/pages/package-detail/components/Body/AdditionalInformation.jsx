/* eslint-disable react/prop-types */
import { MdPolicy } from "react-icons/md";

const AdditionalInformation = ({ packageDetail }) => {
  return (
    <div id="additionalInformation">
      <div className="mt-5 border-t py-2">
        <div className="w-full sticky top-[175px] md:top-[140px] bg-white p-4">
          <h6 className="flex items-center gap-x-1 text-secondary font-brand__font__bold">
            <MdPolicy size={20} />
            <span className="text-brand__font__size__md">
              Additional Information
            </span>
          </h6>
        </div>
        <div className="pl-10 w-full text-brand__font__size__sm">
          <div className="prose">
            <div
              dangerouslySetInnerHTML={{
                __html: packageDetail.additionalInformation,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
