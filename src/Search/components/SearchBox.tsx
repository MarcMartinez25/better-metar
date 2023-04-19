import React from 'react'

type Props = {
  icaoCode: string,
  setIcaoCode: (icaoCode: string) => void
}

const SearchBox = ({ icaoCode, setIcaoCode }: Props) => {
  return (
    <div className="flex flex-col">
      <input
        value={icaoCode}
        onChange={(e) => setIcaoCode(e.target.value)}
        type='text'
        required
        placeholder="Enter an ICAO Code"
        className="p-2 mr-2 border-2 rounded border-blue-500 h-12"
      >
      </input>
      <p className='
        flex 
        text-xs 
        text-zinc-300 
        ml-2 
        mt-1'>
        Ex. KAUS, KHOU, 50R, EGLL
      </p>
    </div>
  )
}

export default SearchBox