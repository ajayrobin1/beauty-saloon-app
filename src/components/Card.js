import dynamic from "next/dynamic";
// import Image from "next/image";
import Link from "next/link";

export default function Card({iconPath, title, id, path}) {

  const SvgIcon =  dynamic(() => import(`@/app/icons${iconPath}`))

    return ( 
      <div className="flex flex-col w-full lg:basis-1/2 mx-auto border border-gray-400 bg-gray-50  rounded-sm p-2">
  <div key={id} className="text-left hover:bg-gray-100 ">
    <div className="relative flex">
      <SvgIcon 
        style={{width:80,height:80}} className={"p-1"}
      />
    <Link className="absolute top-0 left-0 block w-full h-full" 
    href={{
            pathname:`/services${path}`,
            query: {id: id}, 
          }} >

  </Link>
      <div className="grow flex flex-col justify-evenly items-start pl-4">
      <p className="cursor-default py-auto w-100 tracking-wide text-md text-gray-800 capitalize dark:text-gray-800">
        {title}
      </p>
      </div>
    </div>
  </div>
      </div>
    );
  }