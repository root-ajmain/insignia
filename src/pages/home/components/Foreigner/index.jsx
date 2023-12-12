/* eslint-disable react/prop-types */

import FPCard from "../../../../components/FPCard";
import UseNavbar from "../../../../hooks/UseNavbar";
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";

const Foreigner = ({ packages }) => {
  const { navbar } = UseNavbar();
  return (
    <section className="relative w-full bg-brand__ash__light">
      <div>
        <div
          className={`text-center absolute duration-300 ${
            navbar ? "-top-10 md:-top-20" : "top-0"
          } left-0 right-0 z-10 bg-white w-fit mx-auto px-10 py-6 rounded-md shadow-xl`}
        >
          <h2 className="text-brand__font__size__md lg:text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy bg-landing__masking__title bg-cover bg-clip-text text-transparent">
            Foreigners for Bangladesh
          </h2>
        </div>

        <div className={`duration-300 ${navbar ? "pt-20 md:pt-28" : "pt-0"}`}>
          <div className="p-content__padding max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {packages
                ?.filter((pg) => pg?.category === "foreigner")
                ?.slice(0, 4)
                ?.map((pkg, index) => (
                  <FPCard key={index} pkg={pkg} />
                ))}
            </div>

            <div className="w-full flex justify-end mt-4">
              <ViewMoreBtn
                route="/tour-list?location=6542b6bdb5bf5a5c26f6aa89"
                className="text-primary border-primary hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <span>view more</span>
              </ViewMoreBtn>
            </div>
          </div>

          <div className="w-full py-10 mt-5 bg-black text-white">
            <div className="p-content__padding max-w-screen-xl mx-auto flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
              <div className="flex-1">
                <h3 className="text-3xl md:leading-relaxed font-brand__font__family__fancy">
                  Discover a Mesmerazing <br />
                  Nature Landscape & <br />
                  Stunning Culture
                </h3>
              </div>

              <div className="basis-2/5 flex flex-col justify-between items-end">
                <p className="text-justify">
                Explore an enthralling natural setting and magnificent culture.
                </p>
                <div>
                  <ViewMoreBtn
                    route="/tour-list"
                    className="bg-black text-white hover:bg-white hover:text-black"
                  >
                    <span>See Our Packages</span>
                  </ViewMoreBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foreigner;
