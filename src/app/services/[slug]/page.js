import Hero from "@/app/components/Hero";

const services=[
    { 
      id:'1',
      title:'Bridal',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price:'200',
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    },
    { 
      id:'2',
      title:'Face treatment',
      imgSrc: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price:'200',
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    },
    { 
      id:'3',
      title:'Manicure and pedicure',
      imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price:'200',
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    },
    { 
      id:'4',
      title:'Hairstyle',
      imgSrc: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price:'200',
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
    }
  ]


export default async function Page({ params }) {
    const { slug } = await params;
    const title = decodeURIComponent(slug);
    const file = services.find((item) => item.title.toLocaleLowerCase() === title)
  return(
      <>
        <Hero imgSrc={file.imgSrc}>
            <h2 className="capitalize">{file.title}</h2>
        </Hero>  
        <div className="p-6 py-8">
            <p>{file.description}</p>    
        </div>
      </>
  ) 
  
}