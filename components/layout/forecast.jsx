import React from "react";

export default function SalesForecast() {
  const months = [
    "December 2025",
    "Jan 2026",
    "Feb 2026",
    "March 2026",
  ];

  const chartData = [
    { label: "W1", forecast: 80, actual: 30 },
    { label: "W2", forecast: 60, actual: 50 },
    { label: "W3", forecast: 90, actual: 70 },
    { label: "W4", forecast: 40, actual: 20 },
  ];

  const yAxis = [60, 50, 40, 30, 20, 10, 0];

  return (
    <div className="bg-white p-2 md:p-4 border border-gray-300 w-full">
      
      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <p className="text-sm md:text-md font-semibold">Sales Forecast</p>

        <div className="text-xs md:text-sm">
          Sort by:
          <select className="ml-2 border border-gray-300 p-1 text-xs">
           {months.map((month, index) => {
            return <option key={index}>{month}</option>
           })}
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="flex justify-between">

        {/* Y Axis */}
        <div className="flex flex-col justify-between h-64 md:mr-4 mr-2">
          {yAxis.map((value, index) => (
            <p key={index} className="text-gray-400 md:text-sm text-xs">
              ${value}K
            </p>
          ))}
        </div>

        {/* Bars */}
        <div className="flex items-end gap-3 md:gap-6 h-64">
          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1 md:gap-2 h-full">
              
              <div className="flex items-end gap-1 md:gap-2 h-full">
                <div
                  className="w-5 md:w-6 bg-green-400 rounded"
                  style={{ height: `${item.forecast}%` }}
                ></div>

                <div
                  className="w-5 md:w-6 bg-blue-400 rounded"
                  style={{ height: `${item.actual}%` }}
                ></div>
              </div>

              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}