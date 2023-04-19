import React, { useState } from "react"
import SearchBox from "./components/SearchBox"
import SubmitButton from "./components/SubmitButton"
import { getMetarData } from "./helpers"

// fix this
type Prop = {
  airportList: [],
  setAirportList: Function
}

const Search = ({ airportList, setAirportList }: Prop) => {
  const [icaoCode, setIcaoCode] = useState("");

  return (
    <div className="mx-4 mt-2 p-4 flex flex-grow justify-center">
      <form onSubmit={getMetarData()}>
        <div className="flex flex-row text-black">
          <SearchBox icaoCode={icaoCode} setIcaoCode={setIcaoCode} />
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default Search