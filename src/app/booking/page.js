"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

const scheduleList = [
  {
    id: '0',
    date: 1734048000000,
    startTime:((7*60*60)+(0*60))*1000,
    endTime: ((9*60*60)+(0*60))*1000,
    available:true,
  },
      {
    id: '10',
    date: 1734048000000,
    startTime: ((15*60*60)+(0*60))*1000,
    endTime: ((18*60*60)+(0*60))*1000,
    available:false,
  },
]


export default function Booking() {
  const [selectedList, setSelectedList] = useState([])
  const [bookingDate, setBookingDate] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [service, setService] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [scheduleId, setScheduleId] = useState('')

  const msToTime =(duration) => {
    var minutes = parseInt((duration/(1000*60))%60)
        ,hours = parseInt((duration/(1000*60*60))%12)
,period = parseInt((duration/(1000*60*60))/12) === 0? 'AM' : 'PM'


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return hours + ":" + minutes + ':' + period;
}
  
    const handleChange = (e) => {
      e.preventDefault()
      setBookingDate(Date.parse(e.target.value))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(name && number && scheduleId){
        const file = {
          'name': name,
          'email': email,
          'number': number,
          'service': service,
          'userMessage': userMessage,
          'scheduleId': scheduleId
        }
        console.log(file)
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
        <div className="text-center  p-3
         bg-gradient-to-bl from-gray-100 to-gray-400">
          <form onSubmit={handleSubmit}>

          <div className="text-left w-full md:w-2/3 px-4 py-10 mx-auto overflow-hidden bg-white rounded-sm shadow-2xl dark:bg-gray-50 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
          <label htmlFor="name" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Name</label>
          <Input type="text" required={true} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />

    <label htmlFor="email" 
    
    className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Email (optional)</label>

<Input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
   
    <label htmlFor="number" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Number</label>

<Input type="text" placeholder="Your Number" required={true} onChange={(e) => setNumber(e.target.value)} />

    <label htmlFor="service" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Service</label>

    <select required={true} onChange={(e) => setService(e.target.value)} defaultValue={"placeholder"} className="block  border-b  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-sm bg-white px-5 py-2.5 text-gray-700 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-40 dark:border-pink-900 dark:bg-gray-50" >
    <option disabled={true} value={"placeholder"} hidden={true} className="p-3">
     -- Select a service --
    </option>
    <option value="bridal" className="p-3">
      Bridal
    </option>
    <option value="hairstyle" className="p-3">
      Hairstyle
    </option>
    </select>
    <label htmlFor="booking-date" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Booking Date</label>

    <Input 
          type="date"
          id="datePickerId"
          min={new Date().toJSON().slice(0, 10)}
          name="booking-date" 
          placeholder={'Prefered booking date'}
          onChange={handleChange}// yyy-mm-dd
          required={true}
    />

      <div className="grid grid-cols-2 text-black py-6 gap-4">
      {selectedList.map((item)=>{
        return(
          <div
          key={item.id}
          >
            <input
            onChange={(e) => setScheduleId(e.target.value)
          }
            checked={scheduleId === item.id} 
            type="radio" id={item.id} name={item.id} value={item.id} className="hidden peer" disabled={!item.available} />

          <label htmlFor={item.id} className={`rounded-sm duration-300 p-2 ${item.available?'cursor-pointer hover:bg-gray-200':'cursor-not-allowed'} block border-2 border-gray-500 peer-checked:bg-gray-100 peer-checked:border-green-300`}>                           
        <p className="text-left py-2">
          <span className={`p-1 px-3 text-xs text-gray-800 uppercase bg-blue-200 rounded-full ${item.available?(scheduleId === item.id)?'dark:bg-green-300':'dark:bg-blue-300':'dark:bg-gray-300'} dark:text-gray-900`}>{item.available?(scheduleId === item.id)?'Selected':'Available':'Booked'}</span>
        </p>
          <h3 className="p-1 py-2 text-sm font-semibold text-gray-800 dark:text-black">{msToTime(item.startTime)} - {msToTime(item.endTime)}    
          </h3>
          <p className="p-1 text-sm text-gray-600 dark:text-gray-600">{ new Date(item.date).toDateString()}</p>

        </label>
      </div>
    // <button key={item.id} className={`rounded-sm duration-300 px-6 py-3 bg-white rounded-md border ${item.available?'border-green-500 dark:hover:bg-gray-200 hover:bg-gray-100 dark:bg-white':'border-red-500 cursor-not-allowed dark:bg-gray-100'}`}>
    // </button>
        )
      })
    }
    </div>

    <label htmlFor="Description" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Message (optional)</label>
    <TextArea placeholder="Your Message..." onChange={(e) => setUserMessage(e.target.value)} />
          <Button type="submit" className={'w-full mt-6'} onClick={handleSubmit}>Submit</Button>
          </div>
    </form>
        </div>
    </>
  );
}
