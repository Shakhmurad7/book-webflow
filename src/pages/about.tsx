
import { Box, Container, Stack, Typography } from '@mui/material'
import LayoutContainer from '../companents/layoutContainer'
import HomeDB from '../db/homeDB'
import ContentInput from '../layout/content-input'
import Hero from '../layout/hero'
import Aside from '../layout/aside'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function About() {
  return (
    <LayoutContainer>
          <Hero/>
          <Box sx={{backgroundColor:'#F6F8FC'}}>
          <Container sx={{py:10}}>
            <Stack sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                <img src={'./Imge/Photo (4).jpg'} />
            </Stack>
            <Stack gap={5}>
              
          <Stack  flexDirection={'row'} gap={4} justifyContent={'space-between'} pt={5}>
            <Stack flexDirection={'row'} gap={4}  alignItems={'center'} p={5} sx={{boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px` ,  backgroundColor:'white'}}>
              <Stack sx={{color:'#1B3764'  }} gap={1}>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Country :</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Language :</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Genre :</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Publication date :</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Share us on:</Typography>
              </Stack>
              <Stack sx={{ color:'#969AA0' }} gap={1}>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >United Kingdom</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >English</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >Historiography</Typography>
                  <Typography sx={{fontWeight:'700' ,fontSize:'22px' }} >1991</Typography>
                  <Stack flexDirection={'row'} gap={1}>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                  </Stack>
              </Stack>
                  </Stack>

              <Stack gap={4} width={'50%'}>
                  <Typography variant='h3' component={'h3'} position={"relative"} color={'#1B3764'}>
                  About Dr. John Abraham 
                  <span
                style={{
                  position: "absolute",
                  left: "0",
                  content: "",
                  bottom: "-15px",
                  width: "10%",
                  height: "3px",
                  backgroundColor: "#FFCA42",
                }}
              ></span>
                  </Typography>
                  <Typography sx={{opacity:"0.7"}} >All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</Typography>
                  <Typography sx={{backgroundColor:'#FFCA42', py:1 , px:4 , width:'fit-content' } }>Contact now</Typography>
              </Stack>
          </Stack>

            </Stack>
          </Container>
          </Box>
          <Container>
            <Aside/>
            <HomeDB/>
            <ContentInput/>
          </Container>
    </LayoutContainer>
  )
}

export default About