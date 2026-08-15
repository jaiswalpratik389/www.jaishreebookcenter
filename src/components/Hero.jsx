// // src/components/Hero.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, Sparkles, BookOpen, GraduationCap, Palette, Newspaper } from 'lucide-react';

// // Slider ki high-quality images aur details ka collection
// const slides = [
//   {
//     id: 1,
//     title: "School & College Textbooks",
//     subtitle: "Latest NCERT, CBSE & State Board Syllabus",
//     tag: "Academic",
//     color: "from-blue-600 to-indigo-800",
//     icon: <BookOpen className="w-4 h-4" />,
//     image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
//   },
//   {
//     id: 2,
//     title: "Competitive Exam Study Guides",
//     subtitle: "JEE, NEET, UPSC, SSC & Bank PO material",
//     tag: "Competitive",
//     color: "from-orange-500 to-red-600",
//     icon: <GraduationCap className="w-4 h-4" />,
//     image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Premium Stationery & Art Supplies",
//     subtitle: "Notebooks, Pens, Colors & Craft essentials",
//     tag: "Stationery",
//     color: "from-green-600 to-emerald-800",
//     icon: <Palette className="w-4 h-4" />,
//     image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Magazines, Novels & Literature",
//     subtitle: "Fiction, Self-Help, and Current Affairs journals",
//     tag: "Novels & Journals",
//     color: "from-purple-600 to-pink-700",
//     icon: <Newspaper className="w-4 h-4" />,
//     image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop"
//   }
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide effect: har 4 seconds (4000ms) me image automatically badal jayegi
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50/30 overflow-hidden py-16 md:py-24 px-4">
//       {/* Background Abstract Decorative Shapes */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>

//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
//         {/* Left Side Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="lg:col-span-7 space-y-6 text-center lg:text-left"
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
//             <Sparkles className="w-3.5 h-3.5 animate-spin" /> No. 1 Book Store in Town
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 leading-[1.1] tracking-tight">
//             Apni Padhai ko <br className="hidden sm:inline" />
//             Banayein Aur Bhi <span className="text-blue-600">Aasaan</span>
//           </h1>

//           <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//             School, College, Competition, Novels aur sabhi tarah ke Stationery items ek hi chhat ke niche. Aaj hi online order karein ya humari dukaan par visit karein!
//           </p>

//           {/* Quick Search Bar */}
//           <div className="max-w-md mx-auto lg:mx-0 bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex items-center">
//             <Search className="w-5 h-5 text-gray-400 ml-2.5 flex-shrink-0" />
//             <input 
//               type="text" 
//               placeholder="Search by book name, author or class..." 
//               className="w-full pl-3 pr-2 py-2 text-sm text-slate-800 focus:outline-none"
//             />
//             <button className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition duration-200">
//               Search
//             </button>
//           </div>

//           {/* Bullet highlights */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-500">
//             <span className="flex items-center gap-1">✅ 100% Original NCERT</span>
//             <span className="flex items-center gap-1">⚡ Fast Delivery</span>
//             <span className="flex items-center gap-1">📚 Call for Custom Orders</span>
//           </div>
//         </motion.div>

//         {/* Right Side - Custom Animated Auto-Slider */}
//         <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
          
//           {/* Main Card Frame with aspect ratio to avoid layout shifts */}
//           <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[4/4.5] rounded-3xl overflow-hidden shadow-2xl border border-white bg-white/50 backdrop-blur-sm p-3">
            
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current}
//                 initial={{ opacity: 0, scale: 0.95, y: 15 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 1.02, y: -15 }}
//                 transition={{ duration: 0.45, ease: "easeInOut" }}
//                 className="w-full h-full rounded-2xl overflow-hidden relative group"
//               >
//                 {/* Background sliding image */}
//                 <img 
//                   src={slides[current].image} 
//                   alt={slides[current].title} 
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Dark Gradient Overlay for legible text */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

//                 {/* Content inside sliding card */}
//                 <div className="absolute bottom-0 inset-x-0 p-6 space-y-3 text-white">
//                   {/* Category Badge with custom background */}
//                   <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${slides[current].color} text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg`}>
//                     {slides[current].icon} {slides[current].tag}
//                   </div>

