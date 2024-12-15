import Card from "@/app/components/Card";
import Hero from "@/app/components/Hero";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

// const services=[
//   { 
//     id:'1',
//     title:'Mock data',
//     iconPath: '/Bride',
//   },
//   { 
//     id:'2',
//     title:'Mock data',
//     iconPath: '/FacialMask',
//   },
//   { 
//     id:'3',
//     title:'Mock data',
//     iconPath: '/NailPolish',
//   },
//   { 
//     id:'4',
//     title:'Mock data',
//     iconPath: '/FootMassage',
//   },
//   { 
//     id:'5',
//     title:'Mock data',
//     iconPath: '/ManHair',
//   },
//   { 
//     id:'6',
//     title:'Mock data',
//     iconPath: '/HairDye',
//   }
// ]

export default async function Services() {
  const querySnapshot = await getDocs(collection(db, "services"));
  let services = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc)
    services.push({ id: doc.id, ...doc.data() });
  });
    return ( 
      <>
        <Hero imgSrc={'https://images.pexels.com/photos/6954771/pexels-photo-6954771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}>
        <h2 className="imperial-script-regular text-white ">
        Our Services
        </h2>
      </Hero>
      <div className="bg-white p-6">
            <div className="flex flex-col md:flex-row justify-center p-4 w-full md:w-5/6 md:mx-auto gap-y-6 md:gap-x-2 mb-4">
              {services?.map((item, i) => {
                  return(
                      <Card imgSrc={item.iconPath} title={item.title} key={i} id={i} />
                    )
                })
            }
            </div>
            </div>
      </>
    );
  }