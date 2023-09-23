
    import { useEffect } from "react";
    import { Stack } from "@mui/system";
    import { Typography } from "@mui/material";
    import axios from 'axios';
    import { connect, ConnectedProps } from "react-redux";
    interface RootState {
        user: string[]; // Assuming 'user' is an array of strings, adjust the type as needed
    }
    const url = 'https://book-db-shakhmurad.vercel.app/posts1';

    type HomeDBProps = PropsFromRedux;

    function HomeDB({ user, dispatch }: HomeDBProps) {
        useEffect(() => {
            axios.get(url).then(({ data }) => {
                dispatch({
                    type: 'data',
                    payload: data
                });
            });
        }, [dispatch]);

        return (
            <>
            <Stack flexDirection={{ md:'row'}} gap={10} width={'100%'} >

            <Stack flexDirection={'row'}  justifyContent={"space-between"} width={'100%'}>               
                {
                    user.slice(0,2).map(({id, img , text, item}:any) => {
                        return (
                            <>
                                <Stack key={id} py={4} width={"250px"} alignItems={"center"} textAlign={"center"}>
                                    <img className="img-data-home" src={`./Imge/${img}.png`} />
                                    <Typography variant="h5" component={'h5'} py={2} >{item}</Typography>
                                    <Typography sx={{opacity:"0.7"}} >{text}</Typography>
                                </Stack>
                            </>
                        );
                    })
                }
            </Stack>

            <Stack flexDirection={'row'}  justifyContent={"space-between"} width={'100%'}>               
                {
                    user.slice(2,4).map(({ img , text, item}:any) => {
                        return (
                            <>
                                <Stack py={4} width={"250px"} alignItems={"center"} textAlign={"center"}>
                                    <img className="img-data-home" src={`./Imge/${img}.png`} />
                                    <Typography variant="h5" component={'h5'} py={2} >{item}</Typography>
                                    <Typography sx={{opacity:"0.7"}} >{text}</Typography>
                                </Stack>
                            </>
                        );
                    })
                }
            </Stack>
    </Stack>
            </>
        );
    }

    const mapState = (state: RootState) => ({
        user: state.user // Replace 'user' with the actual key in your Redux state
    });

    const connector = connect(mapState);

    type PropsFromRedux = ConnectedProps<typeof connector>; 

    export default connector(HomeDB);