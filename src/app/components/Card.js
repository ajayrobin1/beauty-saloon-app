import dynamic from "next/dynamic";
// import Image from "next/image";
import Link from "next/link";

export default function Card({imgSrc, title, id}) {

  const SvgIcon =  dynamic(() => import(`@/app/icons${imgSrc}`))

    return ( 
  <div key={id} className="w-full text-left hover:bg-gray-100 lg:basis-1/2 border border-gray-400 bg-gray-50 mx-auto rounded-sm">
    <div className="relative flex">
      <SvgIcon 
        style={{width:80,height:80}} className={"p-1"}
      />
    <Link className="absolute top-0 left-0 block w-full h-full" href={`/services/${encodeURIComponent(title.toLowerCase())}`} ></Link>
      <div className="grow flex flex-col justify-evenly items-start pl-4">
      <p className="cursor-default py-auto w-100 tracking-wide text-md text-gray-800 capitalize dark:text-gray-800">
        {title}
      </p>
      <button className="p-2 text-sm font-semibold rounded-full select-none text-gray-800 uppercase transition-colors duration-300 transform bg-none hover:bg-green-700 dark:hover:bg-gray-800 dark:hover:text-white focus:text-green-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
      </div>
    </div>
  </div>
    );
  }