import { useContext, useState } from "react";
import Card from "../Components/Card";
import { food_items } from "../food";
import Category from "./Category";
import { dataContext } from "../Context/UserContext";

const FoodList = () => {
  let { categ, setCateg } = useContext(dataContext);

  const filterCategory = (category) => {
    if (category === "All") {
      setCateg(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCateg(newList);
    }
  };

  return (
    <div>
      <Category filterCategory={filterCategory} />
      <div className="flex flex-wrap gap-6 justify-center">
        {categ.map((item) => (
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
    </div>
  );
};

export default FoodList;
