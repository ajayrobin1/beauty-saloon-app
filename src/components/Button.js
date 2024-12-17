import Link from "next/link";

export default function Button({children, className, onClick, type, href, disabled}) {

    const styleClass = className +
    " max-w-fit select-none my-3 px-4 py-2 tracking-wide text-white uppercase transition-colors duration-300 transform grad-bg rounded-sm focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80";
    if(href)
        return(
            <Link href={href} type={type} className={"block "+styleClass}>
                {children}
            </Link>
    )
    else
    return ( 
        <button disabled={disabled} onClick={onClick} type={type} className={styleClass}>
            {children}
        </button>
    
    );
  }