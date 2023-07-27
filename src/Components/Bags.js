import React from 'react'

export default function Bags(props) {
  return (
    <>
      <div class="border-4 h-[30vh] w-[15vw] mt-10 ml-14 rounded-full border-blue-200">
<img class="h-[20vh] w-[10vw] ml-8 mt-8 hover:scale-150" src={props.bags}/>
<h1 class="mt-1 ml-20">Rs.{props.rate} </h1>
</div>

    </>
  
  )
}
