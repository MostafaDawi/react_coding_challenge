import React from "react";

export const ForbiddenPanel = ({ forbidden = false }) => {
  return (
    <div
      className={`font-bold absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-black/50 text-white flex items-center justify-center transition-all duration-300 overflow-hidden ${
        forbidden ? "h-full opacity-100" : "h-0 opacity-0"
      } cursor-not-allowed`}
    >
      <div className="text-4xl text-center w-full max-w-xl mx-auto">
        Forbidden
      </div>
    </div>
  );
};
