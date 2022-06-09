import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import DetailLayout from '../components/DetailLayout'
import { fetchDetailFilm, removeDetailFilm, fetchReviewFilm, fetchCredit } from '../redux/actions/filmActions'
import Characters from './Characters'
import Detail from './Detail'
import Reviews from './Reviews'

const Single = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  const detailFilm = useSelector(state => state.films.detail)
  useEffect(() => {
    if (id && id !== '') dispatch(fetchDetailFilm(id))
    if (detailFilm === null) dispatch(fetchDetailFilm(id))
    dispatch(fetchReviewFilm(id))
    dispatch(fetchCredit(id))
    return () => {
      dispatch(removeDetailFilm())
    }
  }, [id])
  return (
    <div className='Single'>
      <DetailLayout id={id}>
        {
          location.pathname === `/detail/${id}` ? <Detail /> : location.pathname === `/detail/${id}/review` ? <Reviews /> : location.pathname === `/detail/${id}/characters` ? <Characters /> : 'not found'
        }
      </DetailLayout>
    </div>
  )
}

export default Single