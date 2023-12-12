import useContextData from "../../hooks/useContextData";
import Logo from "./Logo";
import PcNavigation from "./PcNavigation";
import ToggleButton from "./ToggleButton";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { auth, handleChangeCategory, selected } = useContextData();
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // is using for keep header background

  return (
    <header
      className={`w-full h-20 md:h-24 flex justify-between items-center duration-300 font-brand__font_family__regular ${
        isHomePage
          ? "bg-transparent absolute top-0 left-0 right-0 lg:h-28"
          : "bg-white lg:h-24 shadow sticky top-0 z-50"
      }`}
    >
      <div className="max-w-screen-xl mx-auto w-full z-50 text-brand__white p-content__padding">
        <div className="flex justify-between items-center">
          <Logo />
          <PcNavigation />
          <ToggleButton
            user={auth?.user}
            handleChangeCategory={handleChangeCategory}
            selected={selected}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
