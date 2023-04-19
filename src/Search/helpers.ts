import axios from 'axios'
import { Airport } from '../types/Airport'

const AXIOS_OPTIONS = {
  headers: { "X-API-Key": "f419ee367c914e7b94134a009f" }
}

export const getMetarDataByIcaoCode = (
  icaoCode: string,
  airportList: Airport[],
  setAirportList: (airportList: Airport[]) => void
): void => {
  const url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded"
  axios.get(url, AXIOS_OPTIONS).then((res) => {
    const response = res.data.data[0]
    console.log(response)
    // save response to Airport type and pass that into the airport list
    setAirportList([...airportList])
  })
}