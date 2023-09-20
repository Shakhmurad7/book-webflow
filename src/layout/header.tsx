import { Typography } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
function Header() {
  return (
    <>
    <Box py={2} sx={{backgroundColor:'#1B3764' , color:'white'}}>
      <Container>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'} >
          <img className="imge-header" src={"./Imge/Vector1.svg"}/>
          <Typography variant="h4" component={"h3"}>Pages</Typography>
        </Stack>
      </Container>
    </Box>
    </>
  )
}

export default Header