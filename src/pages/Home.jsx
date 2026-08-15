// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Hero from '../components/Hero';
// import { BookOpen, Star, Sparkles, CheckCircle, HelpCircle, ChevronDown, Award, ShoppingCart, Percent } from 'lucide-react';

// // 1. Mock Book Catalog Data (School, Competitive, Stationery etc.)
// const bookCatalog = [
//   {
//     id: 1,
//     title: "NCERT Mathematics Textbook - Class 10",
//     category: "School Books",
//     image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300&auto=format&fit=crop",
//     price: 155,
//     originalPrice: 180,
//     rating: 4.8,
//     reviews: 124,
//     badge: "15% OFF",
//     description: "Official NCERT CBSE mathematics standard textbook for Class 10th according to latest syllabus."
//   },
//   {
//     id: 2,
//     title: "Concepts of Physics (Vol 1) - H.C. Verma",
//     category: "Competitive Exams",
//     image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=300&auto=format&fit=crop",
//     price: 395,
//     originalPrice: 460,
//     rating: 4.9,
//     reviews: 412,
//     badge: "Best Seller",
//     description: "Highly recommended standard book of physics for engineering aspirants (IIT-JEE & Foundation)."
//   },
//   {
//     id: 3,
//     title: "Classmate Premium Longbook (Unruled)",
//     category: "Stationery Items",
//     image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=300&auto=format&fit=crop",
//     price: 75,
//     originalPrice: 90,
//     rating: 4.5,
//     reviews: 86,
//     badge: "Trending",
//     description: "Pack of 1 premium smooth white page long notebook, 240 pages, unruled with hardbound cover."
//   },
//   {
//     id: 4,
//     title: "Pratiyogita Darpan (Current Affairs Monthly)",
//     category: "Magazines & Novels",
//     image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=300&auto=format&fit=crop",
//     price: 95,
//     originalPrice: 110,
//     rating: 4.6,
//     reviews: 64,
//     badge: "New Arrival",
//     description: "Latest monthly current affairs magazine for IAS, UPSC, SSC, Banking, and MBA preparation."
//   },
//   {
//     id: 5,
//     title: "Irodov Problems in General Physics",
//     category: "Competitive Exams",
//     image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=300&auto=format&fit=crop",
//     price: 180,
//     originalPrice: 220,
//     rating: 4.7,
//     reviews: 95,
//     badge: "Highly Rated",
//     description: "Classic practice book of physics problems for students aiming for advanced ranks in competitive exams."
//   },
//   {
//     id: 6,
//     title: "NCERT Science Textbook - Class 9",
//     category: "School Books",
//     image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&auto=format&fit=crop",
//     price: 135,
//     originalPrice: 150,
//     rating: 4.4,
//     reviews: 73,
//     badge: "Syllabus 2026",
//     description: "NCERT Science textbook covering Physics, Chemistry, and Biology modules for standard 9th."
//   }
// ];

// // 2. FAQs List
// const faqList = [
//   {
//     id: 1,
//     question: "Kya aapke paas latest session (2026-27) ki books mil jayengi?",
//     answer: "Haan, humare paas CBSE aur State Board ki naye syllabus ki sabhi NCERT aur private publication ki textbooks aur guides available hain."
//   },
//   {
//     id: 2,
//     question: "Agar koi book online website par nahi dikh rahi, toh kya main use order kar sakta hoon?",
//     answer: "Bilkul! Aap hume screen par diye gaye mobile number ya WhatsApp link par book ka naam/photo bhej sakte hain. Hum aapke liye use 24-48 ghante me arrange kar denge."
//   },
//   {
//     id: 3,
//     question: "School books set par kya koi special discount milta hai?",
//     answer: "Ji haan, full school book sets aur bulk competitive books orders par hum special package discount offer karte hain."
//   },
//   {
//     id: 4,
//     question: "Delivery options kya-kya hain aur payment kaise hoti hai?",
//     answer: "Hum local area me cash on delivery ya home delivery dete hain. Aap digital payments (UPI, Paytm, GooglePay) ya physical cash dono tariko se pay kar sakte hain."
//   }
// ];

