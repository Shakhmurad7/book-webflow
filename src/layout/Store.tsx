import { Box, Container, Stack, Typography } from "@mui/material"
import LayoutContainer from "../companents/layoutContainer"
import { useEffect, useState } from "react"
import axios from "axios"

const url = 'https://book-db-shakhmurad.vercel.app/posts-card2'
function Store() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <LayoutContainer>
         <Box sx={{backgroundColor:'#1B3764'}}>
        <Container>
            <Stack gap={4} py={8} alignItems={'center'} textAlign={'center'} color={'white'}>
                <Typography position={'relative'} variant='h4' component={"h4"}>
                My Store
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
    <Stack justifyContent={"space-between"} flexDirection={'row'} gap={5} > 
                {
                      data.slice(0,3).map(({text , item , id, img , title , price , next})=>{
                        return(
                            <><Stack gap={2} key={id} width={{xs:'100%' , md:'300px'}}>
                                <img className='img-card-store'  src={`./Imge/${img}.png`} />
                                <Stack  pr={5} flexDirection={'row'} justifyContent={"space-between"}>
                                    <Typography  fontWeight={"700"} fontSize={"22px"} color={"#1B3764"} >{item}</Typography>
                                    <Typography  fontWeight={"700"} fontSize={"18px"} color={"#FFCA42"}>${price}</Typography>
                                </Stack>
                                <Typography sx={{opacity:"0.7"}} >{text}</Typography>
                                <Typography ml={2} color={"#1B3764"} position={"relative"} >{title}
                                <span
                                    style={{
                                    position: "absolute",
                                    left: "-17px",
                                    top:'7px',
                                    content: "",
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#FFCA42",
                                    borderRadius:"50%"
                                     }}
                                    ></span>
                                </Typography>
                                <Typography width={'fit-content'} py={1} px={4} color={"#1B3764"} sx={{border:"1px solid #FFCA42" ,  cursor:"pointer" ,transition:'.4s' , "&:hover":{
                                        backgroundColor:'#FFCA42' , color:'white' }}}  > {next} </Typography>
                            </Stack>
                            </>
                        )
                    })
                }
    </Stack>
    <Stack justifyContent={"space-between"} flexDirection={'row'} gap={5} py={6}> 
                {
                    data.slice(3,6).map(({text , item , id, img , title , price , next})=>{
                        return(
                            <><Stack gap={2} key={id} width={{xs:'100%' , md:'300px'}}>
                                <img className='img-card-store'  src={`./Imge/${img}.png`} />
                                <Stack  pr={5} flexDirection={'row'} justifyContent={"space-between"}>
                                    <Typography  fontWeight={"700"} fontSize={"22px"} color={"#1B3764"} >{item}</Typography>
                                    <Typography  fontWeight={"700"} fontSize={"18px"} color={"#FFCA42"}>${price}</Typography>
                                </Stack>
                                <Typography sx={{opacity:"0.7"}} >{text}</Typography>
                                <Typography ml={2} color={"#1B3764"} position={"relative"}>{title} 
                                <span
                                    style={{
                                    position: "absolute",
                                    left: "-17px",
                                    top:'7px',
                                    content: "",
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#FFCA42",
                                    borderRadius:"50%"
                                     }}
                                    ></span>
                                </Typography>
                                <Typography width={'fit-content'} py={1} px={4} color={"#1B3764"} sx={{border:"1px solid #FFCA42" ,  cursor:"pointer" ,transition:'.4s' , "&:hover":{
                                        backgroundColor:'#FFCA42' , color:'white' }}}  > {next} </Typography>
                            </Stack>
                            </>
                        )
                    })
                }
    </Stack>
</Container>
    </LayoutContainer>
  )
}

export default Store