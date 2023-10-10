import LayoutContainer from "../companents/layoutContainer"
import { Box, Container, Stack, Typography } from "@mui/material"
import Accardion from "../db/accardion"

function Contact() {
  return (
    <>
    <LayoutContainer>
    <Box sx={{backgroundColor:'#1B3764'}}>
        <Container>
            <Stack gap={4} py={8} alignItems={'center'} textAlign={'center'} color={'white'}>
                <Typography position={'relative'} variant='h4' component={"h4"}>
                Contact Us
                <span style={{
                  position: 'absolute',
                  left:"40%",
                  content: '',
                  bottom:'-10px',
                  width: '20%',
                  height: '3px',
                  backgroundColor: '#FFCA42',
                }}></span>
                </Typography>
                <Typography sx={{opacity:'0.7'}}width={{xs:'100%' , md:"500px"}}>
                There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.
                </Typography>
            </Stack>
        </Container>
    </Box>

<Container sx={{py:10}}>
    <Stack flexDirection={{xs:"column" , sm:'row'}} justifyContent={"space-between"} gap={5}>
        <Stack gap={3} width={{xs:'100%' , md:'600px'}}>
        <Typography position={'relative'} variant='h4' component={"h4"}>
                Keep in Touch
                <span style={{
                  position: 'absolute',
                  left:"0",
                  content: '',
                  bottom:'-10px',
                  width: '10%',
                  height: '5px',
                  backgroundColor: '#FFCA42',
                }}></span>
            </Typography> 
            <Typography>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </Typography>

            <Stack gap={2}>
            <Stack flexDirection={'row'} alignItems={"center"} gap={2}>
                <img src={'./Imge/Icon (1).svg'} />
                <Stack>
                    <Typography>Visit Us :</Typography>
                    <Typography>No: 09a, Downtown, San Dieago, USA.</Typography>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={"center"} gap={2}>
                <img src={'./Imge/Icon (1).svg'} />
                <Stack>
                    <Typography>Visit Us :</Typography>
                    <Typography>No: 09a, Downtown, San Dieago, USA.</Typography>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'} alignItems={"center"} gap={2}>
                <img src={'./Imge/Icon (1).svg'} />
                <Stack>
                    <Typography>Visit Us :</Typography>
                    <Typography>No: 09a, Downtown, San Dieago, USA.</Typography>
                </Stack>
            </Stack>
                </Stack>
        </Stack>
                
        <Stack width={{ xs: '100%', md: '550px' }} gap={2}>
      <Stack gap={2} flexDirection={'row'} width={'100%'}>
        <Stack gap={2} flexDirection={{xs:'column', sm:'row'}} width={'100%'}>
        <Stack position={"relative"} width={'100%'}>
          <input className="input-contact" type="text"  placeholder="Name" />
          <img  className="img-contact-1" src={'./Imge/user.svg'} />
        </Stack>
        <Stack  position={"relative"} width={'100%'}>
          <input className="input-contact-email" type="email" placeholder="Email"  />
          <img  className="img-contact-2" src={'./Imge/mail.svg'} />
        </Stack>
        </Stack>
      </Stack>
      <Box  position={"relative"}>
        <img className="img-contact-3" src={'./Imge/phone.svg'} />
      <input className="input-contact" type="number" name="" id="" placeholder="Phone" />
      </Box>
      <Box  position={"relative"}>
        <img className="img-contact-4" src={'./Imge/edit.svg'} />
        <textarea placeholder="Message"  cols={30} rows={10}></textarea >
      </Box>
      <Stack flexDirection={'row'} gap={2}>
        <input type="checkbox" name="" id="" />
        <Typography>
          Keep me up to date with news and offers from time to time by email
        </Typography>
      </Stack>
      <Typography sx={{backgroundColor:'#FFCA42' , color:"#1B3764" , textAlign:"center" , cursor:'pointer'}} width={'100%'} p={1}>
        Send Message
      </Typography>
    </Stack>
    </Stack>
</Container>

<Container sx={{py:10}}>
  <Stack gap={7} alignItems={"center"} justifyContent={"center"}>
    <Typography position={'relative'} variant='h4' component={"h4"}>
    Frequent Questions?
                <span style={{
                  position: 'absolute',
                  left:"40%",
                  content: '',
                  bottom:'-10px',
                  width: '20%',
                  height: '3px',
                  backgroundColor: '#FFCA42',
                }}></span>
            </Typography>   
        <Accardion/>
      </Stack>
</Container>

    </LayoutContainer>
    </>
  )
}

export default Contact