
import Header from '../layout/header'
import Footer from '../layout/footer'

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