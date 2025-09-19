import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { dataContext } from "../Context/UserContext";
import Card2 from "../Components/Card2";
import Button from "../Components/Button";

const Cart = () => {
  const { setShowCart } = useContext(dataContext);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  let deliverFee = 20;
  let taxes = (subTotal * 5) / 100;
  let total = subTotal + deliverFee + taxes;

  return (
    <div className="w-full md:w-[40vw] h-full bg-slate-100 p-4 fixed top-0 right-0 shadow-lg overflow-y-auto hide-scrollbar">
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-green-700">Order Items</h4>
          <RxCross2
            className="text-green-700 text-2xl cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </div>
      </header>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <Card2
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              type={item.type}
              qty={item.qty}
            />
          ))}
          <div className="border-t-2 border-gray-300 mt-4 pt-4 text-lg font-semibold">
            <div className="flex justify-between px-4 py-1">
              <span className="text-zinc-600">SubTotal</span>
              <span className="text-green-600">{subTotal}/-</span>
            </div>
            <div className="flex justify-between px-4 yp-1">
              <span className="text-zinc-600">Delivery Fee</span>
              <span className="text-green-600">{deliverFee}/-</span>
            </div>
            <div className="flex justify-between px-4 py-1">
              <span className="text-zinc-600">Tax</span>
              <span className="text-green-600">{taxes}/-</span>
            </div>
            <hr className="text-zinc-300" />
            <div className="flex justify-between px-4 py-3">
              <span className="text-zinc-600 text-2xl ">Total</span>
              <span className="text-green-600 text-2xl">{total}/-</span>
            </div>
            <hr className="text-zinc-300" />
            <div className="w-full mt-2 flex justify-center">
              <Button content="Place Order" className="w-[70%]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
