import { useState } from 'react';

const ChamaCycle = () => {
  // Start the demo at index 1 (Month 2) to show past, present, and future states
  const [currentTurn, setCurrentTurn] = useState(1); 
  const [isApproving, setIsApproving] = useState(false);
  const [approvedCount, setApprovedCount] = useState(0);

  const cycleMembers = [
    { id: 0, month: "Month 1", name: "Brian", status: currentTurn > 0 ? "disbursed" : currentTurn === 0 ? "active" : "upcoming" },
    { id: 1, month: "Month 2", name: "Faith", status: currentTurn > 1 ? "disbursed" : currentTurn === 1 ? "active" : "upcoming" },
    { id: 2, month: "Month 3", name: "Maina", status: currentTurn > 2 ? "disbursed" : currentTurn === 2 ? "active" : "upcoming" },
    { id: 3, month: "Month 4", name: "Sarah", status: currentTurn === 3 ? "active" : "upcoming" },
  ];

  const handleAuthorize = () => {
    if (isApproving) return;
    setIsApproving(true);

    // Simulate multi-sig approvals coming in over time
    setTimeout(() => setApprovedCount(1), 500);
    setTimeout(() => setApprovedCount(2), 1000);
    setTimeout(() => setApprovedCount(3), 1500); // 3/3 Approvals reached

    // Complete payout and move to next month
    setTimeout(() => {
      setIsApproving(false);
      setApprovedCount(0);
      setCurrentTurn((prev) => (prev < 3 ? prev + 1 : 0)); // Loop back if at the end
    }, 2500);
  };

  const activeMember = cycleMembers[currentTurn];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="chama-cycle">
      
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-success tracking-widest uppercase mb-3 block">Chama Automation</span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          The Merry-Go-Round, Secured
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          No more chasing members for contributions or wondering who gets paid next. Multi-signature approvals keep the rotating pool cryptographically locked.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: The Timeline Stepper */}
        <div className="space-y-6 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-800 z-0"></div>

          {cycleMembers.map((member, index) => (
            <div key={member.id} className="relative z-10 flex items-center gap-6">
              
              {/* Status Node */}
              <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-4 border-darkbg transition-all duration-500 ${
                member.status === 'disbursed' ? 'bg-success text-darkbg shadow-[0_0_15px_#22c55e]' :
                member.status === 'active' ? 'bg-primary text-white shadow-[0_0_20px_#a855f7] animate-pulse' :
                'bg-gray-800 text-gray-500'
              }`}>
                {member.status === 'disbursed' ? '✓' : 
                 member.status === 'active' ? '↓' : '🔒'}
              </div>

              {/* Info Card */}
              <div className={`flex-1 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                member.status === 'active' ? 'bg-darkcard border-primary/50 shadow-primary/10' :
                'bg-darkbg/50 border-gray-800 opacity-60 hover:opacity-100 hover:border-gray-600'
              }`}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    member.status === 'active' ? 'text-primary' : 'text-gray-500'
                  }`}>{member.month}</span>
                  {member.status === 'disbursed' && <span className="text-xs font-bold text-success">Settled</span>}
                </div>
                <div className="text-xl font-bold text-white">{member.name}'s Turn</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Active Payout Multi-Sig Dashboard */}
        <div className="bg-darkcard border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8 border-b border-gray-800/80 pb-6">
              <div>
                <div className="text-sm font-semibold text-gray-400 mb-1">Current Pool Total</div>
                <div className="text-4xl font-extrabold font-mono tracking-tight text-white">KSh 40,000</div>
              </div>
              <div className="bg-darkbg border border-gray-700 rounded-xl px-4 py-2 text-right">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Recipient</div>
                <div className="font-bold text-primary">{activeMember.name}</div>
              </div>
            </div>

            {/* Multi-Sig Authorization Status */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Multi-Sig Approvals Required</h4>
              
              <div className="flex gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex-1 h-14 rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
                    approvedCount >= num 
                      ? 'bg-success/20 border border-success/50 text-success' 
                      : 'bg-darkbg border border-gray-800 text-gray-600'
                  }`}>
                    {approvedCount >= num ? '✓ Signed' : 'Pending'}
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Button */}
            <button 
              onClick={handleAuthorize}
              disabled={isApproving}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex justify-center items-center gap-2 ${
                isApproving 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-primary hover:bg-purple-500 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]'
              }`}
            >
              {isApproving ? 'Verifying Signatures...' : `Authorize M-Pesa Payout to ${activeMember.name}`}
            </button>

            {/* Simulated Success Message */}
            <div className={`mt-4 text-center text-sm font-semibold text-success transition-opacity duration-300 ${
              approvedCount === 3 && isApproving ? 'opacity-100' : 'opacity-0'
            }`}>
              ✓ Funds successfully disbursed via M-Pesa.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChamaCycle;