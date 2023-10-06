import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";

function Navbar({menu , setmenu}:any) {
  const [open , setopen] = useState(true)
  return (
    <>

      <div className={`menu ${menu? `active` :`menu`}`}>
    <Stack flexDirection={"row"} gap={4} alignItems={"center"} >
    <ul>
      <Stack flexDirection={"row"} gap={3} sx={{color:"red"}}>
        <Link to={'/'}><li>Home</li></Link> 
        <Stack sx={{cursor:"pointer"}} flexDirection={'row'}>
          <li className="page-list" onClick={()=>setopen(!open)}>
              Page
            </li>
            <ul className={`list ${open? `list` : `active` } `} >
              <Link to={'/store'}><li>Store</li></Link>
              <Link to={'/blog'}><li>Blog</li></Link>
            </ul>
          {
            open === true? < ExpandMoreIcon /> : < ExpandLessIcon/>
          }
        </Stack>
        <Link to={'/about'}><li>About</li></Link> 
        <Link to={'/contact'}><li>Contact</li></Link> 
      </Stack>
    </ul>
      <ShoppingCartOutlinedIcon sx={{cursor:"pointer"}} />
    </Stack>
      </div>
    </>
  )
}

export default Navbar