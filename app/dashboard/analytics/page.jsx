"use client"
// analytics.page.jsx (main section part)
import Breadcrumb from "@/components/layout/breadcrumb";
import BudgetCard from "@/components/layout/budgetcard";
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

const AnalyticsSection = () => {

  const customStats = [
    { title: "Total Users", value: "12,345", icon: "/images/icons/new-users.png", trend: "up" },
    { title: "Active Users", value: "8,234", icon: "/images/icons/campaign.png", trend: "up" },
    { title: "Revenue", value: "$45,678", icon: "/images/icons/revenue.png", trend: "up" },
    { title: "Growth", value: "18%", icon: "/images/icons/growth.png", trend: "up" },
    { title: "Emails Sent", value: "2,300", icon: "/images/icons/email-sent.png", trend: "down" },
    { title: "Conversion Rate", value: "6.2%", icon: "/images/icons/orders.png", trend: "up" },
  ];

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

  const barData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 8000, 15000],
        backgroundColor: "#10B981", // Tailwind green-500
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
          { label: "Analytics", link: "/analytics" },
          { label: "CRM" }
        ]}
      />
      <section className="">
        <BudgetCard stats={customStats} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-3 md:m-5">

          <div className="bg-white md:p-5 p-3 border border-gray-300 flex flex-col">
            <h3 className="text-gray-700 font-semibold mb-3">Active Users</h3>
            <div className="flex-1 h-72">
              <Line
                data={lineData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className="bg-white md:p-5 p-3 border border-gray-300 flex flex-col">
            <h3 className="text-gray-700 font-semibold mb-3">Revenue by Product</h3>
            <div className="flex-1 h-72">
              <Bar
                data={barData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className="bg-white md:p-5 p-3 border border-gray-300 flex flex-col">
            <h3 className="text-gray-700 font-semibold mb-3">Traffic Source</h3>
            <div className="flex-1 h-72">
              <Pie
                data={pieData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default AnalyticsSection;