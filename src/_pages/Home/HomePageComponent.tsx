import { Box, Button, Container, Divider, Typography } from "@mui/material"
import Link from "next/link"

export const HomePageComponent = () => {


  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        alignContent="center"
        justifyContent="space-between"
        width="100%"
        height="100%"
        sx={{
          margin: "4rem"
        }}
      >

        <Divider
          orientation="vertical"
          sx={{
            height: "400px",
            width: "3px",
            background: "black"
          }}
        />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="Start"
          width="50%"
        >
          <Container
            sx={{
              marginLeft: "3rem",
              width: "80%"
            }}
          >

            <Typography
              variant="h1"
              sx={{
                fontSize: "4rem",
                textAlign: "left"
              }}
            >
              Astrova
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginTop: "0.5rem"
              }}
            >
              Entertainment alone isn&apos;t enough.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                marginTop: "0.5rem"
              }}
            >
              Designed with passenger engagement in mind, Astrova reflects the latest on-the-ground technology, making the transition from passenger&apos;s personal devices to in-flight entertainment seamless.
            </Typography>

            <Link href="/customize">
              <Button
                variant="contained"
                sx={{
                  marginTop: "3rem",
                  fontSize: "18px",
                  color: "black",
                  border: "1px solid #fc6666",
                  borderRadius: "4px",
                  background: "transparent",

                  '&:hover': {
                    background: "#fc6666",
                    color: "white"
                  }
                }}
              >
                Customize
              </Button>
            </Link>

          </Container>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Container>
            <img
              src="/astrova.png"
              width={525}
              height={400}
            />
          </Container>
        </Box>

      </Box>
    </Container>
  )
}