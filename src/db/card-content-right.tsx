
import {  Typography } from "@mui/material";
import axios from "axios"
import { Stack } from "@mui/system";
import { useEffect, useState } from "react"
const url = 'https://book-db-shakhmurad.vercel.app/posts-content-3'
function CardRight() {
        const [data , setdata] = useState([])
        useEffect(()=>{
            axios.get(url).then(({data})=>{
                setdata(data)
            })
        } , [])
  return (
    <>
        {
            data.slice(0,1).map(({text , id , title , img1 , img2 , item})=>{
                return(
                    <Stack sx={{backgroundColor:'#1B3764', padding:3 , color:"white" , width:'400px' }} key={id}>
                        <Stack gap={2} flexDirection={'row'} alignItems={"center"}>
                            <img className={'img-radius'} src={`./Imge/${img1}.jpg`} />
                            <Stack>
                                <Typography width={'200px'}>
                                    {item}
                                </Typography>
                                <img className="img-card-content" src={`./Imge/${img2}.svg`} />
                            </Stack>
                        </Stack>
                        <Typography>
                            {title}
                        </Typography>
                        <Typography>
                            {text}
                        </Typography>
                    </Stack>
                )
            })
        }
    </>
  )
}


export default CardRight