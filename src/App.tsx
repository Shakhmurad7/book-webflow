import { Route, Routes } from "react-router"
import Home from "./Pgae.tsx/home"
import About from "./Pgae.tsx/about"

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
