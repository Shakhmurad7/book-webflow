import { Box, Container, Stack } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import LayoutContainer from "../companents/layoutContainer";
import { Link } from "react-router-dom";
import HomeDB from "../db/homeDB";
import Boxs from "../layout/box";
import Content from "../db/content";
import CardRight from "../db/card-content-right";
import CardHome from "../db/CardHome";
import ContentInput from "../layout/content-input";

function Home() {
  return (
    <LayoutContainer>
      {/* ----Header-content----- */}
      <Box color={"white"} p={5} sx={{ backgroundColor: "#1B3764" }}>
        <Container>
          <Grid
            container
            spacing={10}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item xs={12} md={5}>
              <Stack color={"white"} flexDirection={"column"} gap={3}>
                <Typography
                  ml={4}
                  sx={{ position: "relative" }}
                  component={"i"}
                >
                  <span
                    style={{
                      position: "absolute",
                      content: "",
                      top: "12px",
                      left: "-30px",
                      width: "20px",
                      height: "1px",
                      backgroundColor: "#FFCA42",
                    }}
                  ></span>
                  Welcome to Pages
                </Typography>
                <Typography component={"h2"} variant="h3">
                  Books are uniquely portable magic{" "}
                </Typography>
                <Typography>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </Typography>
                <Stack flexDirection={"row"} gap={5} alignItems={"center"}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#FFCA42",
                      px: "40px",
                      py: "10px",
                      width: "fit-content",
                      height: "fit-content",
                      color: "black",
                    }}
                  >
                    Order Today
                  </Typography>
                  <Typography
                    sx={{
                      borderBottom: "1px solid",
                      width: "fit-content",
                      height: "fit-content",
                    }}
                  >
                    Read Free Demo
                  </Typography>
                </Stack>

                <Stack
                  px={3}
                  py={4}
                  flexDirection={"row"}
                  gap={2}
                  justifyContent={"space-between"}
                >
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
                    <Typography> Length: </Typography>
                    <Typography sx={{ opacity: "0.7" }}>10 Hours</Typography>
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
                    <Typography>Ratings:</Typography>
                    <Typography sx={{ opacity: "0.7" }}>
                      4.5/5 (305 ratings)
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img style={{ width: "80%" }} src={"./Imge/Book.png"} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* -----Box----- */}
      <Container sx={{ py: 10 }}>
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
            <Grid container spacing={12} alignItems={"center"}>
              <Grid item xs={12} md={6}>
                <img src={"./Imge/Book (1).png"} />
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

                <Link to={"/"}>
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
          <Grid item xs={12} md={6}>
            <Grid container spacing={12} alignItems={"center"}>
              <Grid item xs={12} md={6}>
                <img src={"./Imge/Book (2).png"} />
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

                  <Link to={"/"}>
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
      {/* ----Content------ */}
      <Container sx={{ pb: 10 }}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <div className="content-home">
              <img className="img-content" src={"./Imge/Photo.jpg"} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "40px", color: "#1B3764" }}>
              About Author
            </Typography>
            <Typography py={3} sx={{ opacity: "0.7" }}>
              All the Lorem Ipsum generators on the Internet tend to repeated
              predefined chunks as necessary, making this the first true value
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful.
            </Typography>
            <Stack pb={3} color={"#1B3764"} flexDirection={"row"} gap={6}>
              <Stack gap={1}>
                <Typography sx={{ fontSize: "45px" }}>02</Typography>
                <Typography sx={{ opacity: "0.7" }}>Books Published</Typography>
              </Stack>
              <Stack gap={1}>
                <Typography sx={{ fontSize: "45px" }}>02</Typography>
                <Typography sx={{ opacity: "0.7" }}>Books Published</Typography>
              </Stack>
              <Stack gap={1}>
                <Typography sx={{ fontSize: "45px" }}>02</Typography>
                <Typography sx={{ opacity: "0.7" }}>Books Published</Typography>
              </Stack>
            </Stack>

            <Stack
              p={2}
              alignItems={"center"}
              sx={{ backgroundColor: "#1B3764" }}
              gap={2}
              flexDirection={"row"}
              width={"fit-content"}
            >
              <img width={"100px"} height={"100px"} src={"./Imge/Image.png"} />
              <Stack gap={1}>
                <Typography color={"#FFCA42"}>John Abraham , Ph.d</Typography>
                <Typography sx={{ opacity: "0.7", color: "white" }}>
                  Mail : johnabraham@gmail.com
                </Typography>
                <Typography sx={{ opacity: "0.7", color: "white" }}>
                  Phone : (+2) 123 545 9000
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 10 }}>


          <HomeDB key="HomeDB" />


      </Container>
      <Box sx={{ py: 10 }}>
        <Boxs />
      </Box>
      <Container>
        <Stack alignItems={"center"}>
          <Typography
            position={"relative"}
            width={"fit-content"}
            color={"#1B3764"}
            variant="h4"
            component={"h4"}
          >
            What will you learn?
            <span
              style={{
                position: "absolute",
                left: "40%",
                content: "",
                bottom: "-15px",
                width: "20%",
                height: "3px",
                backgroundColor: "#FFCA42",
              }}
            ></span>
          </Typography>
          <Grid container py={10}>
            <Grid item xs={12} md={6}>
              <Stack flexDirection={"row"} gap={3}>
                <Stack>
                  <Stack
                    gap={1.5}
                    sx={{ backgroundColor: "#F4F8FF", p: 2.5, width: "250px" }}
                  >
                    <Typography
                      sx={{
                        py: 1,
                        px: 1.5,
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                        width: "fit-content",
                      }}
                    >
                      01
                    </Typography>
                    <Typography>
                      Use HDFS & Map Reduce for storing & analyzing data at
                      scale.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack
                    gap={1.5}
                    sx={{ backgroundColor: "#F4F8FF", p: 2.5, width: "250px" }}
                  >
                    <Typography
                      sx={{
                        py: 1,
                        px: 1.5,
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                        width: "fit-content",
                      }}
                    >
                      02
                    </Typography>
                    <Typography>
                      Use HDFS & Map Reduce for storing & analyzing data at
                      scale.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack flexDirection={"row"} gap={3} pt={3}>
                <Stack>
                  <Stack
                    gap={1.5}
                    sx={{ backgroundColor: "#F4F8FF", p: 2.5, width: "250px" }}
                  >
                    <Typography
                      sx={{
                        py: 1,
                        px: 1.5,
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                        width: "fit-content",
                      }}
                    >
                      03
                    </Typography>
                    <Typography>
                      Use HDFS & Map Reduce for storing & analyzing data at
                      scale.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack
                    gap={1.5}
                    sx={{ backgroundColor: "#F4F8FF", p: 2.5, width: "250px" }}
                  >
                    <Typography
                      sx={{
                        py: 1,
                        px: 1.5,
                        backgroundColor: "#FFCA42",
                        borderRadius: "50%",
                        width: "fit-content",
                      }}
                    >
                      04
                    </Typography>
                    <Typography>
                      Use HDFS & Map Reduce for storing & analyzing data at
                      scale.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="section-home">
                <img className="img-section" src={"./Imge/Photo (1).jpg"} />
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Box sx={{ backgroundColor: "#F4F8FF", py: 5 }}>
        <Container>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography
              mb={5}
              position={"relative"}
              variant="h4"
              component={"h4"}
            >
              {" "}
              The Chapter Includes
              <span
                style={{
                  position: "absolute",
                  left: "40%",
                  content: "",
                  bottom: "-15px",
                  width: "20%",
                  height: "3px",
                  backgroundColor: "#FFCA42",
                }}
              ></span>
            </Typography>
            <Content />

            <Stack py={3} textAlign={"center"} alignItems={"center"}>
              <Typography
                mb={2}
                sx={{ backgroundColor: "#FFCA42", fontSize: "24px" }}
                py={1}
                px={8}
              >
                Start a 15-Days Free Trail
              </Typography>
              <Typography sx={{ opacity: "0.7" }}>
                Short description about each chapter
              </Typography>
              <Stack flexDirection={"row"} gap={1}>
                <Typography>
                  {" "}
                  <Link
                    style={{ color: "blue", textDecoration: "underline" }}
                    to={"/"}
                  >
                    Have any questions?{" "}
                  </Link>
                </Typography>
                <Typography sx={{ opacity: "0.7" }}>Contact us</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 10 }}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack width={"500px"} gap={3}>
            <Typography
              width={"250px"}
              color={"#1B3764"}
              sx={{ fontWeight: "700" }}
              position={"relative"}
              component={"h3"}
              variant="h3"
            >
              What Readers Say About the Book
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  content: "",
                  bottom: "-15px",
                  width: "20%",
                  height: "3px",
                  backgroundColor: "#FFCA42",
                }}
              ></span>
            </Typography>
            <Typography>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators.
            </Typography>
            <Stack flexDirection={"row"} gap={1}>
              <img src={"./Imge/Group 2 (1).svg"} />
              <Typography>(4.8/5)</Typography>
            </Stack>
            <Typography>Overall Customer Ratings</Typography>
          </Stack>

          <Stack>
            <CardRight />
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ backgroundColor: "#F4F8FF", py: 5 }}>
        <Container>
          <Stack alignItems={"center"}>
            <Typography
              variant="h4"
              component={"h4"}
              sx={{ fontWeight: "700", color: "#1B3764" }}
              position={"relative"}
            >
              Articles & Resources
              <span
                style={{
                  position: "absolute",
                  left: "40%",
                  content: "",
                  bottom: "-15px",
                  width: "20%",
                  height: "3px",
                  backgroundColor: "#FFCA42",
                }}
              ></span>
            </Typography>
          </Stack>

          <CardHome />
        </Container>
      </Box>
      <ContentInput />а
    </LayoutContainer>
  );
}

export default Home;
