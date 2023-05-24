import { useState } from 'react'
import Footer from './Footer/Footer'
import EmptyState from './MetarCard/EmptyState';
import MetarCard from './MetarCard/MetarCard';
import Search from './Search/Search';
import TitleBar from './TitleBar/TitleBar';
import { Airport } from './types/Airport';
import Modal from './Modal/Modal';

const App = () => {
  const [airportList, setAirportList] = useState<Airport[]>([]);
  const [showModal, setShowModal] = useState<string>("");

  return (
    <div className="container flex flex-col h-screen">
      <TitleBar />
      <Search airportList={airportList} setAirportList={setAirportList} setShowModal={setShowModal} />
      <div className="flex-grow">
        {airportList.length > 0 ? (
          <div className='flex flex-col-reverse'>
            {airportList.map((airport) => (
              <MetarCard airport={airport} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
      {showModal !== "" ? <Modal description={showModal} setShowModal={setShowModal} /> : ""}
      <Footer />
    </div >
  )
}

export default App
