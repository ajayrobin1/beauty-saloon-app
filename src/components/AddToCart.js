"use client"

export default function AddToCart({item}) {

  const cart = [];

  const handleClick = () =>{
    cart.push(item)
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  return(
      <>
            <button 
            className="mx-auto my-2 border grad-border flex items-center px-4 py-2 tracking-wide uppercase transition-colors duration-300 transform bg-none rounded-sm focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={handleClick}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    <span className="mx-3">Add to Cart</span>
</button>
     
      </>
  ) 
  
}