import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
const Characters = () => {
  const creditFilm = useSelector(state => state.films.credit)

  return (
    <Container maxWidth="xl">
      <Box className="cards" display='flex' sx={{ flexWrap: 'wrap', marginTop: '20px', gap: '20px' }}>
        {creditFilm ? creditFilm.cast.map(item => (
          <Card sx={{ maxWidth: 281 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={`${item.original_title} poster`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="Box">
                  {item.character}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )) : 'Loading'}
      </Box>
    </Container>
  )
}

export default Characters