import React from 'react'
import Carau from './Carau'

import Movie from './Movie'
import Tv from './Tv'
import Top from './Top'
import Favorite from './Favorite'

export default function Home() {

  return (
    <div>
      <Carau />

      <Movie />
      <Tv />
      <Top />
      <Favorite />

    </div>
  )

};
