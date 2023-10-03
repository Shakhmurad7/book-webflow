import { useParams } from 'react-router'
import {Container, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import LayoutContainer from '../companents/layoutContainer'
const url = 'https://book-db-shakhmurad.vercel.app/posts-card2/'
function Singlestore() {
    const [count , setcount] = useState(0)
    const {id} = useParams()
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url+id).then(({data})=>{
            setdata(data)
        })
    } , [])
  return (
    <>
    <LayoutContainer>
        <Container sx={{ py:10,}}>
            <Stack sx={{justifyContent:'center' , alignItems:'center'}}  >

            <Stack flexDirection={'row'} gap={5} width={{md:'900px' , xs:'100%'}}>
                <img src={`../Imge/${data.img}.png`}/>
                <Stack gap={2}>
                    <Typography sx={{color:"#1B3764" , fontWeight:'700', fontSize:'28px'}} >{data.item}</Typography>
                    <Typography sx={{color:'#FFCA42' , fontWeight:'700' , fontSize:"22px"}}>#{data.price}USD</Typography>
                    <Typography sx={{opacity:'0.7'}} >Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.</Typography>

                    <Stack flexDirection={'row'} gap={2}>
                        <Typography sx={{opacity:'0.7'}} >Publisher</Typography>
                        <Typography sx={{opacity:'0.7'}} >Learning Private Limited (1 January 2021)</Typography>
                    </Stack>
                    
                    <Stack flexDirection={'row'} gap={2}>
                        <Typography sx={{opacity:'0.7'}} >Language :</Typography>
                        <Typography sx={{opacity:'0.7'}} > English</Typography>
                    </Stack>

                    <Stack flexDirection={'row'} gap={2}>
                        <Typography sx={{opacity:'0.7'}} >Paperback:</Typography>
                        <Typography sx={{opacity:'0.7'}} >212 pages</Typography>
                    </Stack>

                    <Stack flexDirection={'row'} gap={2}>
                        <Typography sx={{opacity:'0.7'}} >ISBN-10:</Typography>
                        <Typography sx={{opacity:'0.7'}} >9788120345799</Typography>
                    </Stack>


                    <Stack flexDirection={'row'} gap={2}>
                        <Typography sx={{opacity:'0.7'}} >Dimensions : </Typography>
                        <Typography sx={{opacity:'0.7'}} >20 x 14 x 4 cm</Typography>
                    </Stack>
                    <Stack flexDirection={'row'} gap={1}>
                        <p style={{border:'1px solid #FFCA42' , padding:'8px 20px' , cursor:'pointer' , userSelect:'none'}} onClick={()=>setcount(count+1)} >{count}</p>
                        <Typography sx={{px:4 , py:1 , backgroundColor:'#FFCA42' , cursor:'pointer' , alignSelf:'center'}} >Add to Cart</Typography>
                    </Stack>

                </Stack>
            </Stack>
        </Stack>
        </Container>

    </LayoutContainer>
    </>
  )
}

export default Singlestore