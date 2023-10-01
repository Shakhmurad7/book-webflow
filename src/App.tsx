import { Route, Routes } from "react-router"
import Home from "./pages/home"
import About from "./pages/about"
import "./Style.css"
import Store from "./layout/Store"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>
    </Routes>
    </>
    )
}

export default App
