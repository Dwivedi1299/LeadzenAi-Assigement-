import React from 'react'

export default function DOD(props) {
  return (
  <>
    
    <div class="border-2 border-b-gray-400 border-t-8 border-teal-500 h-64 w-44 mx-10  rounded-3xl bg-slate-100">
    <img class="h-30 w-40 mt-1 mb-1 rounded-xl  ml-1  transition-transform transform hover:scale-110" src={props.image}/>
   <h1 class="ml-3 text-orange-500 font-semibold text-lg ">Offer: {props.price} %OFF</h1>
    </div>
  
    </>
  )

}
