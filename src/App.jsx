import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import './styles/styles.scss'

import Home from './pages/Home.jsx'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>  
      </BrowserRouter>
    </>
  )
}

export default App
