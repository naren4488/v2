"use client";
import React from "react";
import { poppins } from "../fonts";
import { MealType } from "./ParentComponent";
import Image from "next/image";

type Props = { mealData: MealType | undefined };

export default function ChildComponent({ mealData }: Props) {
  console.log(mealData);
  return (
    <div className="border shadow rounded p-4 mt-4">
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Child Component - To display meal from parent component
      </h2>
      <p>
        Load github users info by selecting any of below options and view the
        user data in parent component
      </p>
      {mealData ? (
        <div className="bg-orange-100 dark:bg-gray-700 p-4 rounded-md ">
          <h3 className="text-center text-xl font-semibold">
            Meal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="flex flex-col gap-4">
              <p>
                <span className=" font-semibold">Name :</span>{" "}
                {mealData.strMeal}
              </p>
              <p>
                <span className=" font-semibold">Area :</span>{" "}
                {mealData.strArea}
              </p>
              <p>
                <span className=" font-semibold">Category :</span>{" "}
                {mealData.strCategory}
              </p>
              <p>
                <span className=" font-semibold">Instructions :</span>{" "}
                {mealData.strInstructions}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={mealData.strMealThumb}
                width={500}
                height={500}
                alt="meal image"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className=" bg-orange-100 p-4 rounded-md">Loading...</p>
      )}
    </div>
  );
}
