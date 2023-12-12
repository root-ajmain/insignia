/* eslint-disable react/prop-types */
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";
import Banner from "./Banner";
import PackagesSection from "./PackagesSection";

const Packages = ({ packages }) => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto p-content__padding">
        <div className="py-7 md:py-14 w-full text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight pr-3">
            Checkout Our Packages
          </h2>
          <h3 className="mt-2">
            Insignia prefers to make the world alive with tours that covers and
            looks beyond the highlights: revealing hidden gems and offering
            cultural encounters that build into multi-faceted and compelling
            travel experiences.
          </h3>
        </div>

        <div className="rounded-3xl w-full flex flex-col justify-center items-center bg-white shadow-2xl mb-10">
          <div className="w-full">
            <Banner />

            <PackagesSection packages={packages} />
          </div>

          <div className="w-full flex justify-center my-5">
            <ViewMoreBtn
              route="/tour-list"
              className="text-primary border-primary hover:bg-secondary hover:border-secondary hover:text-white"
            >
              <span>view more</span>
            </ViewMoreBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
