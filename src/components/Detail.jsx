import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    // console.log(meals[0]);
  };
  return (
    <div className=" flex gap-10 w-[80%] mx-auto mt-5">
      <img
        className=" h-[500px] rounded object-cover"
        src={meals.strMealThumb}
        alt=""
      />
      <div className="">
        <h2 className=" text-2xl font-semibold text-gray-500 tracking-wide mb-5">
          {meals.strMeal}
        </h2>
        <h2 className=" text-lg font-semibold text-gray-500 tracking-wide mb-5">
          {meals.strArea}
        </h2>
        <h2 className=" text-base font-semibold text-gray-500 tracking-wide">
          {meals.strCategory}
        </h2>
        <p className=" text-gray-600 tracking-wide leading-8 mb-3">
          {meals.strInstructions}
        </p>
        <a href={meals.strYoutube} target="_blank">
          <BsYoutube className=" text-4xl text-red-500" />
        </a>
      </div>
    </div>
  );
};

export default Detail;
