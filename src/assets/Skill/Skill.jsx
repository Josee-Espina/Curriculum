// skill.jsx
export function Skill({ icon, color, tittle, desc }) {
  const colorClass =
    {
      cyan: "from-cyan-900 via-cyan-700 to-cyan-500",
      amber: "from-amber-900 via-amber-700 to-amber-500",
      orange: "from-orange-900 via-orange-700 to-orange-500",
      blue: "from-blue-900 via-blue-700 to-blue-500",
      yellow: "from-yellow-900 via-yellow-700 to-yellow-500",
      purple: "from-purple-900 via-purple-700 to-purple-500",
      indigo: "from-indigo-900 via-indigo-700 to-indigo-500",
      emerald: "from-emerald-900 via-emerald-700 to-emerald-500",
      sky: "from-sky-900 via-sky-700 to-sky-500",
      red: "from-red-900 via-red-700 to-red-500",
      green: "from-green-900 via-green-700 to-green-500",
      gray: "from-gray-900 via-gray-700 to-gray-500",
        teal: "from-teal-900 via-teal-700 to-teal-500",
      black: "from-gray-900 via-gray-800 to-gray-700",
    }[color] || "bg-gray-200";

  const bgClass = {
    cyan: "bg-cyan-500",
    amber: "bg-amber-500",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    emerald: "bg-emerald-500",
    sky: "bg-sky-500",
    red: "bg-red-500",
    green: "bg-green-500", 
  
  }[color];
  return (
    <div
      className={`relative flex flex-col w-1/3 max-[800px]:w-11/12 overflow-hidden  
      flex-wrap rounded-2xl 
      transition  duration-150 ease-in-out active:-translate-y-1 active:scale-105 min-[600px]:hover:-translate-y-1 min-[600px]:hover:scale-105 
      bg-linear-to-br ${colorClass}`}
    >
      <div
        className={`w-1/3 rounded-xl mt-0.5 border border-solid border-white inline-flex  overflow-auto ${bgClass} max-[600px]:w-2/3`}
      >
        <p className="ml-2 text-xl font-bold max-[600px]:text-wrap">{tittle}</p>
      </div>
      <div className="p-2 w-11/12">{desc}</div>
      <div className="absolute -right-5 top-0 ">{icon}</div>
    </div>
  );
}
