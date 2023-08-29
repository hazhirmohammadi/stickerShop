import {useRouteError} from "react-router-dom";

export default function NotFound() {
   const error = useRouteError();
   console.error(error);
   return (
       <>
          <div id="error-page" className="rounded-3xl text-center mt-10 bg-gray-900">
             <h1 className="text-red-700">Not Found !</h1>

             <i>{error.statusText || error.message}</i>
          </div>
       </>
   )
}
