import { Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
function box() {
  return (
    <>
     <Box sx={{backgroundColor:'#1B3764'}}>
      <Container>
        <Grid container alignItems={"center"} >
            <Grid item xs={12} md={6} color={"white"} gap={3} flexDirection={"column"} display={"flex"} >
                <Typography className="footer-h2" component={"h2"} variant="h3" >Get Book Copy Today!</Typography>
                <Typography sx={{opacity:"0.7"}} >This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.</Typography>
                <Typography sx={{ cursor:"pointer" ,mt:2, px:4 , py:1 , width:"fit-content" , border:"1px solid" , colo:'white' }}>Order Today</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={'./Imge/Photo.png'} />
            </Grid>
        </Grid>
      </Container>
   </Box>
    </>
  )
}

export default box