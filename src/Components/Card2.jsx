import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecreaseQty, IncreaseQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Card2 = ({ name, image, price, type, id, qty }) => {
  let dispatch = useDispatch();

  function handleRemove() {
    dispatch(RemoveItem(id));
    toast.error("Item removed from cart!");
  }

  return (
    <div
      className="w-full h-[120px] p-2 shadow-lg flex justify-between bg-white rounded-lg"
      key={id}
    >
      <div className="h-full w-[60%] flex gap-4">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="w-[80%] h-full flex flex-col justify-evenly">
          <div className="text-xl font-semibold text-gray-700">{name}</div>
          <div className="w-[110px] h-[40px] flex rounded-lg border border-green-500 overflow-hidden shadow-lg">
            <button
              className="text-2xl bg-white text-green-500 w-[30%] h-full flex items-center justify-center"
              onClick={() => dispatch(DecreaseQty(id))}
            >
              -
            </button>
            <span className="bg-slate-200 w-[40%] h-full text-green-500 flex items-center justify-center">
              {qty}
            </span>
            <button
              className="text-2xl text-green-500 bg-white w-[30%] h-full flex justify-center items-center"
              onClick={() => dispatch(IncreaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-green-600 text-xl font-semibold">
          ₹{price * qty}/-
        </span>
        {/* <span className="text-xs">{type}</span> */}
        <RiDeleteBin5Line
          className="text-red-500 text-3xl cursor-pointer"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default Card2;
