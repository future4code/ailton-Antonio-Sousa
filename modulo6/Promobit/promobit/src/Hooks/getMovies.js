import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";


const useGetMovies = (url) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setMovies(res.data.results)
            })
    }, [url])
    return movies 
}

export default useGetMovies;