// // 3. Testimonials/Reviews
// const reviews = [
//   {
//     id: 1,
//     name: "Aman Shrivastava",
//     role: "IIT-JEE Aspirant",
//     text: "Competitive exam ki saari standard aur standard reference books (HC Verma, Irodov) mujhe humesha yahan se sabse kam price me mil jati hain. Best service in town!",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Meera Deshmukh",
//     role: "Parent of Class 8th Student",
//     text: "Meri beti ka full school book set mujhe bilkul thik NCERT syllabus ke mutabik mila. Mujhe dukan par line me khada bhi nahi hona pada, order call par hi confirm ho gaya.",
//     rating: 5
//   }
// ];

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("All");
//   const [openFaq, setOpenFaq] = useState(null);

//   // Filter Categories
//   const categories = ["All", "School Books", "Competitive Exams", "Stationery Items", "Magazines & Novels"];
//   const filteredBooks = activeTab === "All" 
//     ? bookCatalog 
//     : bookCatalog.filter(book => book.category === activeTab);

//   return (
//     <div className="bg-slate-50 min-h-screen">
      
//       {/* 1. HERO SECTION */}
//       <Hero />

//       {/* 2. WHY CHOOSE US (Features Section) */}
//       <section className="py-16 bg-white border-y border-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <span className="text-blue-600 bg-blue-50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
//             Our Quality Standards
//           </span>
//           <h2 className="text-3xl font-extrabold text-slate-950 mt-3 mb-10">
//             Aapko Jai Shree Book Center Se Hi Kyun Kharidna Chahiye?
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Box 1 */}
//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
//             >
//               <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
//                 🎯
//               </div>
//               <h3 className="font-bold text-lg text-slate-950">100% Genuine Books</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 Koi bhi duplicate ya print defected book nahi. Hum sirf premium aur original publishers se hi deal karte hain.
//               </p>
//             </motion.div>

//             {/* Box 2 */}
//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
//             >
//               <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
//                 ⚡
//               </div>
//               <h3 className="font-bold text-lg text-slate-950">Instant Call Order</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 Aap ghar baithe hume direct call ya WhatsApp karke apne requirements likha sakte hain aur hum deliver kar denge.
//               </p>
//             </motion.div>

//             {/* Box 3 */}
//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
//             >
//               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
//                 🏷️
//               </div>
//               <h3 className="font-bold text-lg text-slate-950">Best Student Discounts</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 Market rate se hamesha behtar aur sasti rates. Humara maksad har student ko affordable books pahunchana hai.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* 3. PREMIUM BOOK CATALOG GRID SECTION */}
//       <section className="py-16 container mx-auto px-4">
//         <div className="text-center mb-10">
//           <span className="text-orange-600 bg-orange-50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
//             Explore Store Catalog
//           </span>
//           <h2 className="text-3xl font-extrabold text-slate-950 mt-3">Humari Lokpriya Books & Stationery</h2>
//           <p className="text-slate-500 text-sm mt-1">Apni pasand ke anusaar category select karein aur check karein.</p>
//         </div>

//         {/* Tab Filters */}
//         <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
//           {categories.map((cat) => (
//             <button 
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
//                 activeTab === cat 
//                   ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
//                   : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Book Grid */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredBooks.map((book) => (
//               <motion.div
//                 layout
//                 key={book.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//               >
//                 {/* Book Image Cover and Badge */}
//                 <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
//                   <img 
//                     src={book.image} 
//                     alt={book.title} 
//                     className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
//                   />
//                   <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
//                     {book.badge}
//                   </span>
//                 </div>

//                 {/* Card Content details */}
//                 <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
//                   <div className="space-y-2">
//                     <span className="text-[10px] text-blue-600 bg-blue-50 font-bold px-2 py-0.5 rounded uppercase">
//                       {book.category}
//                     </span>
//                     <h3 className="font-extrabold text-slate-950 text-base leading-snug line-clamp-2">
//                       {book.title}
//                     </h3>
//                     <p className="text-slate-500 text-xs line-clamp-2">
//                       {book.description}
//                     </p>
//                   </div>

