import { useState } from "react";
import axios from "../api/axios";
import useError from "./useError";
import useSuccess from "./useSuccess";
import useCookie from "./useCookie";

const useLogin = () => {
  const handleError = useError();
  const handleSuccess = useSuccess();
  const { handleSetCookie } = useCookie();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (
    formData,
    setAuth,
    navigate,
    from,
    reset,
    route
  ) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(route, formData, {
        headers: { "Content-Type": "application/json" },
      });

      const responseData = data.data;
      handleSetCookie(responseData.refreshToken);
      delete responseData.refreshToken;
      reset();
      setAuth(responseData);
      handleSuccess(data.message);
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch ({ response }) {
      const {
        data: { errorMessages },
      } = response;
      setIsLoading(false);
      handleError(response.status, errorMessages[0].message);
    }
  };

  return { handleLogin, isLoading };
};

export default useLogin;
