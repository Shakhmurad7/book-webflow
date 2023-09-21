
import Header from '../layout/header'
import Footer from '../layout/footer'

interface Props {
  children: React.ReactNode;
}

function LayoutContainer({children}:Props) {
  return (
    <>
        <Header/>
         <main>{children}</main>
        <Footer/>
    </>
  )
}

export default LayoutContainer