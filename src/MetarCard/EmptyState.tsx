import React from 'react'
import spaceship from "../assets/spaceship.svg"

const EmptyState = () => {
  return (
    <div className="container flex justify-center py-4">
      <div className='flex flex-col items-center'>
        <img src={spaceship} alt='not a plane' className=' w-64'></img>
        <div className="py-4 text-zinc-400">No METAR data has been searched... Let's change that</div>
      </div>
    </div>
  )
}

export default EmptyState