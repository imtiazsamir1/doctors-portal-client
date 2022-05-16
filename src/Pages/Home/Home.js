import React from "react";
import Banner from "./Banner";

import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testymonials from "./Testymonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      {/* <Exeptional></Exeptional> */}
      <MakeAppointment></MakeAppointment>
      <Testymonials></Testymonials>
    </div>
  );
};

export default Home;
