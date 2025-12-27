import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Mobiles from './pages/Product-by-Category/Electronics/Mobiles.jsx'
import Laptops from './pages/Product-by-Category/Electronics/Laptops.jsx'
import Cameras from './pages/Product-by-Category/Electronics/Cameras.jsx'
import Tablets from './pages/Product-by-Category/Electronics/Tablets.jsx'
import AudioDevices from './pages/Product-by-Category/Electronics/AudioDevices.jsx'
import WearableTechnology from './pages/Product-by-Category/Electronics/WearableTechnology.jsx'
import MenTopWear from './pages/Product-by-Category/Fashion/MenTopWear.jsx'
import KitchenAppliances from './pages/Product-by-Category/HomeAppliances/KitchenAppliances.jsx'

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mobiles' element={<Mobiles/>}/>
        <Route path='/Laptops' element={<Laptops/>}/>
        <Route path='/Cameras' element={<Cameras/>}/>
        <Route path='/Tablets' element={<Tablets/>}/>
        <Route path='/Audio-Devices' element={<AudioDevices/>}/>
        <Route path='/Wearable-Technology' element={<WearableTechnology/>}/>
        <Route path='/Men-Top-Wear' element={<MenTopWear/>}/>
        <Route path='/Kitchen-appliances' element={<KitchenAppliances/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
