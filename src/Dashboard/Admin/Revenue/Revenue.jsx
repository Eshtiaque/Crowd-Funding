import AreaDashboard from "../../Chart/AreaDashboard";

const Revenue = () => {
  const data = [
    { month: "January", expenditure: 1500, earning: 2000 },
    { month: "February", expenditure: 1200, earning: 1800 },
    { month: "March", expenditure: 1800, earning: 2200 },
    { month: "April", expenditure: 1000, earning: 1600 },
    { month: "May", expenditure: 1300, earning: 1900 },
    { month: "June", expenditure: 1700, earning: 2100 },
    { month: "July", expenditure: 2000, earning: 2400 },
    { month: "August", expenditure: 1500, earning: 1900 },
    { month: "September", expenditure: 1600, earning: 2000 },
    { month: "October", expenditure: 1400, earning: 1800 },
    { month: "November", expenditure: 1900, earning: 2300 },
    { month: "December", expenditure: 2200, earning: 2500 },
  ];

  return (
    <div className="bg-black px-10 mt w-full h-full mt-28 text-white min-h-[80vh]">
      <div className="flex items-center justify-between mt-5">
        <h1 className="lg:text-4xl text-2xl text-orange-300 normal-case font-semibold mb-12">
          Last Year Total Revenue: <span>$</span>628
        </h1>
      </div>
      <div className="w-full pb-14 px-5 rounded col-span-1 h-[33vh]  row-span-1">
        <AreaDashboard data={data} />
      </div>
    </div>
  );
};

export default Revenue;