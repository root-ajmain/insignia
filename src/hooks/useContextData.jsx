import { useContext } from "react";
import DataContext from "../context/DataProvider";

const useContextData = () => {
  return useContext(DataContext);
};

export default useContextData;
