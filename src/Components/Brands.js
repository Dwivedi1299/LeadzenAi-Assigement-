import React from 'react'

export default function Brands(props) {
  return (
    <>
     <div class=" mt-10 ml-2 border-2  h-60 w-[24vw] border-t-slate-200 border-blue-600 border-b-4 rounded-3xl   ">
    <img  class="ml-7 mt-4 h-52 w-[22vw] hover:scale-75" src={props.brand}/>
    </div>
    </>
   
  )
}
