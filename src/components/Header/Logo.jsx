/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Image from "../UI/Image";
import insignia__logo__primary from "../../assets/images/brand/Insignia__logo.png";
import insignia__logo__secondary from "../../assets/images/brand/Insignia__logo (2).png";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <HashLink className="block" to={"/#"}>
      <Image
        src={isHomePage ? insignia__logo__primary : insignia__logo__secondary}
        alt="Insigina__logo"
        className="w-[80px] md:w-[100px] xl:w-[130px]"
      />
    </HashLink>
  );
};

export default Logo;
