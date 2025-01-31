import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import './styles/styles.scss'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>

          </Routes>
        </main>  
      </BrowserRouter>
    </>
  )
}

export default App
