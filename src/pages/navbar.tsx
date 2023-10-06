import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import { Box} from "@mui/system"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function Navbar({menu,setmenu}:any) {
  const [open , setopen] = useState(true)
  return (
    <>

      <div className={`menu ${menu? `active` :`menu`}`}>
    <Stack p={{ xs:5, sm:10 , md:0}} flexDirection={"row"} gap={{xs:2, md:4}} justifyContent={'space-between'} alignItems={{xs:"none" , md:'center'}} >
    <ul>
      <Stack fontSize={{xs:'25px', md:'16px'}} flexDirection={{xs:"column" , md:'row'}} gap={3} sx={{color:"red"}}>
        <Link to={'/'}><li>Home</li></Link> 
        <Stack sx={{cursor:"pointer"}} flexDirection={'row'} > 
          <li className="page-list" onClick={()=>setopen(!open)}>
              Page
            </li>
            <ul className={`list ${open? `list` : `active` } `} >
              <Link to={'/store'}><li>Store</li></Link>
              <Link to={'/blog'}><li>Blog</li></Link>
            </ul>
            <Box color={'white'} mx={{xs:-4 , md:0}}>
          {
            open === true? < ExpandMoreIcon /> : < ExpandLessIcon/>
          }
          </Box>
        </Stack>
        <Link to={'/about'}><li>About</li></Link> 
        <Link to={'/contact'}><li>Contact</li></Link> 
      </Stack>
    </ul>
    <Stack flexDirection={'row'} gap={5} >
      <ShoppingCartOutlinedIcon sx={{cursor:"pointer" , color:'white'}}/>

      <div onClick={()=>setmenu(!menu)} className="close">
      <CloseIcon/>
      </div>
    </Stack>

    </Stack>
      </div>
    </>
  )
}

export default Navbar