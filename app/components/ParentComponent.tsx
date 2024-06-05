"use client";

import React, { useEffect, useState } from "react";
import ChildComponent, { UserType } from "./ChildComponent";
import { poppins } from "../fonts";
import Image from "next/image";

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
  const [userData, setUserData] = useState<UserType>();

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
    <div className="flex flex-col gap-2 border rounded p-4">
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Parent Component - To display github users from child component
      </h2>
      {userData ? (
        <div className="bg-blue-100 dark:bg-blue-600 p-4 rounded-md ">
          <h2
            className={`${poppins.variable} font-poppins text-xl text-center`}
          >
            Github User Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">
            <div className="flex flex-col gap-4">
              <p>
                <span className=" font-semibold">Username :</span>{" "}
                {userData.login}
              </p>
              <p>
                <span className=" font-semibold">Name :</span> {userData.name}
              </p>
              <p>
                <span className=" font-semibold">Bio :</span> {userData.bio}
              </p>
              <a className="" target="_blank" href={userData.html_url}>
                Visit Github
              </a>
            </div>
            <div className="w-full">
              <Image
                src={userData.avatar_url}
                width={350}
                height={350}
                alt="meal image"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="bg-blue-100 dark:bg-blue-600 p-4 rounded-md">
          Loading...
        </p>
      )}
      <p>
        Load meals info by selecting any of below options and view the meal data
        in child component
      </p>
      <div className="flex gap-4 max-sm:flex-col">
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
      <ChildComponent mealData={mealData} setUserData={setUserData} />
    </div>
  );
}
