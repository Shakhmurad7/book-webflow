import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
    <ul>
        <Link to={'/'}><li></li>Home</Link> 
        <Link to={'/about'}><li>About</li></Link> 
    </ul>
    </>
  )
}

export default Navbar