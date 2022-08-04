import { useState } from 'react'
// import Navigation from './components/Navigation'
import Header from './components/Header';
import Collection from './components/Collection';
import Navbar from './components/Navbar';


// http://localhost:4173/

function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
     {/* <Navigation /> */}
     <Navbar />
      <Header />
      <Collection />
    </div>
  )
}

export default App