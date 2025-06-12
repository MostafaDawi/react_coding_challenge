import React from "react";

export const ErrorAlert = ({ errorMessage = null }) => {
  return (
    <div className="absolute left-0 top-0 w-64 text-center p-3 text-red-500 rounded-2xl border bg-neutral-700/80">
      <h1>{`${errorMessage}`}</h1>
    </div>
  );
};
