// import { Route, Routes } from "react-router"
// import Home from "./pages/home"
// import About from "./pages/about"
// import "./Style.css"
// import Store from "./layout/Store"
// import Contact from "./pages/contact"
// import Blog from "./layout/blog"
// import Singlestore from "./layout/singlestore"
// import SingleCard from "./layout/singleCard"
// import Basket from "./pages/basket"
// import { useEffect, useState } from "react"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
  
//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);


//   const addToCart = (product:any) => {
//     const existingProductIndex = cartItems.findIndex((prod) => prod.id === product.id);
  
//     if (existingProductIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingProductIndex].count++;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, count: 1 }]);
//     }
//   toast.success(`${product.item} sepete eklendi`, {
//     position: "top-right",
//     autoClose: 1000, // Bildirimin ne kadar süre gösterileceğini ayarlayabilirsiniz
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//   });
// };



//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/store" element={<Store addToCart={addToCart} cartitems={cartItems} setCartItems={setCartItems} />}/>
//       <Route path="/basket" element={<Basket cartitems={cartItems} setCartItems={setCartItems} />}/>
//       <Route path="/store/:id" element={<Singlestore/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/blog" element={<Blog/>}/>
//       <Route path="/blog/:id" element={<SingleCard/>}/>
//     </Routes>
//     <ToastContainer />
//     </>
//     )
// }

// export default App

import { Route, Routes } from "react-router-dom"; // Correct the import statement
import Home from "./pages/home";
import About from "./pages/about";
import "./Style.css";
import Store from "./layout/Store";
import Contact from "./pages/contact";
import Blog from "./layout/blog";
import Singlestore from "./layout/singlestore";
import SingleCard from "./layout/singleCard";
import Basket from "./pages/basket";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState<any>([]);
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const addToCart = (product:any) => {
    const existingProductIndex = cartItems.findIndex((prod:any) => prod.id === product.id);
  
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
    
    toast.success(`${product.item} sepete eklendi`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store addToCart={addToCart} cartItems={cartItems} />} /> 
        <Route path="/basket" element={<Basket cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/store/:id" element={<Singlestore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleCard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
