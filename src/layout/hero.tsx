import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <Box sx={{backgroundColor:'#1B3764'}}>
        <Container>
            <Stack gap={4} py={8} alignItems={'center'} textAlign={'center'} color={'white'}>
                <Typography position={'relative'} variant='h4' component={"h4"}>
                 About the Author
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
  )
}

export default Hero