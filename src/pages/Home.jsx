import { Button, Card, CardActionArea, CardContent, CardMedia, Pagination, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms, fetchDetailFilm } from '../redux/actions/filmActions'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const films = useSelector(state => state.films.films)
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    dispatch(fetchFilms(page))
  }, [page])

  // console.log(films);
  return (
    <MainLayout>
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        <Typography variant="h5" gutterBottom component="div">Browse a Category</Typography>
        <Box display='flex' sx={{ gap: 2 }}>
          <Button variant="outlined">All</Button>
          <Button variant="outlined">Anime</Button>
          <Button variant="outlined">Action</Button>
          <Button variant="outlined">Adventure</Button>
          <Button variant="outlined">Science Fiction</Button>
          <Button variant="outlined">Comedy</Button>
        </Box>
        <Box className="cards" display='flex' sx={{ flexWrap: 'wrap', marginTop: '20px', gap: '20px' }}>
          {films !== null ? films.results.map(item => (
            <Card sx={{ maxWidth: 281 }} onClick={() => handleDetail(item.id)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="450"
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={`${item.original_title} poster`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="Box">
                    {item.original_title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.release_date.split('-')[0]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )) : 'loading'}
        </Box>
        <Box display='flex' justifyContent='center' sx={{ marginTop: 5 }}>
          <Pagination count={films ? films.total_pages : 1} page={page} onChange={handleChange} />
        </Box>
      </Container>
    </MainLayout >
  )
}

export default Home