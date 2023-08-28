import MainLayout from "./components/layouts/MainLayout.jsx";
import {Helmet} from "react-helmet";
import Header from "./components/Header.jsx";
import ProductListing from "./components/ProductListing.jsx";

function App() {

   return (
       <>
        <MainLayout>
           <Helmet>
              <title className="flex">Sticker shop </title>
           </Helmet>
           <div className="mx-auto max-w-6xl">
              <Header/>
              <ProductListing/>
           </div>
        </MainLayout>
       </>
   )
}

export default App
