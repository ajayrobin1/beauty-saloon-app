export default function Card({imgSrc, title, id}) {
    return ( 
  <div key={id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-sm shadow-md" style={{'background-image': `url(${imgSrc})`}}></div>
      <div className="text-center md:text-left px-4 pb-2 w-56 -mt-10 overflow-hidden bg-white rounded-sm shadow-lg md:w-64 dark:bg-white">
            <p className="py-1 pt-2 font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-800">
                    {title}
            </p>
            <button className="py-1 px-2 text-xs font-semibold select-none text-white uppercase transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-700 dark:hover:bg-green-700 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Book Now
            </button>
      </div>
  </div>
    );
  }