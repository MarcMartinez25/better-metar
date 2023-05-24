import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faCompass } from "@fortawesome/free-regular-svg-icons"
import { Airport } from '../types/Airport'
import MetarInfoRow from './MetarInfoRow'

type Props = {
  airport: Airport
}

const MetarCard = ({ airport }: Props) => {
  return (
    <div className='flex flex-grow justify-center mt-4 mx-4'>
      <div className='flex flex-col justify-between rounded-lg p-4 text-white bg-gradient-to-b from-blue-600 from-30% to-purple-600 shadow-2xl w-full md:w-1/3'>
        <div className='mb-4'>
          <div className='flex items-baseline'>
            <p className='text-xl'>{airport.name}</p>
            <p className='text-xs text-gray-300 ml-1'>{airport.icao}</p>
          </div>
          <p className='text-xs text-gray-300'>{airport.location}</p>
          <div className='flex items-baseline text-xs text-gray-300'>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} className=' mr-1' />
              {airport.time.slice(0, -9)}
            </p>
            <p className='ml-2'>
              <FontAwesomeIcon icon={faCompass} className=' mr-1' />
              {airport.latitude}, {airport.longitude}
            </p>
          </div>
        </div>
        <div>
          <MetarInfoRow title='Wind Speed:' content={airport.windSpeed + ' kts'} />
          <MetarInfoRow title='Wind Direction:' content={airport.windDirection + '°'} />
          <MetarInfoRow title='Visibility:' content={airport.visibility + ' SM'} />
          <MetarInfoRow title='Humidity:' content={airport.relativeHumidity + '%'} />
        </div>
      </div>
    </div>
  )
}

export default MetarCard