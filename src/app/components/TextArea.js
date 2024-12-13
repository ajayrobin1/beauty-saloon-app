export default function TextArea({className, placeholder, required, onChange}) {
    return ( 
    <textarea required={required} placeholder={placeholder} onChange={onChange} className={className + " block resize-none  border-b mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-400/70 rounded-sm bg-white px-4 h-32 py-2.5 text-gray-700 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-40 dark:border-pink-900 dark:bg-gray-50"}></textarea>
    );
  }