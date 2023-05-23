import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './Featured.css'

const getCurrentDate = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return now.toLocaleDateString(undefined, options);
};

const Featured = () => {
  const currentDate = getCurrentDate();
  return (
    <div className="bg-cover bg-center mb-14 bg-fixed feature-items">
      <div className="text-white p-6">
      <SectionTitle  subHeading={"Check It Out"} heading={"FROM OUR MENU"} />
      </div>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-8 px-16">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 text-white font-bold">
          <p className="text-yellow-700 font-bold mb-2">{currentDate}</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn mx-auto flex text-orange-600 btn-outline border-0 border-b-4 mt-4">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
