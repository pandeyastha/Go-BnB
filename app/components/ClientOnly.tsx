//-------------to check if we are on server side rendering or not--------------------
//---wrapper on every component to protect from error of Hydration-----------
'use client';
import React, {  useEffect, useState } from "react";

interface ClientOnlyProps{
    children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
    }) => {
    const [hasMounted,setHasMounted] =useState(false);
    useEffect(()=>{
        setHasMounted(true);
    } );
    if(!hasMounted){
        return null;
    }
    return ( 
        <>
        {children}
        </>
     );
}


export default ClientOnly;