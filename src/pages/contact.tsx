import LayoutContainer from "../companents/layoutContainer"
import { Box, Container, Stack, Typography } from "@mui/material"

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

<Container>
    <Stack flexDirection={'row'} justifyContent={"space-between"} gap={5}>
        <Stack gap={3}>
        <Typography position={'relative'} variant='h4' component={"h4"}>
                Keep in Touch
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
                
            <Stack width={{xs:'100%' , md:'350px'}}>
                    <Stack gap={2}>
                        <input className="input-contact"  type="text" />
                        <input className="input-contact" type="email"/>
                    </Stack>
                    <input className="input-contact" type="number" name="" id="" />
                    <textarea cols="30" rows="10"></textarea>
                    <Stack>
                        <input type="checkbox" name="" id="" />
                        <Typography>Keep me up to date with news and offers from time to time by email</Typography>
                    </Stack>
                    <Typography width={"100%"} p={1}>Send Message</Typography>
            </Stack>
    </Stack>
</Container>

    </LayoutContainer>
    </>
  )
}

export default Contact