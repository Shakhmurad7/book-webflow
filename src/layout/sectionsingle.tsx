import { Container, Stack, Typography } from "@mui/material"
import { useState } from "react"

function Sectionsingle() {
    const [open ,setopen] = useState(1)
  return (
    <>
        <Container>
            <Stack alignItems={"center"} gap={8} width={"100%"} py={10}>  
            <Stack flexDirection={"row"} gap={2}>
                <p  onClick={()=>setopen(1)} className={open===1? `sectionsingle` : 'section-active'}>Product Description</p>
                <p onClick={()=>setopen(2)} className={open===2? `sectionsingle` : 'section-active'}>Additional Info</p> 
            </Stack>    
            </Stack>

            <Stack className={open===1? `block`:`none`} flexDirection={"row"}justifyContent={'space-between'} pb={10}>
                <Stack  width={{md:'500px' , xs:'100%'}} >
                    <Typography sx={{color:'#1B3764' ,fontSize:'22px', fontWeight:'700'}} >Do you offer discounts for education?</Typography>
                    <Typography sx={{opacity:"0.7"}} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</Typography>
                </Stack>

                <Stack width={{md:'500px' , xs:'100%'}} >
                    <Typography sx={{color:'#1B3764', fontSize:'22px', fontWeight:'700'}} >Do you offer discounts for education?</Typography>
                    <Typography sx={{opacity:"0.7"}} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</Typography>
                </Stack>
            </Stack>

            
            <Stack className={open===2? `block`:`none`} flexDirection={"row"}justifyContent={'space-between'} pb={10}>
                <Stack  width={{md:'500px' , xs:'100%'}} >
                    <Typography sx={{color:'#1B3764' ,fontSize:'22px', fontWeight:'700'}} >Is this book for me?</Typography>
                    <Typography sx={{opacity:"0.7"}} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</Typography>
                </Stack>

                <Stack width={{md:'500px' , xs:'100%'}} >
                    <Typography sx={{color:'#1B3764', fontSize:'22px', fontWeight:'700'}} >Is this book for me?</Typography>
                    <Typography sx={{opacity:"0.7"}} >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</Typography>
                </Stack>
            </Stack>

        </Container>
    </>
  )
}

export default Sectionsingle