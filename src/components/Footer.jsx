const Footer = () => {
  return (
    <footer className="bg-darkcard border-t border-gray-800 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-wide">SplitKesh</span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
            The multi-signature financial ledger built for group savings, automated Chama pools, and instant M-Pesa settlements.
          </p>
          <div className="text-xs text-gray-500">
            Developed at JHUB Africa • JKUAT
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
            <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
          </ul>
        </div>

        {/* Legal / Resources Column */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Trust & Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#download" className="hover:text-primary transition-colors">APK Security Guide</a></li>
          </ul>
        </div>

      </div>
                  <div className="flex items-center gap-8">
              <img 
                src="/jhub-logo.png" 
                alt="JHUB Africa" 
                className="h-10 md:h-12 object-contain opacity-100  " 
              />
              <img 
                src="/jkuat-logo.png" 
                alt="JKUAT" 
                className="h-10 md:h-12 object-contain opacity-100  "
              />
            </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} SplitKesh. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built to make group finances transparent.</p>
      </div>
    </footer>
  );
};

export default Footer;