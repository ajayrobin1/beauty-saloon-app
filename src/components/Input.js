export default function Button({className, placeholder, type, min, max, required, onChange}) {
    return ( 
        <input 
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
        onChange={onChange}
        className={className + 
        " block border  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-400/70 rounded-sm bg-white px-5 py-2.5 text-gray-700 focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-40 dark:border-pink-900 dark:bg-gray-50 dark:text-gray-900"} />
    );
  }