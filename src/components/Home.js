import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import ArticleList from "./article/ArticleList";
import SidebarLeft from "./sidebar/SidebarLeft";
import SidebarRight from "./sidebar/SidebarRight";

const Home = () => {
  AOS.init(); // Initalize animations

  return (
    <>
      <SidebarLeft />
      <ArticleList />
      <SidebarRight />
    </>
  );
};

export default Home;
