import React, { useEffect, useState } from "react";
import {
  FaExclamationTriangle,
  FaWeight,
  FaWeightHanging,
} from "react-icons/fa";

export const Card = ({ data = {}, isOpen = false, onCardClick }) => {
  const [cardData, setCardData] = useState(data);

  useEffect(() => {
    if (data != null) {
      setCardData(data);
    }
  }, [data]);

  return (
    <div
      className="relative group overflow-hidden rounded-md w-full"
      onClick={onCardClick}
    >
      <div className="overflow-hidden flex flex-col md:flex-row bg-neutral-400/80 text-black border-3 border-transparent hover:border-neutral-300 transition-transform duration-300 font-semibold font-sans w-full mx-auto">
        <div className="relative w-full md:w-1/2 h-64 flex items-center justify-center overflow-hidden">
          {
            <img
              src={`${
                cardData.size < 7
                  ? "small.jpg"
                  : cardData.size < 20
                  ? "medium.jpg"
                  : "large.jpg"
              }`}
              alt="image.jpg"
              className="w-full h-full object-cover scale-100"
            />
          }
        </div>
        <div
          className="flex flex-col md:w-1/2 justify-between items-center gap-5 px-4 py-4"
          key={cardData.id}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-white">
              {cardData.size} Yard Skip
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-neutral-200">
              {cardData.hire_period_days} day hire period
            </h2>
          </div>
          <div className="flex flex-col gap-3 justify-between items-center relative w-full">
            <div className="text-3xl md:text-4xl text-white font-bold">
              ${cardData.price_before_vat}
            </div>
            {/* Conditions */}
            <div className="flex flex-col gap-2 mt-2">
              {!cardData.allowed_on_road && (
                <div className="flex gap-2 items-center">
                  <span>
                    <FaExclamationTriangle className="text-red-600" />
                  </span>
                  <span className="text-sm md:text-base">
                    Not allowed on roads
                  </span>
                </div>
              )}
              {!cardData.allows_heavy_waste && (
                <div className="flex gap-2 items-center">
                  <span>
                    <FaWeightHanging />
                  </span>
                  <span className="text-sm md:text-base">
                    Heavy waste not allowed
                  </span>
                </div>
              )}
            </div>
          </div>
          {cardData.forbidden && <p className="text-red-700">Forbidden</p>}
        </div>
      </div>
      {/* Slide-up panel */}
      <div
        className={`font-bold absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-amber-500/40 text-white flex items-center justify-center transition-all duration-300 overflow-hidden ${
          isOpen ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="text-center w-full max-w-xl mx-auto">
          <p className="text-lg md:text-2xl">
            Do you wish to continue with {cardData.size} Yard Skip?
          </p>
          <p className="text-2xl md:text-4xl">${cardData.price_before_vat}</p>

          <div className="flex flex-col gap-2 items-center justify-center mt-3">
            {!cardData.allowed_on_road && (
              <div className="flex gap-2 items-center text-sm md:text-base">
                <FaExclamationTriangle className="text-red-600" />
                <span>Not allowed on roads</span>
              </div>
            )}
            {!cardData.allows_heavy_waste && (
              <div className="flex gap-2 items-center text-sm md:text-base">
                <FaWeightHanging />
                <span>Heavy waste not allowed</span>
              </div>
            )}
          </div>

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
            <button className="bg-amber-300 text-black px-6 py-2 rounded hover:bg-amber-600 transition text-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
