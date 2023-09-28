import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import request from '../Request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Rows title='Top rated' fetchURL={request.requestTopRated}/>
      <Rows title='Up coming' fetchURL={request.requestUpcoming}/>
      <Rows title='Popular' fetchURL={request.requestPopular}/>
      <Rows title='Trending' fetchURL={request.requestTrending}/>
    </div>
  )
}

export default Home
