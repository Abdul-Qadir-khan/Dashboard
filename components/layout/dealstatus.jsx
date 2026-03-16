"use client";

export default function DealTableSection() {
  const deals = [
    { name: "Absternet LLC", lastContacted: "Sep 20, 2021", rep: "Donald Risher", status: "Deal Won", value: "$100.1K" },
    { name: "Raitech Soft", lastContacted: "Sep 23, 2021", rep: "Sofia Cunha", status: "Intro Call", value: "$150K" },
    { name: "William PVT", lastContacted: "Sep 27, 2021", rep: "Luis Rocha", status: "Stuck", value: "$78.18K" },
    { name: "Loiusee LLP", lastContacted: "Sep 30, 2021", rep: "Vitoria Rodrigues", status: "Deal Won", value: "$180K" },
    { name: "Apple Inc.", lastContacted: "Sep 30, 2021", rep: "Vitoria Rodrigues", status: "New Lead", value: "$78.9K" },
  ];

  // Optional: color based on status
  const statusColor = (status) => {
    switch (status) {
      case "Deal Won":
        return "bg-green-100 text-green-800";
      case "Stuck":
        return "bg-yellow-100 text-yellow-800";
      case "Intro Call":
        return "bg-blue-100 text-blue-800";
      case "New Lead":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-4 border border-gray-300 mt-6">
      <h2 className="text-md font-semibold mb-4">Deals</h2>

      <div className="overflow-x-auto">
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Contacted</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sales Representative</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Deal Value</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {deals.map((deal, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 whitespace-nowrap">{deal.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{deal.lastContacted}</td>
                <td className="px-4 py-2 whitespace-nowrap">{deal.rep}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(deal.status)}`}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{deal.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}