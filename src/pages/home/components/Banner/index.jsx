import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";
import Search from "../../../../components/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Banner = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState({});

  const handleNavigate = () => {
    navigate(`/tour-list?location=${location.id}`);
  };

  return (
    <section className="h-[100vh]">
      <div className="h-full relative overflow-hidden">
        <BannerBackground />
      </div>

      <div className="flex flex-col items-center justify-center p-content__padding max-w-screen-xl absolute top-0 bottom-0 left-0 right-0 m-auto">
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <h1 className="text-brand__font__size__lg text-brand__white p-content__padding font-brand__font__family__fancy italic text-center">
            Where to?
          </h1>
          <Search
            setLocation={setLocation}
            handleNavigate={handleNavigate}
            firstDivStyles="max-w-[600px]"
          />
        </div>

        <BannerContent />

        {/* <div className="h-[200px] w-full absolute bottom-10 left-0 right-0 hidden md:flex justify-center md:justify-end p-content__padding">
          <div className="w-[350px] h-[95px] border-b-2   border-brand__gray__border text-white flex justify-end items-end gap-x-6 py-4 px-2">
            <div className="w-fit h-fit text-brand__font__size__lg font-brand__font__bold flex flex-col">
              <span>2.2 M+</span>
              <span className="text-brand__font__size__xs">
                Visit our website and application
              </span>
            </div>
            <div className="w-fit h-fit text-brand__font__size__md font-brand__font__bold flex flex-col">
              <span>100+</span>
              <span className="text-brand__font__size__xs">
                Domesitc and international tourism destinations
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
