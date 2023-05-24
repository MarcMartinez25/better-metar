import React from "react"
import spaceship from "../assets/spaceship.svg"

const EmptyState = () => (
  <div className="container flex justify-center py-4">
    <div className="flex flex-col items-center">
      <img src={spaceship} alt="spaceship placeholder" className="w-64"></img>
      <div className="p-4 text-center text-zinc-400">
        <div>No METAR data has been searched...</div>
        <div>Let's change that</div>
      </div>
    </div>
  </div>
)

export default EmptyState