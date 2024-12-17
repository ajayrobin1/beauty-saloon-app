import { db } from "@/firebase";
import { collection, doc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { cache } from "react";


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