import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import CustomNumeralNumericFormat from "./Price.jsx";
import {useSelector} from "react-redux";

const Navbar = () => {
   const {cartItems} =useSelector(state => state.cart)
   return (
       <header className="border-b border-palette-lighter sticky top-0 z-20 bg-emerald-700">
          <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
             <Link to="/" className="cursor-pointer">
                <h1 className="flex no-underline">
                        <span className=" text-lg   font-bold tracking-tight  text-amber-400 bg-blue-500 rounded p-1">
                           Sticker shop
                        </span>
                </h1>
             </Link>
             <div className="flex text-center align-baseline mb-8">
                <Link to="/cart" className="relative">
                   <i className="text-3xl mb-5 absolute ">
                      <FaShoppingCart className="text-purple-400"/>
                   </i>
                    {cartItems.length === 0 ? null : (
                   <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                      <CustomNumeralNumericFormat
                                    value={cartItems.length}
                                     thousandSeparator=","
                                />

                   </div>
                    )}
                </Link>
             </div>
          </div>
       </header>
   );
};

export default Navbar;