//                   {/* Rating Stars */}
//                   <div className="flex items-center space-x-1 text-yellow-500">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className={`w-3.5 h-3.5 fill-current ${i < Math.floor(book.rating) ? 'text-yellow-500' : 'text-gray-200'}`} />
//                       ))}
//                     </div>
//                     <span className="text-slate-500 text-xs font-semibold ml-1">({book.reviews} Reviews)</span>
//                   </div>

//                   {/* Prices and Call to action */}
//                   <div className="border-t border-gray-50 pt-4 flex items-center justify-between">
//                     <div>
//                       <span className="text-xs text-slate-400 line-through mr-1.5">₹{book.originalPrice}</span>
//                       <span className="text-xl font-black text-slate-950">₹{book.price}</span>
//                     </div>
//                     <motion.button 
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-blue-600 text-white text-xs font-extrabold px-3.5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-1 shadow-sm"
//                     >
//                       <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>

//       {/* 4. REVIEWS/TESTIMONIALS SECTION */}
//       <section className="py-16 bg-slate-950 text-white">
//         <div className="container mx-auto px-4 text-center max-w-4xl">
//           <span className="text-blue-400 bg-blue-950/50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-blue-900">
//             Success Stories
//           </span>
//           <h2 className="text-3xl font-extrabold mt-3 mb-12">Humare Students Aur Parents Kya Kehte Hain</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {reviews.map((rev) => (
//               <div key={rev.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-left space-y-4 shadow-xl">
//                 <div className="flex items-center text-yellow-500">
//                   {[...Array(rev.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-slate-300 text-sm leading-relaxed italic">
//                   "{rev.text}"
//                 </p>
//                 <div>
//                   <h4 className="font-extrabold text-sm text-white">{rev.name}</h4>
//                   <span className="text-[10px] text-blue-400 font-bold">{rev.role}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. FAQ ACCORDION SECTION */}
//       <section className="py-16 container mx-auto px-4 max-w-3xl">
//         <div className="text-center mb-12">
//           <HelpCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
//           <h2 className="text-3xl font-extrabold text-slate-950">Aksar Pooche Jane Wale Sawal (FAQs)</h2>
//           <p className="text-slate-500 text-sm mt-1">Aapke sabhi basic sawalon ke turant jawab</p>
//         </div>

//         {/* FAQs list */}
//         <div className="space-y-4">
//           {faqList.map((faq, index) => (
//             <div 
//               key={faq.id}
//               className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm"
//             >
//               {/* Question Click Header */}
//               <button 
//                 onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                 className="w-full p-4 text-left font-bold text-slate-900 hover:text-blue-600 flex justify-between items-center transition"
//               >
//                 <span>{faq.question}</span>
//                 <motion.span
//                   animate={{ rotate: openFaq === index ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </motion.span>
//               </button>

//               {/* Collapsible Answer using Framer Motion */}
//               <AnimatePresence initial={false}>
//                 {openFaq === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.25, ease: "easeInOut" }}
//                   >
//                     <div className="p-4 pt-0 text-sm text-slate-500 border-t border-gray-50 leading-relaxed bg-slate-50/50">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// src/pages/Home.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import { BookOpen, Star, Sparkles, HelpCircle, ChevronDown, ShoppingCart, ShieldCheck, PhoneCall, Sparkle } from 'lucide-react';

