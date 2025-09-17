import { TbLeaf } from "react-icons/tb";
import { GiChickenLeg } from "react-icons/gi";
import Button from "./Button";

const Card = ({ name, id, image, type, price, className }) => {
  const isVeg = type.toLowerCase() === "veg";

  return (
    <div
      key={id}
      className={`bg-white p-3 rounded shadow-lg hover:outline-green-500 flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Name */}
          <div className="text-2xl font-bold my-2">{name}</div>

          {/* Price and type */}
          <div className="flex justify-between text-lg font-semibold my-2 items-center">
            <div className={`${isVeg ? "text-green-600" : "text-red-600"}`}>
              Rs {price}/-
            </div>
            <div className="flex items-center gap-1">
              {isVeg ? (
                <TbLeaf className="text-green-500" />
              ) : (
                <GiChickenLeg className="text-red-500" />
              )}
              <span className={`${isVeg ? "text-green-600" : "text-red-600"}`}>
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <Button content="Add a Dish" />
      </div>
    </div>
  );
};

export default Card;
