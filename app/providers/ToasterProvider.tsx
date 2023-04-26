'use client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return ( 
    <Toaster />
   );
}
 
export default ToasterProvider;

/*Toaster is a foreign library not connected well with next.js app router , so 
we make it as a client side component 
Direct import as<Toaster/> causes error as needs 1 parent that is client and also 1 useEffect hook is needed
for Toasater 
 */