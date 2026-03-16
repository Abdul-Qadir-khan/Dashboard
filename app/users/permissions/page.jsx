"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Dummy Data
const rolesPermissions = [
  {
    role: "Admin",
    permissions: [
      { name: "Manage Users", enabled: true },
      { name: "Manage Orders", enabled: true },
      { name: "View Reports", enabled: true },
      { name: "Edit Settings", enabled: true },
    ],
  },
  {
    role: "Manager",
    permissions: [
      { name: "Manage Users", enabled: false },
      { name: "Manage Orders", enabled: true },
      { name: "View Reports", enabled: true },
      { name: "Edit Settings", enabled: false },
    ],
  },
  {
    role: "User",
    permissions: [
      { name: "Manage Users", enabled: false },
      { name: "Manage Orders", enabled: false },
      { name: "View Reports", enabled: true },
      { name: "Edit Settings", enabled: false },
    ],
  },
  {
    role: "Guest",
    permissions: [
      { name: "View Reports", enabled: true },
      { name: "Edit Settings", enabled: false },
    ],
  },
];

// KPI Cards Component
const StatCard = ({ title, value, sub, negative }) => (
  <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition cursor-pointer">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-1">{value}</h2>
    {sub && <span className={`text-xs mt-1 ${negative ? "text-red-500" : "text-green-600"}`}>{sub}</span>}
  </div>
);

export default function PermissionsPage() {
  const [data, setData] = useState(rolesPermissions);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const togglePermission = (roleIndex, permIndex) => {
    const newData = [...data];
    newData[roleIndex].permissions[permIndex].enabled =
      !newData[roleIndex].permissions[permIndex].enabled;
    setData(newData);
  };

  const toggleSelectRole = (roleIndex) => {
    const role = data[roleIndex].role;
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const pieChartData = {
    labels: ["Full Access Roles", "Partial Access Roles", "Read Only Roles"],
    datasets: [
      {
        data: [1, 2, 1],
        backgroundColor: ["#3B82F6", "#FBBF24", "#10B981"],
      },
    ],
  };

  const barChartData = {
    labels: ["Manage Users", "Manage Orders", "View Reports", "Edit Settings"],
    datasets: [
      {
        label: "Roles Enabled",
        data: [1, 2, 3, 1],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "Users" },
          { label: "Permissions" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 space-y-10">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Roles" value={data.length} sub="+5% this month" />
          <StatCard title="Total Permissions" value={data.reduce((a,b)=>a+b.permissions.length,0)} sub="+8%" />
          <StatCard title="Roles with Full Access" value={1} sub="+20%" />
          <StatCard title="Read Only Roles" value={1} negative />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-700 font-semibold mb-4">Role Access Distribution</p>
            <div className="h-64">
              <Pie data={pieChartData} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-700 font-semibold mb-4">Permissions Enabled per Role</p>
            <div className="h-64">
              <Bar data={barChartData} />
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedRoles.length > 0 && (
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <span className="text-gray-700 font-medium">{selectedRoles.length} role(s) selected</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Enable All</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Disable All</button>
            </div>
          </div>
        )}

        {/* Permissions Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">Manage Permissions</p>
            <input
              type="text"
              placeholder="Search roles..."
              className="text-sm border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-gray-500">
                  <th className="py-3 px-4">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        e.target.checked
                          ? setSelectedRoles(data.map((r) => r.role))
                          : setSelectedRoles([])
                      }
                      checked={selectedRoles.length === data.length}
                    />
                  </th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Permissions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((role, roleIndex) => (
                  <tr key={role.role} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role.role)}
                        onChange={() => toggleSelectRole(roleIndex)}
                      />
                    </td>
                    <td className="py-3 px-4 font-medium text-blue-600">{role.role}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-3">
                        {role.permissions.map((perm, permIndex) => (
                          <label
                            key={perm.name}
                            className={`flex items-center px-3 py-1 rounded border ${
                              perm.enabled ? "bg-green-100 border-green-400" : "bg-gray-100 border-gray-300"
                            } cursor-pointer`}
                          >
                            <input
                              type="checkbox"
                              className="mr-2"
                              checked={perm.enabled}
                              onChange={() => togglePermission(roleIndex, permIndex)}
                            />
                            <span className="text-xs">{perm.name}</span>
                          </label>
                        ))}
                      </div>
                    </td>
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