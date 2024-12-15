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
        <div className={`absolute inset-x-0 z-10 w-full p-3 px-6 mt-4 transition-all duration-300 ease-in-out dark:bg-${open?'gray-900':'none'} md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${open?'opacity-100 -translate-x-none': 'opacity-0 translate-x-full'}`}>
            <div className="flex flex-col md:flex-row md:mx-6">
                <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/">Home</Link>
                <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/booking'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/booking">Booking</Link>
                <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/services'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/services">Services</Link>
                <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/gallery'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/gallery">Gallery</Link>
                <Link className={`my-2 transition-colors duration-300 transform ${pathname=='/contact'?'border-b-2 border-pink-900':'border-none'} text-gray-50 md:mx-4 md:my-0 uppercase`} href="/contact">Contact</Link>
            </div>
        </div>
    </div>
</nav>

  );
}
