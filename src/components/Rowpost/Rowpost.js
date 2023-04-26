import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { api_key,baseUrl, imageUrl } from '../../constants/constants'

function Rowpost() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${api_key}&with_networks=213`).then(response => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      // alert('Network error')
    })
  }, [])
  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className='posters'>
        {
          movies.map((obj) => 
            <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )  }
      </div>

    </div>
  )
}

export default Rowpost