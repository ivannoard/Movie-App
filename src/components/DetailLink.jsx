import { Box, Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DetailLink = ({ detailFilm }) => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: 2 }}>
        <Box display='flex' sx={{ gap: 2, marginBottom: 2, flexWrap: 'wrap' }}>
          <Link to={`/detail/${detailFilm ? detailFilm.id : ''}`}>
            <Button variant="outlined" color='error'>Overview</Button>
          </Link>
          <Link to={`/detail/${detailFilm ? detailFilm.id : ''}/characters`}>
            <Button variant="outlined" color='error'>Characters</Button>
          </Link>
          <Link to={`/detail/${detailFilm ? detailFilm.id : ''}/review`}>
            <Button variant="outlined" color='error'>Review</Button>
          </Link>
        </Box>
      </Container>
    </div>
  )
}

export default DetailLink