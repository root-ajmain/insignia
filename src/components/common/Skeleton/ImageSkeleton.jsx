const ImageSkeleton = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden space-y-5 bg-gradient-to-r from-transparent via-gray-600 to-transparent shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:border-t before:border-gray-900 before:bg-gradient-to-r before:from-transparent before:via-gray-900 before:to-transparent h-full">
      <div className="h-[435px] rounded-lg bg-gray-600"></div>
      {/* <div className="space-y-3">
                    <div className="h-3 rounded-lg bg-gray-600"></div>
                    <div className="h-3 rounded-lg bg-gray-600"></div>
                    <div className="h-3 rounded-lg bg-gray-600"></div>
                  </div> */}
    </div>
  );
};

export default ImageSkeleton;
