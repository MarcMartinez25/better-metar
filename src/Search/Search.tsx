import { useState } from "react"
import SearchBox from "./components/SearchBox"
import SubmitButton from "./components/SubmitButton"
import { Airport } from "../types/Airport"
import { getMetarDataByIcaoCode } from "./helpers"

type Prop = {
  airportList: Airport[],
  setAirportList: (airportList: Airport[]) => void
}

const Search = ({ airportList, setAirportList }: Prop) => {
  const [icaoCode, setIcaoCode] = useState<string>("");

  const callEndpoint = (event: any) => {
    event.preventDefault();
    getMetarDataByIcaoCode(icaoCode, airportList, setAirportList);
  }

  return (
    <div className="mx-4 mt-2 p-4 flex flex-grow justify-center">
      <form onSubmit={callEndpoint}>
        <div className="flex flex-row text-black">
          <SearchBox icaoCode={icaoCode} setIcaoCode={setIcaoCode} />
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default Search