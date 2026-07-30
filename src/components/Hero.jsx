const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20 pb-16">
      
      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
        Group money is messy. <br />
        <span className="text-primary">It doesn't have to be.</span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Automate your Chama savings, track rotating payouts, and settle peer IOUs instantly with multi-signature approvals. 
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="bg-primary hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
          Download APK
        </button>
        <button className="bg-darkcard border border-gray-700 hover:border-primary text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
          How it Works
        </button>
      </div>

      {/* Placeholder for the App Screenshots */}
      <div className="w-full max-w-4xl h-64 md:h-96 bg-darkcard rounded-2xl border border-gray-800 flex items-center justify-center shadow-2xl">
        <p className="text-gray-600 font-mono">[ App Screenshots Placeholder ]</p>
      </div>

    </section>
  );
};

export default Hero;