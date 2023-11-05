import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="w-screen h-screen">

      <Container
        className="mx-24 my-16 w-full h-full bg-slate-50 drop-shadow-lg rounded"
      >
        <Box
        >
          <Typography className="bg-none" variant="h2">
            Hello World
          </Typography>
        </Box>
      </Container>
    </main>
  )
}
