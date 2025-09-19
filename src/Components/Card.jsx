import { TbLeaf } from "react-icons/tb";
import { GiChickenLeg } from "react-icons/gi";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice"; // 👈 adjust path if needed
import { toast } from "react-toastify";

const Card = ({ name, id, image, type, price }) => {
  const dispatch = useDispatch();

  const isVeg = type.toLowerCase() === "veg";

  const handleAdd = () => {
    dispatch(AddItem({ id, name, image, type, price }));
    toast.success("Item added to cart!");
  };

  return (
    <div
      key={id}
      className="
        bg-white p-3 rounded-lg shadow-xl
        flex flex-col 
        w-full sm:w-[300px] md:w-[260px] lg:w-[280px]
        mx-4 sm:mx-0
      "
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xl sm:text-2xl font-bold my-2">{name}</div>

          <div className="flex justify-between text-base sm:text-lg font-semibold my-2 items-center">
            <div className={`${isVeg ? "text-green-600" : "text-red-600"}`}>
              ₹{price}/-
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

        <Button content="Add to Cart" onClick={handleAdd} />
      </div>
    </div>
  );
};

export default Card;
