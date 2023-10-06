import { Route, Routes } from "react-router"
import Home from "./pages/home"
import About from "./pages/about"
import "./Style.css"
import Store from "./layout/Store"
import Contact from "./pages/contact"
import Blog from "./layout/blog"
import Singlestore from "./layout/singlestore"
import SingleCard from "./layout/singleCard"
import Basket from "./pages/basket"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/store/:id" element={<Singlestore/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<SingleCard/>}/>
    </Routes>
    </>
    )
}

export default App