// 1. Mock Book Catalog Data
const bookCatalog = [
  {
    id: 1,
    title: "NCERT Mathematics Textbook - Class 10",
    category: "School Books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=300&auto=format&fit=crop",
    price: 155,
    originalPrice: 180,
    rating: 4.8,
    reviews: 124,
    badge: "15% OFF",
    description: "Official NCERT CBSE mathematics standard textbook for Class 10th according to the latest curriculum."
  },
  {
    id: 2,
    title: "Concepts of Physics (Vol 1) - H.C. Verma",
    category: "Competitive Exams",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=300&auto=format&fit=crop",
    price: 395,
    originalPrice: 460,
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    description: "Highly recommended standard physics textbook for engineering aspirants (IIT-JEE & Foundation)."
  },
  {
    id: 3,
    title: "Classmate Premium Longbook (Unruled)",
    category: "Stationery Items",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=300&auto=format&fit=crop",
    price: 75,
    originalPrice: 90,
    rating: 4.5,
    reviews: 86,
    badge: "Trending",
    description: "Premium smooth white long notebook, 240 pages, unruled with durable hardbound binding."
  },
  {
    id: 4,
    title: "Pratiyogita Darpan (Current Affairs Monthly)",
    category: "Magazines & Novels",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=300&auto=format&fit=crop",
    price: 95,
    originalPrice: 110,
    rating: 4.6,
    reviews: 64,
    badge: "New Arrival",
    description: "Latest monthly current affairs magazine for Civil Services, UPSC, SSC, Banking, and MBA prep."
  },
  {
    id: 5,
    title: "Irodov Problems in General Physics",
    category: "Competitive Exams",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=300&auto=format&fit=crop",
    price: 180,
    originalPrice: 220,
    rating: 4.7,
    reviews: 95,
    badge: "Highly Rated",
    description: "Classic advanced practice textbook of physics problems designed for students aiming for premium ranks."
  },
  {
    id: 6,
    title: "NCERT Science Textbook - Class 9",
    category: "School Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&auto=format&fit=crop",
    price: 135,
    originalPrice: 150,
    rating: 4.4,
    reviews: 73,
    badge: "Syllabus 2026-27",
    description: "NCERT Science textbook covering fundamental Chemistry, Physics, and Biology modules for standard 9th."
  }
];

// 2. FAQs List (Completely translated to English)
const faqList = [
  {
    id: 1,
    question: "Do you stock the latest curriculum books for the current academic session?",
    answer: "Yes, we carry a complete range of NCERT, CBSE, and major private publication textbooks and guides fully updated for the current academic session."
  },
  {
    id: 2,
    question: "Can I order a book if it is not currently listed on the website?",
    answer: "Absolutely! You can connect with us directly via a phone call or WhatsApp, share the name/image of the book, and we will source and arrange it for you within 24 to 48 hours."
  },
  {
    id: 3,
    question: "Are there any special discounts on complete school book sets?",
    answer: "Yes, we offer exclusive package discounts on full school book sets as well as bulk institutional orders for competitive examinations."
  },
  {
    id: 4,
    question: "What are the payment and home delivery options?",
    answer: "We provide local home delivery with Cash on Delivery (COD) options. You can also pay securely online using UPI, cards, net banking, or physical cash."
  }
];

