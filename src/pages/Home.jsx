import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import request from '../Request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Rows RowId='1' title='Top rated' fetchURL={request.requestTopRated}/>
      <Rows RowId='2' title='Up coming' fetchURL={request.requestUpcoming}/>
      <Rows RowId='3' title='Popular' fetchURL={request.requestPopular}/>
      <Rows RowId='4' title='Trending' fetchURL={request.requestTrending}/>
    </div>
  )
}

export default Home
