"use client";
import Input from "./Input"
import TextArea from "./TextArea";
import Button from "./Button";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [userMessage, setUserMessage] = useState();

    const validateNumber = (inputNumber) => {
        const number = inputNumber.replace(/ /g,''); 
        if(number.length === 10){
            return (number);
        }
        else  if((number.length === 12 && number.slice(0,2)=='91')||(number.length === 13 && number.slice(0,3)=='+91')) return(number.slice(-10))
         return (NaN);
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const cleanNumber = validateNumber(number)
        if(isNaN(cleanNumber)){
            console.log("Pease eneter a valid number.")
        } else {
            const messageFile = {
                'name': name.trim(),
                'number': cleanNumber,
                'user-message':userMessage
            }
            console.log(messageFile)
        }
    }

    return (
        <>
                <form className="text-left" onSubmit={handleSubmit}>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-600">Name</label>
                            <Input type="text" placeholder="Your Name" 
                            onChange={(e)=>setName(e.target.value)}
                            required={true}
                            />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-600">Number</label>
                            <Input type="text" placeholder="Your Number" 
                            required={true}
                            onChange={(e)=>setNumber(e.target.value)}
                            />
                            
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-600">Message</label>
                            <TextArea required={true} placeholder="Your Message.." 
                            onChange={(e)=>setUserMessage(e.target.value)}
                            />
                        </div>
                        <Button type={'submit'} className="w-full mt-4">
                            get in touch
                        </Button>
                    </form>
        </>
    );
  }