const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkbg/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Area (Click to scroll to top) */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white group-hover:bg-purple-500 transition-colors">
            S
          </div>
          <span className="text-xl font-bold text-white tracking-wide group-hover:text-primary transition-colors">SplitKesh</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a>
          <a href="#team" className="hover:text-primary transition-colors">Team</a>
          
          {/* Smooth Scroll Download Button */}
          <a 
            href="/downloads/splitkesh-v1.apk" 
            download="SplitKesh-v1.0.apk"
            className="bg-primary/10 text-primary px-5 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all duration-200"
          >
            Download APK
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;