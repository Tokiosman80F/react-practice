import React, { useEffect, useState } from "react";

export default function ColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtilities(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtilities(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRgbColor(){
    
    const r=randomColorUtilities(256)
    const g=randomColorUtilities(256)
    const b=randomColorUtilities(256)
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(typeOfColor==='hex') handleCreateRandomHexColor();
    else handleCreateRgbColor();
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
      className="text-white"
    >
      <div>
        <button onClick={() => {
          setTypeOfColor("hex")
          handleCreateRandomHexColor()  
          }} className="border ">
          Create Hex Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className="border ">
          Create RGB Color
        </button>
        <button
          onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRgbColor}
          className="border "
        >
          Generate Random Color
        </button>
      </div>
      <div className="text-7xl text-center">{color}</div>
    </div>
  );
}
