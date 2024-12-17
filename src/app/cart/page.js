"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";

export default function Page() {
    const cart = [];
    return ( 
      <>
      <Hero imgSrc={'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
        <h2 className="imperial-script-regular text-white ">
          Your Cart
        </h2>
      </Hero>

    <div className="bg-white p-6">
        {
          cart.length === 0?

            <div className="mx-auto flex w-full border border-gray-400 max-w-sm overflow-hidden bg-white rounded-sm dark:bg-gray-white">
    <div className="flex items-center justify-center w-12 bg-yellow-400">
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
            <span className="font-semibold text-yellow-400 dark:text-yellow-400">Info</span>
            <p className="text-sm text-gray-600 dark:text-gray-600">
            Your cart is empty!
            </p>
        </div>
    </div>
</div>
          
          :
            <div className="flex flex-col md:flex-row justify-center p-4 w-full md:w-5/6 md:mx-auto gap-y-6 md:gap-x-2 mb-4">
            {cart.map((item, i) => {
                return(
                    <Card imgSrc={item.iconPath} title={item.title} key={i} id={i} />
                    )
                })
            }
            </div>
        }
            </div>
      </>
  
    );
  }
  