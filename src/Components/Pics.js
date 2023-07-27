import React from 'react'

export default function Pics(props) {
  return (
  <>
    <div class="border-2 h-[42vh] w-[20vw] rounded-3xl border-gray-900 mt-10 mx-5 border-l-4 border-t-8 border-teal-400 border-l-orange-500">
<img class="h-[40vh] w-[19vw] mt-1 rounded-2xl hover:scale-110" src={props.pics}/>
</div>
  </>
  )
}
