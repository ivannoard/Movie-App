import React from 'react'
import DetailJumbotron from './DetailJumbotron'
import DetailLink from './DetailLink'
import Footer from './Footer'
import Navbar from './Navbar'

const DetailLayout = ({ children, detailFilm }) => {
  return (
    <div className='DetailLayout'>
      <Navbar />
      <DetailJumbotron detailFilm={detailFilm} />
      <DetailLink detailFilm={detailFilm ? detailFilm : ''} />
      {children}
      <Footer />
    </div>
  )
}

export default DetailLayout