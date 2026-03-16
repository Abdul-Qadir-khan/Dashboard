"use client";

import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";

// Dummy User Data
const usersData = [
  { id: "#U-001", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", joined: "2025-01-12" },
  { id: "#U-002", name: "Jane Smith", email: "jane@example.com", role: "Manager", status: "Inactive", joined: "2025-02-20" },
  { id: "#U-003", name: "Alex Johnson", email: "alex@example.com", role: "User", status: "Active", joined: "2025-03-18" },
  { id: "#U-004", name: "Mary Lee", email: "mary@example.com", role: "User", status: "Pending", joined: "2025-04-10" },
  { id: "#U-005", name: "David Kim", email: "david@example.com", role: "Manager", status: "Active", joined: "2025-05-05" },
];

// KPI Card Component
const StatCard = ({ title, value, sub, negative }) => (
  <div className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition`}>
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
    {sub && (
      <div className={`flex items-center mt-2 text-xs font-medium ${negative ? "text-red-500" : "text-green-600"}`}>
        <span>{sub}</span>
      </div>
    )}
  </div>
);

export default function AllUsersPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "Users" },
          { label: "All Users" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Users" value={usersData.length} sub="+10% this month" />
          <StatCard title="Active Users" value={usersData.filter(u => u.status === "Active").length} sub="+8% growth" />
          <StatCard title="Inactive Users" value={usersData.filter(u => u.status === "Inactive").length} negative />
          <StatCard title="New Users" value={3} sub="+25%" />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">All Users</p>
            <input
              type="text"
              placeholder="Search users..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">User ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Joined</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : user.status === "Inactive"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}>{user.status}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{user.joined}</td>
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