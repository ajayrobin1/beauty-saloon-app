import Card from "../components/Card";
import Hero from "../components/Hero";
const services=[
    { 
      id:'1',
      title:'Bridal',
      path:'/bridal',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { 
      id:'2',
      title:'Face treatment',
      path:'/face-treatment',
      imgSrc: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    { 
      id:'3',
      title:'Manicure and pedicure',
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

export default function Services() {
    return ( 
      <>
        <Hero imgSrc={'https://images.pexels.com/photos/6954771/pexels-photo-6954771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}>
        <h2 className="imperial-script-regular text-white ">
        Our Services
        </h2>
      </Hero>
      <div className="bg-white p-6">
            <div className="flex flex-col md:flex-row justify-center p-4 w-full md:w-5/6 md:mx-auto gap-y-6 md:gap-x-2 mb-4">
              {services.map((item, i) => {
                  return(
                      <Card imgSrc={item.imgSrc} title={item.title} key={i} id={i} path={item.path} />
                    )
                })
            }
            </div>
            </div>
      </>
    );
  }