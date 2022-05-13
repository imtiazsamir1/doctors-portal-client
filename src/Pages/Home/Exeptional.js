import React from "react";
import treatment from "../../assets/images/treatment.png";

const Exeptional = () => {
  return (
    <div
      class="card lg:card-side bg-base-100 shadow-xl 
    "
    >
      <figure className="m-12">
        <img src={treatment} alt="Album" />
      </figure>
      <div class="card-body mt-32 mb-32 m-5">
        <h2 class="card-title text-4xl ">
          Exeptional Dental Care,on Your Terms
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          minima ducimus perspiciatis sequi corporis excepturi inventore ipsum
          voluptates, atque et ratione quas nobis quisquam beatae ex laborum
          eveniet. Cupiditate, a?
        </p>
        <div class="card-actions justify-start">
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exeptional;
