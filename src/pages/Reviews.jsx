import { Avatar, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailLayout from '../components/DetailLayout'
import { fetchReviewFilm, fetchDetailFilm, removeReviewFilm, removeDetailFilm } from '../redux/actions/filmActions'
const Reviews = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const detailFilm = useSelector(state => state.films.detail)
  const reviewFilm = useSelector(state => state.films.review)
  useEffect(() => {
    if (id && id !== '') {
      dispatch(fetchDetailFilm(id))
      dispatch(fetchReviewFilm(id))
    }
    return () => {
      dispatch(removeDetailFilm())
      dispatch(removeReviewFilm())
    }
  }, [id])

  console.log(reviewFilm);
  return (
    <div>
      <DetailLayout detailFilm={detailFilm}>
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
      </DetailLayout>
    </div>
  )
}

export default Reviews