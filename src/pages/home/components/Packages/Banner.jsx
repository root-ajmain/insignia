import Image from "../../../../components/UI/Image";

const Banner = () => {
  return (
    <div className="w-full h-[400px] bg-center shadow-lg relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-3xl card__inner__shadow"></div>
      <Image
        className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl "
        src="https://www.regulusnepal.com/uploads/editors/WWW.jpg"
      />
      {/* <div className="absolute bottom-5 left-5 backdrop-blur-sm py-3 px-6 text-white border border-brand__gray__border rounded-3xl">
        <h4>5 Packages</h4>
        <h4 className="text-brand__font__size__lg font-brand__font__bold">
          Nepal
        </h4>
        <h4>Starts from BDT 20,000</h4>
      </div> */}
    </div>
  );
};

export default Banner;
