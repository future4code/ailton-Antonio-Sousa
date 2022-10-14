import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from "../../components/CardMovie/CardMovie"
import Logo from '../../components/logo/Logo'
import { Context } from '../../context/CreateContext'
import Generos from '../../components/Generos/Generos'
import * as C from './StyleHome'
import useGetMovies from '../../Hooks/getMovies'
import { API, API_GENERE, API_KEY } from '../../constans/url'
import useGetGeneres from '../../Hooks/useGetGeneres'


const Home = () => {

  const movies = useGetMovies(`${API}top_rated?${API_KEY}`)

  const generos = useGetGeneres(`${API_GENERE}${API_KEY}`)

  const [moviesId, setMoviesId] = useState([])

  const values = {
    movies,
    moviesId,
    setMoviesId,
    generos
  }

  useEffect(() => {
    if (movies.length === 0 && generos.length === 0) {
    } else {
      setMoviesId(movies)
    }
  }, [generos])



  return (
    <div>
      <Context.Provider value={values}>
        <div>
          <Logo />
        </div>
        <div>
          <Generos />
        </div>
        <C.ContainerMovies>
          {moviesId.length > 0 && moviesId.map((item) => {
            return <CardMovie key={item.id} movie={item} />
          })}

        </C.ContainerMovies>
      </Context.Provider>
    </div>
  )
}

export default Home