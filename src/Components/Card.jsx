import React from "react";

export const Card = ({ id = null, size = null }) => {
  return (
    <div className="bg-amber-300 text-black p-3 m-2 rounded-xl">
      <div key={id}>
        <h1>ID: {id}</h1>
        <p>Size: {size}</p>
      </div>
    </div>
  );
};
