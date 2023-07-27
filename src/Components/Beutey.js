import React from 'react'

export default function Beutey(props) {
  return (
    <>
    <div class="border-4 h-[30vh] w-[15vw] mt-10 ml-14 rounded-full border-y-emerald-300 border-x-yellow-200 border-t-pink-400 border-l-amber-300">
<img class="h-[20vh] w-[10vw] ml-8 mt-8 hover:scale-150" src={props.bags}/>
<h1 class="mt-1 ml-20">Rs.{props.rate} </h1>
</div>

  </>
  )
}
