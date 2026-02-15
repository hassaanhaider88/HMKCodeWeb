
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App