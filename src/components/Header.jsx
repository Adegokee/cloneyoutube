import React, { useContext } from 'react'
import { Movie } from '../Movie'

const Header = () => {
  const {selectedMovie}= useContext(Movie)
  return (
    <div style={{backgroundImage: `url(${selectedMovie?.snippet?.thumbnails?.high.url})`, height:'80vh', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}} className='banner '>

    <div>
      <p>{selectedMovie.snippet?.channelTitle}</p>
      <p>{selectedMovie.snippet?.description}</p>
    </div>

    </div>
  )
}

export default Header