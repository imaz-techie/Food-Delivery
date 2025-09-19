import { CiSearch } from "react-icons/ci";
import logo from "../assets/burger.png";
import { MdShoppingCart } from "react-icons/md";
import { useContext, useEffect } from "react";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Navbar = () => {
  let { input, setInput, categ, setCateg, showCart, setShowCart } =
    useContext(dataContext);

  let item = useSelector((state) => state.cart);
  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCateg(newList);
    return () => {};
  }, [input]);

  return (
    <div className="w-full bg-white px-4 py-3 mb-5">
      {/* Container: flex-col on mobile, flex-row on desktop */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          />
          <h1
            className="
              relative text-green-400 text-xl sm:text-2xl font-extrabold tracking-wide uppercase
              drop-shadow-[4px_4px_0px_#065f46]
              [text-shadow:2px_2px_0px_#065f46,4px_4px_0px_#000]
              transform hover:scale-105 transition-transform duration-300
            "
          >
            QuickBite
            <span
              className="absolute inset-0 text-green-200 blur-sm opacity-40 -z-10"
              aria-hidden="true"
            >
              QuickBite
            </span>
          </h1>
        </div>

        {/* Middle + Right: Search + Cart */}
        <div className="flex w-full sm:w-auto items-center gap-3">
          {/* Search bar */}
          <form
            className="flex items-center relative rounded-xl bg-slate-100 flex-1 sm:flex-none sm:w-80"
            onSubmit={(e) => e.preventDefault()}
          >
            <CiSearch className="absolute left-3 text-green-500" />
            <input
              type="text"
              placeholder="Search food..."
              className="w-full p-2 pl-10 outline-none bg-transparent rounded-xl"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </form>

          {/* Cart */}
          <div className="bg-slate-100 px-4 py-3 rounded relative flex items-center">
            <span className="absolute top-0 right-2 text-green-700 font-bold text-sm sm:text-base">
              {item.length}
            </span>
            <MdShoppingCart
              className="w-6 h-6 sm:w-8 sm:h-8 text-green-800 cursor-pointer"
              onClick={() => setShowCart(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
