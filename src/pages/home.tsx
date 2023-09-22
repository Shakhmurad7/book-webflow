import { Box, Container, Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import LayoutContainer from '../companents/layoutContainer'
import { Link } from "react-router-dom";

function Home() {
  return (
    <LayoutContainer>

      {/* ----Header-content----- */}
          <Box color={"white"} p={5} sx={{backgroundColor:'#1B3764'}}>
            <Container  >

            <Grid container spacing={10} alignItems={"center"} justifyContent={"center"}>
              <Grid item xs={12} md={5} >
                <Stack color={"white"} flexDirection={"column"} gap={3}>
                  <Typography ml={4} sx={{ position: 'relative' }}  component={'i'}>
                  <span style={{
                                position: 'absolute',
                                content: '',
                                top: '12px',
                                left: '-30px',
                                 width: '20px',
                                height: '1px',
                                backgroundColor: '#FFCA42',
                                }}>
                                </span>
                    Welcome to Pages
                    </Typography>
                  <Typography component={'h2'} variant="h3" >Books are uniquely portable magic </Typography>
                  <Typography>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</Typography>
                  <Stack flexDirection={'row'} gap={5} alignItems={"center"}>
                        <Typography  sx={{ cursor:"pointer" ,backgroundColor:'#FFCA42' , px:"40px" , py:"10px", width:"fit-content", height:'fit-content', color:"black"}}>Order Today</Typography>
                        <Typography sx={{ borderBottom:'1px solid' , width:'fit-content' , height:'fit-content'}}>Read Free Demo</Typography>
                  </Stack>

              <Stack px={3} py={4} flexDirection={'row'} gap={2} justifyContent={'space-between'} >
                  <Stack gap={0.5} sx={{ position: 'relative' }}>
                  <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                    <Typography>Pages:</Typography>
                    <Typography sx={{opacity:'0.7'}} >586pages</Typography>
                  </Stack>
                  <Stack gap={0.5} sx={{ position: 'relative' }}>
                  <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                    <Typography> Length: </Typography>
                    <Typography sx={{opacity:'0.7'}} >10 Hours</Typography>
                  </Stack>
                  <Stack gap={0.5} sx={{ position: 'relative' }}>
                  <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                    <Typography>Ratings:</Typography>
                    <Typography sx={{opacity:'0.7'}} >4.5/5 (305 ratings)</Typography>
                  </Stack>
              </Stack>

                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                    <img style={{width:"80%"}} src={'./Imge/Book.png'} />
              </Grid>
            </Grid>
          </Container>
          </Box>

          {/* -----Box----- */}
              <Container sx={{py:10}} >

                <Stack  alignItems={"center"}>
                    <Typography sx={{position:'relative'}} variant="h3" component={'h3'}>
                          Author’s Book Includes
                          <span style={{
                            position: 'absolute',
                            left:"40%",
                            content: '',
                            bottom:'-10px',
                            width: '20%',
                            height: '3px',
                            backgroundColor: '#FFCA42',
                          }}>
                                </span>
                    </Typography>
              </Stack>

              <Grid container py={5}>  

                    <Grid item xs={12} md={6}>

                            <Grid container spacing={12} alignItems={"center"}>

                            <Grid item xs={12} md={6}>
                                <img src={'./Imge/Book (1).png'}/>
                            </Grid>

                            <Grid item xs={12} md={6}  >

                                    <Typography sx={{fontSize:'30px' ,fontWeight:700 ,  color:'#1B3764'}} >Atomic One’s</Typography>
                                    <Typography py={2} >Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</Typography>


                                <Stack flexDirection={'row'} gap={8} pl={3}>

                                    <Stack gap={0.5} sx={{ position: 'relative' }}>
                               <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                              <Typography>Pages:</Typography>
                              <Typography sx={{opacity:'0.7'}} >586pages</Typography>
                                   </Stack>

                                 <Stack gap={0.5} sx={{ position: 'relative' }}>
                               <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                              <Typography>Length:</Typography>
                               <Typography sx={{opacity:'0.7'}} >10 Hours</Typography>
                              </Stack>

                                </Stack>

                                <Link to={'/'}>
                              <Typography sx={{ border:'1px solid #FFCA42' , mt:3, width:'fit-content', px:4, py:1 , height:'fit-content'}}>Order Today</Typography>
                              </Link> 

                            </Grid>
                            </Grid>

                    </Grid>
                    <Grid item xs={12} md={6} spacing={2} >

                                <Grid container spacing={12} alignItems={"center"}>

                                <Grid item xs={12} md={6}>
                                  <img src={'./Imge/Book (2).png'}/>
                                </Grid>

                                <Grid item xs={12} md={6}>

                                <Stack>
                                    <Typography sx={{fontSize:'30px' , fontWeight:700 , color:'#1B3764'}} >The Dark Light</Typography>
                                    <Typography py={2}>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</Typography>

                                    <Stack flexDirection={'row'} gap={8} pl={3}>
                                    <Stack gap={0.5} sx={{ position: 'relative' }}>
                               <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                              <Typography>Pages:</Typography>
                              <Typography sx={{opacity:'0.7'}} >586pages</Typography>
                                </Stack>

                                 <Stack gap={0.5} sx={{ position: 'relative' }}>
                               <span style={{
                                position: 'absolute',
                                content: '',
                                top: '10px',
                                left: '-25px',
                                 width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                              <Typography>Length:</Typography>
                               <Typography sx={{opacity:'0.7'}} >10 Hours</Typography>
                              </Stack>

                              </Stack>

                             <Link to={'/'}>
                              <Typography sx={{ border:'1px solid #FFCA42' , mt:3, width:'fit-content', px:4, py:1 , height:'fit-content'}}>Order Today</Typography>
                              </Link> 

                                </Stack>
                                </Grid>
                            </Grid>
                    </Grid>
              </Grid>
              </Container>
               


    </LayoutContainer>
  )
}

export default Home