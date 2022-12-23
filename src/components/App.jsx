import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/404'
import Home from '../Pages/Home'
import Footer from './Footer'
import Navigbar from './Header'

function App() {
  return (
    <>
      <Navigbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
