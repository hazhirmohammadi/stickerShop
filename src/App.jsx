import MainLayout from "./components/layouts/MainLayout.jsx";
import {Helmet} from "react-helmet";

function App() {

   return (
       <>
        <MainLayout>
           <Helmet>
              <title className="flex">Sticker shop </title>
           </Helmet>
           <div className="mx-auto max-w-6xl">

           </div>
        </MainLayout>
       </>
   )
}

export default App
