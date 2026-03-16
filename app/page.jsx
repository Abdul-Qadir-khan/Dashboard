import Image from "next/image";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import Breadcrumb from "@/components/layout/breadcrumb";
import BudgetCard from "@/components/layout/budgetcard";
import Forecast from "@/components/layout/forecast";
import Deal from "@/components/layout/dealtypechart";
import Balance from "@/components/layout/balance";
import Dealstatus from "@/components/layout/dealstatus";
import MyTask from "@/components/layout/mytasksection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/" },
          { label: "CRM" }
        ]}
      />

        {/* budget card */}
        <BudgetCard />
        {/* budget card */}

      {/* sales forecase */}
      <section className="map_overview md:p-5 p-3 py-0">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 w-full">
          {/* Left side 75% */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Forecast />
            <Deal />
          </div>

          {/* Right side 25% */}
          <div>
            <Balance />
          </div>
        </div>
      </section>
      {/* sales forecase */}

      {/* sales forecase */}
      <section className="map_overview md:p-5 p-3 py-0">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 w-full">
            <Dealstatus />

          {/* Right side 25% */}
          <div>
            <MyTask />
          </div>
        </div>
      </section>
      {/* sales forecase */}

    </div>
  );
}
