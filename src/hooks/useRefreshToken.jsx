import axios from "../api/axios";
import useContextData from "./useContextData";
import useCookie from "./useCookie";

const useRefreshToken = () => {
  const { setAuth } = useContextData();
  const { handleGetCookie } = useCookie();
  const token = handleGetCookie();

  const refresh = async () => {
    const {
      data: { data: data },
    } = await axios.post(
      "/auth/refresh/token",
      { token },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );

    setAuth((prev) => {
      return { ...prev, user: data?.user, accessToken: data?.accessToken };
    });

    return data?.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