//                   {/* Title and Subtitle */}
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-sm">
//                       {slides[current].title}
//                     </h3>
//                     <p className="text-xs text-slate-200 mt-1 drop-shadow-sm font-medium">
//                       {slides[current].subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Top Badge: Best Sellers/Offers status */}
//                 <div className="absolute top-4 right-4 bg-white/95 text-slate-900 text-[10px] font-extrabold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider backdrop-blur">
//                   📚 Jai Shree Book Center
//                 </div>

//               </motion.div>
//             </AnimatePresence>

//           </div>

//           {/* Slider Pagination Indicator Dots */}
//           <div className="flex space-x-2 mt-5">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   current === index ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               ></button>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, BookOpen, GraduationCap, Palette, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "School & College Textbooks",
    subtitle: "Latest NCERT, CBSE & State Board Syllabus",
    tag: "Academic",
    color: "from-blue-600 to-indigo-800",
    icon: <BookOpen className="w-4 h-4" />,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Competitive Exam Study Guides",
    subtitle: "JEE, NEET, UPSC, SSC & Bank PO material",
    tag: "Competitive",
    color: "from-orange-500 to-red-600",
    icon: <GraduationCap className="w-4 h-4" />,
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Premium Stationery & Art Supplies",
    subtitle: "Notebooks, Pens, Colors & Craft essentials",
    tag: "Stationery",
    color: "from-green-600 to-emerald-800",
    icon: <Palette className="w-4 h-4" />,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Magazines, Novels & Literature",
    subtitle: "Fiction, Self-Help, and Current Affairs journals",
    tag: "Novels & Journals",
    color: "from-purple-600 to-pink-700",
    icon: <Newspaper className="w-4 h-4" />,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect (4 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Height adjusted to fit perfectly on screen without extra scrolling
    <section className="relative w-full h-[calc(100vh-76px)] md:h-[calc(100vh-112px)] overflow-hidden bg-slate-950">
      
      {/* 1. Full-Screen Background Slider with Framer Motion Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover object-center"
            />
            {/* Super premium overlay gradient to guarantee text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Interactive Floating Content on Top of Background */}
      <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Left Side: Glowing Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center h-full">
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider w-max mx-auto lg:mx-0 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" /> No. 1 Book Store in Town
          </motion.div>

          {/* Dynamic animated titles */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md"
              >
                {slides[current].title}
              </motion.h1>
            </AnimatePresence>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm font-medium">
              School, College, Competition, Novels aur sabhi tarah ke Stationery items ek hi chhat ke niche. Aaj hi online order karein ya humari dukaan par visit karein!
            </p>
          </div>

          {/* Glassmorphic Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto lg:mx-0 bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20 flex items-center shadow-2xl"
          >
            <Search className="w-5 h-5 text-slate-300 ml-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search by book name, author or class..." 
              className="w-full pl-3 pr-2 py-2 text-sm text-white placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <button className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg">
              Search
            </button>
          </motion.div>

          {/* Bullet highlights with translucent touch */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur">✅ 100% Original NCERT</span>
            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur">⚡ Fast Delivery</span>
            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur">📚 Custom Orders</span>
          </div>
        </div>

        {/* Right Side: floating active slide info summary */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center h-full pr-4">
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/65 backdrop-blur-lg border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl space-y-4"
          >
            <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${slides[current].color} text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md`}>
              {slides[current].icon} {slides[current].tag}
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white leading-tight">
                {slides[current].title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {slides[current].subtitle}
              </p>
            </div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              ✨ Best Quality Guaranteed
            </div>
          </motion.div>
        </div>

      </div>

      {/* 3. Slider Arrow Buttons (Left/Right) for Premium Manual Navigation */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6 z-20 pointer-events-none">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 text-white transition backdrop-blur-sm shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext}
          className="pointer-events-auto p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 text-white transition backdrop-blur-sm shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 4. Active Progress Dots Indicator at the Bottom */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
}