import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { getServices } from "@/functions/fetchData";

export default async function Page() {

  const services = await getServices(8);

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
                      <Card iconPath={item.iconPath} title={item.title} key={i} id={item.id} path={item.path} />
                    )
                })
            }
            </div>
            </div>
      </>
    );
  }