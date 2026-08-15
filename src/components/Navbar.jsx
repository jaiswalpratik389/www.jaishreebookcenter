// // src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Search, ShoppingBag, Menu, X, Phone, MapPin, ChevronDown, User, BookOpen } from 'lucide-react';
// import logoSrc from '../assets/book-logo.png'; // Yahan apna logo ka path daalein

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [categoryOpen, setCategoryOpen] = useState(false);

//   // LOGO PATH: Aap yahan apna logo path "/logo.png" ya jo bhi ho, use paste kar sakte hain.
// //   const logoSrc = "../assets/images5.png"; // Yahan logo ka path daalein, khali rehne par default icon dikhega.

//   return (
//     <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
//       {/* 1. Top Mini Bar */}
//       <div className="bg-slate-900 text-white text-xs py-2 px-4 hidden sm:block">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <span className="flex items-center gap-1">
//               <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 XXXXX XXXXX
//             </span>
//             <span className="flex items-center gap-1 text-slate-300">
//               <MapPin className="w-3.5 h-3.5 text-blue-400" /> Station Road, Near Town Hall
//             </span>
//           </div>
//           <div>
//             <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase animate-pulse">
//               New Syllabus 2026-27 Available
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 2. Main Premium Navbar */}
//       <nav className="border-b border-gray-100 py-3.5 px-4">
//         <div className="container mx-auto flex justify-between items-center">
          
//           {/* Logo Section */}
//           <div className="flex items-center space-x-2">
//             {logoSrc ? (
//               <img src={logoSrc} alt=" Logo" className="h-10 w-auto object-contain" />
//             ) : (
//               <div className="flex items-center space-x-2">
//                 <div className="bg-blue-600 p-2 rounded-lg text-white">
//                   <BookOpen className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <span className="text-xl font-black text-slate-950 tracking-tight block leading-none">JAI SHREE</span>
//                   <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Book Center</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Search Bar - Client ko bahut premium dikhegi */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search School, College, Competitive books..."
//                 className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
//               />
//               <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-600" />
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex items-center space-x-6 text-[15px] font-semibold text-slate-700">
//             <a href="#home" className="text-blue-600">Home</a>
            
//             {/* Categories Dropdown */}
//             <div className="relative">
//               <button 
//                 onClick={() => setCategoryOpen(!categoryOpen)}
//                 className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none"
//               >
//                 Categories <ChevronDown className={`w-4 h-4 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {categoryOpen && (
//                 <div className="absolute top-full mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 text-sm text-slate-600">
//                   <a href="#school" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">School Books (NCERT/CBSE)</a>
//                   <a href="#college" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">College & Degree</a>
//                   <a href="#competition" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Competitive Exams</a>
//                   <a href="#stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Stationery Items</a>
//                   <a href="#magazines" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Magazines & Novels</a>
//                 </div>
//               )}
//             </div>

//             <a href="#about" className="hover:text-blue-600 transition">About Us</a>
//             <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
//           </div>

//           {/* Right Action Icons */}
//           <div className="flex items-center space-x-4">
//             <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition relative">
//               <ShoppingBag className="w-5 h-5" />
//               <span className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
//                 2
//               </span>
//             </button>

//             {/* Mock Profile/Admin Icon */}
//             <a href="#admin" className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition hidden sm:inline-block">
//               <User className="w-5 h-5" />
//             </a>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 text-slate-600 hover:bg-gray-100 rounded-lg transition"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* 3. Mobile Search & Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 shadow-inner">
//           {/* Mobile Search */}
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="Search books..."
//               className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none"
//             />
//             <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
//           </div>

//           {/* Mobile Nav Links */}
//           <div className="flex flex-col space-y-3 font-semibold text-slate-700">
//             <a href="#home" className="text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
//             <hr className="border-gray-100" />
//             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Categories</span>
//             <div className="pl-2 flex flex-col space-y-2 text-[15px] font-medium text-slate-600">
//               <a href="#school" onClick={() => setIsOpen(false)}>School Books</a>
//               <a href="#college" onClick={() => setIsOpen(false)}>College & Degree</a>
//               <a href="#competition" onClick={() => setIsOpen(false)}>Competitive Exams</a>
//               <a href="#stationery" onClick={() => setIsOpen(false)}>Stationery</a>
//               <a href="#magazines" onClick={() => setIsOpen(false)}>Magazines</a>
//             </div>
//             <hr className="border-gray-100" />
//             <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
//             <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
//             <a href="#admin" className="bg-blue-550 text-blue-600 py-2 rounded text-center text-sm font-bold bg-blue-50" onClick={() => setIsOpen(false)}>
//               Admin Portal Demo
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// import React, { useState } from 'react';
// import { Search, ShoppingBag, Menu, X, Phone, MapPin, ChevronDown, User, BookOpen } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logoSrc from '../assets/book-logo.png'; // Logo Path

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [categoryOpen, setCategoryOpen] = useState(false);

