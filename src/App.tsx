import { Route, Routes } from "react-router"
import Home from "./pages/home"
import About from "./pages/about"
import "./Style.css"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
    )
}

export default App
