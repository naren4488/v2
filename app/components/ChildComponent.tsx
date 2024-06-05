"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "../fonts";
import { MealType } from "./ParentComponent";
import Image from "next/image";

type Props = {
  mealData: MealType | undefined;
  setUserData: (user: UserType) => void;
};

export type UserType = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
};

const userArr = ["naren4488", "mojombo", "defunkt", "wycats"];

export default function ChildComponent({ mealData, setUserData }: Props) {
  const [currentUser, setCurrentUser] = useState(userArr[0]);

  const getUserInfo = async (mealName: String): Promise<UserType> => {
    const res = await fetch(`https://api.github.com/users/${mealName}`, {
      cache: "force-cache",
    });
    const data = await res.json();

    const dataOjb = {
      login: data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      name: data.name,
      bio: data.bio,
    };

    return dataOjb;
  };

  useEffect(() => {
    (async () => {
      const userData = await getUserInfo(currentUser);
      setUserData(userData);
    })();
  }, [currentUser]);

  return (
    <div className="border shadow rounded p-4 mt-4 flex flex-col gap-5">
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Child Component - To display meal from parent component
      </h2>

      {mealData ? (
        <div className="bg-orange-100 dark:bg-orange-700 p-4 rounded-md ">
          <h2
            className={`${poppins.variable} font-poppins text-xl text-center`}
          >
            Meal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">
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
                width={350}
                height={350}
                alt="meal image"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className=" bg-orange-100 dark:bg-orange-700 p-4 rounded-md">
          Loading...
        </p>
      )}

      <div>
        <p>
          Load github users info by selecting any of below options and view the
          user data in parent component
        </p>
        <div className="flex gap-4 max-sm:flex-col mt-2">
          {userArr.map((user, idx) => (
            <button
              key={idx}
              className={`border rounded  p-1   ${
                user === currentUser && "bg-blue-300 dark:bg-blue-600 "
              }`}
              onClick={() => setCurrentUser(user)}
            >
              {user}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
