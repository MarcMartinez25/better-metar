import axios from 'axios'

const AXIOS_OPTIONS = {
  headers: { "X-API-Key": "f419ee367c914e7b94134a009f" }
}

type Props = {
  icaoCode: string,
  airportList: [],
  setAirportList: Function,
  event: any
}

// TODO: CREATE TYPES

// probably move some of this to the search component
export const getMetarData = ({ icaoCode, airportList, setAirportList, event }: Props) => {
  event.preventDefault()
  const url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded"
  axios.get(url, AXIOS_OPTIONS).then((res) => {
    const response = res.data.data[0]
    console.log(response)
    setAirportList([...airportList])
  })
}