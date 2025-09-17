import Navbar from "../Components/Navbar";
import Category from "./Category";
import FoodList from "./FoodList";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Navbar />
      <Category />
      <FoodList />
    </div>
  );
};

export default Home;
