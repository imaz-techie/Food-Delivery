import Card from "../Components/Card";
import { food_items } from "../food";

const FoodList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {food_items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.food_name}
          image={item.food_image}
          type={item.food_type === "veg" ? "Veg" : "Non-Veg"}
          price={item.price}
          className="w-full sm:w-80 md:w-72 lg:w-72"
        />
      ))}
    </div>
  );
};

export default FoodList;
