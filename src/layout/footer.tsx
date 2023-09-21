import { Typography, Grid } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#1B3764" }}>
        <Container sx={{ p: 10 }}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Stack
                flexDirection={"row"}
                gap={1}
                color={"white"}
                alignItems={"center"}
              >
                <img className="imge-header" src={"./Imge/Vector1.svg"} />
                <Typography variant="h4" component={"h3"}>
                  Pages
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} gap={1} py={2}>
                <FacebookIcon
                  sx={{
                    width: "40px",
                    p: "10px",
                    border: "1px solid #FFCA42",
                    height: "40px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <InstagramIcon
                  sx={{
                    width: "40px",
                    p: "10px",
                    border: "1px solid #FFCA42",
                    height: "40px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <TwitterIcon
                  sx={{
                    width: "40px",
                    p: "10px",
                    border: "1px solid #FFCA42",
                    height: "40px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
                <LinkedInIcon
                  sx={{
                    width: "40px",
                    p: "10px",
                    border: "1px solid #FFCA42",
                    height: "40px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack flexDirection={"row"} justifyContent={"space-between"}>

                <Stack gap={1}>
                  <Typography
                    color={"white"}
                    mb={2}
                    variant="h4"
                    component={"h4"}
                  >
                    Explore
                  </Typography>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      Home
                    </Link>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      About Us
                    </Link>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      Services
                    </Link>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      Appointments
                    </Link>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      Blog
                    </Link>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Link style={{ color: "white", opacity: "0.7" }} to={"/"}>
                      Contact Us
                    </Link>
                  </Stack>
                </Stack>


                <Stack gap={1} color={"white"}>
                  <Typography
                    color={"white"}
                    mb={2}
                    variant="h4"
                    component={"h4"}
                  >
                    Explore
                  </Typography>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"} >
                    <img src={"./Imge/icon.svg"} />
                    <Typography sx={{ opacity: "0.7" }}>
                      404 not found
                    </Typography>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Typography sx={{ opacity: "0.7" }}>
                      Password protected
                    </Typography>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Typography sx={{ opacity: "0.7" }}>
                       Licenses
                    </Typography>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Typography sx={{ opacity: "0.7" }}>
                      Changelog
                    </Typography>
                  </Stack>


                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                  <Typography sx={{ opacity: "0.7" }}>
                    Licenses 
                  </Typography>
                  </Stack>

                  <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                    <img src={"./Imge/icon.svg"} />
                    <Typography sx={{ opacity: "0.7" }}>
                      Changelog
                    </Typography>
                  </Stack>
                </Stack>

                <Stack gap={2} color={"white"} maxWidth={'400px'}>
                  <Typography
                    color={"white"}
                    mb={2}
                    variant="h4"
                    component={"h4"}
                  >
                    Explore
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"flex-start"}
                  >
                    <Typography>Explore:</Typography>
                    <Typography sx={{ opacity: "0.7" }}>
                      Start here Style guide 404 not found Password protected
                      Licenses Changelog
                    </Typography>
                  </Stack>

                  <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"flex-start"}
                  >
                    <Typography>Mail :</Typography>
                    <Typography sx={{ opacity: "0.7" }}>
                      support@doctors.com
                    </Typography>
                  </Stack>

                  <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"flex-start"}
                  >
                    <Typography>Phone :</Typography>
                    <Typography sx={{ opacity: "0.7" }}>
                      (+22) 123 - 4567 - 900
                    </Typography>
                  </Stack>
                </Stack>

              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
