import useContextData from "./useContextData";
import useSuccess from "../hooks/useSuccess";
import useCookie from "./useCookie";

const useLogout = () => {
  const { setAuth } = useContextData();
  const handleSuccess = useSuccess();
  const { handleRemoveCookie } = useCookie();

  const logout = async () => {
    setAuth({});
    handleRemoveCookie();
    handleSuccess("Logout Successful!");
  };

  return logout;
};

export default useLogout;
