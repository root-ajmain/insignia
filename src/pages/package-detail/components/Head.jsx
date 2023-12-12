/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faqCarouselResponsiveForPackageDetail } from "../../../constants/common";
import Image from "../../../components/UI/Image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useState } from "react";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import Button from "../../../components/UI/Button";

const Head = ({ packageDetail }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full h-[435px] flex flex-col md:flex-row gap-1 bg-white mt-10">
      <Carousel
        className="w-full h-[435px] flex-1"
        arrows
        infinite
        autoPlay
        autoPlaySpeed={5000}
        customLeftArrow={
          <Button className="bg-black border border-brand__gray__border text-white left-5 opacity-80 hover:opacity-100 duration-200 rounded-full text-2xl absolute cursor-pointer">
            <BsFillArrowLeftCircleFill />
          </Button>
        }
        customRightArrow={
          <Button className="bg-black border border-brand__gray__border text-white opacity-80 hover:opacity-100 duration-200 rounded-full text-2xl absolute right-5 cursor-pointer">
            <BsFillArrowRightCircleFill />
          </Button>
        }
        responsive={faqCarouselResponsiveForPackageDetail}
      >
        {packageDetail?.pictures?.map((item, index) => (
          <div className="h-full w-full" key={index}>
            <Image
              src={item?.cloudinaryUrl}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Carousel>

      <PhotoProvider
        speed={() => 400}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <div className="flex md:flex-col justify-between gap-3">
          {packageDetail?.pictures?.map((item, index) => (
            <PhotoView rotate={() => 350} key={index} src={item?.cloudinaryUrl}>
              {index < 3 ? (
                <div
                  className="h-[100px] w-[100px] flex-1 md:flex-none cursor-pointer"
                  key={index}
                >
                  <Image
                    src={item?.cloudinaryUrl}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : undefined}
            </PhotoView>
          ))}
          <div
            className="h-[100px] w-[100px] cursor-pointer flex-1"
            onClick={() => setVisible(true)}
          >
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 text-white w-full h-full flex flex-col justify-center items-center">
                +{packageDetail?.pictures?.length - 3}{" "}
                <MdOutlinePhotoLibrary size={18} />
              </div>

              <Image
                src={packageDetail?.pictures[3]?.cloudinaryUrl}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </PhotoProvider>

      <PhotoSlider
        overlay
        speed={() => 400}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
        images={packageDetail?.pictures?.map((item) => ({
          src: item?.cloudinaryUrl,
          key: item?.cloudinaryId,
        }))}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

export default Head;
