const ProblemSolution = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm text-warning font-bold tracking-widest uppercase mb-3">
          The Problem & Our Fix
        </h2>
        <h3 className="text-4xl font-bold text-white">
          Chama management is hard. <br className="hidden sm:block" /> 
          It doesn't have to be.
        </h3>
      </div>

      {/* Split Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* The Problem Card (Left) */}
        <div className="flex-1 bg-darkcard rounded-2xl p-8 border-t-4 border-t-danger shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-2xl font-bold text-white mb-6">What goes wrong today</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-danger mr-3 mt-1">✕</span>
              <span>Spreadsheets get corrupted or formulas break.</span>
            </li>
            <li className="flex items-start">
              <span className="text-danger mr-3 mt-1">✕</span>
              <span>Treasurers face a lack of transparency and trust.</span>
            </li>
            <li className="flex items-start">
              <span className="text-danger mr-3 mt-1">✕</span>
              <span>Tracking rotating payouts (Merry-Go-Rounds) is an administrative nightmare.</span>
            </li>
            <li className="flex items-start">
              <span className="text-danger mr-3 mt-1">✕</span>
              <span>Awkward manual reminders to members who fall behind on contributions.</span>
            </li>
          </ul>
        </div>

        {/* The Solution Card (Right) */}
        <div className="flex-1 bg-darkcard rounded-2xl p-8 border-t-4 border-t-success shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-2xl font-bold text-white mb-6">How SplitKesh helps</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <span className="text-success mr-3 mt-1">✓</span>
              <span><strong>Automated Cycles:</strong> Merry-Go-Round payouts are tracked and scheduled instantly.</span>
            </li>
            <li className="flex items-start">
              <span className="text-success mr-3 mt-1">✓</span>
              <span><strong>Multi-Signature Approvals:</strong> No single treasurer can move funds without group verification.</span>
            </li>
            <li className="flex items-start">
              <span className="text-success mr-3 mt-1">✓</span>
              <span><strong>Instant M-Pesa Sync:</strong> Log contributions directly via M-Pesa receipts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-success mr-3 mt-1">✓</span>
              <span><strong>Transparent Ledger:</strong> Every member sees the exact balance and history in real-time.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;