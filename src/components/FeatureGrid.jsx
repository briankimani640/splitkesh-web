const FeatureGrid = () => {
  const features = [
    {
      title: "Chama Asset Pools",
      description: "Create non-custodial cooperative groups. Track collective investments with delegated multi-party treasurer verification workflows.",
      icon: "🛡️"
    },
    {
      title: "Merry-Go-Round Cycles",
      description: "Automate cycle-based rotating payouts. The system tracks who is next in line and flags missing contributions.",
      icon: "🔄"
    },
    {
      title: "M-Pesa Integration",
      description: "Securely parse real-time M-Pesa payment callbacks to instantly update ledgers and clear pending peer IOUs.",
      icon: "💸"
    },
    {
      title: "Fair Split Math",
      description: "Divide everyday bills equally, by exact amount, or by percentage. Smart math calculates the fewest transactions needed to settle up.",
      icon: "⚖️"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-800/50" id="features">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-3">
          Features
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Everything a group needs to stay square
        </h3>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-darkbg border border-gray-800 p-8 rounded-2xl hover:border-primary/50 hover:bg-darkcard transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-800 group-hover:bg-primary/20 rounded-xl flex items-center justify-center text-2xl mb-6 transition-colors duration-300">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">
              {feature.title}
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FeatureGrid;