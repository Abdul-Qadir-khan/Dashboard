import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = ({ items }) => {
  return (
    <div className="border border-r-0 border-l-0 border-gray-300 p-2 px-4 bg-white">
      <ul className="flex justify-between flex-col md:flex-row text-sm md:text-lg">
        
        {/* Left Side */}
        <div>
          <li>
            <Link href="/" className="font-semibold">
              CRM
            </Link>
          </li>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-x-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-x-3">
              
              {index !== 0 && <FaChevronRight className="text-gray-400" />}
              
              {item.link ? (
                <Link href={item.link} className="font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
            </li>
          ))}
        </div>

      </ul>
    </div>
  );
};

export default Breadcrumb;