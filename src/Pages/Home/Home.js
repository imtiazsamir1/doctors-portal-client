import React from "react";
import Banner from "./Banner";
import Exeptional from "./Exeptional";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exeptional></Exeptional>
    </div>
  );
};

export default Home;
