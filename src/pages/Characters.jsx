import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailLayout from '../components/DetailLayout'
import { fetchCredit, fetchDetailFilm, removeCreditFilm, removeDetailFilm } from '../redux/actions/filmActions'
const Characters = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const detailFilm = useSelector(state => state.films.detail)
  const creditFilm = useSelector(state => state.films.credit)
  useEffect(() => {
    if (id && id !== '') {
      dispatch(fetchDetailFilm(id))
      dispatch(fetchCredit(id))
    }
    return () => {
      dispatch(removeDetailFilm())
      dispatch(removeCreditFilm())
    }
  }, [id])

  console.log(creditFilm);
  return (
    <DetailLayout detailFilm={detailFilm}>
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
    </DetailLayout>
  )
}

export default Characters