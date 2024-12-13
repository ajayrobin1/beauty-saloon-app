import Image from "next/image";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const services=[
    { 
      id:'1',
      title:'Bridal',
      path:'/bridal',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { 
      id:'2',
      title:'Face Treatment',
      path:'/face-treatment',
      imgSrc: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { 
      id:'3',
      title:'Manicure and Pedicure',
      path:'/manicure-pedicure',
      imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { 
      id:'4',
      title:'Hairstyle',
      path:'/hairstyle',
      imgSrc: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ]
  return ( 
    <>
    <Hero imgSrc="https://plus.unsplash.com/premium_photo-1679750866620-052dbd39d469?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <h2 className="text-white ">
       Unleash Your Inner Beauty
    </h2>
      <Button href="/booking">Book An Appointment</Button>
    </Hero>
    
    <div className="text-center pb-4">
      <div className="bg-gradient-to-tl from-gray-400 to-gray-50 text-black flex flex-col md:flex-row justify-evenly items-center">

          <div className="w-full p-4 md:w-1/2 text-left md:ml-6">
            <h2 className="text-center tangerine-bold">About Us</h2>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
           <div className="pt-6">
           <Button>View Gallery</Button>
           </div>
        </div>
        <div className="p-auto md:mr-8">
          <Image src="https://plus.unsplash.com/premium_photo-1675253183563-7c5efc9f99af?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
          height={200}
          alt={"about us"}
          style={{objectFit:'cover',
            position:'relative',
            zIndex:10,
            transform:'translate(25%, 25%)'
          }}
          className="border-pink-800 border-2 shadow-2xl"
          />
          <Image src="https://images.unsplash.com/photo-1733697184692-efd62759118e?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
          height={200}
          alt={"about us"}
          style={{objectFit:'cover',
            zIndex:20,
            position: 'relative',
            top:'-50%',
            left: '-50%',
            transform:'translate(25%,-25%)'
          }}
          className="border-pink-800 border-2 shadow-2xl	"
          />
          </div>        
    </div>
      <h2 className="tangerine-bold text-center p-2">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center  w-full md:w-5/6 md:mx-auto gap-y-6 md:gap-x-2 mb-4">
        {services.splice(0,4).map((item, i) => {
          return(
            <Card imgSrc={item.imgSrc} title={item.title} key={i} path={item.path} id={i} />
          )
        })
        }

      </div>
      <Button href={'/services'}>
      More
      </Button>

    </div>

    <div className="text-center p-6 text-black"
    style={{
      
      backgroundImage:`linear-gradient(to right,rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundPosition:'center',
      backgroundSize:'cover',
      }}
   
   >
      <div className="w-full flex flex-col ml-auto my-8 mr-6 p-6 overflow-hidden bg-white rounded-sm  dark:bg-gray-200 md:w-1/4 shadow-gray-300/50 dark:shadow-black/50">
         <h2 className=" tangerine-bold">Contact Us</h2>
         <ContactForm />
      </div>
    </div>
    </>
  );
}