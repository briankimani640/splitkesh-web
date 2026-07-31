const HowItWorks = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="how-it-works">
      
      <div className="text-center mb-16">
        <h2 className="text-sm text-warning font-bold tracking-widest uppercase mb-3">
          How it works
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Three steps to settled
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="bg-darkcard border border-gray-800 rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/20">
            01
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Add an expense</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Enter what was spent, log a Chama contribution, or start a Merry-Go-Round cycle. Snap the receipt if you like.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="bg-darkcard border border-gray-800 rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-success text-white rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-success/20">
            02
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Balances update</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Everyone's share and running balance recalculate instantly and transparently across the entire group.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="bg-darkcard border border-gray-800 rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-warning text-white rounded-lg flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-warning/20">
            03
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Settle up</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            The app suggests the fewest payments to clear debts, tracks M-Pesa settlements, and marks them paid.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;