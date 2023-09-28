
import {  Typography } from "@mui/material";
import { Stack  ,  Container} from "@mui/system";
function ContentInput() {
  return (
    <>
        <Container sx={{backgroundColor:'#FFCA42' , px:5, py:15 ,  my:5}}>
            <Stack textAlign={"center"} alignItems={"center"}>
                    <Typography color={'#1B3764'} fontWeight={"600"} mb={2} variant="h4" component={'h4'} position={"relative"}>
                    Read a free chapter
                    <span style={{
                  position: 'absolute',
                  left:"40%",
                  content: '',
                  bottom:'-10px',
                  width: '20%',
                  height: '3px',
                  backgroundColor: '#1B3764 ',
                }}></span>
                    </Typography>
                    <Typography color={'#1B3764'} mb={2} width={{xs:'100% ',  md:'550px' , }}>
                    Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.
                    </Typography>
                    <Stack flexDirection={'row'} width={'70%'} gap={1}>
                        <input className="input" type="text" />
                        <Typography sx={{py:2 , px:7 , backgroundColor:'#1B3764' , color:'white'}}>
                             Subscribe
                        </Typography>
                    </Stack>
            </Stack>
        </Container>

    </>
  )
}

export default ContentInput