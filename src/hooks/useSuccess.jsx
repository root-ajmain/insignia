import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const useSuccess = () => {
  const handleSuccess = (message) => {
    toast(message, {
      icon: <TiTick className="text-brand__success" size={25} />,
    });
  };

  return handleSuccess;
};

export default useSuccess;