//   return (
//     <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
//       {/* 1. Top Mini Bar */}
//       <div className="bg-slate-900 text-white text-xs py-2 px-4 hidden sm:block">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <span className="flex items-center gap-1">
//               <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 XXXXX XXXXX
//             </span>
//             <span className="flex items-center gap-1 text-slate-300">
//               <MapPin className="w-3.5 h-3.5 text-blue-400" /> Station Road, Near Town Hall
//             </span>
//           </div>
//           <div>
//             <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase animate-pulse">
//               New Syllabus 2026-27 Available
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* 2. Main Premium Navbar */}
//       <nav className="border-b border-gray-100 py-3 px-4">
//         <div className="container mx-auto flex justify-between items-center">
          
//           {/* Logo Section - Isko bada aur smooth dynamic entrance diya hai */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="flex items-center space-x-2 py-1"
//           >
//             {logoSrc ? (
//               <img 
//                 src={logoSrc} 
//                 alt="Logo" 
//                 className="h-14 sm:h-16 md:h-18 w-auto object-contain hover:scale-105 transition-transform duration-200" 
//               />
//             ) : (
//               <div className="flex items-center space-x-2">
//                 <div className="bg-blue-600 p-2 rounded-lg text-white">
//                   <BookOpen className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <span className="text-xl font-black text-slate-950 tracking-tight block leading-none">JAI SHREE</span>
//                   <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Book Center</span>
//                 </div>
//               </div>
//             )}
//           </motion.div>

//           {/* Search Bar */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search School, College, Competitive books..."
//                 className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
//               />
//               <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-600" />
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex items-center space-x-6 text-[15px] font-semibold text-slate-700">
//             <a href="#home" className="text-blue-600 relative group">
//               Home
//               <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600 transform scale-x-100 transition-transform duration-300"></span>
//             </a>
            
//             {/* Categories Dropdown with Framer Motion */}
//             <div className="relative">
//               <button 
//                 onClick={() => setCategoryOpen(!categoryOpen)}
//                 onBlur={() => setTimeout(() => setCategoryOpen(false), 200)} // Blur handler to close when clicking outside
//                 className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none"
//               >
//                 Categories 
//                 <motion.span
//                   animate={{ rotate: categoryOpen ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ChevronDown className="w-4 h-4" />
//                 </motion.span>
//               </button>
              
//               <AnimatePresence>
//                 {categoryOpen && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 15 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 15 }}
//                     transition={{ duration: 0.2, ease: "easeOut" }}
//                     className="absolute top-full mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2.5 z-50 text-sm text-slate-600"
//                   >
//                     <a href="#school" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">School Books (NCERT/CBSE)</a>
//                     <a href="#college" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">College & Degree</a>
//                     <a href="#competition" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">Competitive Exams</a>
//                     <a href="#stationery" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">Stationery Items</a>
//                     <a href="#magazines" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">Magazines & Novels</a>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <a href="#about" className="hover:text-blue-600 transition relative group">
//               About Us
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 group-hover:w-full transform scale-x-100 transition-all duration-300"></span>
//             </a>
//             <a href="#contact" className="hover:text-blue-600 transition relative group">
//               Contact
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 group-hover:w-full transform scale-x-100 transition-all duration-300"></span>
//             </a>
//           </div>

//           {/* Right Action Icons */}
//           <div className="flex items-center space-x-4">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition relative"
//             >
//               <ShoppingBag className="w-5 h-5" />
//               <motion.span 
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center"
//               >
//                 2
//               </motion.span>
//             </motion.button>

//             {/* Profile/Admin Icon */}
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#admin" 
//               className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition hidden sm:inline-block"
//             >
//               <User className="w-5 h-5" />
//             </motion.a>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2 text-slate-600 hover:bg-gray-100 rounded-lg transition"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* 3. Mobile Search & Menu with Framer Motion Animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 shadow-inner overflow-hidden"
//           >
//             {/* Mobile Search */}
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none"
//               />
//               <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
//             </div>

