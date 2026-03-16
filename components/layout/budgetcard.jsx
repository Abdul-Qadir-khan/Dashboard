import Image from "next/image";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

function BudgetCard({ stats }) {

  const defaultStats = [
    { title: "Campaign Sent", value: "120", icon: "/images/icons/campaign.png", trend: "up" },
    { title: "Revenue", value: "15,000", icon: "/images/icons/revenue.png", trend: "up" },
    { title: "New Users", value: "350", icon: "/images/icons/new-users.png", trend: "up" },
    { title: "Growth", value: "18%", icon: "/images/icons/growth.png", trend: "up" },
    { title: "Emails Sent", value: "2,300", icon: "/images/icons/email-sent.png", trend: "down" },
    { title: "Orders", value: "540", icon: "/images/icons/orders.png", trend: "up" },
  ];

  // 👇 If stats prop is passed, use it. Otherwise use defaultStats
  const finalStats = stats || defaultStats;

  return (
    <div className="border border-gray-300 grid grid-cols-1 md:grid-cols-6 m-3 md:m-5 bg-white">
      {finalStats.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between p-4 flex-1 ${
            index !== finalStats.length - 1 ? "border-b md:border-r" : ""
          } border-gray-300`}
        >
          <div>
            <p className="uppercase text-md text-gray-500 mb-4">
              {item.title}
            </p>

            <div className="flex items-end gap-4">
              <Image
                src={item.icon}
                width={50}
                height={50}
                alt={item.title}
              />
              <p className="ms-2 text-3xl font-semibold">
                {item.value}
              </p>
            </div>
          </div>

          {item.trend === "up" ? (
            <FaArrowAltCircleUp className="text-green-500 text-xl" />
          ) : (
            <FaArrowAltCircleDown className="text-red-500 text-xl" />
          )}
        </div>
      ))}
    </div>
  );
}

export default BudgetCard;