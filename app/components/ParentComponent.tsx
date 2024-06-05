"use client";

import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import { poppins } from "../fonts";

type Props = {};

export type MealType = {
  idMeal: String;
  strMeal: String;
  strCategory: String;
  strArea: String;
  strMealThumb: String;
  strInstructions: String;
};

const mealsArr = ["BeaverTails", "Breakfast Potatoes", "Poutine", "Rappie Pie"];

export default function ParentComponent({}: Props) {
  const [currentMeal, setCurrentMeal] = useState(mealsArr[0]);
  const [mealData, setMealData] = useState<MealType>();

  const getMealInfo = async (mealName: String): Promise<MealType> => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Poutine`,
      {
        cache: "no-store",
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
  }, []);

  return (
    <div>
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Parent Component - To display github users from child component
      </h2>
      <p>
        Load meals info by selecting any of below options and view the meal data
        in child component
      </p>
      <ChildComponent />
    </div>
  );
}
