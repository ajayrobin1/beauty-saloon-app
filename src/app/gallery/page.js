import Image from "next/image";
import Hero from "../components/Hero";

const imageList = [
  {imgSrc: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHwy',
  },
  {imgSrc: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHwy',
  },  
  {imgSrc: 'https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaWRlfGVufDB8MXwwfHx8Mg%3D%3D',
  },
  {imgSrc: 'https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWVufGVufDB8MXwwfHx8Mg%3D%3D',
  },  
  {imgSrc: 'https://images.unsplash.com/photo-1588358641419-458f7616cbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D',
  },  
  {imgSrc: 'https://images.unsplash.com/photo-1598106755735-3ebfced1d38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D',
  },  
  {imgSrc: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D',
  },  
  {imgSrc: 'https://images.unsplash.com/photo-1568253743410-07dfe800b2df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8Mg%3D%3D',
  },  
] 
export default function Gallery() {
    return ( 
      <>
        <Hero imgSrc={'https://images.pexels.com/photos/6954771/pexels-photo-6954771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}>
        <h2 className="imperial-script-regular text-white ">
          Gallery
        </h2>
      </Hero>
      <div className="bg-white p-2 md:p-6">
      <div className="w-full md:w-2/3 md:mx-auto grid grid-cols-2 md:grid-cols-4 justify-evenly gap-2 md:gap-4">
        {imageList.map((item, index) => {
          return(
            <div>
            <Image
            className="rounded-sm mx-auto h-full w-full object-cover"
            src={item.imgSrc} 
            alt={index} 
            key={index}
            width={360}
            height={640}
            />
            </div>
          )
        })}
      </div>
      </div>
      </>
    );
  }