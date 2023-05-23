import React from "react";
import service from '../../../assets/home/chef-service.jpg';

const Service = () => {
  return (
    <div className="relative mb-14">
      <img src={service} alt="" className="w-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-1/2 mx-auto p-6 bg-white bg-opacity-75">
        <h2 className="font-bold  flex justify-center text-2xl sm:text-3xl mb-4">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum 
        </p>
      </div>
    </div>
  );
};

export default Service;
