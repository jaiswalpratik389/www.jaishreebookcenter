// // src/components/Footer.jsx
// import React from 'react';
// import { BookOpen, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// import logoSrc from '../assets/book-logo.png'; // Logo Path

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 mt-auto">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
//         {/* Col 1: Brand details */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2 text-white">
//             <img src={logoSrc} alt="JAI SHREE BOOK CENTER Logo" className="w-20 h-20" />    
//             <span className="text-lg font-black tracking-tight uppercase">JAI SHREE BOOK CENTER</span>
//           </div>
//           <p className="text-sm text-slate-400 leading-relaxed">
//             School, College, Competition books aur sabhi tarah ke premium stationery ka sabse vishwasniye kendra.
//           </p>
          
//           {/* Custom SVGs for Social Media (Since Lucide deprecated brand icons) */}
//           <div className="flex space-x-4 pt-2">
//             {/* Facebook */}
//             <a href="#" aria-label="Facebook" className="p-2 bg-slate-900 text-slate-300 hover:text-blue-500 hover:bg-slate-800 rounded-full transition">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
//               </svg>
//             </a>
//             {/* Instagram */}
//             <a href="#" aria-label="Instagram" className="p-2 bg-slate-900 text-slate-300 hover:text-pink-500 hover:bg-slate-800 rounded-full transition">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//               </svg>
//             </a>
//             {/* Twitter / X */}
//             <a href="#" aria-label="X (Twitter)" className="p-2 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Col 2: Quick Shop Links */}
//         <div>
//           <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-600 pl-2">
//             Categories
//           </h4>
//           <ul className="space-y-2.5 text-sm">
//             <li><a href="#school" className="hover:text-blue-400 transition">School Books (NCERT)</a></li>
//             <li><a href="#college" className="hover:text-blue-400 transition">College & Engineering</a></li>
//             <li><a href="#competition" className="hover:text-blue-400 transition">Competitive Exams (UPSC, SSC, JEE)</a></li>
//             <li><a href="#stationery" className="hover:text-blue-400 transition">Stationery & Art Supplies</a></li>
//             <li><a href="#magazines" className="hover:text-blue-400 transition">Novels & Magazines</a></li>
//           </ul>
//         </div>

//         {/* Col 3: Contact details */}
//         <div>
//           <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-600 pl-2">
//             Store Contact Info
//           </h4>
//           <ul className="space-y-3.5 text-sm">
//             <li className="flex items-start gap-2.5">
//               <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
//               <span>Payal Plaza U.G., 5–6, Main Square, Bhawarkua, Indore (M.P.)</span>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <Phone className="w-4 h-4 text-blue-500" />
//               <span>+91 98933 70750</span>
//             </li>
//             <li className="flex items-center gap-2.5">
//               <Mail className="w-4 h-4 text-blue-500" />
//               <span>pankaj.bshop@gmail.com</span>
//             </li>
//           </ul>
//         </div>

//         {/* Col 4: Premium Newsletter signup */}
//         <div>
//           <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-600 pl-2">
//             Stay Updated
//           </h4>
//           <p className="text-sm text-slate-400 mb-4 leading-relaxed">
//             Subscribe karein taaki aapko latest syllabus, exams notification aur discounts ki jankari milti rahe.
//           </p>
//           <div className="flex">
//             <input 
//               type="email" 
//               placeholder="Your Email" 
//               className="bg-slate-900 border border-slate-800 text-white rounded-l px-3 py-2 text-sm focus:outline-none focus:border-blue-500 w-full"
//             />
//             <button className="bg-blue-600 text-white px-3.5 rounded-r hover:bg-blue-700 transition">
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//       </div>

//       <div className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <p>© {new Date().getFullYear()} Jai Shree Book Center. All rights reserved.</p>
//         <div className="flex space-x-4 text-slate-500">
//           <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
//           <span>•</span>
//           <a href="#" className="hover:text-slate-300 transition">Terms & Conditions</a>
//         </div>
//       </div>
//     </footer>
//   );
// }


// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoSrc from '../assets/book-logo.png'; // Logo Path

export default function Footer() {
  
  // Animation variants for Staggered Grid Columns
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: customDelay, 
        ease: "easeOut" 
      }
    })
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 mt-auto overflow-hidden"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Brand details with entrance animation */}
        <motion.div 
          custom={0} 
          variants={columnVariants} 
          className="space-y-5"
        >
          {/* Logo & Text Block */}
          <div className="flex items-center space-x-3 text-white">
            <motion.img 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={logoSrc} 
              alt="JAI SHREE BOOK CENTER Logo" 
              className="w-16 h-16 object-contain" 
            />    
            <div className="flex flex-col justify-center leading-none">
              <span className="text-base font-black tracking-tight text-white">JAYSHREE</span>
              <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest mt-1">BOOK CENTER</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-400 leading-relaxed">
            School, College, Competition books and premium stationery items. Indore's most trusted educational hub since 1998.
          </p>
          
          {/* Social Icons Hover Transitions */}
          <div className="flex space-x-3.5 pt-2">
            {/* Facebook */}
            <motion.a 
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              aria-label="Facebook" 
              className="p-2.5 bg-slate-900 text-slate-300 hover:text-blue-500 hover:bg-slate-800 rounded-full shadow-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </motion.a>
            {/* Instagram */}
            <motion.a 
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              aria-label="Instagram" 
              className="p-2.5 bg-slate-900 text-slate-300 hover:text-pink-500 hover:bg-slate-800 rounded-full shadow-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
            {/* Twitter / X */}
            <motion.a 
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              aria-label="X (Twitter)" 
              className="p-2.5 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full shadow-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Col 2: Quick Shop Links with slide translation */}
        <motion.div 
          custom={0.15} 
          variants={columnVariants}
        >
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
            Categories
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#school" className="hover:text-amber-500 hover:translate-x-1.5 transition-all duration-200 inline-block">
                School Books (NCERT)
              </a>
            </li>
            <li>
              <a href="#college" className="hover:text-amber-500 hover:translate-x-1.5 transition-all duration-200 inline-block">
                College & Engineering
              </a>
            </li>
            <li>
              <a href="#competition" className="hover:text-amber-500 hover:translate-x-1.5 transition-all duration-200 inline-block">
                Competitive Exams (UPSC, JEE)
              </a>
            </li>
            <li>
              <a href="#stationery" className="hover:text-amber-500 hover:translate-x-1.5 transition-all duration-200 inline-block">
                Stationery & Art Supplies
              </a>
            </li>
            <li>
              <a href="#magazines" className="hover:text-amber-500 hover:translate-x-1.5 transition-all duration-200 inline-block">
                Novels & Magazines
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Col 3: Contact details with entrance */}
        <motion.div 
          custom={0.3} 
          variants={columnVariants}
        >
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
            Store Contact Info
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Payal Plaza U.G., 5–6, Main Square, Bhawarkua, Indore (M.P.)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+91 98933 70750</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>pankaj.bshop@gmail.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Col 4: Premium Newsletter signup with micro interactions */}
        <motion.div 
          custom={0.45} 
          variants={columnVariants}
        >
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
            Stay Updated
          </h4>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Subscribe to receive regular updates on current syllabus shifts, board schedules, and special exam-season discounts.
          </p>
          <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent text-white rounded-l px-2 py-1.5 text-sm focus:outline-none w-full placeholder-slate-500"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-slate-950 px-3.5 rounded-md hover:bg-amber-400 transition-colors flex items-center justify-center shadow"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Copyright area with subtle fade in */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p>© {new Date().getFullYear()} Jai Shree Book Center. All rights reserved.</p>
        <div className="flex space-x-4 text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
        </div>
      </motion.div>
    </motion.footer>
  );
}