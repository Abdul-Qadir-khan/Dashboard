"use client";

import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

// KPI Card Component
const StatCard = ({ title, value, sub, negative }) => (
  <div className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition`}>
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
    <div className={`flex items-center mt-2 text-xs font-medium ${negative ? "text-red-500" : "text-green-600"}`}>
      <span>{sub}</span>
    </div>
  </div>
);

// Sample Forecast Data
const weeklyForecastData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Revenue Forecast ($)",
      data: [1200, 1500, 1400, 1700, 1800, 2000, 2200],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const monthlyForecastData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Forecasted Revenue",
      data: [12000, 14500, 13800, 16000, 17500, 18200, 19000, 21000],
      backgroundColor: "#10B981",
      borderRadius: 6,
    },
  ],
};

const forecastCategoryData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      data: [45, 25, 15, 15],
      backgroundColor: ["#3B82F6", "#F97316", "#FBBF24", "#14B8A6"],
    },
  ],
};

// Sample forecast table data
const forecastTableData = [
  { id: "#F-1001", product: "Product A", forecast: "$12,300", probability: "80%", owner: "John Doe", expectedClose: "2026-03-10" },
  { id: "#F-1002", product: "Product B", forecast: "$9,500", probability: "65%", owner: "Emma Wilson", expectedClose: "2026-03-12" },
  { id: "#F-1003", product: "Product C", forecast: "$15,200", probability: "90%", owner: "David Lee", expectedClose: "2026-03-15" },
  { id: "#F-1004", product: "Product D", forecast: "$8,700", probability: "50%", owner: "Alex Johnson", expectedClose: "2026-03-18" },
];

export default function ForecastPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "CRM" },
          { label: "Forecast" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Forecast Deals" value="420" sub="+15% this month" />
          <StatCard title="Forecast Revenue" value="$120,000" sub="+18% this month" />
          <StatCard title="High Probability Deals" value="310" sub="+20%" />
          <StatCard title="Low Probability Deals" value="110" sub="-5%" negative />
        </div>

        {/* Forecast Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Weekly Forecast Line Chart */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Weekly Revenue Forecast</p>
            <div className="h-64">
              <Line data={weeklyForecastData} options={chartOptions} />
            </div>
          </div>

          {/* Forecast by Category Pie Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Forecast by Product</p>
            <div className="h-64">
              <Pie data={forecastCategoryData} options={chartOptions} />
            </div>
          </div>

        </div>

        {/* Monthly Forecast Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-700 font-semibold mb-4">Monthly Forecast Revenue</p>
          <div className="h-64">
            <Bar data={monthlyForecastData} options={chartOptions} />
          </div>
        </div>

        {/* Forecast Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">Detailed Forecast Deals</p>
            <input
              type="text"
              placeholder="Search forecast..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">Deal ID</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Forecast ($)</th>
                  <th className="py-3 px-4">Probability</th>
                  <th className="py-3 px-4">Owner</th>
                  <th className="py-3 px-4">Expected Close</th>
                </tr>
              </thead>
              <tbody>
                {forecastTableData.map((deal, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{deal.id}</td>
                    <td className="py-3 px-4">{deal.product}</td>
                    <td className="py-3 px-4 font-semibold">{deal.forecast}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        parseInt(deal.probability) >= 80
                          ? "bg-green-100 text-green-600"
                          : parseInt(deal.probability) >= 50
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}>{deal.probability}</span>
                    </td>
                    <td className="py-3 px-4">{deal.owner}</td>
                    <td className="py-3 px-4 text-gray-500">{deal.expectedClose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </div>
  );
}