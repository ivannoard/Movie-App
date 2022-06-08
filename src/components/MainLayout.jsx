import React from 'react'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
  return (
    <div className='MainLayout'>
      <Navbar />
      <Jumbotron />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout