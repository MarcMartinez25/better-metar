export interface Airport {
  name: string,
  icao: string,
  time: string,
  location: string,
  latitude: number,
  longitude: number,
  flightCategory: string,
  altimeter: number,
  temperature: number,
  dewpoint: number,
  relativeHumidity: number,
  visibility: string,
  windSpeed: number,
  windDirection: number
  // clouds: string
}