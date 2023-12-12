/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";
import { dropdownNavItems } from "../../constants/navigation";

const Dropdown = () => {
  return (
    <div className="border absolute before:absolute before:w-full before:h-full before:-top-4 hidden group-hover:block top-10 lg:top-12 left-4 w-[200px] mt-2 -ml-2 bg-white text-black font-semibold rounded-md py-2 shadow-md">
      <div className="bg-white relative z-10">
        {dropdownNavItems.map(({ title, route }) => (
          <HashLink
            key={title}
            to={route}
            className="block px-4 py-2 hover:bg-primary hover:text-white duration-300 capitalize text-sm"
          >
            {title}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
