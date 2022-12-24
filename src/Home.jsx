import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openModal, openSideBar } = useGlobalContext();

  return (
    <>
      <section className="container">
        <button className="btn btn--bars" onClick={openSideBar}>
          <FaBars />
        </button>

        <button className="btn--modal" onClick={openModal}>
          show modal
        </button>
      </section>
    </>
  );
};

export default Home;
