import React from "react";
import ThemeSwitch from "./ThemeSwitch";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="flex items-center justify-between shadow bg-gray-100 dark:bg-gray-900 px-6 py-2">
      <span className="text-3xl font-semibold">REWARDWALE</span>
      <ThemeSwitch />
    </div>
  );
}
