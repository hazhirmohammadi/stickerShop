import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
// import BsFillArrowLeftCircleFill from "react-icons/bs";
import img from "../../public/img/product-5806313-4863042.png";

import CustomNumeralNumericFormat from "./Price";
import ProductForm from "./ProductForm";
import {Helmet} from "react-helmet";

const ProductDetails = () => {
   const {productID} = useParams();

   const product = useSelector((state) =>
       state.products.items.find((item) => item.id === productID)
   );
   console.log("hazhir")
   return (
       <div
           className=" mt-3 mb-3 bg-gray-900 flex flex-col
            rounded-3xl align-middle justify-center items-center
             md:flex-row md:items-start space-y-8 md:space-y-0
              md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
          {product ? (
              <>
                 <Helmet>
                    <title> {product.title}</title>
                 </Helmet>
                 <div
                     className="mt-3 w-full md:w-1/2 max-w-md    rounded shadow-lg ml-5 bg-inherit">
                    <div className="relative h-96 ">
                       <img
                           // src={`http://localhost:9000/images/${product.sticker}`}
                           src={img}
                           className="transform duration-500 ease-in-out hover:scale-105 "
                           alt={product.title}
                       />
                    </div>
                 </div>

                 <div
                     className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
                    <Link
                        to="/"
                        className="mt-8 hover:bg-red-700 bg-red-500 my-2  border border-palette-primary text-purple-50 text-lg  font-semibold pt-2 pb-1 leading-relaxed flex
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-md"
                    >
                       Back to Product Page
                    </Link>

                    <div className=" font-primary">
                       <h1 className="bg-emerald-900 w-fit rounded-br-2xl leading-relaxed font-extrabold text-3xl text-gray-300 py-2 sm:py-4">
                          {product.title}
                       </h1>
                       <p className="font-medium text-lg text-gray-300">
                          {product.description}
                       </p>
                       <div className="text-xl text-palette-primary font-medium py-4 px-1 text-gray-300">
                          <CustomNumeralNumericFormat
                              value={product.price}
                              thousandSeparator=","
                              prefix={`Price : ‍‍‍`}
                              suffix={` $ `}
                          />
                       </div>
                    </div>

                    <ProductForm product={product}/>
                 </div>
              </>
          ) : (
              <p> Loading Product </p>
          )}
       </div>
   );
};

export default ProductDetails;