import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CartItem from "./CartItem";
import Cart from "../pages/Cart";
import { useDispatch, useSelector } from "react-redux";
//import { remove } from "../redux/slices/CartSlice";
//import {addToCart,removeFromCart} from "../pages/Home"
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.warn("Item removed from cart");
  };

  /*
  // tryed by self
  const [selected, setSelected] = useState(false);

function clickHandler() {
  if (!selected) {
    setSelected(true);
    addToCart(post); // Call the addToCart function here
    toast.success("Item added to Cart!");
    console.log("Item added to Cart!");
  } else {
    setSelected(false);
    removeFromCart(post); // Call the removeFromCart function here
    toast.error("Item Removed from Cart!");
    console.log("Item Removed from Cart!");
  }
}
*/

  /*
  function clickHandler() {
    if (!selected) {
      setSelected(true);
      <Cart key={post.id} post={post} />
      toast.success("Item added to Cart!");
      console.log("Item added to Cart!");
    } else {
      setSelected(false);
      toast.error("Item Removed from Cart!");
      console.log("Item Removed from Cart!");
    }
  }
*/
  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div>
        <p className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">
          {post.title}
        </p>
      </div>
      <div className=" w-40  text-gray-500 font-normal text-[10px] line-clamp-3">
        {post.description}
      </div>
      <div>
        <img className="h-[180px]" src={post.image}></img>
      </div>
      <p className="text-green-500 font-semibold">${post.price}</p>
      <div>
        {cart.some((p) => p.id === post.id) ? (
          <button className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
          onClick={removeFromCart}>Remove Items</button>
        ) : (
          <button
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}

    
      </div>
    </div>
  );
};

export default Product;
