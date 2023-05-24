import axios from 'axios'
import { Airport } from '../types/Airport'

const AXIOS_OPTIONS = {
  headers: { "X-API-Key": "f419ee367c914e7b94134a009f" }
}

export const getMetarDataByIcaoCode = (
  icaoCode: string,
  airportList: Airport[],
  setAirportList: (airportList: Airport[]) => void,
  setShowModal: (showModal: string) => void
): void => {
  const icaoCodeExists = airportList.some(x => x.icao === icaoCode.toUpperCase());
  if (!icaoCodeExists) {
    const url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded"
    axios.get(url, AXIOS_OPTIONS).then((res) => {
      const newAirport = buildAirport(res.data.data[0]);
      setAirportList([...airportList, newAirport]);
    });
  } else {
    setShowModal("The Metar data for this ICAO code has already been retrieved");
  }
}

const buildAirport = (res: any): Airport => {
  const airport: Airport = {
    name: res.station.name,
    icao: res.icao,
    time: res.observed,
    location: res.station.location,
    latitude: res.station.geometry.coordinates[1],
    longitude: res.station.geometry.coordinates[0],
    flightCategory: res.flight_category,
    altimeter: res.barometer.hg,
    temperature: res.temperature.celsius,
    dewpoint: res.dewpoint.celsius,
    relativeHumidity: res.humidity.percent,
    visibility: res.visibility.miles,
    windSpeed: res.wind.speed_kts,
    windDirection: res.wind.degrees
  };

  return airport;
}