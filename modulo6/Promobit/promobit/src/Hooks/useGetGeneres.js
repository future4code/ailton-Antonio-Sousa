import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";


const useGetGeneres = (url) => {

    const [generos, setGeneros] = useState([])

    useEffect(()=> {
        axios.get(url)
           .then((res) => {
             setGeneros(res.data.genres)
           })
    }, [url])
    return generos
}

export default useGetGeneres