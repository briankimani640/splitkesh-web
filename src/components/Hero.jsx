const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center pt-24 pb-16 overflow-hidden">
      
      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight relative z-10">
        Group money is messy. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
          It doesn't have to be.
        </span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 relative z-10">
        Automate your Chama savings, track rotating payouts, and settle peer IOUs instantly with multi-signature approvals. 
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20 relative z-10">
        <a href="#download" className="bg-primary hover:bg-purple-500 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:scale-105">
          Download APK
        </a>
        <a href="#how-it-works" className="bg-darkcard border border-gray-700 hover:border-primary text-white font-semibold py-4 px-10 rounded-full transition-colors duration-300">
          How it Works
        </a>
      </div>

      {/* Eye-Catching Animated UI Mockup */}
      <div className="relative w-full max-w-4xl h-80 mx-auto mt-8 perspective-1000 pointer-events-none">
        
        {/* Deep Purple Background Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>

        {/* Main App Card (Floating Center) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 z-20 bg-darkcard/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-2xl shadow-black/50 animate-[bounce_4s_infinite_ease-in-out]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Total Verified Savings</span>
            <span className="w-2.5 h-2.5 bg-success rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
          </div>
          <div className="text-4xl font-extrabold text-white mb-8">KSh 45,000</div>
          <div className="flex gap-3">
            <div className="h-10 flex-1 bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">Chama Pool</div>
            <div className="h-10 flex-1 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 text-sm font-medium">Peer IOUs</div>
          </div>
        </div>

        {/* Floating Notification 1 (M-Pesa Success) */}
        <div className="absolute top-40 md:top-24 left-4 md:left-10 lg:-left-4 w-64 z-30 bg-[#1a1728]/90 backdrop-blur-md border border-success/30 rounded-2xl p-4 shadow-xl animate-[bounce_5s_infinite_0.5s_ease-in-out]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center text-success text-xl">
              ✓
            </div>
            <div>
              <div className="text-sm font-bold text-white">M-Pesa Received</div>
              <div className="text-xs text-gray-400 mt-0.5">KSh 2,500 settled</div>
            </div>
          </div>
        </div>

        {/* Floating Notification 2 (Pending Approval) */}
        <div className="absolute top-10 md:top-6 right-4 md:right-10 lg:-right-4 w-56 z-10 bg-[#1a1728]/80 backdrop-blur-md border border-warning/30 rounded-2xl p-4 shadow-xl animate-[bounce_6s_infinite_1s_ease-in-out]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center text-warning font-bold">
              !
            </div>
            <div>
              <div className="text-sm font-bold text-white">Action Needed</div>
              <div className="text-xs text-gray-400 mt-0.5">Merry-Go-Round</div>
            </div>
          </div>
        </div>
        
      </div>

    </section>
  );
};

export default Hero;