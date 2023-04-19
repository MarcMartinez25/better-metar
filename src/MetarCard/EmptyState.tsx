import React from "react"
import spaceship from "../assets/spaceship.svg"

type Prop = {
  count: number
}

const EmptyState = ({ count }: Prop) => (
  <div className="container flex justify-center py-4">
    <div className="flex flex-col items-center">
      <img src={spaceship} alt="spaceship placeholder" className="w-64"></img>
      <div className="p-4 text-center text-zinc-400">
        <div>No METAR data has been searched...</div>
        <div>Let's change that</div>
        <div className="text-blue-700 text-xl"> Count: {count}</div>
      </div>
    </div>
  </div>
)

export default EmptyState