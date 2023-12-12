import { useEffect, useState } from "react";
import Image from "../../../../components/UI/Image";
import Button from "../../../../components/UI/Button";
import useContextData from "../../../../hooks/useContextData";

const BannerBackground = () => {
  const { systemData } = useContextData();
  const bannerImages = [
    systemData?.banner1?.cloudinaryUrl,
    systemData?.banner2?.cloudinaryUrl,
    systemData?.banner3?.cloudinaryUrl,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay] = useState(true);
  let timeOut = null;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bannerImages?.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? bannerImages.length - 1 : prev - 1
  //   );
  // };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setInterval(() => {
        nextSlide();
      }, 15000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="h-full">
      {bannerImages?.map((image, index) => {
        return (
          <div
            key={index}
            className={`w-full h-full absolute before:absolute before:top-0 before:w-full before:h-full before:bg-black before:opacity-[0.5] ${
              index == currentSlide ? "animate-zoom__in" : "opacity-0"
            }`}
          >
            <Image className="w-full h-full object-cover" src={image} alt="" />
          </div>
        );
      })}

      <div className="flex gap-x-2 absolute z-10 bottom-10 left-0 right-0 mx-auto w-fit">
        {bannerImages?.map((slide, slideIndex) => (
          <Button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <span
              className={`${
                currentSlide === slideIndex
                  ? "bg-primary border-primary"
                  : "bg-transparent"
              } inline-block w-full md:w-[150px] p-1.5 md:p-0.5 border border-brand__gray__border rounded-xl duration-300`}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BannerBackground;
