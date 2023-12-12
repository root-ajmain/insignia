/* eslint-disable react/prop-types */
import PGCard from "../../../../components/PGCard";

const PackagesSection = ({ packages }) => {
  return (
    <div
      id="package-section"
      className="pt-10 max-w-[900px] mx-auto p-content__padding"
    >
      <div className="flex flex-col gap-5">
        {packages
          ?.filter((pg) => pg.isSelected)
          ?.map((item, index) => (
            <PGCard key={item.id} index={index} data={item} />
          ))}
      </div>
    </div>
  );
};

export default PackagesSection;
