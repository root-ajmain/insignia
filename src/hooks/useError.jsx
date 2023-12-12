import { RxCrossCircled } from "react-icons/rx";
import useContextData from "./useContextData";
import toast from "react-hot-toast";
import useCookie from "./useCookie";

const useError = () => {
  const { setAuth } = useContextData();
  const { handleRemoveCookie } = useCookie();

  const handleError = (
    statusCode = 400,
    errorMessage = "Something went wrong!"
  ) => {
    if (statusCode === 401 || statusCode === 403) {
      handleRemoveCookie();
      setAuth({});
      toast(errorMessage, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    } else {
      toast(errorMessage, {
        icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
      });
    }
  };

  return handleError;
};

export default useError;
