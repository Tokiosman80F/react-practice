import React, { useEffect, useState } from "react";

export default function PracticeColorGenerator() {
  /*
        TO DO's 
        1. state : colorType 
        2. state : color
        3. function: handleRgb 
        4. function: handleHex
        5. Utitlies function : randomNumber

        UI 
        1. 3 btn : rgb , hex , random
        2. display color 
    
    */
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  function handleGenerateHex() {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    setColor(hexColor);
  }
  function handleGenerateRga() {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colorType === "hex") handleGenerateHex();
    else handleGenerateRga();
  }, [colorType]);

  return (
    <div
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* btn  */}
      <div className="flex    items-center justify-center gap-3  text-white">
        <button
          onClick={() => setColorType("hex")}
          className="border border-white px-5 cursor-pointer rounded-2xl"
        >
          HEX
        </button>
        <button
          onClick={() => setColorType("rgb")}
          className="border border-white px-5 cursor-pointer rounded-2xl "
        >
          RGB
        </button>
        <button
          onClick={colorType === "hex" ? handleGenerateHex : handleGenerateRga}
          className="border border-white px-5 cursor-pointer rounded-2xl"
        >
          RANDOM
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <h1
          className="text-8xl  "
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "2px white",
          }}
        >
          {color}
        </h1>
      </div>
    </div>
  );
}