// 3. Testimonials (Completely translated to English)
const reviews = [
  {
    id: 1,
    name: "Aman Shrivastava",
    role: "IIT-JEE Aspirant",
    text: "I always find all standard competitive exam preparation materials and advanced reference books here at the best prices. Truly excellent service and support!",
    rating: 5
  },
  {
    id: 2,
    name: "Meera Deshmukh",
    role: "Parent of Class 10th Student",
    text: "My daughter's entire book list was accurately arranged according to the updated syllabus. Ordering via a quick call saved us hours of standing in seasonal queues.",
    rating: 5
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  // Filter Categories
  const categories = ["All", "School Books", "Competitive Exams", "Stationery Items", "Magazines & Novels"];
  const filteredBooks = activeTab === "All" 
    ? bookCatalog 
    : bookCatalog.filter(book => book.category === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHY CHOOSE US (Features Section) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white border-y border-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-blue-600 bg-blue-50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            Our Quality Standards
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-3 mb-10">
            Why Choose Jai Shree Book Center?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-950">100% Genuine Publications</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Zero duplicates or print defects. We partner directly with registered publishers to ensure authenticity.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-950">Instant Call Orders</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Skip the physical queues. Submit your academic requirements over a quick call or WhatsApp message.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 rounded-2xl border border-gray-100 space-y-4 text-center"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto text-xl font-bold">
                🏷️
              </div>
              <h3 className="font-bold text-lg text-slate-950">Unmatched Student Discounts</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Offering competitive pricing below standard market rates to keep quality education highly affordable.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. PREMIUM BOOK CATALOG GRID SECTION */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange-600 bg-orange-50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            Explore Store Catalog
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-3">Popular Books & Stationery</h2>
          <p className="text-slate-500 text-sm mt-1">Select your preferred category to browse through the academic resources.</p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Book Grid with Premium Exit/Entrance */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div
                layout
                key={book.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Book Image Cover and Badge */}
                <div className="relative h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                    {book.badge}
                  </span>
                </div>

                {/* Card Content details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-blue-600 bg-blue-50 font-bold px-2 py-0.5 rounded uppercase">
                      {book.category}
                    </span>
                    <h3 className="font-extrabold text-slate-950 text-base leading-snug line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 fill-current ${i < Math.floor(book.rating) ? 'text-yellow-500' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className="text-slate-500 text-xs font-semibold ml-1">({book.reviews} Reviews)</span>
                  </div>

                  {/* Prices and Call to action */}
                  <div className="border-t border-gray-50 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through mr-1.5">₹{book.originalPrice}</span>
                      <span className="text-xl font-black text-slate-950">₹{book.price}</span>
                    </div>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white text-xs font-extrabold px-3.5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-1 shadow-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. MEET THE FOUNDER / OWNER SECTION (Circular Image & Premium Visual Layout) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative"
      >
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Side: Circular Image with Animated Ring Overlays */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              
              {/* Outer rotating dashed premium halo */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-12px] rounded-full border border-dashed border-blue-500/30"
              />

              {/* Middle glowing steady blue border */}
              <div className="absolute inset-[-4px] rounded-full border border-blue-500/40 shadow-lg shadow-blue-500/20" />

              {/* Main circular image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                  alt="Founder Pankaj Sharma" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Absolute Badge showing service duration */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-xl border border-white/10 shadow-lg flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-[10px] font-black uppercase tracking-wider">Est. 1998</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Message & Vision */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkle className="w-3.5 h-3.5" /> Founder's Desk
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Empowering Minds, <br className="hidden sm:inline" />
              One Academic Journey At A Time
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              "For over two decades, Jai Shree Book Center has operated with a singular, unwavering focus: to serve as a reliable platform where students can find standard educational and examination resources. We recognize that education is the ultimate building block of a successful career, and our mission remains to make quality literature, syllabi textbooks, and advanced competitive mock exams accessible to every single aspirant at reasonable rates."
            </p>

            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-lg font-black text-white">Pankaj Sharma</h4>
              <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mt-0.5">Founder & Managing Director</p>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 5. REVIEWS/TESTIMONIALS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-slate-950 text-white border-b border-slate-900"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="text-blue-400 bg-blue-950/50 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-blue-900">
            Success Stories
          </span>
          <h2 className="text-3xl font-extrabold mt-3 mb-12">What Our Students & Parents Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl text-left space-y-4 shadow-xl">
                <div className="flex items-center text-yellow-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
                <div>
                  <h4 className="font-extrabold text-sm text-white">{rev.name}</h4>
                  <span className="text-[10px] text-blue-400 font-bold">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ ACCORDION SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-16 container mx-auto px-4 max-w-3xl"
      >
        <div className="text-center mb-12">
          <HelpCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-3xl font-extrabold text-slate-950">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mt-1">Get immediate answers to all your vital queries</p>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div 
              key={faq.id}
              className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Question Click Header */}
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-left font-bold text-slate-900 hover:text-blue-600 flex justify-between items-center transition"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </motion.span>
              </button>

              {/* Collapsible Answer using Framer Motion */}
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-4 pt-0 text-sm text-slate-500 border-t border-gray-50 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}