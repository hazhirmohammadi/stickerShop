import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {addToCart, getTotals} from "../slices/cartSlice";
import CustomNumeralNumericFormat from "./Price";
import img from "../../public/img/product-5806313-4863042.png";
const CartTable = () => {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getTotals());
   }, [cart, dispatch]);

   const handleAddToCart = (product) => {
      dispatch(addToCart(product));
   };

   return (
       <div className="shadow-xl shadow-blue-600 rounded-3xl container mx-auto mb-20
       min-h-screen bg-gray-900">
          <Helmet>
             <title>Shopping cart Sticker shop</title>
          </Helmet>
          {cart.cartItems.length === 0 ? (
              <div className="text-center mt-10">
                 <p>Your shopping cart is empty </p>
              </div>
          ) : (
              <>
                 <h1 className=" leading-relaxed  font-extrabold  text-center text-amber-400 mt-4 py-2 sm:py-4">
                    Your shopping cart
                 </h1>

                 <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
                    <table className="mx-auto">
                       <thead>
                       <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
                          <th className="
                           rounded-tl-3xl
                          font-normal px-6 py-3 text-green-500 bg-gray-700
                          ">
                             Product
                          </th>
                          <th className="
                          bg-gray-700
                          font-primary font-normal px-4 py-4
                          ">
                             Total
                          </th>
                          <th className="
                          bg-gray-700
                           font-normal px-6 py-4 hidden sm:table-cell
                          ">
                             Price
                          </th>
                          <th className="
                          bg-gray-700 rounded-tr-3xl
                           font-normal px-6 py-4 text-red-500
                          ">
                             Delete
                          </th>
                       </tr>
                       </thead>
                       <tbody className="divide-y divide-palette-lighter">
                       {cart.cartItems.map((item) => (
                           <tr
                               key={item.id}
                               className=" text-sm sm:text-base text-gray-600 text-center"
                           >
                              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                                 <img
                                     // src={`http://localhost:9000/images/${item.sticker}`}
                                     src={img}
                                     alt={item.title}
                                     height={64}
                                     width={64}
                                     className={`hidden sm:inline-flex`}
                                 />
                                 <Link
                                     to={`/products/${item.id}`}
                                     className="pt-1 hover:bg-amber-700 rounded hover:text-green-50 text-amber-300"
                                 >
                                    {item.title}
                                 </Link>
                              </td>
                              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                                 <input
                                     type="number"
                                     inputMode="numeric"
                                     id="variant-quantity"
                                     name="variant-quantity"
                                     min="1"
                                     step="1"
                                     // value={item.cartQuantity}
                                     // onChange={(e) =>
                                     //     handleQty(e, item)
                                     // }
                                     className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                                 />
                              </td>
                              <td className="text-green-50 text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                                 <CustomNumeralNumericFormat
                                     value={
                                         item.price * item.cartQty
                                     }
                                     thousandSeparator=","
                                     prefix={`Price : `}
                                     suffix={` $ `}
                                 />
                              </td>
                              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                                 <button
                                     aria-label="delete-item"
                                     className="hover:bg-red-700  bg-red-500 text-green-50 p-1 rounded"
                                     // onClick={() =>
                                     //     handleRemoveFromCart(item)
                                     // }
                                 >
                                    Dle
                                 </button>
                              </td>
                           </tr>
                       ))}
                       {cart.cartTotalAmount === 0 ? null : (
                           <tr className="text-center">
                              <td></td>
                              <td className=" text-base text-gray-300 font-semibold uppercase px-4 sm:px-6 py-4">
                                 Total price :
                              </td>
                              <td className=" text-lg text-green-500 underline font-medium px-4 sm:px-6 py-4">
                                 <CustomNumeralNumericFormat
                                     value={cart.cartTotalAmount}
                                     thousandSeparator=","
                                     suffix={` $ `}
                                 />
                              </td>
                              <td></td>
                           </tr>
                       )}
                       </tbody>
                    </table>
                 </div>

                 <div className="max-w-sm mx-auto space-y-4 px-2">
                    <Link
                        to=""
                        className=" text-white text-lg  font-semibold pt-2 pb-1 leading-relaxed flex
      justify-center items-center focus:ring-1 focus:outline-none w-full hover:bg-emerald-900 rounded-sm bg-emerald-500"
                    >
                       Final approval
                    </Link>

                    <Link
                        to="/"
                        className="bg-blue-500 hover:bg-blue-700 border border-palette-primary text-palette-primary mt-5 text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
                    >
                       Back to Product page
                    </Link>
                 </div>
              </>
          )}
       </div>
   );
};

export default CartTable;