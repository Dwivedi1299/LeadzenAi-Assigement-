import React from 'react'

export default function Kid(props) {
  return (
    <>
    <div class="border-2 h-[35vh] w-[15vw] bg-slate-200  border-pink-500 mt-10 ml-16 rounded-t-3xl rounded-r-2xl ">
   <img class="h-[33vh]  w-[14vw] ml-2 mt-1 rounded-xl hover:scale-110" src={props.kid}/>
    </div>
    </>  )
}
