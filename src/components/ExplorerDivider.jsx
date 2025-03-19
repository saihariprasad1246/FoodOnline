import { motion } from "framer-motion";
import { useRef,useState } from "react";
import { X } from "lucide-react";



const BottomSlideCard = ({ onClose,cuisines }) => {
  console.log(cuisines)
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 w-full bg-white shadow-xl p-4 rounded-t-2xl border-t z-50"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-300 p-2 rounded-full"
      >
        <X size={24} />
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cuisines and dishes</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-4">
        {cuisines.map((cuisine, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <p className="text-sm text-gray-700 mt-1 text-center">{cuisine.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ExploreDivider = () => {
  const scrollRef = useRef(null);
  const [isVisible,setIsVisible] = useState(false)
  const cards = [
    { name: "Biryani", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/800px-%22Hyderabadi_Dum_Biryani%22.jpg" },
    { name: "Pizza", image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp" },
    { name: "Burger", image: "https://t4.ftcdn.net/jpg/05/85/29/13/360_F_585291338_0J8Q8vYbKDCu8yqqwAO8PsQZ4ESP2zd8.jpg" },
    { name: "Fried Rice", image: "https://png.pngtree.com/png-clipart/20240610/original/pngtree-a-plate-of-fried-rice-isolated-on-transparent-background-png-image_15297740.png" },
    { name: "Chicken", image: "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-the-buffalo-wing-chronicles-transpreant-background-png-image_10308762.png" },
    { name: "Ice Creams", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeOfTQR49l4XnCavf_VULoWux6GMaqW3-mg&s" },
    { name: "Sweets", image: "https://img.freepik.com/premium-photo/indian-sweets-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu-gujiya-karanji-diwali-celebration_466689-4959.jpg?semt=ais_hybrid" }
  ];
  
    return (
      <div>
      <div className="flex items-center justify-center w-full my-6">
        <div className="w-1/5 border-t border-gray-300"></div>
        <span className=" text-gray-500 uppercase tracking-widest text-[10px]  ">
          WHAT'S ON YOUR MIND?
        </span>
        <div className="w-1/5 border-t border-gray-300">
        </div>
      </div>

        {/* Scroller */}
        <motion.div
  ref={scrollRef}
  className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth p-4"
  whileTap={{ cursor: "grabbing" }}
>
  {cards.map((card, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="min-w-[150px] h-[100px] text-white bg-amber-500 flex flex-col items-center justify-start rounded-2xl shadow-lg overflow-hidden relative">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="p-1 font-sans flex flex-col justify-baseline text-sm">
        {card.name}
      </div>
    </div>
  ))}
  <div
    className="flex flex-col items-center cursor-pointer"
    onClick={() => setIsVisible(true)}
  >
    <div className="min-w-[150px] h-[100px] text-white bg-amber-500 flex flex-col items-center justify-start rounded-2xl shadow-lg overflow-hidden relative">
      <img
        src="https://i.pinimg.com/736x/9d/09/41/9d094129968baef590f3b63e52ec2438.jpg"
        alt="See all"
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>
    <button className="p-1 font-sans flex flex-col justify-baseline text-sm">
      See all
    </button>
  </div>
</motion.div>



      {isVisible && <BottomSlideCard onClose={() => setIsVisible(false)} cuisines={cards} />}
      
      </div>
    );
  };
  
  export default ExploreDivider;
  