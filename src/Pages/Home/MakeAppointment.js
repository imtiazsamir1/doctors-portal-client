import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center "
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make An Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, a
          ipsam. Fugit recusandae temporibus ex illo aliquid maiores incidunt
          voluptas eligendi, qui distinctio, at ducimus in fugiat rem blanditiis
          minus harum, voluptates deleniti odio. Beatae, cupiditate? Quidem
          ducimus omnis eaque?
        </p>
        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
