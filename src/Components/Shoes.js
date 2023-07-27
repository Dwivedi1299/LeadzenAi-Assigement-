import React from 'react'

export default function Shoes(props) {
  return (
    <div class="border-4 h-[30vh] w-[15vw] mt-10 ml-14 rounded-2xl border-y-emerald-400 border-x-emerald-300 border-t-pink-400 border-l-pink-300">
    <img class="h-[20vh] w-[10vw] ml-8 mt-8 hover:scale-150" src={props.shoes}/>
    <h1 class="mt-1 ml-20">Rs.{props.rate} </h1>
    </div>
  )
}
