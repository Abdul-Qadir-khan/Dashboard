"use client";

import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
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

// Dummy Data
const monthlyOrdersData = [
  { id: "#M-1001", customer: "John Doe", product: "Product A", amount: "$123", status: "Completed", date: "2026-02-01" },
  { id: "#M-1002", customer: "Jane Smith", product: "Product B", amount: "$89", status: "Pending", date: "2026-02-02" },
  { id: "#M-1003", customer: "Alex Johnson", product: "Product C", amount: "$150", status: "Completed", date: "2026-02-03" },
  { id: "#M-1004", customer: "Mary Lee", product: "Product D", amount: "$200", status: "Refunded", date: "2026-02-04" },
];

const revenueTrendData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [3000, 4500, 3800, 5000],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const ordersByProductData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Orders",
      data: [120, 190, 80, 150],
      backgroundColor: "#10B981",
      borderRadius: 6,
    },
  ],
};

const trafficSourceData = {
  labels: ["Organic", "Paid Ads", "Referral", "Social"],
  datasets: [
    {
      data: [45, 25, 15, 15],
      backgroundColor: ["#3B82F6","#F97316","#FBBF24","#14B8A6"],
    },
  ],
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

export default function MonthlyReportsPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "Reports" },
          { label: "Monthly" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value="$12,345" sub="+12% this month" />
          <StatCard title="Total Orders" value="1,234" sub="+8% this month" />
          <StatCard title="Avg. Order Value" value="$89" sub="+5%" />
          <StatCard title="Refunds" value="12" sub="-2%" negative />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Revenue Trend */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Revenue Trend</p>
            <div className="h-64">
              <Line data={revenueTrendData} options={chartOptions} />
            </div>
          </div>

          {/* Orders by Product */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-700 font-semibold mb-4">Orders by Product</p>
            <div className="h-64">
              <Bar data={ordersByProductData} options={chartOptions} />
            </div>
          </div>

        </div>

        {/* Traffic Source Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-700 font-semibold mb-4">Traffic Sources</p>
          <div className="h-64">
            <Pie data={trafficSourceData} options={chartOptions} />
          </div>
        </div>

        {/* Monthly Orders Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">Monthly Orders</p>
            <input
              type="text"
              placeholder="Search orders..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {monthlyOrdersData.map((order, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{order.id}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4 font-semibold">{order.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}>{order.status}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{order.date}</td>
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