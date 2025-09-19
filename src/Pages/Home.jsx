import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Cart from "./Cart";
import FoodList from "./FoodList";
import { dataContext } from "../Context/UserContext";

const Home = () => {
  const { showCart, setShowCart } = useContext(dataContext);

  return (
    <div className="w-full min-h-screen bg-slate-200 relative">
      <Navbar />
      <FoodList />

      {/* Backdrop */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setShowCart(false)}
        ></div>
      )}

      {/* Cart sliding panel */}
      {showCart && (
        <div className="fixed top-0 right-0 h-full w-full md:w-[40vw] z-50 transform transition-transform duration-300">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Home;
