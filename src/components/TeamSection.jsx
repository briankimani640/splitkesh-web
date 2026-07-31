const TeamSection = () => {
  const team = [
    { initials: "RN", name: "Rodney Njiru", role: "Team Lead & Database Engineer", color: "bg-blue-500 shadow-blue-500/20" },
    { initials: "CM", name: "Chilon Murubi", role: "Backend Engineer", color: "bg-emerald-500 shadow-emerald-500/20" },
    { initials: "BK", name: "Brian Kimani", role: "Frontend Developer", color: "bg-primary shadow-primary/20" },
    { initials: "DL", name: "Derrik Lavisa", role: "Data Analyst", color: "bg-purple-500 shadow-purple-500/20" },
    { initials: "DN", name: "Denis Macharia", role: "Documentation", color: "bg-teal-500 shadow-teal-500/20" },
    { initials: "GK", name: "Gladwell Kwamboka", role: "Project Manager", color: "bg-danger shadow-danger/20" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-gray-800/50" id="team">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-3">
          The Team
        </h2>
        <h3 className="text-3xl font-bold text-white mb-2">
          Six people, one shared ledger
        </h3>
        <p className="text-gray-400">
          The developers behind SplitKesh.
        </p>
      </div>
      
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div 
            key={index} 
            className="bg-darkcard border border-gray-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-600 transition-colors duration-300"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg ${member.color}`}>
              {member.initials}
            </div>
            <h4 className="text-lg font-bold text-white">{member.name}</h4>
            <p className="text-sm text-gray-400 mt-1">{member.role}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;