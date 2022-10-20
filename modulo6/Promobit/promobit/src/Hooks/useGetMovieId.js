import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

const useGetMovieId = (url) => {
    const [movie, setMovie] = useState()

    useEffect(()=> {
        axios.get(url)
        .then((response)=> {
          setMovie(response.data)
        }).catch((error)=> {
          console.log(error.message)
        })
    }, [])
    return movie
}

export default useGetMovieId