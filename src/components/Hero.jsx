import { useState, useEffect } from 'react';

const Hero = () => {
  // --- Dynamic Typewriter Logic ---
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Chamas", "Roommates", "Savings Pools", "Roadtrips", "Saccos"];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 120;
    const currentWord = words[wordIndex];

    const handleType = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center overflow-hidden" id="about">
      
      {/* --- Custom Animation Styles --- */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 6s ease-in-out 3s infinite;
          }
        `}
      </style>

      {/* --- Ambient Gradient Orbs --- */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[30rem] h-[30rem] bg-success/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Column: Copy, CTA & Institutional Trust Bar */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-darkcard border border-gray-800 text-xs font-bold text-gray-300 uppercase tracking-widest shadow-lg">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            SplitKesh Engine v1.0 Live
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            The multi-signature <br className="hidden md:block" /> financial ledger for <br />
            <span className="text-primary">{text}</span>
            <span className="animate-pulse text-gray-500 font-light">|</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            Automate group savings, lock rotating asset pools with multi-sig security, and instantly split bills via Safaricom M-Pesa. Built for modern groups.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#chama-cycle" 
              className="bg-primary hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              See how it works
            </a>
            <a 
              href="/downloads/splitkesh-v1.apk" 
              download="SplitKesh-v1.0.apk"
              className="bg-darkcard border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Download APK
            </a>
          </div>

          {/* --- Institutional Trust Bar --- */}
          <div className="pt-8 mt-6 border-t border-gray-800/60 w-full max-w-lg">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Incubated & Supported By
            </p>
            <div className="flex items-center gap-8">
              <img 
                src="/jhub-logo.png" 
                alt="JHUB Africa" 
                className="h-10 md:h-12 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
              <img 
                src="/jkuat-logo.png" 
                alt="JKUAT" 
                className="h-10 md:h-12 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Mockup & Floating Cards */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Main Dashboard Card */}
          <div className="bg-[#1a1728]/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-black/50 w-full max-w-sm z-10 relative">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Verified Savings</span>
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
            </div>
            
            {/* The mono-font number */}
            <div className="text-4xl font-extrabold font-mono tracking-tight text-white mb-8">
              KSh 45,000
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-primary/20 border border-primary/30 text-primary py-3 rounded-xl text-sm font-bold transition-all hover:bg-primary hover:text-white">
                Chama Pool
              </button>
              <button className="bg-darkbg border border-gray-700 text-gray-300 py-3 rounded-xl text-sm font-bold transition-all hover:border-gray-500 hover:text-white">
                Peer IOUs
              </button>
            </div>
          </div>

          {/* Floating Card 1: M-Pesa Received (Left Side) */}
          <div className="absolute -left-4 md:-left-20 lg:-left-32 bottom-12 bg-darkcard border border-gray-700 p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-float w-[240px]">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success font-bold">
              ✓
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">M-Pesa Received</div>
              <div className="text-xs text-gray-400">
                <span className="font-mono text-gray-300">KSh 2,500</span> settled
              </div>
            </div>
          </div>

          {/* Floating Card 2: Action Needed (Standing alone below main card) */}
          <div className="absolute -bottom-20 right-0 md:-bottom-24 md:-right-8 lg:-bottom-24 lg:-right-12 bg-darkcard border border-warning/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-float-delayed w-[220px]">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center text-warning font-bold">
              !
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">Action Needed</div>
              <div className="text-xs text-gray-400">Merry-Go-Round</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;