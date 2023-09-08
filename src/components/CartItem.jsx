import React from "react";
//import removeFromCart from "../pages/Home"
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../redux/slices/CartSlice";
import 'react-toastify/dist/ReactToastify.css';


const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center mt-8">
        <img className="w-[20%] h-[250px]" src={item.image}></img>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-bold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium ">
            {item.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdOutlineDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
