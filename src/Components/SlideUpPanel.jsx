import React from "react";
import { Warning } from "./Warning";

export const SlideUpPanel = ({
  isOpen = false,
  onCardClick,
  cardData = null,
}) => {
  return (
    <div
      className={`hover:cursor-pointer font-bold absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-amber-500/80 text-white flex items-center justify-center transition-all duration-300 overflow-hidden ${
        isOpen ? "h-full opacity-100" : "h-0 opacity-0"
      }`}
    >
      <div className="text-center w-full max-w-xl mx-auto">
        <p className="text-lg md:text-2xl">
          Do you wish to continue with {cardData.size} Yard Skip?
        </p>
        <p className="text-2xl md:text-4xl mb-4">
          ${cardData.price_before_vat}
        </p>

        <Warning
          allowed_on_road={cardData.allowed_on_road}
          allows_heavy_waste={cardData.allows_heavy_waste}
          panel={true}
        />

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5 w-50 mx-auto">
          <button
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition text-lg"
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering card click
              onCardClick();
            }}
          >
            Back
          </button>
          <button className="bg-amber-300 text-black px-6 py-2 rounded hover:bg-amber-400/80 transition text-lg text-shadow-2xs">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
