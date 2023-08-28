import MainLayout from "./components/layouts/MainLayout.jsx";
import {Helmet} from "react-helmet";
import Header from "./components/Header.jsx";

function App() {

   return (
       <>
        <MainLayout>
           <Helmet>
              <title className="flex">Sticker shop </title>
           </Helmet>
           <div className="mx-auto max-w-6xl">
              <Header/>
           </div>
        </MainLayout>
       </>
   )
}

export default App
