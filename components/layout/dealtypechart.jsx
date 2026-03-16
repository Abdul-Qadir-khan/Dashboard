"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function DealTypeChart() {
  // Dynamic data
  const data = [
    { year: "2016", Pending: 80, Won: 40, Loss: 30 },
    { year: "2017", Pending: 50, Won: 70, Loss: 20 },
    { year: "2018", Pending: 40, Won: 90, Loss: 35 },
    { year: "2019", Pending: 60, Won: 30, Loss: 85 },
    { year: "2020", Pending: 100, Won: 55, Loss: 25 },
    { year: "2021", Pending: 45, Won: 20, Loss: 75 },
  ];

  // Dynamic radar categories with colors
  const categories = [
    { key: "Pending", color: "#f59e0b" },
    { key: "Won", color: "#10b981" },
    { key: "Loss", color: "#ef4444" },
  ];

  return (
    <div className="bg-white md:p-4 p-2 border border-gray-300">
      {/* Header */}
      <div className="flex justify-between mb-4 items-center">
        <h2 className="md:text-md text-sm font-semibold">Deal Type</h2>
        <div className="text-xs">
          <span className="font-semibold md:text-sm text-xs">SORT BY:</span> Monthly
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64 md:text-md text-xs">
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="year" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />

            {/* Dynamically generate Radar series */}
            {categories.map((cat) => (
              <Radar
                key={cat.key}
                name={cat.key}
                dataKey={cat.key}
                stroke={cat.color}
                fill={cat.color}
                fillOpacity={0.5}
              />
            ))}

            {/* Legend with spacing */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingTop: 30, gap: 0, fontSize:12, }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}