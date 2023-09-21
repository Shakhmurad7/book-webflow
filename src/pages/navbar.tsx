import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
  return (
    <>
    <Stack flexDirection={"row"} gap={4} alignItems={"center"} >
    <ul>
      <Stack flexDirection={"row"} gap={3} sx={{color:"red"}}>
        <Link to={'/'}><li>Home</li></Link> 
        <Link to={'/about'}><li>Page</li></Link> 
        <Link to={'/about'}><li>About</li></Link> 
        <Link to={'/services'}><li>services</li></Link> 
        <Link to={'/contact'}><li>Contact</li></Link> 
      </Stack>
    </ul>
      <ShoppingCartOutlinedIcon sx={{cursor:"pointer"}} />
    </Stack>
    </>
  )
}

export default Navbar