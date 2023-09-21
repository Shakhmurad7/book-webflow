
import Header from '../layout/header'
import Footer from '../layout/footer'
import Navbar from '../pages/navbar'

function LayoutContainer(a:any) {
  return (
    <>
        <Header/>
         <main>{a.children}</main>
        <Footer/>
    </>
  )
}

export default LayoutContainer