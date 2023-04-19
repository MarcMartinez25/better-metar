import { useState } from 'react'
import Footer from './Footer/Footer'
import EmptyState from './MetarCard/EmptyState';
import MetarCard from './MetarCard/MetarCard';
import Search from './Search/Search';
import TitleBar from './TitleBar/TitleBar';

function App() {
  // fix this
  const [airportList, setAirportList] = useState([]);

  return (
    <div className="container flex flex-col h-screen">
      <TitleBar />
      <Search airportList={airportList} setAirportList={setAirportList} />
      <div className="flex-grow">
        {airportList.length > 0 ? (
          <MetarCard />
        ) : (
          <EmptyState />
        )}
      </div>
      <Footer />
    </div >
  )
}

export default App
