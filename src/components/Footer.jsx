const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-darkbg py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-xl font-bold text-white tracking-wide block">SplitKesh</span>
          <p className="text-gray-500 text-sm mt-1">
            A JKUAT & JHUB Africa student project &copy; 2026
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;