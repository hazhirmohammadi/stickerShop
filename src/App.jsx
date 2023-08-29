import MainLayout from "./components/layouts/MainLayout.jsx";
import {Helmet} from "react-helmet";
import Header from "./components/Header.jsx";
import ProductListing from "./components/ProductListing.jsx";
// import {useSelector} from "react-redux";
import PaginateItems from "./components/common/PaginateItems.jsx";

function App() {
// const {item:products,status}=useSelector(state => state.products);
   return (
       <>
          <MainLayout>
             <Helmet>
                <title className="flex">Sticker shop </title>
             </Helmet>
             <div className="mx-auto max-w-6xl">
                <Header/>
                <ProductListing/>
                {/*<PaginateItems*/}
                {/*    productsPerPage={6}*/}
                {/*    products={products}*/}
                {/*    status={status}*/}
                {/*/>*/}
             </div>
          </MainLayout>
       </>
   )
}

export default App
