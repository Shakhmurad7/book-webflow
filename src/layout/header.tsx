import { Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from "../pages/navbar";
import imge from '../../public/Imge/Vector1.svg';
import { Link } from "react-router-dom";
import Navbarleft from "./navbarleft";
import { useState } from "react";
function Header() {
  const [menu , setmenu] = useState(false)
  return (
    <>
    <Box py={2} sx={{backgroundColor:'#1B3764' , color:'white'}}>
      <Container>
        <Stack justifyContent={"space-between"}  flexDirection={'row'} alignItems={"center"}>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'} >

          <Link to={'/'} >
            <Stack flexDirection={"row"} gap={1} color={"white"} alignItems={"center"}>
          <img className="imge-header" src={imge}/>
          <Typography variant="h4" component={"h3"}>Pages</Typography>
            </Stack>
          </Link>
              <Stack flexDirection={'row'} gap={1} px={3}>
                  <FacebookIcon  sx={{backgroundColor:'white' , width:'40px' , p:'8px' ,  height:'40px' , color:'#1B3764',  cursor:'pointer'} }  />
                  <InstagramIcon  sx={{backgroundColor:'white' ,width:'40px' , p:'8px' ,  height:'40px' ,  color:'#1B3764', cursor:'pointer'}}  />
                  <TwitterIcon  sx={{backgroundColor:'white' , width:'40px' , p:'8px' ,  height:'40px' , color:'#1B3764', cursor:'pointer'}}  />
             </Stack> 
        </Stack>

          <Navbar menu={menu} setmenu={setmenu} />

           <Link to={'/contact'}><Typography display={{xs:'none' , md:'flex'}} sx={{ cursor:"pointer" ,backgroundColor:'#FFCA42' , px:"40px" , py:"10px", width:"fit-content", height:'fit-content', color:"black"}}>Order Today</Typography></Link>
           <Stack display={{xs:"felx" , md:'none'}}>
              <Navbarleft  menu={menu} setmenu={setmenu} />
           </Stack>
        </Stack>
      </Container>
    </Box>
    </>
  )
}

export default Header