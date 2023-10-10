import LayoutContainer from "../companents/layoutContainer"
import { Box, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Blog() {
    
    const [data , setdata] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setdata(data)
        })
    })

    const url = 'https://book-db-shakhmurad.vercel.app/posts-card'
  return (
    <LayoutContainer>
         <Box sx={{backgroundColor:'#1B3764'}}>
        <Container>
            <Stack gap={4} py={8} alignItems={'center'} textAlign={'center'} color={'white'}>
                <Typography position={'relative'} variant='h4' component={"h4"}>
                Articles
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



<Container sx={{py:10}}  sx={{alignItems:'center', display:"flex" , flexDirection:'column'}}>

<Stack flexDirection={{xs:"column" , sm:'row'}} gap={3} py={6}>
                    
    {
        data.slice(0,3).map(({id , text, img , title , date , item})=>{
            return(
                <>
                     <Link to={`/blog/${id}`}>
                <Stack key={id} sx={{backgroundColor:'width' , cursor:"pointer"}} >
                    <img style={{width:'100%' , height:'100%' , maxWidth:'400px'}} src={`./Imge/${img}.png`} />
                <Stack p={1} gap={2}  sx={{width:'100%' , height:'100%' , maxWidth:'400px'}}>
                        <Typography fontWeight={'700'}  color={`#1B3764`} fontSize={'25px'} >
                            {item}
                        </Typography>
                        <Typography sx={{opacity:'0.7'}}>
                            {text}
                        </Typography>
                        <Stack flexDirection={'row'} justifyContent={"space-between"} >
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {title}
                            </Typography>
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {date}
                            </Typography>
                        </Stack>
                </Stack>
                </Stack>
                </Link>


                
                </>
            )
        })
    }
    </Stack>

    <Stack flexDirection={{xs:"column" , sm:'row'}} gap={3} py={6}>
                    
    {
        data.slice(3,6).map(({id , text, img , title , date , item})=>{
            return(
                <>
                     <Link to={`/blog/${id}`}> 
                <Stack key={id} sx={{backgroundColor:'width' , cursor:"pointer"}} >
                    <img style={{width:'100%' , height:'100%' , maxWidth:'400px'}} src={`./Imge/${img}.png`} />
                <Stack p={1} gap={2}  sx={{width:'100%' , height:'100%' , maxWidth:'400px'}}>
                        <Typography fontWeight={'700'}  color={`#1B3764`} fontSize={'25px'} >
                            {item}
                        </Typography>
                        <Typography sx={{opacity:'0.7'}}>
                            {text}
                        </Typography>
                        <Stack flexDirection={'row'} justifyContent={"space-between"} >
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {title}
                            </Typography>
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {date}
                            </Typography>
                        </Stack>
                </Stack>
                </Stack>
                     </Link>


                
                </>
            )
        })
    }
    </Stack>

    <Stack flexDirection={{xs:"column" , sm:'row'}} gap={3} py={6}>
                    
    {
        data.slice(6,9).map(({id , text, img , title , date , item})=>{
            return(
                <>
                     <Link to={`/blog/${id}`}>
                <Stack key={id} sx={{backgroundColor:'width' , cursor:"pointer"}} >
                    <img style={{width:'100%' , height:'100%' , maxWidth:'400px'}}  src={`./Imge/${img}.png`} />
                <Stack p={1} gap={2} sx={{width:'100%' , height:'100%' , maxWidth:'400px'}}>
                        <Typography fontWeight={'700'}  color={`#1B3764`} fontSize={'25px'} >
                            {item}
                        </Typography>
                        <Typography sx={{opacity:'0.7'}}>
                            {text}
                        </Typography>
                        <Stack flexDirection={'row'} justifyContent={"space-between"} >
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {title}
                            </Typography>
                            <Typography fontWeight={'700'} color={'#1B3764'}>
                                {date}
                            </Typography>
                        </Stack>
                </Stack>
                </Stack>
                     </Link>


                
                </>
            )
        })
    }
    </Stack>

</Container>
    </LayoutContainer>
  )
}

export default Blog