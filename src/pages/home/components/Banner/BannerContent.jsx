import { Link } from "react-router-dom";
import { bannerSocialIcons } from "../../../../constants/bannerSocialIcons";
import useContextData from "../../../../hooks/useContextData";

const BannerContent = () => {
  const { systemData } = useContextData();

  return (
    <div className="w-full text-brand__white">
      <div className="flex flex-col items-center">
        <div className="max-w-screen-lg text-center">
          <h1 className="text-brand__font__size__xl  lg:text-brand__font__size__xl xl:text-brand__font__size__2xl font-brand__font__bold font-brand__font__family__fancy leading-none ">
            {systemData?.bannerTitle?.bannerText}
          </h1>
          <br />
          <p className="text-brand__font__size__base md:text-brand__font__size__md font-brand__font__light ">
            {systemData?.bannerTitle?.bannerSubText}
          </p>
        </div>

        <div className="text-white mt-5">
          <div className="flex gap-4 w-fit rounded-lg">
            {bannerSocialIcons.map(({ Icon, url }) => (
              <Link
                key={url}
                className="hover:text-secondary duration-300"
                to={url}
              >
                <Icon size={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
