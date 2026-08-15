


// // src/App.jsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-slate-50">
//       {/* Navigation Header */}
//       <Navbar />

//       {/* Main Beautiful Animated Pages */}
//       <main className="flex-grow">
//         <Home />
//       </main>

//       {/* Dark Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const openComingSoon = (e) => {
    if (e) e.preventDefault();
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
  };

  // WhatsApp Configuration (Using Jayshree Book Center Bhawarkua Number)
  const whatsappNumber = "919893370750"; 
  const whatsappMessage = "Hello! I am interested in ordering books from Jayshree Book Center.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      
      {/* 1. Navigation Header (Passed onComingSoon prop) */}
      <Navbar onComingSoon={openComingSoon} />

      {/* 2. Main Pages */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* 3. Dark Footer (Passed onComingSoon prop) */}
      <Footer onComingSoon={openComingSoon} />

      {/* 4. 100% ORIGINAL OFFICIAL WHATSAPP FLOATING WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">
        
        {/* Tooltip on Hover */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
        </span>

        {/* Pulsing Outer Glow Ring using official WhatsApp green (#25D366) */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full"
        />

        {/* Main WhatsApp Button with 100% Official SVG path */}
        <motion.a
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-200"
          aria-label="Contact us on WhatsApp"
        >
          {/* Official HD WhatsApp Vector SVG */}
          <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>
      </div>

      {/* 5. SMOOTH COMING SOON OVERLAY MODAL */}
      <AnimatePresence>
        {showComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeComingSoon}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative bg-white border border-slate-100 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center overflow-hidden z-10"
            >
              {/* Decorative top icon */}
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                <BookOpen className="w-8 h-8 animate-pulse" />
              </div>

              {/* Close Button */}
              <button 
                onClick={closeComingSoon}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Headline */}
              <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-snug">
                Portal Under Active Development
              </h3>

              {/* Content Description */}
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Thank you for your interest! We are currently building a fully dynamic online inventory, custom stationery orders, and a complete admin panel for <span className="font-semibold text-slate-950">Jayshree Book Center</span>. 
              </p>

              {/* Status Badge */}
              <div className="mt-6 inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[10px] font-black px-3.5 py-2 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Coming Soon in Stage-2
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;