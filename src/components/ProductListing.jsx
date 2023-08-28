import { useSelector } from "react-redux";

import { useGetAllProductsQuery } from "../slices/productApi";
import ProductCard from "./ProductCard";

const ProductListing = () => {
    const { status } = useSelector((state) => state.products);

    const { data } = useGetAllProductsQuery();

    return (
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {status === "success" ? (
                <>
                    {data?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </>
            ) : status === "pending" ? (
                <p>Loading...</p>
            ) : (
                <p>has Problem</p>
            )}
        </div>
    );
};

export default ProductListing;
