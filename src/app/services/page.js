import Card from "../components/Card";
import Hero from "../components/Hero";
const services=[
  { 
    id:'1',
    title:'Bridal',
    imgSrc: '/Bride',
  },
  { 
    id:'2',
    title:'Face Treatment',
    imgSrc: '/FacialMask',
  },
  { 
    id:'3',
    title:'Manicure',
    imgSrc: '/NailPolish',
  },
  { 
    id:'4',
    title:'Pedicure',
    imgSrc: '/FootMassage',
  },
  { 
    id:'5',
    title:'Hairstyle',
    imgSrc: '/ManHair',
  },
  { 
    id:'6',
    title:'Hair Colouring',
    imgSrc: '/HairDye',
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
                      <Card imgSrc={item.imgSrc} title={item.title} key={i} id={i} />
                    )
                })
            }
            </div>
            </div>
      </>
    );
  }