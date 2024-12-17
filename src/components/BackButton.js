"use client";
import { useRouter } from 'next/navigation'

export default function BackButton({className}) {
    const router = useRouter()
        return(
            <button onClick={router.back} type="button" className={"my-3 px-4 py-2 flex flex-row items-center justify-center w-1/2 block max-w-fit select-none  font-medium tracking-wide text-white uppercase text-gray-700 transition-colors duration-200 bg-white border rounded-sm gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 "+ className}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-4 rtl:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </button>
    );
  }