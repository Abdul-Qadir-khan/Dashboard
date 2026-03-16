"use client";

import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
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

// Data
const pipelineData = {
  labels: ["Prospecting", "Qualification", "Negotiation", "Closed Won", "Closed Lost"],
  datasets: [
    {
      label: "Deals Count",
      data: [45, 80, 60, 210, 32],
      backgroundColor: ["#3B82F6","#10B981","#3B82F6","#10B981","#EF4444"],
      borderRadius: 6,
    },
  ],
};

const salesTrendData = {
  labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
  datasets: [
    {
      label: "Deals Closed",
      data: [12, 15, 10, 18, 20, 22, 25],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const StatCard = ({ title, value, sub, negative }) => (
  <div className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition`}>
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
    <div className={`flex items-center mt-2 text-xs font-medium ${negative ? "text-red-500" : "text-green-600"}`}>
      <span>{sub}</span>
    </div>
  </div>
);

// Dummy deals data
const dealsData = [
  { id: "#D-101", client: "Acme Corp", amount: "$12,300", stage: "Negotiation", owner: "John Doe", date: "2026-02-28" },
  { id: "#D-102", client: "Beta LLC", amount: "$8,900", stage: "Qualification", owner: "Emma Wilson", date: "2026-03-03" },
  { id: "#D-103", client: "Gamma Inc", amount: "$15,200", stage: "Prospecting", owner: "David Lee", date: "2026-03-10" },
  { id: "#D-104", client: "Delta Co", amount: "$21,500", stage: "Closed Won", owner: "Alex Johnson", date: "2026-02-25" },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "CRM" },
          { label: "Deals" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Deals" value="320" sub="+18% this month" />
          <StatCard title="Active Deals" value="128" sub="+12% growth" />
          <StatCard title="Won Deals" value="210" sub="+22% this month" />
          <StatCard title="Lost Deals" value="32" sub="-5%" negative />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Pipeline Chart */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700 font-semibold">Deals Pipeline</p>
              <select className="border text-sm rounded px-3 py-1 focus:outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Quarter</option>
              </select>
            </div>
            <div className="h-64">
              <Bar data={pipelineData} options={chartOptions} />
            </div>
          </div>

          {/* Deal Stage Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Deal Stages</p>
            <div className="h-64">
              <Pie data={pipelineData} options={chartOptions} />
            </div>
          </div>

        </div>

        {/* Deals Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">All Deals</p>
            <input
              type="text"
              placeholder="Search deals..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">Deal ID</th>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4">Owner</th>
                  <th className="py-3 px-4">Closing Date</th>
                </tr>
              </thead>
              <tbody>
                {dealsData.map((deal, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{deal.id}</td>
                    <td className="py-3 px-4">{deal.client}</td>
                    <td className="py-3 px-4 font-semibold">{deal.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        deal.stage === "Closed Won"
                          ? "bg-green-100 text-green-600"
                          : deal.stage === "Closed Lost"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}>{deal.stage}</span>
                    </td>
                    <td className="py-3 px-4">{deal.owner}</td>
                    <td className="py-3 px-4 text-gray-500">{deal.date}</td>
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

// Dummy BarChart component (replace with real chart if needed)
const BarChart = () => (
  <div className="h-full flex items-center justify-center text-gray-400">
    Bar Chart Placeholder
  </div>
);