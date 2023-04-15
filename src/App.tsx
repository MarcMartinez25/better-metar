import { useState } from 'react'
import Footer from './Footer/Footer'
import EmptyState from './MetarCard/EmptyState';
import MetarCard from './MetarCard/MetarCard';

function App() {
  const [metarList, setMetarList] = useState([]);

  return (
    <div className="container flex flex-col h-screen">
      <div className="flex-grow">
        {metarList.length > 0 ? (
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
