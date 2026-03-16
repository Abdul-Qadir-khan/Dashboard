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
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

const salesData = [
    {
        id: "#S-201",
        customer: "Michael Brown",
        product: "Premium Plan",
        region: "USA",
        amount: "$299",
        payment: "Card",
        status: "Paid",
        date: "2026-02-23",
    },
    {
        id: "#S-202",
        customer: "Emma Wilson",
        product: "Business Plan",
        region: "UK",
        amount: "$499",
        payment: "PayPal",
        status: "Pending",
        date: "2026-02-22",
    },
    {
        id: "#S-203",
        customer: "David Lee",
        product: "Starter Plan",
        region: "Canada",
        amount: "$99",
        payment: "Card",
        status: "Paid",
        date: "2026-02-21",
    },
];

const SalesPage = () => {
    const salesTrendData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Sales ($)",
                data: [480, 600, 550, 700, 850, 780, 920],
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59,130,246,0.2)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const salesCategoryData = {
        labels: ["Online", "Retail", "Wholesale", "Other"],
        datasets: [
            {
                data: [52, 24, 14, 10],
                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                ],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };
    return (
        <div className="min-h-screen bg-gray-100">

            <Breadcrumb
                items={[
                    { label: "Dashboard", link: "/" },
                    { label: "Sales" }
                ]}
            />

            <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

                {/* Top KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-sm text-gray-500">Total Sales</p>
                        <h2 className="text-2xl font-bold mt-2">$94,230</h2>
                        <div className="flex items-center mt-2 text-green-600 text-xs font-medium">
                            <span>↑ 14% this month</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-sm text-gray-500">Orders</p>
                        <h2 className="text-2xl font-bold mt-2">1,842</h2>
                        <div className="flex items-center mt-2 text-green-600 text-xs font-medium">
                            <span>↑ 9% growth</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-sm text-gray-500">Avg Deal Size</p>
                        <h2 className="text-2xl font-bold mt-2">$512</h2>
                        <div className="flex items-center mt-2 text-green-600 text-xs font-medium">
                            <span>↑ 3.2%</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <p className="text-sm text-gray-500">Refund Rate</p>
                        <h2 className="text-2xl font-bold mt-2">1.8%</h2>
                        <div className="flex items-center mt-2 text-red-500 text-xs font-medium">
                            <span>↓ 0.4%</span>
                        </div>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

                    {/* Line Chart */}
                    <div className="xl:col-span-2 bg-white rounded-xl shadow p-6">
                        <p className="text-gray-700 font-semibold mb-4">
                            Sales Trend
                        </p>
                        <div className="h-64">
                            <Line data={salesTrendData} options={chartOptions} />
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-700 font-semibold mb-4">
                            Sales by Category
                        </p>
                        <div className="h-64">
                            <Pie data={salesCategoryData} options={chartOptions} />
                        </div>
                    </div>

                </div>

                {/* Regional Performance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-700 font-semibold mb-4">Top Regions</p>
                        {[
                            { name: "USA", value: 52000 },
                            { name: "UK", value: 34000 },
                            { name: "Canada", value: 21000 },
                            { name: "Germany", value: 12000 },
                        ].map((region, i) => (
                            <div key={i} className="mb-3">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{region.name}</span>
                                    <span>${region.value.toLocaleString()}</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500"
                                        style={{ width: `${(region.value / 52000) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <p className="text-gray-700 font-semibold mb-4">Top Products</p>
                        {[
                            { name: "Premium Plan", value: 28300 },
                            { name: "Business Plan", value: 21100 },
                            { name: "Starter Plan", value: 12400 },
                            { name: "Enterprise Plan", value: 9800 },
                        ].map((product, i) => (
                            <div key={i} className="flex justify-between mb-3">
                                <span>{product.name}</span>
                                <span className="font-medium">${product.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions Table */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-700 font-semibold">Recent Transactions</p>
                        <input
                            placeholder="Search..."
                            className="text-sm border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="text-left border-b text-gray-500">
                                    <th className="py-3 px-4">ID</th>
                                    <th className="py-3 px-4">Customer</th>
                                    <th className="py-3 px-4">Product</th>
                                    <th className="py-3 px-4">Amount</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: "#S-401", customer: "John Doe", product: "Premium", amount: "$499", status: "Paid", date: "2026-02-23" },
                                    { id: "#S-402", customer: "Emma Wilson", product: "Business", amount: "$299", status: "Pending", date: "2026-02-22" },
                                    { id: "#S-403", customer: "David Lee", product: "Starter", amount: "$99", status: "Paid", date: "2026-02-21" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-50 transition">
                                        <td className="py-3 px-4 font-medium text-blue-600">{row.id}</td>
                                        <td className="py-3 px-4">{row.customer}</td>
                                        <td className="py-3 px-4">{row.product}</td>
                                        <td className="py-3 px-4 font-semibold">{row.amount}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 text-xs rounded-full ${row.status === "Paid"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}>{row.status}</span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-500">{row.date}</td>
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

export default SalesPage;