import { Container, Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <Container sx={{ py: 15 }}>
    <Stack alignItems={"center"}>
      <Typography
        sx={{ position: "relative" }}
        variant="h3"
        component={"h3"}
      >
        Author’s Book Includes
        <span
          style={{
            position: "absolute",
            left: "40%",
            content: "",
            bottom: "-10px",
            width: "20%",
            height: "3px",
            backgroundColor: "#FFCA42",
          }}
        ></span>
      </Typography>
    </Stack>

    <Grid container py={5}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={{xs:0 , md:6}} alignItems={"center"}>
        <Grid item xs={12} md={6} width={'100%'} justifyContent={"center"} display={"flex"}>
            <img style={{maxWidth:'500px' , height:'500px', objectFit:"contain", width:'100%'}} src={"./Imge/Book (2).png"} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: "30px", fontWeight: 700, color: "#1B3764" }}
            >
              Atomic One’s
            </Typography>
            <Typography py={2}>
              Many variations of passages of Lorem Ipsum willing araise
              alteration in some form.
            </Typography>

            <Stack flexDirection={"row"} gap={8} pl={3}>
              <Stack gap={0.5} sx={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    content: "",
                    top: "10px",
                    left: "-25px",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#FFCA42",
                    borderRadius: "50%",
                  }}
                ></span>
                <Typography>Pages:</Typography>
                <Typography sx={{ opacity: "0.7" }}>586pages</Typography>
              </Stack>

              <Stack gap={0.5} sx={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    content: "",
                    top: "10px",
                    left: "-25px",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#FFCA42",
                    borderRadius: "50%",
                  }}
                ></span>
                <Typography>Length:</Typography>
                <Typography sx={{ opacity: "0.7" }}>10 Hours</Typography>
              </Stack>
            </Stack>

            <Link to={"/contact"}>
              <Typography
                sx={{
                  border: "1px solid #FFCA42",
                  transition: ".4s",
                  "&:hover": {
                    backgroundColor: "#FFCA42",
                    color: "white",
                  },
                  mt: 3,
                  width: "fit-content",
                  px: 4,
                  py: 1,
                  height: "fit-content",
                }}
              >
                Order Today
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} py={{xs:5 , md:0}}>
        <Grid container spacing={{xs:0 , md:6}} alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={12} md={6} width={'100%'} justifyContent={"center"} display={"flex"}>
            <img style={{maxWidth:'500px' , height:'500px', objectFit:"contain", width:'100%'}} src={"./Imge/Book (2).png"} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <Typography
                sx={{ fontSize: "30px", fontWeight: 700, color: "#1B3764" }}
              >
                The Dark Light
              </Typography>
              <Typography py={2}>
                Many variations of passages of Lorem Ipsum willing araise
                alteration in some form.
              </Typography>

              <Stack flexDirection={"row"} gap={8} pl={3}>
                <Stack gap={0.5} sx={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      content: "",
                      top: "10px",
                      left: "-25px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#FFCA42",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <Typography>Pages:</Typography>
                  <Typography sx={{ opacity: "0.7" }}>586pages</Typography>
                </Stack>

                <Stack gap={0.5} sx={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      content: "",
                      top: "10px",
                      left: "-25px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#FFCA42",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <Typography>Length:</Typography>
                  <Typography sx={{ opacity: "0.7" }}>10 Hours</Typography>
                </Stack>
              </Stack>

              <Link to={"/contact"}>
                <Typography
                  sx={{
                    border: "1px solid #FFCA42",
                    transition: ".4s",
                    "&:hover": {
                      backgroundColor: "#FFCA42",
                      color: "white",
                    },
                    mt: 3,
                    width: "fit-content",
                    px: 4,
                    py: 1,
                    height: "fit-content",
                  }}
                >
                  Order Today
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Aside