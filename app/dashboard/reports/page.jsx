
"use client"
import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
// Dummy data
const reportsData = [
  {
    id: "#1001",
    customer: "John Doe",
    product: "Product A",
    amount: "$123",
    status: "Completed",
    date: "2026-02-22",
  },
  {
    id: "#1002",
    customer: "Jane Smith",
    product: "Product B",
    amount: "$89",
    status: "Pending",
    date: "2026-02-21",
  },
  {
    id: "#1003",
    customer: "Alex Johnson",
    product: "Product C",
    amount: "$150",
    status: "Completed",
    date: "2026-02-20",
  },
];

const ReportsPage = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [120, 200, 150, 300, 250, 400, 380],
        borderColor: "#3B82F6", // Tailwind blue-500
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
      },
    ],
  };
    const pieData = {
    labels: ["Organic", "Paid Ads", "Referral", "Social"],
    datasets: [
      {
        label: "Traffic Source",
        data: [45, 25, 15, 15],
        backgroundColor: [
          "#3B82F6",
          "#F97316",
          "#FBBF24",
          "#14B8A6",
        ],
      },
    ],
  };
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "CRM" }
        ]}
      />
      <section className="bg-gray-100 min-h-screen px-8 py-8">

  {/* KPI Row - Bigger + Wider */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-500 text-sm">Total Revenue</p>
      <h2 className="text-4xl font-bold mt-3">$12,345</h2>
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[70%] h-full bg-blue-500"></div>
      </div>
      <p className="text-green-500 text-sm mt-3">+12% growth</p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-500 text-sm">Total Orders</p>
      <h2 className="text-4xl font-bold mt-3">1,234</h2>
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[60%] h-full bg-green-500"></div>
      </div>
      <p className="text-green-500 text-sm mt-3">+8% growth</p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-500 text-sm">Avg. Order Value</p>
      <h2 className="text-4xl font-bold mt-3">$89</h2>
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[50%] h-full bg-purple-500"></div>
      </div>
      <p className="text-green-500 text-sm mt-3">+5%</p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-500 text-sm">Refunds</p>
      <h2 className="text-4xl font-bold mt-3">12</h2>
      <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[30%] h-full bg-red-500"></div>
      </div>
      <p className="text-red-500 text-sm mt-3">-2%</p>
    </div>

  </div>

  {/* Charts + Summary Section */}
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

    {/* Large Chart Area */}
    <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8 h-[420px] flex items-center justify-center">
      <div className="text-gray-400 text-lg">
        Revenue Trend Chart (Large Area)
      </div>
    </div>

    {/* Side Summary Panel */}
    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between">

      <div>
        <p className="text-gray-500 text-sm">Top Product</p>
        <h3 className="text-2xl font-bold mt-2">Product C</h3>
        <p className="text-gray-400 text-sm mt-2">150 Orders</p>
      </div>

      <div className="mt-10">
        <p className="text-gray-500 text-sm">Best Customer</p>
        <h3 className="text-2xl font-bold mt-2">John Doe</h3>
        <p className="text-gray-400 text-sm mt-2">$1,230 Spent</p>
      </div>

      <div className="mt-10">
        <p className="text-gray-500 text-sm">Conversion Rate</p>
        <h3 className="text-2xl font-bold mt-2">4.8%</h3>
        <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-[48%] h-full bg-indigo-500"></div>
        </div>
      </div>

    </div>

  </div>

  {/* Full Width Table */}
  <div className="bg-white rounded-3xl shadow-lg p-8">

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">

        <thead>
          <tr className="border-b text-gray-500 text-left">
            <th className="py-5 px-4 font-medium">Order ID</th>
            <th className="py-5 px-4 font-medium">Customer</th>
            <th className="py-5 px-4 font-medium">Product</th>
            <th className="py-5 px-4 font-medium">Amount</th>
            <th className="py-5 px-4 font-medium">Status</th>
            <th className="py-5 px-4 font-medium">Date</th>
          </tr>
        </thead>

        <tbody>
          {reportsData.map((item) => (
            <tr
              key={item.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="py-5 px-4 font-semibold text-blue-600">
                {item.id}
              </td>
              <td className="py-5 px-4">{item.customer}</td>
              <td className="py-5 px-4">{item.product}</td>
              <td className="py-5 px-4 font-semibold">{item.amount}</td>
              <td className="py-5 px-4">
                <span
                  className={`px-4 py-1 text-xs rounded-full font-medium ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-5 px-4 text-gray-500">{item.date}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>

</section>
    </div>
  );
};

// ✅ This default export is required by Next.js
export default ReportsPage;