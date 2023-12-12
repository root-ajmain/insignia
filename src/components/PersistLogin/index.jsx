import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import Loader from "../common/Loader";
import useContextData from "../../hooks/useContextData";

const PersistLogin = () => {
  const { auth } = useContextData();
  const refresh = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // isMounted is using for no memory leak
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, [auth?.accessToken, refresh]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
