import React, { useEffect, useState } from "react";
import { Warning } from "./Warning";
import { SlideUpPanel } from "./SlideUpPanel";
import { ForbiddenPanel } from "./ForbiddenPanel";

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
      onClick={cardData.forbidden ? "" : onCardClick}
    >
      <div className="overflow-hidden flex flex-col md:flex-row bg-neutral-600/30 text-black border-3 border-transparent hover:border-neutral-300 hover:cursor-pointer transition-all duration-300 font-semibold font-sans w-full mx-auto">
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
        {/* CARD INFORMATION */}
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
          <div className="flex flex-col gap-6 justify-between items-center relative w-full">
            <div className="text-3xl md:text-4xl text-white font-bold">
              ${cardData.price_before_vat}
            </div>
            {/* CONDITIONS */}
            <Warning
              allowed_on_road={cardData.allowed_on_road}
              allows_heavy_waste={cardData.allows_heavy_waste}
            />
          </div>
        </div>
      </div>
      {/* SLIDE-UP PANEL */}
      <SlideUpPanel
        isOpen={isOpen}
        onCardClick={onCardClick}
        cardData={cardData}
      />

      {/* FORBIDDEN PANEL */}
      <ForbiddenPanel forbidden={cardData.forbidden === true} />
    </div>
  );
};
