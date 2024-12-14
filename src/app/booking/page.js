"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

const services=[
  { 
    id:'1',
    title:'Bridal',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    id:'2',
    title:'Face treatment',
    imgSrc: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    id:'3',
    title:'Manicure and pedicure',
    imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    id:'4',
    title:'Hairstyle',
    imgSrc: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

const timings = [
  {
    id: 'B01',
    startTime:((6*60*60)+(0*60))*1000,
    endTime: ((8*60*60)+(0*60))*1000,
    available:true,
  },

  {
    id: 'B02',
    startTime:((10*60*60)+(0*60))*1000,
    endTime: ((13*60*60)+(0*60))*1000,
    available:true,
  },

  {
    id: 'B03',
    startTime:((15*60*60)+(0*60))*1000,
    endTime: ((18*60*60)+(0*60))*1000,
    available:true,
  }
]


const scheduleList = [
  {
    id: '0',
    timeId: 'B01',
    date: 1734134400000,
  }
]


export default function Booking() {
  const [selectedList, setSelectedList] = useState([])
  const [bookingDate, setBookingDate] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [serviceId, setServiceId] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [scheduleId, setScheduleId] = useState('')

  const validateNumber = (inputNumber) => {
    const number = inputNumber.replace(/ /g,''); 
    if(number.length === 10){
        return (number);
    }
    else  if((number.length === 12 && number.slice(0,2)=='91')||(number.length === 13 && number.slice(0,3)=='+91')) return(number.slice(-10))
     return (NaN);
  }

  const msToTime =(duration) => {
    var minutes = parseInt((duration/(1000*60))%60)
        ,hours = parseInt((duration/(1000*60*60))%12)
,period = parseInt((duration/(1000*60*60))/12) === 0? 'AM' : 'PM'


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return hours + ":" + minutes + ':' + period;
}

    const handleSubmit = (e) => {
      e.preventDefault()
      if(name && scheduleId){
        const cleanNumber = validateNumber(number)
        if(isNaN(cleanNumber)) 
          console.log("Please eneter a valid number")
        else
        {
          const file = {
            'name': name.trim(),
            'email': email.trim(),
            'number': cleanNumber,
            'service-id': serviceId,
            'user-message': userMessage.trim(),
            'schedule-id': scheduleId
          }
          console.log(file)
        }

      }
    }

    useEffect(()=>{
      const filteredList = scheduleList.filter(item => Number(item.date) === bookingDate)
      setSelectedList(filteredList)
    }, [bookingDate])
  return ( 
    <>
      <Hero imgSrc={'https://plus.unsplash.com/premium_photo-1716626438564-6de99c78e01d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
        <h2 className="imperial-script-regular text-white ">
          Book An Appointment
        </h2>
    </Hero>
        <div className="text-center  p-3 py-6 bg-gradient-to-bl from-gray-100 to-gray-400">
          <form onSubmit={handleSubmit}>

          <div className="p-4 py-6  mx-auto md:w-3/4 md:flex md:flex-row md:justify-evenly bg-white rounded-sm shadow-md dark:bg-gray-50 shadow-gray-300/50 overflow-hidden  dark:shadow-gray-500">
         
         <div className="text-left w-full md:w-1/3 md:px-8 md:py-12">

          <label htmlFor="name" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Name</label>
          <Input type="text" required={true} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />

    <label htmlFor="email" 
    
    className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Email (optional)</label>

<Input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
   
    <label htmlFor="number" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Number</label>

<Input type="text" placeholder="Your Number" required={true} onChange={(e) => setNumber(e.target.value)} />

<label htmlFor="service" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Service</label>

<select required={true} onChange={(e) => setServiceId(e.target.value)} defaultValue={"placeholder"} className="block  border  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-sm bg-white px-5 py-3 text-gray-700 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-40 dark:border-pink-900 dark:bg-gray-50" >
<option disabled={true} value={"placeholder"} hidden={true} className="p-3">
 -- Select a service --
</option>
{ services.map(item => {
  return(<option value={item.id} key={item.id} className="p-3" >
    {item.title}
  </option>)
})
}
</select>

<label htmlFor="Description" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Message (optional)</label>
<TextArea placeholder="Your Message..." onChange={(e) => setUserMessage(e.target.value)} />
    </div>

    <div className="md:flex md:flex-col md:justify-between text-left w-full md:w-1/3 md:px-8 md:py-12">

    <div>
    <label htmlFor="booking-date" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Date</label>
    <Input 
          type="date"
          id="datePickerId"
          min={new Date().toJSON().slice(0, 10)}
          max={new Date(new Date().setDate(new Date().getDate()+10)).toJSON().slice(0, 10)}
          name="booking-date" 
          placeholder={'Prefered booking date'}
          onChange={(e)=> setBookingDate(Date.parse(e.target.value))}// yyy-mm-dd
          required={true}
          />
    </div>



{bookingDate?
    <div className="flex md:flex-row md:flex-wrap flex-col pt-4 justify-start gap-4">
      {timings.map((item)=>{
        return(
          <div className="w-full"
          key={item.id}
          >
            <input
            onChange={(e) => setScheduleId(e.target.value)
            }
            checked={scheduleId === item.id} 
            type="radio" id={item.id} name={item.id} value={item.id} className="hidden peer" disabled={!item.available} />

          <label htmlFor={item.id} className={`w-100 rounded-sm duration-300 p-2 ${item.available?'cursor-pointer hover:bg-gray-200':'cursor-not-allowed'} block border border-gray-500 peer-checked:bg-gray-200 peer-checked:border-2 peer-checked:cursor-default peer-checked:border-green-500`}>                           
          <h3 className="p-1 text-sm font-semibold text-gray-800 dark:text-black">
            {msToTime(item.startTime)} - {msToTime(item.endTime)}    
          <span className={`mx-4 p-1 px-3 text-xs text-gray-800 uppercase bg-blue-200 rounded-full ${item.available?(scheduleId === item.id)?'dark:bg-green-300':'dark:bg-blue-300':'dark:bg-gray-300'} dark:text-gray-900`}>{item.available?(scheduleId === item.id)?'Selected':'Available':'Booked'}</span>
          </h3>
        <p className="text-left p-1 text-black">
          { new Date(bookingDate).toDateString()}
        </p>
        </label>
      </div>
    // <button key={item.id} className={`rounded-sm duration-300 px-6 py-3 bg-white rounded-md border ${item.available?'border-green-500 dark:hover:bg-gray-200 hover:bg-gray-100 dark:bg-white':'border-red-500 cursor-not-allowed dark:bg-gray-100'}`}>
    // </button>
  )
})
}
</div>:
<div className="text-center p-2 bg-gray-200 rounded-sm md:grow md:p-6 mt-4 text-black">
  Select any date to view timings
</div>
}
  <Button disabled={true} type="submit" className={'w-full md:mb-0 mt-6'} onClick={handleSubmit}>Submit</Button>
  </div>

          </div>
    </form>
        </div>
    </>
  );
}
