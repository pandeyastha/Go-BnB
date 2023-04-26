'use client';
interface ContainerProps{
    children: React.ReactNode;                  //"React.ReactNode" is a special type in React that represents a valid type for rendering children in a React component.
}



const Container :React.FC<ContainerProps> = ( {   // defines via TS , type of props
        children
    }
) => {
    return ( 
        <div
        className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        ">
            {children}
        </div>
     );
}
 
export default Container;