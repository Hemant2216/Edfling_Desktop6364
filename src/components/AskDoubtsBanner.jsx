import React from 'react'

const AskDoubtsBanner = () => {
  return (
    <div className='relative h-44 sm:h-60 p-4 bg-gradient-to-l from-teal-600 to-teal-300 text-white rounded-xl font-poppins flex flex-col sm:justify-center '>
  <div className='w-full sm:w-2/5 mb-2 sm:mb-0'>
    <p className='text-2xl sm:text-5xl font-semibold'>Ask Doubts</p>
  </div>
  <div className='w-full sm:w-3/5 '>
    <p className='text-sm sm:text-xl'>Get your doubts instantly resolved via Audio/Video call, chat, or screen sharing from our Doubt Solver</p>
  </div>
  <div className='absolute right-0 bottom-0 w-32 sm:w-60'>
    <img src="./images/doubts.png" alt="" className="" />
  </div>
</div>

  
  
  )
}

export default AskDoubtsBanner
