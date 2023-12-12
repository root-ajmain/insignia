import { useState, useEffect } from "react";
import Image from "../../components/UI/Image";
import Layout from "../../components/common/Layout";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import axios from "../../api/axios";

const GalleryScreen = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get("/photo");

        setSelectedPhotos(data?.data);
      } catch ({ response }) {
        // console.log(response);
      }
    };

    handleData();
  }, []);

  return (
    <Layout title="Gallery">
      <section className="bg-photo__gallery__background2 bg-fixed bg-cover bg-center relative py-10">
        <div className="absolute top-0 left-0 right-0 bottom-0  backdrop-blur-sm"></div>
        <div className="max-w-screen-xl mx-auto p-content__padding relative">
          <div className="py-5 lg:py-10 w-full text-center">
            <h2 className="text-brand__font__size__xl font-brand__font__bold font-brand__font__family__fancy leading-tight">
              Our Gallery
            </h2>
          </div>

          <PhotoProvider
            speed={() => 400}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div className="columns-1 gap-5 lg:gap-3 md:columns-2 lg:columns-3 xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-3">
              {selectedPhotos.map((item, i) => (
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
      </section>
    </Layout>
  );
};

export default GalleryScreen;
