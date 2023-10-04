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
                 <Stack gap={2} >
                    <Typography color={'#1B3764'} fontWeight={'700'} variant="h4" component={'h4'}>
                    The perfect book for all
                    </Typography>
                    <Typography sx={{opacity:'0.7'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.
                    </Typography>    

                    <Stack gap={2} pl={5}>
                        <Typography position={"relative"} >
                         It has roots in a piece of classical Latin literature from 45 BC,
                        <span
                      style={{
                        position: "absolute",
                        content: "",
                        top: "6px",
                        left: "-25px",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                      }}
                    ></span>
                        </Typography  >
                        <Typography position={"relative"}>
                        To generate Lorem Ipsum which looks reasonable
                        <span
                      style={{
                        position: "absolute",
                        content: "",
                        top: "6px",
                        left: "-25px",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                      }}
                    ></span>
                        </Typography>
                        <Typography position={"relative"} >
                        The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet
                        <span
                      style={{
                        position: "absolute",
                        content: "",
                        top: "6px",
                        left: "-25px",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                      }}
                    ></span>
                        </Typography>
                    </Stack>
                    <Stack sx={{backgroundColor:'#1B3764', p:6 , color:'white' , textAlign:'center' , position:'relative'}} >
                        <Typography>“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”</Typography>
                        <img  style={{position:"absolute" , left:'20px' , top:'0px'}} src={'../Imge/Icon (5).svg'}/>
                    </Stack>
                </Stack>

                <Stack gap={2} py={7} >
                    <Typography color={'#1B3764'} fontWeight={'700'} variant="h4" component={'h4'}>
                    The perfect book for all
                    </Typography>
                    <Typography sx={{opacity:'0.7'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.
                    </Typography>   
                        <Typography sx={{color:'#1B3764' , pl:'30px'}} >1 . It has roots in a piece of classical Latin literature from 45 BC,</Typography>
                        <Typography sx={{color:'#1B3764' , pl:'30px'}} >2 . To generate Lorem Ipsum which looks reasonable</Typography>
                        <Typography sx={{color:'#1B3764' , pl:'30px'}} >3 . The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</Typography>
                        <Typography sx={{color:'#1B3764' , pl:'30px'}} >4 . Be standard chunk of Lorem used since the 1500s</Typography>
                </Stack>
            </Container>
        </LayoutContainer>
        </>
  )
}
export default SingleCard