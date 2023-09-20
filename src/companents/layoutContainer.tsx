
import Header from '../layout/header'
import Footer from '../layout/footer'
import Navbar from '../Pgae.tsx/navbar'

function LayoutContainer(a) {
  return (
    <>
        <Header/>
        <Navbar/>
         <main>{a.children}</main>
        <Footer/>
    </>
  )
}

export default LayoutContainer