//             {/* Mobile Nav Links */}
//             <div className="flex flex-col space-y-3 font-semibold text-slate-700">
//               <a href="#home" className="text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
//               <hr className="border-gray-100" />
//               <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Categories</span>
//               <div className="pl-2 flex flex-col space-y-2 text-[15px] font-medium text-slate-600">
//                 <a href="#school" onClick={() => setIsOpen(false)}>School Books</a>
//                 <a href="#college" onClick={() => setIsOpen(false)}>College & Degree</a>
//                 <a href="#competition" onClick={() => setIsOpen(false)}>Competitive Exams</a>
//                 <a href="#stationery" onClick={() => setIsOpen(false)}>Stationery</a>
//                 <a href="#magazines" onClick={() => setIsOpen(false)}>Magazines</a>
//               </div>
//               <hr className="border-gray-100" />
//               <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
//               <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
//               <a href="#admin" className="bg-blue-50 text-blue-650 py-2 rounded text-center text-sm font-bold block" onClick={() => setIsOpen(false)}>
//                 Admin Portal Demo
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Phone, MapPin, ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '../assets/book-logo.png'; // Logo Path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      {/* 1. Top Mini Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 98933 70750
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Payal Plaza U.G., 5–6, Main Square, Bhawarkua,
            </span>
          </div>
          <div>
            <span className="bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase animate-pulse">
              New Syllabus 2026-27 Available
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Premium Navbar */}
      <nav className="border-b border-gray-100 py-2.5 px-4 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo & Brand Name Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-3 py-1 cursor-pointer"
          >
            {logoSrc ? (
              <img 
                src={logoSrc} 
                alt="Jayshree Book Center Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain hover:scale-105 transition-transform duration-200" 
              />
            ) : (
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
            )}
            
            {/* Elegant Text Next to Logo matching the theme (Navy & Golden) */}
            <div className="flex flex-col justify-center leading-none">
              <span className="text-lg md:text-xl font-black text-slate-950 tracking-tight">
                JAISHREE
              </span>
              <span className="text-[9px] md:text-[11px] font-extrabold text-amber-600 uppercase tracking-widest mt-1">
                BOOK CENTER
              </span>
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search School, College, Competitive books..."
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-amber-500" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-[15px] font-semibold text-slate-700">
            <a href="#home" className="text-amber-600 relative group">
              Home
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-amber-500 transform scale-x-100 transition-transform duration-300"></span>
            </a>
            
            {/* Categories Dropdown with Framer Motion */}
            <div className="relative">
              <button 
                onClick={() => setCategoryOpen(!categoryOpen)}
                onBlur={() => setTimeout(() => setCategoryOpen(false), 200)}
                className="flex items-center gap-1 hover:text-amber-500 transition focus:outline-none"
              >
                Categories 
                <motion.span
                  animate={{ rotate: categoryOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {categoryOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2.5 z-50 text-sm text-slate-600"
                  >
                    <a href="#school" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">School Books (NCERT/CBSE)</a>
                    <a href="#college" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">College & Degree</a>
                    <a href="#competition" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">Competitive Exams</a>
                    <a href="#stationery" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">Stationery Items</a>
                    <a href="#magazines" className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">Magazines & Novels</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#about" className="hover:text-amber-500 transition relative group">
              About Us
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-amber-500 group-hover:w-full transform scale-x-100 transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-amber-500 transition relative group">
              Contact
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-amber-500 group-hover:w-full transform scale-x-100 transition-all duration-300"></span>
            </a>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-slate-600 hover:text-amber-500 hover:bg-amber-50 rounded-full transition relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 bg-red-500 text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center"
              >
                2
              </motion.span>
            </motion.button>

            {/* Profile/Admin Icon */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#admin" 
              className="p-2 text-slate-600 hover:text-amber-500 hover:bg-amber-50 rounded-full transition hidden sm:inline-block"
            >
              <User className="w-5 h-5" />
            </motion.a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-gray-100 rounded-lg transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* 3. Mobile Search & Menu with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 shadow-inner overflow-hidden"
          >
            {/* Mobile Search */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-3 font-semibold text-slate-700">
              <a href="#home" className="text-amber-550" onClick={() => setIsOpen(false)}>Home</a>
              <hr className="border-gray-100" />
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Categories</span>
              <div className="pl-2 flex flex-col space-y-2 text-[15px] font-medium text-slate-600">
                <a href="#school" onClick={() => setIsOpen(false)}>School Books</a>
                <a href="#college" onClick={() => setIsOpen(false)}>College & Degree</a>
                <a href="#competition" onClick={() => setIsOpen(false)}>Competitive Exams</a>
                <a href="#stationery" onClick={() => setIsOpen(false)}>Stationery</a>
                <a href="#magazines" onClick={() => setIsOpen(false)}>Magazines</a>
              </div>
              <hr className="border-gray-100" />
              <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
              <a href="#admin" className="bg-amber-50 text-amber-650 py-2 rounded text-center text-sm font-bold block" onClick={() => setIsOpen(false)}>
                Admin Portal Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}