import { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [categ, setCateg] = useState(food_items);
  const [input, setInput] = useState("");
  const [showCart, setShowCart] = useState(false);

  let data = {
    categ,
    setCateg,
    input,
    setInput,
    showCart,
    setShowCart,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default UserContext;
