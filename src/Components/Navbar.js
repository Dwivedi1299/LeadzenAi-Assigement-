import React from 'react'

export default function Navbar() {
  return (
    <> 
    <div  class="border-2 h-16 w-auto  border-b-4  border-b-slate-200 fixed top-0 w-full flex  space-x-12 bg-slate-100 hover:bg-gray-300"> 
    <h1 class="ml-20 mt-2">Icon</h1>  <h1 class=" mt-2">Men's</h1>  <h1 class=" mt-2">Women's</h1> <h1 class="mt-2">Kid's</h1> <h1 class="mt-2">Shoes</h1>  <h1 class="mt-2">Beauty</h1>
    <h1 class="mt-2">Studio</h1>  <input  class="border-2  border-gray-400 h-10 mt-1  w-[30vw] text-center" type='text' placeholder='Search Product/ brands and more..'/>
   <h1 class="mt-2">Profile</h1> <h1 class="mt-2">Wistlist</h1> <h1 class="mt-2">Bag</h1>

    </div>
    </>
  )
}
