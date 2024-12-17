"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
      }
  
      window.addEventListener('scroll', updatePosition)
  
      updatePosition()
  
      return () => window.removeEventListener('scroll', updatePosition)
    }, [])
  
    return scrollPosition
  }

export default function Navbar() {
    const [open, setOpen] = useState(false);
    
    const pathname = usePathname()
    const scrollPosition = useScrollPosition()

    const toggleMenu = ()=>{
        setOpen(!open)
    }


  return ( 
    <nav x-data="{ isOpen: false }" className={`pb-1 fixed z-50 transition-all duration-300 transform w-full top-0 ${(open || scrollPosition > 0 )?' bg-black shadow-sm':' bg-none'} ${(open || scrollPosition > 0 )?'dark:bg-black shadow-md shadow-gray-900':'dark:bg-none'}`}>
    <div className="container px-3 py-2 mx-auto md:flex md:justify-evenly md:items-center">
        <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-xl grad-text md:text-2xl">
                LOGO
            </Link>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
                <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-50" aria-label="toggle menu">
            {!open &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg> //more
            }
            {open &&
                    <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> //close
            }
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`absolute flex flex-row right-0 w-full mt-2 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${open?'opacity-100 -translate-x-none': 'opacity-0 translate-x-full'}`}>
            
            <button className={`md:hidden bg-gray-900/50 block w-1/2 h-screen backdrop-blur-sm`} onClick={toggleMenu}>
            <span className='hidden'>Close</span>
            </button>
            <div className={`ml-auto md:w-full w-1/2 dark:bg-${open?'black':'none'} md:bg-none h-screen md:h-auto`}>
                <div className={`z-10 flex flex-col md:flex-row p-3 px-6 md:p-0  md:mx-6`}>
                    <Link  className={`my-2 transition-colors duration-300 transform ${pathname=='/'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/">Home</Link>
                    <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/booking'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/booking">Booking</Link>
                    <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/services'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/services">Services</Link>
                    <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/gallery'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/gallery">Gallery</Link>
                    <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/contact'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/contact">Contact</Link>
                <div className={`flex justify-start md:block mt-4 md:mt-0 px-0 md:ml-8`}>
                    <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/cart">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-pink-600 rounded-full"></span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</nav>

  );
}
