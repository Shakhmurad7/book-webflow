import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import LayoutContainer from "../companents/layoutContainer"
import { Box, Container, Stack, Typography } from "@mui/material"
const url = 'https://book-db-shakhmurad.vercel.app/posts-card/'



function SingleCard() {
    const [data , setdata] = useState<any>([])
    useEffect(()=>{
        axios.get(url+id).then(({data})=>{
            setdata(data)
        })
    })
    const {id} = useParams()
  return (
        <>
        <LayoutContainer>
        <Box sx={{backgroundColor:'#1B3764'}}>
        <Container>
            <Stack gap={4} py={8} alignItems={'center'} textAlign={'center'} color={'white'}>
                <Typography position={'relative'} variant='h4' component={"h4"}>
                Significant reading has more info number
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
                <img className="single-img" src={`../Imge/${data.img}.png`} />
                <Stack gap={3} py={4}>
                    <Typography color={'#1B3764'} fontWeight={"700"} variant="h5" component={'h5'}>October 6, 2021 / Classics</Typography>
                    <Typography sx={{opacity:'0.7'}} >There are many variations of passages of Lorem Ipsum available, but the majorithave suffered alteration in some form, by injected humour, or randomised words whicdon't look even slightly believable. If you are going to use a passage of Lorem Ipsum, need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.</Typography>
                </Stack>
            </Container>
        </LayoutContainer>
        </>
  )
}
export default SingleCard