import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "../../../../components/UI/Image";
import ViewMoreBtn from "../../../../components/common/ViewMoreBtn";
import { useEffect, useState } from "react";
import axios from "../../../../api/axios";

const PhotoGallery = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get("/photo?isSelected=true");

        setSelectedPhotos(data?.data);
      } catch ({ response }) {
        // console.log(response);
      }
    };

    handleData();
  }, []);

  return (
    <section className="pb-2 bg-photo__gallery__background bg-center bg-cover bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur-sm"></div>
      <div className="max-w-screen-xl mx-auto p-content__padding relative">
        <div className="py-5 lg:py-10 w-full text-white text-center">
          <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight border-b">
            Photos from Travelers
          </h2>
          <h3 className="mt-1">
            Photos which act as a memory and a testimony of traveller’s
            experiences, serving as a way to share their adventures with us.
          </h3>
        </div>

        <div
          id="photo-gallery"
          className="p-4 border rounded-xl shadow-md bg-white"
        >
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div className="columns-1 gap-5 lg:gap-3 md:columns-2 lg:columns-3 xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-3">
              {selectedPhotos?.slice(0, 12).map((item, i) => (
                <PhotoView
                  rotate={() => 350}
                  key={i}
                  src={item?.photo?.cloudinaryUrl}
                >
                  <div className="w-full h-full object-cover object-center block rounded-lg mb-3 cursor-pointer">
                    <Image
                      alt="gallery"
                      className="w-full h-full object-cover object-center block rounded-lg"
                      src={item?.photo?.cloudinaryUrl}
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
        <div className="mt-6 mb-5 w-fit mx-auto">
          <ViewMoreBtn
            route="/gallery"
            className="text-white border hover:bg-secondary hover:text-white hover:border-secondary"
          >
            <span>view more</span>
          </ViewMoreBtn>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
