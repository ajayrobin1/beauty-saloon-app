"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

import Select from "react-select";

const services=[
  { 
    value:'1',
    label:'Bridal',
    imgSrc: 'https://plus.unsplash.com/premium_photo-1661456395657-049a92e01522?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    value:'2',
    label:'Face treatment',
    imgSrc: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    value:'3',
    label:'Manicure',
    imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },  
  { 
    value:'4',
    label:'Pedicure',
    imgSrc: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  { 
    value:'5',
    label:'Hairstyle',
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
    timeId: 'B02',
    date: 1734134400000,
  },

  {
    timeId: 'B03',
    date: 1734134400000,
  }
]


export default function Booking() {
  const [selectedList, setSelectedList] = useState([])
  const [bookingDate, setBookingDate] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [userMessage, setUserMessage] = useState('')
  const [availableTiminings, setAvailableTiminings] = useState([])
  const [schedule, setSchedule] = useState({})

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

const handleSelectionChange = (selectionList) =>{
  const arraySelection = selectionList.map((item) => {
    return(item.title)
  })
  setSelectedServices(arraySelection);
    // (Array.from())
}

const handleScheduleChange = (e) => {
  e.preventDefault();
  setSchedule(
    {
      'id': e.target.value,
     'startTime': e.target.dataset.start,
     'endTime': e.target.dataset.end,
    }
  )
}

const handleDateChange = (e) => {
  e.preventDefault();
  setSchedule({});
  setBookingDate(Date.parse(e.target.value));
  scheduleList.map(bookedTime => {
    const updatedTiming = timings.map(timings => {
      return({
        available : (bookedTime.timeId === timings.id && bookedTime.date === bookingDate)? false : true,
        id: timings.id,
        startTime: timings.startTime,
        endTime: timings.endTime,
      })
    })
    setAvailableTiminings(updatedTiming)
  })
}

const handleSubmit = (e) => {
      e.preventDefault()
      if(name && schedule){
        const cleanNumber = validateNumber(number)
        if(isNaN(cleanNumber)) 
          console.log("Please eneter a valid number")
        else
        {
          const file = {
            'name': name.trim(),
            'email': email.trim(),
            'number': cleanNumber,
            'services': selectedServices,
            'message': userMessage.trim(),
            'schedule': schedule,
            'date': bookingDate,
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
      <div className="text-center px-2 py-6 bg-gradient-to-bl from-gray-100 to-gray-400">
        <form onSubmit={handleSubmit}>
          <div className="p-4 py-6  mx-auto lg:w-3/4  md:flex md:flex-row md:justify-center bg-white rounded-sm dark:bg-gray-50 overflow-hidden ">
            <div className="text-left w-full md:w-full md:px-8 md:py-12">
              <label htmlFor="name" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Name</label>
              <Input type="text" required={true} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />

              <label htmlFor="email" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Email (optional)</label>
              <Input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="number" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Number</label>
              <Input type="text" placeholder="Your Number" required={true} onChange={(e) => setNumber(e.target.value)} />

              <label htmlFor="" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Service</label>
              <Select
                  // className="border  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-400/70 rounded-sm bg-white px-5 py-2.5 text-gray-700 focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-40 dark:border-pink-900 dark:bg-gray-50 dark:text-gray-900"
                options={services}
                onChange={handleSelectionChange}
                required={true}
                isMulti={true}
                classNamePrefix="react-select"
                className="text-black border py-2 border-pink-800"
              />

              <label htmlFor="Description" className="block pt-2 text-sm text-gray-500 dark:text-gray-600">Message (optional)</label>
              <TextArea placeholder="Your Message..." onChange={(e) => setUserMessage(e.target.value)} />
                
            </div>
            <div className="md:flex md:flex-col md:justify-between text-left w-full md:w-full md:px-8 md:py-12">
              <div>
                <label htmlFor="booking-date" className="block  pt-2 text-sm text-gray-500 dark:text-gray-600">Date</label>
                  <Input 
                    type="date"
                    id="datePickerId"
                    min={new Date().toJSON().slice(0, 10)}
                    max={new Date(new Date().setDate(new Date().getDate()+10)).toJSON().slice(0, 10)}
                    name="booking-date" 
                    placeholder={'Prefered booking date'}
                    onChange={handleDateChange}// yyy-mm-dd
                    required={true}
                    />
                </div>
                {bookingDate?
                <div className="flex md:flex-row md:flex-wrap flex-col pt-4 justify-start gap-4">
                    {availableTiminings.map((item)=>{ return(
                    <div className="w-full" key={item.id} >
                      <input
                      onChange={handleScheduleChange}
                      required={true}
                      checked={schedule.id === item.id} 
                      type="radio" id={item.id} 
                      data-start={item.startTime} 
                      data-end={item.endTime}
                      name={item.id} value={item.id} className="hidden peer" disabled={!item.available} />
                      <label htmlFor={item.id} className={`w-100 rounded-sm duration-300 p-2 ${item.available?'cursor-pointer hover:bg-gray-200':'cursor-not-allowed'} block border border-gray-500 peer-checked:bg-gray-200 peer-checked:border-2 peer-checked:cursor-default peer-checked:border-green-500`}>                           
                        <h3 className="p-1 text-sm font-semibold text-gray-800 dark:text-black">
                          {msToTime(item.startTime)} - {msToTime(item.endTime)}    
                          <span className={`mx-4 p-1 px-3 text-xs text-gray-800 uppercase bg-blue-200 rounded-full ${item.available?(schedule.id === item.id)?'dark:bg-green-300':'dark:bg-blue-300':'dark:bg-gray-300'} dark:text-gray-800`}>{item.available?(schedule.id === item.id)?'Selected':'Available':'Booked'}</span>
                        </h3>
                        <p className="text-left p-1 text-black">
                          {new Date(bookingDate).toDateString()}
                        </p>
                      </label>
                    </div>)})}
                  </div>:
                  <div className="mt-4 flex w-full overflow-hidden bg-white border border-gray-500  rounded-sm dark:bg-gray-50">
                    <div className="flex items-center justify-center w-12 bg-blue-400">
                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                        </svg>
                    </div>
                
                    <div className="px-4 py-2 -mx-3">
                        <div className="mx-3">
                            <span className="font-semibold text-blue-500 dark:text-blue-400">Info</span>
                            <p className="text-sm text-gray-600 dark:text-gray-900">Select any date to view timings</p>
                        </div>
                    </div>
                  </div>
                  }
                  <Button type="submit" className={'w-full md:mb-0 mt-6'} onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            </form>
      </div>
    </>
  );
}
