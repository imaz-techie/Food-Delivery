import { BsCupHot, BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiFullPizza, GiHamburger, GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";

const Category = ({ filterCategory }) => {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => filterCategory(category.name)}
          className="bg-white p-4 mb-6 rounded-lg gap-2 w-[140px] h-[80px] 
                     flex flex-col items-center justify-center 
                     bg-gradient-to-b from-orange-300 to-orange-400 
                     cursor-pointer hover:bg-green-800 transition-all 
                     duration-200 hover:text-white"
        >
          <div className="text-white text-3xl">{category.icon}</div>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Category;

const categories = [
  { id: 1, icon: <BsFillGrid3X3GapFill />, name: "All" },
  { id: 2, icon: <BsCupHot />, name: "Breakfast" },
  { id: 3, icon: <LuSoup />, name: "Soups" },
  { id: 4, icon: <GiNoodles />, name: "Pasta" },
  { id: 5, icon: <MdFoodBank />, name: "Main_Course" },
  { id: 6, icon: <GiFullPizza />, name: "Pizza" },
  { id: 7, icon: <GiHamburger />, name: "Burger" },
];
