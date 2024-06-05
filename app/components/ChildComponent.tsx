import React from "react";
import { poppins } from "../fonts";

type Props = {};

export default function ChildComponent({}: Props) {
  return (
    <div className="border shadow rounded p-4">
      <h2 className={`${poppins.variable} font-poppins text-xl`}>
        Child Component - To display meal from parent component
      </h2>
      <p>
        Load meals info by selecting any of below options and view the meal data
        in child component
      </p>
    </div>
  );
}
