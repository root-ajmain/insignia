/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [systemData, setSystemData] = useState({});
  const [selected, setSelected] = useState({});
  const [currentDiscount, setCurrentDiscount] = useState({});

  const handleChangeCategory = (val) => {
    setSelected({ category: val });
    localStorage.setItem("category", JSON.stringify({ category: val }));
  };

  useEffect(() => {
    const category = JSON.parse(localStorage.getItem("category"));
    setSelected(category);
  }, []);

  return (
    <DataContext.Provider
      value={{
        auth,
        setAuth,
        systemData,
        setSystemData,
        handleChangeCategory,
        selected,
        currentDiscount,
        setCurrentDiscount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
