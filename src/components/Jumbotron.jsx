import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Jumbotron = () => {
  return (
    <div className='Carousel'>
      <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        <div>
          <img src="https://image.tmdb.org/t/p/w500/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg" style={{ height: '450px' }} alt='...' />
        </div>
        <div>
          <img src="https://image.tmdb.org/t/p/w500/gG9fTyDL03fiKnOpf2tr01sncnt.jpg" style={{ height: '450px' }} alt='...' />
        </div>
        <div>
          <img src="https://image.tmdb.org/t/p/w500/9Fv41b6nEBGrSprFDVpO6GA94Wi.jpg" style={{ height: '450px' }} alt='...' />
        </div>
      </Carousel>
    </div>
  )
}

export default Jumbotron//image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg