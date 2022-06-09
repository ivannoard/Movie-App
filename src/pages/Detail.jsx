import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Container } from '@mui/system'
import { Typography } from '@mui/material'

const Detail = () => {
  const detailFilm = useSelector(state => state.films.detail)

  return (
    <Container maxWidth='xl' sx={{ marginTop: 2 }}>
      <Typography variant="h4" gutterBottom component="div">
        Synopsys
      </Typography>
      <Box maxWidth='md'>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero vel minima accusantium, sit, minus nihil, reiciendis tempora sequi facilis officiis! Placeat in omnis eaque cupiditate esse perferendis quibusdam accusamus deserunt libero alias dolorem repudiandae veritatis nihil sit distinctio, odit velit! Ad reprehenderit ullam neque consectetur nostrum voluptatibus. Natus voluptatum ab doloribus corrupti rem optio ipsum sunt soluta accusamus hic est, iure qui at ducimus aliquam accusantium! Animi quasi eius enim quaerat nesciunt magni aliquam porro ratione fuga, molestias quo expedita accusantium omnis nisi nulla veritatis perspiciatis laudantium recusandae quos officiis, nobis similique iusto. Similique dolores sapiente aperiam culpa quisquam.
        </Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eveniet omnis nulla voluptas officiis reprehenderit perferendis vel minima. Nam eius velit laborum qui, pariatur minima vitae, veniam dolor, corporis repellendus ratione inventore. Ex doloribus fugiat aperiam accusamus quas quidem eaque atque quibusdam maiores voluptates dicta facere voluptas consequuntur, dignissimos distinctio!
        </Typography>
      </Box>
      <Typography variant="h4" gutterBottom component="div">
        Movie Info
      </Typography>
      <Typography gutterBottom>Film Title : {detailFilm ? detailFilm.title : 'Loading'}</Typography>
      <Typography gutterBottom>Tagline : {detailFilm ? detailFilm.tagline : 'Loading'}</Typography>
      <Typography gutterBottom>Release date :{detailFilm ? detailFilm.release_date : 'Loading'} </Typography>
      <Typography gutterBottom>Director : John Doe</Typography>
      <Typography gutterBottom>Genre : {detailFilm ? detailFilm.genres.map(item => item.name) : 'Loading'}</Typography>
      <Typography gutterBottom>Language : {detailFilm ? detailFilm.spoken_languages.map(item => item.name) : 'Loading'}</Typography>
      <Typography gutterBottom>Budget : {detailFilm ? detailFilm.budget : 'Loading'}</Typography>
      <Typography gutterBottom>Status : {detailFilm ? detailFilm.status : 'Loading'}</Typography>
    </Container>
  )
}

export default Detail