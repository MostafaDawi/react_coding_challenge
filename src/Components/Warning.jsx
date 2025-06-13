import React from "react";
import { FaExclamationTriangle, FaWeightHanging } from "react-icons/fa";

export const Warning = ({
  allowed_on_road = null,
  allows_heavy_waste = null,
  panel = false,
}) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {!allowed_on_road && (
        <div
          className={`flex gap-2 px-2 items-center md:text-base ${
            !panel && "bg-amber-400/60 rounded-2xl"
          } text-white`}
        >
          <FaExclamationTriangle />
          <span className="text-sm">Not allowed on roads</span>
        </div>
      )}
      {!allows_heavy_waste && (
        <div
          className={`flex gap-2 px-2 items-center md:text-base ${
            !panel && "bg-red-500/60 rounded-2xl"
          } text-white`}
        >
          <FaWeightHanging />
          <span className="text-sm">Heavy waste not allowed</span>
        </div>
      )}
    </div>
  );
};
