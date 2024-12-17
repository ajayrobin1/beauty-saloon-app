import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { getService } from "@/functions/fetchData";
import dynamic from "next/dynamic";

// const services=[
//     { 
//       id:'1',
//       title:'Bridal',
//       imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'2',
//       title:'Face treatment',
//       imgSrc: '',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'3',
//       title:'Manicure',
//       imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'4',
//       title:'Pedicure',
//       imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'5',
//       title:'Hairstyle',
//       imgSrc: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     }
//   ]


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
                <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  
                </p>
            </div>
            <div className="text-center pb-2">
            <button className="mx-auto my-2 border grad-border flex items-center px-4 py-2 font-medium tracking-wide uppercase transition-colors duration-300 transform bg-none rounded-sm focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">

    <span className="mx-1">Add to Cart</span>
</button>
            </div>
        </div>
      </>
  ) 
  
}