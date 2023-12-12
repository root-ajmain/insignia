/* eslint-disable react/prop-types */
import { BsChevronDoubleRight } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

const ViewMoreBtn = ({ route, className, children }) => {
  return (
    <HashLink
      to={route}
      className={`py-2 px-4 duration-300 rounded-full border font-brand__font__semibold flex gap-x-1 justify-center items-center uppercase text-brand__font__size__sm shadow-md ${className}`}
    >
      {children}
      <BsChevronDoubleRight size={14} />
    </HashLink>
  );
};

export default ViewMoreBtn;
