const ApkDownloadGuide = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="download">
      
      {/* Outer Card Wrapper */}
      <div className="bg-darkcard border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow Accent Effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary opacity-20 blur-3xl rounded-full pointer-events-none"></div>

        {/* Top Download Callout */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            Android Build Available
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get the SplitKesh Android App
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8">
            Download the latest direct APK build to start managing your Chamas, tracking Merry-Go-Rounds, and splitting group bills directly from your phone.
          </p>

          <a 
            href="/downloads/splitkesh.apk" 
            download="splitkesh.apk"
            className="inline-flex items-center gap-3 bg-primary hover:bg-purple-500 text-white text-lg font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg shadow-primary/25 hover:scale-105"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
            </svg>
            Download Direct APK
          </a>
        </div>

        <hr className="border-gray-800 my-10" />

        {/* Installation Instructions */}
        <div>
          <h3 className="text-xl font-bold text-white text-center mb-8">
            How to Install on Your Android Device
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="bg-darkbg/60 border border-gray-800/80 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold text-primary/40 block mb-3">01</span>
              <h4 className="text-white font-semibold mb-2">Download the File</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Tap the <strong>Download Direct APK</strong> button above to save the package file to your device.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-darkbg/60 border border-gray-800/80 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold text-primary/40 block mb-3">02</span>
              <h4 className="text-white font-semibold mb-2">Allow Unknown Apps</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                If prompted by Chrome or your browser, enable <em>"Allow installation from this source"</em> in your Android Security Settings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-darkbg/60 border border-gray-800/80 rounded-xl p-6 relative">
              <span className="text-3xl font-extrabold text-primary/40 block mb-3">03</span>
              <h4 className="text-white font-semibold mb-2">Install & Launch</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open your downloads or tap the notification prompt, select <strong>Install</strong>, and launch SplitKesh!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ApkDownloadGuide;