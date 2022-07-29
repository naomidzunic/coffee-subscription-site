import { useState } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header';
import Collection from './components/Collection';



function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
     {/* <Navigation /> */}
      <Header />
      <Collection />
    </div>
  )
}

export default App
