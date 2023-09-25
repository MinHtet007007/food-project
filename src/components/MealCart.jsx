import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./MealCart.css";

const MealCart = ({ name, image, id }) => {
  return (
    <div className=" parent relative">
      <img
        src={image}
        className=" image h-[300px] object-cover rounded-lg"
        alt=""
      />
      <Link to={`/detail/${id}`}>
        <p className=" icon h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center absolute top-[40%] left-[40%]">
          <BiSearch className=" text-3xl text-white" />
        </p>
      </Link>
    </div>
  );
};

export default MealCart;
