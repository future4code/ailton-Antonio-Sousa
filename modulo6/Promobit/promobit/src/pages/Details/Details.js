import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as C from './styledDetail'
import CardMovie from '../../components/CardMovie/CardMovie'
import useGetMovieId from '../../Hooks/useGetMovieId'
import { API, API_KEY } from '../../constans/url'

const Details = () => {


  const { id } = useParams()

  const movie = useGetMovieId(`${API}${id}?${API_KEY}`)


  const teste = movie?.genres.map((item) => {
    return <p key={item.name}>[{item.name}]</p>
  })

  return (
    <C.Container>
      {movie &&
        <>
          <CardMovie movie={movie} linkDetails={false} />
          <C.Details>
            <C.Overview>
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </C.Overview>
            <p>Avaliação: {movie.popularity}</p>
            <p>Gêneros: {teste}</p>
          </C.Details>
        </>
      }
    </C.Container>
  )
}

export default Details