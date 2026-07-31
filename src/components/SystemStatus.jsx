const SystemStatus = () => {
  const statusItems = [
    { label: "M-Pesa Gateway", status: "Operational", color: "text-success", dot: "bg-success" },
    { label: "Sacco API Sync", status: "Connected", color: "text-success", dot: "bg-success" },
    { label: "Multi-Sig Ledger", status: "Secured", color: "text-primary", dot: "bg-primary" },
    { label: "System Uptime", status: "99.99%", color: "text-gray-300", dot: "bg-gray-500" }
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <div className="bg-[#1a1728]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Overall Status */}
        <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-8 w-full md:w-auto">
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-success"></span>
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">All Systems Operational</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">Live SplitKesh Network</div>
          </div>
        </div>

        {/* Right side: Individual Metrics */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-x-8 gap-y-4 w-full md:w-auto">
          {statusItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`}></span>
                <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SystemStatus;