
import {  Typography } from "@mui/material";
import axios from "axios"
import { Stack} from "@mui/system";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const url = 'https://book-db-shakhmurad.vercel.app/posts-card'

function CardHome() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    })
  return (
<>
<Stack flexDirection={'row'}  gap={3} py={6}>
                    
    {
        data.slice(0,3).map(({id , text, img , title , date , item})=>{
            return(
                <>
               
                <Stack key={id} sx={{backgroundColor:'width' , cursor:"pointer"}} >
                    <img style={{width:'100%' , height:'100%'}} src={`./Imge/${img}.png`} />
                <Stack p={1} gap={2}>
                        <Typography fontWeight={'700'}  color={`#1B3764`} fontSize={'25px'} >
                            {item}
                        </Typography>
                        <Typography sx={{opacity:'0.7'}}>
                            {text}
                        </Typography>
                        <Stack flexDirection={'row'} justifyContent={"space-between"} >
                           <Link to={'/blog'}  > 
                           <Typography sx={{"&:hover":{
                               textDecoration:'underline'
                           }}} fontWeight={'700'} color={'#1B3764'}>{title}</Typography>
                           </Link>
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {date}
                            </Typography>
                        </Stack>
                </Stack>
                </Stack>



                
                </>
            )
        })
    }
    </Stack>
</>
  )
}

export default CardHome