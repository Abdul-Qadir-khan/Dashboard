"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BalanceOverviewChart() {
  // Sample dynamic data for 6 months
  const data = [
    { month: "Jan", balance: 5000, deposits: 2000, withdrawals: 1000 },
    { month: "Feb", balance: 6000, deposits: 2500, withdrawals: 1500 },
    { month: "Mar", balance: 6500, deposits: 1800, withdrawals: 800 },
    { month: "Apr", balance: 7000, deposits: 2200, withdrawals: 1300 },
    { month: "May", balance: 8000, deposits: 3000, withdrawals: 1200 },
    { month: "Jun", balance: 8500, deposits: 2800, withdrawals: 1700 },
  ];

  return (
    <div className="bg-white md:p-4 p-2 border border-gray-300 h-full w-full max-w-4xl mx-auto">
      <h2 className="md:text-md text-sm font-semibold mb-4">Balance Overview</h2>

      <ResponsiveContainer className="md:text-md text-xs" width="100%" height={256}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="deposits"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="withdrawals"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}