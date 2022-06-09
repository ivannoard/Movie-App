import { Avatar, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const Reviews = () => {
  const reviewFilm = useSelector(state => state.films.review)

  return (
    <Container maxWidth="xl">
      {reviewFilm ? reviewFilm.results.map(item => (
        <Box display='flex' sx={{ gap: 2, marginY: 2 }}>
          <Avatar alt="Remy Sharp" src={item.author_details.avatar_path.substring(1)} />
          <Box maxWidth="md">
            <Typography gutterBottom variant="h6">
              {item.author}
            </Typography>
            <Typography gutterBottom>
              {item.content}
            </Typography>
          </Box>
        </Box>
      )) : 'Loading'}
    </Container>
  )
}

export default Reviews