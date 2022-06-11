import { Box, Button, Container, Rating, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const DetailJumbotron = () => {
  const detailFilm = useSelector(state => state.films.detail)

  return (
    <div>
      <Box sx={{ height: '100%', backgroundImage: `url("https://image.tmdb.org/t/p/w500${detailFilm ? detailFilm.backdrop_path : ''}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container maxWidth="xl" sx={{ color: 'white', paddingTop: 10, paddingBottom: 10 }}>
          <Typography variant="h3" gutterBottom component="div">
            {detailFilm ? detailFilm.original_title : 'Loading'}
          </Typography>
          <Box display='flex' sx={{ gap: 2 }}>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <Typography gutterBottom>
              {detailFilm ? detailFilm.vote_count : 'Loading'} reviews
            </Typography>
          </Box>
          <Box maxWidth='sm'>
            <Typography gutterBottom>
              {detailFilm ? detailFilm.overview : 'Loading'}
            </Typography>
          </Box>
          <Box display='flex' sx={{ gap: 2 }}>
            <Button variant="contained" color='error'>Watch Trailer</Button>
            <Button variant="outlined" color='error'>Add to Watchlist</Button>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default DetailJumbotron