import React from 'react';



const statusColors={"Total Order":{textColor: "text-yellow-500", bgColor: "bg-yellow-800", tagColor: "text-yellow-200"},
"Pending":{textColor: "text-red-500", bgColor: "bg-red-800", tagColor: "text-red-200"},
"Delivered":{textColor: "text-green-500", bgColor: "bg-green-800", tagColor: "text-green-200"}
}

function getColor(status){
    return (statusColors[status]||{
      textColor: "text-white",
      bgColor: "bg-gray-800",
      tagColor: "text-gray-300",
    })
}

const summaryItems = [
  { title: "Total Order", number: "8",  },
  { title: "Pending", number: "7",  },
  { title: "Delivered", number: "1",  },
];


function SummaryCard({ title, number }) {
    const {textColor,bgColor,tagColor}=getColor(title)
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold mb-2 ${textColor}`}>{number}</div>
      <div className={`${bgColor} bg-opacity-50 ${tagColor} text-xs font-medium px-3 py-1 rounded-full inline-block`}>
        {title}
      </div>
    </div>
  );
}

export default function OrderSummary() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryItems.map((item) => (
          <SummaryCard
            key={item.title}
            title={item.title}
            number={item.number}
            textColor={item.textColor}
            bgColor={item.bgColor}
            tagColor={item.tagColor}
          />
        ))}
      </div>
    </div>
  );
}
