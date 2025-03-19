import { useRef } from "react";
import { motion } from "framer-motion";
import { PiBookmarkSimpleThin } from "react-icons/pi";

import { RxLapTimer } from "react-icons/rx";
const CardScroller = () => {
  const scrollRef = useRef(null);

  const cards = [
    { name: "Card 1", image: "https://via.placeholder.com/200" },
    { name: "Card 2", image: "https://via.placeholder.com/200" },
    { name: "Card 3", image: "https://via.placeholder.com/200" },
    { name: "Card 4", image: "https://via.placeholder.com/200" },
    { name: "Card 5", image: "https://via.placeholder.com/200" },
    { name: "Card 6", image: "https://via.placeholder.com/200" },
    { name: "Card 7", image: "https://via.placeholder.com/200" }
  ];

  return (
    <div>
      <div id="recomended-container">
      <div className="border border-gray-200 hover:shadow-md flex items-center justify-between mx-2 mt-2 rounded-2xl p-2 sm:mx-6">
           <h3 className="px-2 py-1 border-red-400 border-2 rounded-l-2xl bg-gray-200 text-sm sm:text-base">
                Recommended
            </h3>
            <div className="flex items-center gap-2 text-sm sm:text-base">
                   <PiBookmarkSimpleThin />
            <div>Collections</div>
      </div>
   </div>
   </div>
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Scroller */}
      <motion.div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth p-4 no-scrollbar"
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card, index) => (
          <div   key={index} >
          <div 
           
            className="min-w-[150px] h-[100px] text-white flex flex-col items-center justify-start rounded-2xl shadow-lg overflow-hidden relative"
          >
            <div className="absolute top-3 scale-150 right-3 ">
            <PiBookmarkSimpleThin />
            </div>
            <div className="absolute left-2 bottom-2">
              20% Off
              </div>
            
            <img src="https://content3.jdmagicbox.com/comp/def_content_category/kfc/274744306-5359482000748984-6753959334173458855-n-kfc-1008-6k5wh.jpg" alt={card.name} className="w-full h-40 object-cover rounded-lg" />
            </div>
            
            <div className="p-1 font-sans flex flex-col justify-baseline text-sm">
              <h2 className="text-lg font-semibold">KFC</h2>
              <div className="flex items-baseline  scale-y-80 justify-start">
              <RxLapTimer />
              <p>28 mins 20 kms</p>
              </div>
            </div>
         
          </div>
        ))}
      </motion.div>


      <motion.div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth p-4 no-scrollbar"
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card, index) => (
          <div   key={index} >
          <div 
           
            className="min-w-[150px] h-[100px] text-white flex flex-col items-center justify-start rounded-2xl shadow-lg overflow-hidden relative"
          >
            <div className="absolute top-3 scale-150 right-3 ">
            <PiBookmarkSimpleThin />
            </div>
            <div className="absolute left-2 bottom-2">
              20% Off
              </div>
            
            <img src="https://content3.jdmagicbox.com/comp/def_content_category/kfc/274744306-5359482000748984-6753959334173458855-n-kfc-1008-6k5wh.jpg" alt={card.name} className="w-full h-40 object-cover rounded-lg" />
            </div>
            
            <div className="p-1 font-sans flex flex-col justify-baseline text-sm">
              <h2 className="text-lg font-semibold">KFC</h2>
              <div className="flex items-baseline  scale-y-80 justify-start">
              <RxLapTimer />
              <p>28 mins 20 kms</p>
              </div>
            </div>
         
          </div>
        ))}
      </motion.div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
    </div>
  );
};

export default CardScroller;
