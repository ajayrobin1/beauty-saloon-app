import AddToCart from "@/components/AddToCart";
import Hero from "@/components/Hero";
import { getService } from "@/functions/fetchData";
import dynamic from "next/dynamic";


export default async function Page({ searchParams }) {
  const { id } = await searchParams;

  const service = await getService(id)

  const SvgIcon =  dynamic(() => import(`@/app/icons${service.iconPath}`))

  return(
      <>
        <Hero imgSrc={'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
            <h2 className="capitalize">{service.title}</h2>
        </Hero>  
        <div className="bg-gray-50 text-center">
          <div className="container py-4 mx-auto md:w-1/2 text-black">
            <SvgIcon 
            style={{width:160,height:160}} className={"p-1 mx-auto"}
            />
                <p className="text-lg">description</p> 
                <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  
                </p>
            </div>
            <div className="text-center pb-2">

              <AddToCart item = {{id: id, title:service.title, iconPath: service.iconPath }} />
            </div>
        </div>
      </>
  ) 
  
}