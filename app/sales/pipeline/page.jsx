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

// Sample pipeline chart data
const pipelineBarData = {
  labels: ["Prospecting", "Qualification", "Negotiation", "Proposal", "Closed Won", "Closed Lost"],
  datasets: [
    {
      label: "Deals Count",
      data: [50, 80, 65, 40, 120, 25],
      backgroundColor: ["#3B82F6","#10B981","#3B82F6","#FBBF24","#10B981","#EF4444"],
      borderRadius: 6,
    },
  ],
};

const stagePieData = {
  labels: ["Prospecting", "Qualification", "Negotiation", "Proposal", "Closed Won", "Closed Lost"],
  datasets: [
    {
      data: [50, 80, 65, 40, 120, 25],
      backgroundColor: ["#3B82F6","#10B981","#3B82F6","#FBBF24","#10B981","#EF4444"],
    },
  ],
};

// Sample pipeline table data
const pipelineDeals = [
  { id: "#P-101", client: "Acme Corp", stage: "Negotiation", amount: "$12,300", owner: "John Doe", expectedClose: "2026-03-12" },
  { id: "#P-102", client: "Beta LLC", stage: "Qualification", amount: "$8,900", owner: "Emma Wilson", expectedClose: "2026-03-15" },
  { id: "#P-103", client: "Gamma Inc", stage: "Prospecting", amount: "$15,200", owner: "David Lee", expectedClose: "2026-03-18" },
  { id: "#P-104", client: "Delta Co", stage: "Closed Won", amount: "$21,500", owner: "Alex Johnson", expectedClose: "2026-02-25" },
  { id: "#P-105", client: "Omega Ltd", stage: "Closed Lost", amount: "$5,400", owner: "Sarah Parker", expectedClose: "2026-02-28" },
];

export default function PipelinePage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "CRM" },
          { label: "Pipeline" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Deals in Pipeline" value="380" sub="+15% this month" />
          <StatCard title="Deals in Progress" value="220" sub="+12% growth" />
          <StatCard title="Closed Won" value="120" sub="+20% this month" />
          <StatCard title="Closed Lost" value="40" sub="-5%" negative />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Pipeline Bar Chart */}
          <div className="xl:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700 font-semibold">Deals Pipeline Overview</p>
              <select className="border text-sm rounded px-3 py-1 focus:outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Quarter</option>
              </select>
            </div>
            <div className="h-64">
              <Bar data={pipelineBarData} options={chartOptions} />
            </div>
          </div>

          {/* Stage Distribution Pie Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Pipeline Stages</p>
            <div className="h-64">
              <Pie data={stagePieData} options={chartOptions} />
            </div>
          </div>

        </div>

        {/* Pipeline Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">All Deals in Pipeline</p>
            <input
              type="text"
              placeholder="Search pipeline..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">Deal ID</th>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Owner</th>
                  <th className="py-3 px-4">Expected Close</th>
                </tr>
              </thead>
              <tbody>
                {pipelineDeals.map((deal, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{deal.id}</td>
                    <td className="py-3 px-4">{deal.client}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        deal.stage === "Closed Won"
                          ? "bg-green-100 text-green-600"
                          : deal.stage === "Closed Lost"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}>{deal.stage}</span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{deal.amount}</td>
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