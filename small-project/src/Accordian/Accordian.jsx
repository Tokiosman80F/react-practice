import React, { useState } from "react";
import { accordionData } from "./data.js";
import Switch from "./components/Switch.jsx";
export default function Accordian() {
  const [selectAccordian, setSelectAccordian] = useState(null);
  const [multipleSelection,setMultipleSelection]=useState(true)

  function handleSelectedAccordian(currentId) {
    setSelectAccordian(currentId == selectAccordian ? null : currentId);
  }

  return (
    <div className="container mx-auto border h-[100vh]">
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-4xl text-blue-400">Accordian</h1>
        <div className="flex justify-center items-center border-2 gap-10">
          
          <span>Enable Multi Selecting </span>
          <Switch checked={multipleSelection}  />
        </div>
        <div>
          {accordionData && accordionData.length === 0 ? (
            <p>No Data founded</p>
          ) : (
            <div>
              {accordionData.map((data) => (
                <div
                  key={data.id}
                  className="w-[300px] border border-blue-500 "
                >
                  <div
                    onClick={() => handleSelectedAccordian(data.id)}
                    className="flex justify-between gap-10    bg-blue-300 cursor-pointer "
                  >
                    <h1>{data.title}</h1>
                    <span> {selectAccordian === data.id ? "-" : "+"} </span>
                  </div>
                  {selectAccordian === data.id && <p>{data.desc}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
