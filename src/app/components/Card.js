import Link from "next/link";

export default function Card({imgSrc, title, id}) {
    return ( 
  <div key={id} className="border border-gray-400 flex flex-col items-center justify-center w-full max-w-sm mx-auto rounded-sm">
    <div className="relative w-full h-64 bg-gray-300 bg-center bg-cover" style={{'backgroundImage': `url(${imgSrc})`}}>
    <Link className="block w-full h-full bg-dark"
    href={`/services/${encodeURIComponent(title.toLowerCase())}`} >
    </Link>
    </div>
      <div className="flex justify-between text-center w-full mx-auto md:text-left px-4 py-2 overflow-hidden bg-white md:w-100 dark:bg-white">
            <button className="cursor-default py-auto w-100 tracking-wide text-md text-gray-800 capitalize dark:text-gray-800">
                    {title}
            </button>
            <button className="p-2 text-sm font-semibold rounded-full select-none text-gray-800 uppercase transition-colors duration-300 transform bg-none hover:bg-green-700 dark:hover:bg-gray-800 dark:hover:text-white focus:text-green-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </button>
      </div>
  </div>
    );
  }