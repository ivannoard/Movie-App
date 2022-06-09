import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailFilm } from '../redux/actions/filmActions'
import DetailJumbotron from './DetailJumbotron'
import DetailLink from './DetailLink'
import Footer from './Footer'
import Navbar from './Navbar'

const DetailLayout = ({ children, id }) => {
  const dispatch = useDispatch()
  const detailFilm = useSelector(state => state.films.detail)
  useEffect(() => {
    if (detailFilm === null) dispatch(fetchDetailFilm(id))
  }, [id, detailFilm])
  return (
    <div className='DetailLayout'>
      <Navbar />
      <DetailJumbotron />
      <DetailLink id={id} />
      {children}
      <Footer />
    </div>
  )
}

export default DetailLayout