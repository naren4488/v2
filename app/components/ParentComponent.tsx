"use client";

import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import { poppins } from "../fonts";

type Props = {};

export type MealType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
};

const mealsArr = [
  "Nanaimo Bars",
  "Breakfast Potatoes",
  "Poutine",
  "Pate Chinois",
];

export default function ParentComponent({}: Props) {
  const [currentMeal, setCurrentMeal] = useState(mealsArr[0]);
  const [mealData, setMealData] = useState<MealType>();

  const getMealInfo = async (mealName: String): Promise<MealType> => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
      {
        cache: "force-cache",
      }
    );
    const jsonData = await res.json();
    const data = jsonData.meals[0];

    const dataOjb = {
      idMeal: data.idMeal,
      strMeal: data.strMeal,
      strCategory: data.strCategory,
      strArea: data.strArea,
      strMealThumb: data.strMealThumb,
      strInstructions: data.strInstructions,
    };

    return dataOjb;
  };

  useEffect(() => {
    (async () => {
      const mealData = await getMealInfo(currentMeal);
      setMealData(mealData);
    })();
  }, [currentMeal]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Parent Component - To display github users from child component
      </h2>
      <div className="">user card</div>
      <p>
        Load meals info by selecting any of below options and view the meal data
        in child component
      </p>
      <div className="flex gap-5 max-sm:flex-col">
        {mealsArr.map((meal, idx) => (
          <button
            className={`border rounded  p-1   ${
              meal === currentMeal && "bg-orange-300 dark:bg-orange-600 "
            }`}
            key={idx}
            onClick={() => setCurrentMeal(meal)}
          >
            {meal}
          </button>
        ))}
      </div>
      <ChildComponent mealData={mealData} />
    </div>
  );
}
