import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Mobiles from './pages/Product-by-Category/Electronics/Mobiles/Mobiles.jsx'
import Laptops from './pages/Product-by-Category/Electronics/Laptops/Laptops.jsx'
import Cameras from './pages/Product-by-Category/Electronics/Cameras/Cameras.jsx'
import Tablets from './pages/Product-by-Category/Electronics/Tablets/Tablets.jsx'
import AudioDevices from './pages/Product-by-Category/Electronics/AudioDevices/AudioDevices.jsx'
import MenTopWear from './pages/Product-by-Category/Fashion/MenTopWear/MenTopWear.jsx'
import MenBottomWear from './pages/Product-by-Category/Fashion/MenBottomWear/MenBottomWear.jsx'
import WomenTopWear from './pages/Product-by-Category/Fashion/WomenTopWear/WomenTopWear.jsx'
import WomenBottomWear from './pages/Product-by-Category/Fashion/WomenBottomWear/WomenBottomWear.jsx'
import MenFootwear from './pages/Product-by-Category/Fashion/MenFootwear/MenFootwear.jsx'
import WomenFootwear from './pages/Product-by-Category/Fashion/WomenFootwear/WomenFootwear.jsx'
import BagsLuggages from './pages/Product-by-Category/Fashion/BagsLuggages/BagsLuggages.jsx'
import Kids from './pages/Product-by-Category/Fashion/Kids/Kids.jsx'
import KitchenAppliances from './pages/Product-by-Category/HomeAppliances/KitchenAppliances/KitchenAppliances.jsx'
import LargeAppliances from './pages/Product-by-Category/HomeAppliances/LargeAppliances/LargeAppliances.jsx'

function App() {

  return (
    <>
    <Router>
      <div className='sticky top-0 z-50 shadow-md'><Header /></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mobiles' element={<Mobiles/>}/>
        <Route path='/Laptops' element={<Laptops/>}/>
        <Route path='/Cameras' element={<Cameras/>}/>
        <Route path='/Tablets' element={<Tablets/>}/>
        <Route path='/Audio-Devices' element={<AudioDevices/>}/>
         <Route path='/Men-Top-Wear' element={<MenTopWear/>}/>
        <Route path='/Men-Bottom-Wear' element={<MenBottomWear/>}/>
        <Route path='/Women-Top-Wear' element={<WomenTopWear/>}/>
        <Route path='/Women-Bottom-Wear' element={<WomenBottomWear/>}/>
        <Route path='/Men-Footwear' element={<MenFootwear/>}/>
        <Route path='/Women-Footwear' element={<WomenFootwear/>}/>
        <Route path='/Bags-Luggages' element={<BagsLuggages/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Kitchen-Appliances' element={<KitchenAppliances/>}/>
        <Route path='/Large-Appliances' element={<LargeAppliances/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
