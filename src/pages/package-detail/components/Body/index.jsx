/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import Overview from "./Overview";
import Location from "./Location";
import Timing from "./Timing";
import InclusionExclusion from "./InclusionExclusion";
import Description from "./Description";
import Options from "./Options";
import Policy from "./Policy";
import { useLocation } from "react-router-dom";
import BookingCard from "./BookingCard";
import useScrollWithOffset from "../../../../hooks/useScrollWithOffset";
import AdditionalInformation from "./AdditionalInformation";

const Body = ({ packageDetail }) => {
  const scrollWithOffset = useScrollWithOffset();
  const { hash } = useLocation();
  const hashLinks = packageDetail
    ? Object?.keys(packageDetail)?.filter((item) => {
        if (
          item === "overview" ||
          item === "description" ||
          item === "location" ||
          item === "timing" ||
          item === "inclusionExclusion" ||
          item === "additionalInformation" ||
          item === "options" ||
          item === "policy"
        ) {
          return item;
        }
      })
    : [];

  return (
    <section>
      <div className="my-5 pb-5 bg-white rounded-md">
        <div className="border-b p-4 flex flex-wrap gap-x-5 font-brand__font__bold sticky top-[80px] md:top-[94px] z-[1] bg-white text-secondary text-brand__font__size__sm lg:text-brand__font__size__base rounded-tl-md rounded-tr-md">
          {hashLinks?.map((item, index) => (
            <HashLink
              smooth
              key={index}
              to={`/package-detail/${packageDetail?.id}#${item}`}
              className={`block relative before:absolute before:-bottom-[0px] md:before:-bottom-[16px] before:left-0 before:right-0 before:border-secondary before:h-full capitalize ${
                hash?.includes("#" + item)
                  ? "before:border-b before:w-full"
                  : "before:w-0 before:hover:border-b before:hover:w-full before:duration-300"
              }`}
              scroll={(el) => scrollWithOffset(el, 135)}
            >
              {item}
            </HashLink>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-x-3">
          <div className="w-full md:basis-[70%] pr-2 lg:pr-0">
            {hashLinks?.includes("overview") && (
              <Overview packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("location") && (
              <Location packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("timing") && (
              <Timing packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("inclusionExclusion") && (
              <InclusionExclusion packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("additionalInformation") && (
              <AdditionalInformation packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("description") && (
              <Description packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("options") && (
              <Options packageDetail={packageDetail} />
            )}
            {hashLinks?.includes("policy") && (
              <Policy packageDetail={packageDetail} />
            )}
          </div>

          {packageDetail?.name && (
            <div className="w-full md:basis-[30%] mt-3 md:pr-3">
              <BookingCard packageDetail={packageDetail} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Body;
