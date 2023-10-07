
import axios from "axios"
import {  Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react"



const url = 'https://book-db-shakhmurad.vercel.app/posts-content-2'
function Content() {
    const [data , setdata] = useState([])

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    } , [])

  return (

    <>
    <Stack>

    <Stack flexDirection={{sm:'row' , xs:"column"}} gap={4} py={3}>
        {
            data.slice(0,2).map(({text , id , item , pags , Length}:any)=>{
                return(
                    <Stack gap={2} sx={{backgroundColor:'white' , p:4}} key={id} width={{md:'500px' , xs:'100%' }}> 
                        <Typography color={'#1B3764'} fontSize={'20px'} >{item}</Typography>
                        <Typography sx={{opacity:'0.7'}} >{text}</Typography>
                        <Stack gap={6} flexDirection={'row'} pl={3}>
                            <Typography color={'#1B3764'} position={"relative"} >Pages: { pags} 
                            <span style={{
                                position: 'absolute',
                                content: '',
                                top: '6px',
                                left: '-25px',
                                width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                            </Typography>

                            <Typography color={'#1B3764'} position={"relative"} >Length:{Length} 
                            <span style={{
                                position: 'absolute',
                                content: '',
                                top: '6px',
                                left: '-25px',
                                width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                            </Typography>
                        </Stack>
                    </Stack>
                )
            })
        }
    </Stack>

    <Stack flexDirection={{sm:'row' , xs:"column"}} gap={4} py={3}>
        {
            data.slice(2,4).map(({text , id , item , pags , Length}:any)=>{
                return(
                    <Stack gap={2} sx={{backgroundColor:'white' , p:4}} key={id} width={{md:'500px' , xs:'100%' }}> 
                        <Typography color={'#1B3764'} fontSize={'20px'} >{item}</Typography>
                        <Typography sx={{opacity:'0.7'}} >{text}</Typography>
                        <Stack gap={6} flexDirection={'row'} pl={3}>
                            <Typography color={'#1B3764'} position={"relative"} >Pages: { pags} 
                            <span style={{
                                position: 'absolute',
                                content: '',
                                top: '6px',
                                left: '-25px',
                                width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                            </Typography>

                            <Typography color={'#1B3764'} position={"relative"} >Length:{Length} 
                            <span style={{
                                position: 'absolute',
                                content: '',
                                top: '6px',
                                left: '-25px',
                                width: '12px',
                                height: '12px',
                                backgroundColor: '#FFCA42',
                                borderRadius:'50%'}}>
                                </span>
                            </Typography>
                        </Stack>
                    </Stack>
                )
            })
        }
    </Stack>
</Stack>
    </>
  )
}


export default (Content)