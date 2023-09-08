import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <div
        className="flex flex-row items-center 
      justify-between mx-auto bg-slate-900 h-20"
      >
        <NavLink to="/">
          <img
            className="h-14 ml-[50px]"
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
          />
        </NavLink>

        <div className="flex  text-slate-100 font-medium space-x-10  mr-[100px]">
          <NavLink to="/">
            <p className="text-xl cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              Home
            </p>
          </NavLink>
          <NavLink to="/cart">
            <div className="">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200" />
              <sup className="-top-7 -right-3.5 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce  rounded-full  text-white">
                {cart.length}</sup>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
