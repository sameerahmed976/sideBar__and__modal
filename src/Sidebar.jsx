import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { links, social } from "./data/data";

const Sidebar = () => {
  const { isSideBar, closeSideBar } = useGlobalContext();

  return (
    <>
      <section
        className={`${isSideBar ? "sidebar show__sidebar" : "sidebar"}  `}
      >
        <section className="sidebar__header">
          <h1 className="logo">
            <a href="/">Learn New</a>
          </h1>
          <span className="close" onClick={closeSideBar}>
            <FaTimes />
          </span>
        </section>

        <ul className="navbar__links">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>
                  {item.icon} <span className="text">{item.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social__links">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
