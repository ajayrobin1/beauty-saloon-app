import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { cache } from "react";

// const services=[
//     { 
//       id:'0Ypj2yg0XdVcwqdxfyf1',
//       title:'Bridal',
//       iconPath:'/Bridal',
//       imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'2',
//       title:'Face treatment',
//       iconPath:'/FacialMask',
//       imgSrc: '',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'3',
//       title:'Manicure',
//       iconPath:'/NailPolish',
//       imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'4',
//       title:'Pedicure',
//       iconPath:'/FootMassage',
//       imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     },
//     { 
//       id:'5',
//       title:'Hairstyle',
//       iconPath:'/ManHair',
//       imgSrc: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       price:'200',
//       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
//     }
//   ]

export const getServices = cache(async (maxLength)=>{
  let services = [];
  try {
    const querySnapshot = await getDocs(query(collection(db, "services"), limit(maxLength)));
    querySnapshot.forEach((doc) => {
    services.push({ id: doc.id, ...doc.data() });
  });
  
  } catch (error) {
    console.log(error)
  }
  return(services)
})



export const getService = cache(async (id)=>{
  try {
    const docSnap = await getDoc(doc(db, "services", id));
    return(docSnap.data());
  } catch (error) {
    console.log(error)
  }
})