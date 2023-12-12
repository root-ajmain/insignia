import axios from "../api/axios";
import useSuccess from "./useSuccess";
import useError from "./useError";
import useCookie from "./useCookie";

const useCustomGoogleLogin = () => {
  const handleSuccess = useSuccess();
  const handleError = useError();
  const { handleSetCookie } = useCookie();

  const handleGoogleLogin = async (code, setAuth, navigate, from) => {
    try {
      const { data } = await axios.get("/auth/google/login", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${code}`,
        },
      });

      const responseData = data.data;
      handleSetCookie(responseData.refreshToken);
      delete responseData.refreshToken;
      setAuth(responseData);
      handleSuccess(data.message);
      navigate(from, { replace: true });
    } catch ({ response }) {
      const {
        data: { errorMessages },
      } = response;
      handleError(response.status, errorMessages[0].message);
    }
  };

  return handleGoogleLogin;
};

export default useCustomGoogleLogin;
