import React from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="container">
        <button className="btn btn--bars">
          <FaBars />
        </button>

        <button className="btn--modal">show modal</button>
      </section>
    </>
  );
};

export default Home;
