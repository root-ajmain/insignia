import { navItems } from "../../constants/navigation";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const PcNavigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`border hidden lg:block shadow-md rounded-full backdrop-filter backdrop-blur-lg font-brand__font__semibold ${
        isHomePage
          ? "text-white border-brand__gray__border"
          : "text-primary border-primary"
      }`}
    >
      <div className="flex items-center px-1 py-0.5 duration-300">
        {navItems.map(({ title, route }) => (
          <li
            className={`group flex items-center rounded-full duration-300 relative ${
              isHomePage
                ? "hover:bg-bg__gray"
                : "hover:bg-primary hover:text-white"
            }`}
            key={title}
          >
            <HashLink
              className="rounded-full mx-1 capitalize py-3 xl:py-3 px-4 text-brand__font__size__sm flex items-center"
              to={route}
            >
              {title}
            </HashLink>
            {title.includes("packages") && (
              <>
                <BiChevronDown className="absolute right-0.5" size={18} />
                <Dropdown />
              </>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default PcNavigation;
