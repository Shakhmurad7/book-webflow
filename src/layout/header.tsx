import { Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from "../pages/navbar";
function Header() {
  return (
    <>
    <Box py={2} sx={{backgroundColor:'#1B3764' , color:'white'}}>
      <Container>
        <Stack justifyContent={"space-between"}  flexDirection={'row'} alignItems={"baseline"}>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'} >
          <img className="imge-header" src={"./Imge/Vector1.svg"}/>
          <Typography variant="h4" component={"h3"}>Pages</Typography>
              <Stack flexDirection={'row'} gap={1} px={3}>
                  <FacebookIcon  sx={{backgroundColor:'white' , width:'40px' , p:'8px' ,  height:'40px' , color:'#1B3764',  cursor:'pointer'} }  />
                  <InstagramIcon  sx={{backgroundColor:'white' ,width:'40px' , p:'8px' ,  height:'40px' ,  color:'#1B3764', cursor:'pointer'}}  />
                  <TwitterIcon  sx={{backgroundColor:'white' , width:'40px' , p:'8px' ,  height:'40px' , color:'#1B3764', cursor:'pointer'}}  />
             </Stack> 
        </Stack>
          <Navbar/>
          <Typography  sx={{ cursor:"pointer" ,backgroundColor:'#FFCA42' , px:"40px" , py:"10px", width:"fit-content", height:'fit-content', color:"black"}}>Order Today</Typography>
        </Stack>


      </Container>
    </Box>
    </>
  )
}

export default Header