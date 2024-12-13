import Link from "next/link";

export default function Button({children, className, onClick, type, href}) {
    if(href)
        return(
            <Link href={href} type={type} className={className + " block max-w-fit select-none my-3 shadow-md px-6 py-3 font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-pink-800 rounded-sm hover:bg-pink-800 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80"}>
                {children}
            </Link>
    )
    else
    return ( 
        <button onClick={onClick} type={type} className={className + " select-none my-3 shadow-md px-6 py-3 font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-pink-800 rounded-sm hover:bg-pink-800 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80"}>
            {children}
        </button>
    
    );
  }