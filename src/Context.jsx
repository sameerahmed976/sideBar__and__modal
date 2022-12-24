import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const Context = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const openSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBar,
        isModal,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext };
