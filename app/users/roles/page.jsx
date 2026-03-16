"use client";

import React from "react";
import Breadcrumb from "@/components/layout/breadcrumb";

// Dummy Roles Data
const rolesData = [
  { id: "#R-01", role: "Admin", users: 3, permissions: "Full Access" },
  { id: "#R-02", role: "Manager", users: 5, permissions: "Manage Orders & Users" },
  { id: "#R-03", role: "User", users: 20, permissions: "View & Edit Own Data" },
  { id: "#R-04", role: "Guest", users: 7, permissions: "View Only" },
];

export default function RolesPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "Users" },
          { label: "Roles" },
        ]}
      />

      <section className="px-8 py-8 bg-gray-50 min-h-screen space-y-10">

        {/* Roles Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {rolesData.map((role, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 cursor-pointer">
              <p className="text-sm text-gray-500">Role</p>
              <h2 className="text-2xl font-bold mt-2">{role.role}</h2>
              <p className="text-gray-700 mt-2 text-sm">{role.users} Users</p>
              <span className="mt-2 inline-block text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">{role.permissions}</span>
            </div>
          ))}
        </div>

        {/* Roles Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700 font-semibold">All Roles</p>
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
                  <th className="py-3 px-4">Role ID</th>
                  <th className="py-3 px-4">Role Name</th>
                  <th className="py-3 px-4">Number of Users</th>
                  <th className="py-3 px-4">Permissions</th>
                </tr>
              </thead>
              <tbody>
                {rolesData.map((role, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-blue-600">{role.id}</td>
                    <td className="py-3 px-4">{role.role}</td>
                    <td className="py-3 px-4">{role.users}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">{role.permissions}</span>
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