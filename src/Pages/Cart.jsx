// import { RxCross2 } from "react-icons/rx";
// import { useContext } from "react";
// import { dataContext } from "../Context/UserContext";
// import Card2 from "../Components/Card2";

// const Cart = () => {
//   const { setShowCart } = useContext(dataContext);

//   const cartItems = useSelector((state) => state.cart);

//   return (
//     <div className="w-full md:w-[40vw] h-full bg-white p-4">
//       <header>
//         <div className="flex justify-between items-center">
//           <h4 className="text-2xl text-green-500">Order Items</h4>
//           <RxCross2
//             className="text-green-700 text-2xl cursor-pointer"
//             onClick={() => setShowCart(false)}
//           />
//         </div>
//         <Card2 />
//       </header>
//     </div>
//   );
// };

// export default Cart;
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { dataContext } from "../Context/UserContext";
import Card2 from "../Components/Card2";

const Cart = () => {
  const { setShowCart } = useContext(dataContext);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  console.log(subTotal);

  return (
    <div className="w-full md:w-[40vw] h-full bg-slate-100 p-4 fixed top-0 right-0 shadow-lg overflow-y-auto">
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-green-500">Order Items</h4>
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
        </div>
      )}
      <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between text-lg font-semibold">
        <span>Subtotal:</span>
        <span className="text-green-600">₹{subTotal}/-</span>
      </div>
    </div>
  );
};

export default Cart;
