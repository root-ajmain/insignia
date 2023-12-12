import { useEffect, useState } from "react";
import axios from "../../../../api/axios";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get("/video?isSelected=true");

        setCurrentVideo(data?.data[0]);
        setVideos(data?.data);
      } catch ({ response }) {
        // console.log(response);
      }
    };

    handleData();
  }, []);

  return videos.length ? (
    <section className="py-10 lg:py-24 border-b-2">
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto p-content__padding flex flex-col md:flex-row gap-2 py-2">
          <div className="w-full h-full ">
            <iframe
              className="rounded-3xl aspect-video w-full h-full"
              src={`${currentVideo?.youtubeUrl}?controls=0&rel=0`}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          <div className="h-full">
            <div>
              <h3 className="text-brand__font__size__lg font-brand__font__semibold px-4">
                Videos
              </h3>
            </div>
            <div className="flex flex-row md:flex-col gap-2 h-full md:max-h-[230px] lg:max-h-[390px] xl:max-h-[515px] overflow-y-auto p-content__padding custom__scrollbar">
              {videos.map((item, index) => {
                return (
                  <div
                    onClick={() => setCurrentVideo(item)}
                    key={index}
                    className="relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:bg-opacity-0 cursor-pointer"
                  >
                    <iframe
                      className="rounded-xl aspect-video w-full h-full"
                      src={`${item?.youtubeUrl}?controls=0&rel=0`}
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-screen-xl mx-auto overflow-x-auto p-content__padding">
        <div className="max-w-screen-lg md:pr-10 overflow-x-auto">
          <h3 className="py-4 text-brand__font__size__lg font-brand__font__semibold">
            Destination
          </h3>
          <div className="flex gap-2">
            {videoGalleryData?.slice(0, 4).map((item, index) => {
              return (
                <div
                  onClick={() => setCurrentVideo(item)}
                  key={index}
                  className="relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black before:bg-opacity-0 cursor-pointer"
                >
                  <iframe
                    className="rounded-xl aspect-video w-full h-full"
                    src={`${item}?controls=0&rel=0`}
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </section>
  ) : (
    <>
      <br />
      <br />
    </>
  );
};

export default VideoGallery;
