import React from 'react'
import * as C from './StyledCardMovie'
import {Link} from 'react-router-dom'
import { API_IMG } from '../../constans/url'


const CardMovie = ({movie, linkDetails = true}) => {
   
  return (
    <C.ContainerCardMovie>
        <img src={API_IMG+movie.poster_path} alt={movie.poster_path}></img>
        <div>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <C.Link>
            { linkDetails && <Link to={`details/${movie.id}`}>Detalhes</Link>}
            </C.Link>
        </div>
    </C.ContainerCardMovie>
  )
}

export default CardMovie