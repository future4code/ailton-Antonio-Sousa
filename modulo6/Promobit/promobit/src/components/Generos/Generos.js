import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/CreateContext'
import * as C from './styledGeneros'
const Generos = () => {

    const { movies, moviesId, setMoviesId, generos } = useContext(Context)

    const [click, setClick] = useState()

    console.log(moviesId)

    const onClickButton = (id) => {
        if (id !== '') {
            setMoviesId([])
            setClick(id)
        } else {
            setMoviesId(movies)
        }
    }

    useEffect(() => {
        if (moviesId.length === 0) {
            const newArray = movies.filter((movie) => {
                return movie.genre_ids.indexOf(click) >= 0
            })
            setMoviesId(newArray)
        }
    }, [click])

    return (
        <C.Container>
            <C.ContainerCenter>
                <C.ContainerMid>
                    <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
                    <div>
                        <span>Filtre por:</span>
                    </div>
                    <C.ContainerButtons>
                    <button onClick={() => onClickButton('')}>Todos os filmes</button>
                    {generos &&
                        generos.map((item) => {
                            return <button onClick={() => onClickButton(item.id)} key={item.id}>{item.name}</button>
                        })
                    }
                    </C.ContainerButtons>
                </C.ContainerMid>
            </C.ContainerCenter>
        </C.Container>
    )
}

export default Generos