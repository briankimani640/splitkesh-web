import { useState } from 'react';

const SplitCalculator = () => {
  const [totalAmount, setTotalAmount] = useState(8000);
  const [membersCount, setMembersCount] = useState(4);
  const [payerIndex, setPayerIndex] = useState(0);

  // Dynamic member names for the demo
  const demoNames = ["Brian", "Faith", "Maina", "Sarah", "Kevin", "Diana", "Victor", "Mercy", "John", "Alice"];
  const activeMembers = demoNames.slice(0, membersCount);
  const payerName = activeMembers[payerIndex];

  // Math logic
  const safeMembers = membersCount > 0 ? membersCount : 1;
  const perPerson = Math.round(totalAmount / safeMembers);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="calculator">
      
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-3 block">Live Engine Demo</span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          See the Math in Action
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Input a bill, choose who paid, and watch the settlement ledger instantly calculate the exact M-Pesa routing required.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Interactive Controls */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Bill Amount Input */}
          <div className="bg-darkcard border border-gray-800 rounded-3xl p-6 md:p-8 shadow-xl">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Total Bill Amount (KSh)
            </label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">KSh</span>
              <input 
                type="number" 
                value={totalAmount} 
                onChange={(e) => setTotalAmount(Number(e.target.value))}
                className="w-full bg-darkbg border-2 border-gray-800 rounded-2xl pl-20 pr-6 py-5 text-3xl font-extrabold text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
                min="0"
                step="500"
              />
            </div>
          </div>

          {/* Members & Payer Controls */}
          <div className="bg-darkcard border border-gray-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-8">
            
            {/* Number of People */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Split Between
                </label>
                <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full text-sm">
                  {membersCount} People
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setMembersCount(Math.max(2, membersCount - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-darkbg border border-gray-700 text-white hover:border-primary hover:text-primary transition-colors text-xl font-bold"
                >
                  -
                </button>
                <div className="flex-1 h-3 bg-darkbg rounded-full overflow-hidden border border-gray-800 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
                    style={{ width: `${(membersCount / 10) * 100}%` }}
                  ></div>
                </div>
                <button 
                  onClick={() => {
                    setMembersCount(Math.min(10, membersCount + 1));
                    if (payerIndex >= membersCount) setPayerIndex(0);
                  }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-darkbg border border-gray-700 text-white hover:border-primary hover:text-primary transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Who Paid Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Who footed the bill?
              </label>
              <div className="flex flex-wrap gap-3">
                {activeMembers.map((name, index) => (
                  <button
                    key={name}
                    onClick={() => setPayerIndex(index)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border ${
                      payerIndex === index 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25' 
                        : 'bg-darkbg border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: The Settlement Ledger */}
        <div className="lg:col-span-5 relative">
          
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent blur-2xl rounded-3xl opacity-50 pointer-events-none"></div>

          <div className="bg-[#1a1728] border border-gray-700/50 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[450px]">
            
            {/* Ledger Header */}
            <div className="px-8 py-6 border-b border-gray-800/80 bg-black/20">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Settlement Ledger</div>
              <div className="text-2xl font-extrabold text-white">Equal Split Breakdown</div>
            </div>

            {/* Ledger Body */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Total Paid by {payerName}</div>
                  <div className="text-3xl font-bold text-white">KSh {totalAmount.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Per Person</div>
                  <div className="text-xl font-bold text-primary">KSh {perPerson.toLocaleString()}</div>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Pending IOUs</div>
                
                {activeMembers.map((name, index) => {
                  if (index === payerIndex) return null; // Payer doesn't owe themselves
                  
                  return (
                    <div key={name} className="flex items-center justify-between bg-darkbg/50 border border-gray-800 rounded-xl p-4 transition-all hover:bg-darkbg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-300">
                          {name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-white">{name} owes {payerName}</span>
                      </div>
                      <span className="text-sm font-bold text-warning">
                        KSh {perPerson.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status Footer */}
              <div className="mt-8 pt-6 border-t border-gray-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
                  <span className="text-xs font-bold text-success uppercase tracking-wider">M-Pesa Ready</span>
                </div>
                <div className="text-xs text-gray-500">
                  {membersCount - 1} transactions required
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SplitCalculator;