import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hub from './pages/Hub'
import AllIn from './pages/AllIn'
import Mexifino from './pages/Mexifino'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/all-in" element={<AllIn />} />
        <Route path="/mexifino" element={<Mexifino />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
